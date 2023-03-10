# Pleroma: A lightweight social networking server
# Copyright © 2017-2021 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.ReverseProxy.Client.Tesla do
  @behaviour Pleroma.ReverseProxy.Client

  @type headers() :: [{String.t(), String.t()}]
  @type status() :: pos_integer()

  @spec request(atom(), String.t(), headers(), String.t(), keyword()) ::
          {:ok, status(), headers}
          | {:ok, status(), headers, map()}
          | {:error, atom() | String.t()}
          | no_return()

  @impl true
  def request(method, url, headers, body, opts \\ []) do
    check_adapter()

    opts = Keyword.put(opts, :body_as, :chunks)

    with {:ok, response} <-
           Pleroma.HTTP.request(
             method,
             url,
             body,
             headers,
             opts
           ) do
      if is_map(response.body) and method != :head do
        {:ok, response.status, response.headers, response.body}
      else
        {:ok, response.status, response.headers}
      end
    else
      {:error, error} -> {:error, error}
    end
  end

  @impl true
  @spec stream_body(map()) ::
          {:ok, binary(), map()} | {:error, atom() | String.t()} | :done | no_return()
  def stream_body(%{pid: _pid, fin: true}) do
    :done
  end

  def stream_body(client) do
    case read_chunk!(client) do
      {:fin, body} ->
        {:ok, body, Map.put(client, :fin, true)}

      {:nofin, part} ->
        {:ok, part, client}

      {:error, error} ->
        {:error, error}
    end
  end

  defp read_chunk!(%{pid: pid, stream: stream, opts: opts}) do
    adapter = check_adapter()
    adapter.read_chunk(pid, stream, opts)
  end

  @impl true
  @spec close(map) :: :ok | no_return()
  def close(%{pid: _pid}) do
    :ok
  end

  defp check_adapter do
    adapter = Application.get_env(:tesla, :adapter)

    adapter
  end
end
