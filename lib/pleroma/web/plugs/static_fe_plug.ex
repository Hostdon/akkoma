# Pleroma: A lightweight social networking server
# Copyright © 2017-2021 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.Plugs.StaticFEPlug do
  import Plug.Conn
  alias Pleroma.Web.StaticFE.StaticFEController

  def init(options), do: options

  def call(conn, _) do
    if enabled?() and requires_html?(conn) and not_logged_in?(conn) do
      conn
      |> StaticFEController.call(:show)
      |> halt()
    else
      conn
    end
  end

  defp enabled?, do: Pleroma.Config.get([:static_fe, :enabled], false)

  defp requires_html?(conn) do
    Phoenix.Controller.get_format(conn) == "html"
  end

  defp not_logged_in?(%{assigns: %{user: %Pleroma.User{}}}), do: false
  defp not_logged_in?(_), do: true
end
