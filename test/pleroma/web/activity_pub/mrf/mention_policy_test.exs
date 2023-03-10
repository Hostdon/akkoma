# Pleroma: A lightweight social networking server
# Copyright © 2017-2021 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.ActivityPub.MRF.MentionPolicyTest do
  use Pleroma.DataCase

  alias Pleroma.Web.ActivityPub.MRF.MentionPolicy

  setup do: clear_config(:mrf_mention)

  test "pass filter if allow list is empty" do
    Pleroma.Config.delete([:mrf_mention])

    message = %{
      "type" => "Create",
      "to" => ["https://example.com/ok"],
      "cc" => ["https://example.com/blocked"]
    }

    update_message = %{
      "type" => "Update",
      "to" => ["https://example.com/ok"],
      "cc" => ["https://example.com/blocked"]
    }

    assert MentionPolicy.filter(message) == {:ok, message}
    assert MentionPolicy.filter(update_message) == {:ok, update_message}
  end

  describe "allow" do
    test "empty" do
      clear_config([:mrf_mention], %{actors: ["https://example.com/blocked"]})

      message = %{
        "type" => "Create"
      }

      update_message = %{
        "type" => "Update"
      }

      assert MentionPolicy.filter(message) == {:ok, message}
      assert MentionPolicy.filter(update_message) == {:ok, update_message}
    end

    test "to" do
      clear_config([:mrf_mention], %{actors: ["https://example.com/blocked"]})

      message = %{
        "type" => "Create",
        "to" => ["https://example.com/ok"]
      }

      update_message = %{
        "type" => "Update",
        "to" => ["https://example.com/ok"]
      }

      assert MentionPolicy.filter(message) == {:ok, message}
      assert MentionPolicy.filter(update_message) == {:ok, update_message}
    end

    test "cc" do
      clear_config([:mrf_mention], %{actors: ["https://example.com/blocked"]})

      message = %{
        "type" => "Create",
        "cc" => ["https://example.com/ok"]
      }

      update_message = %{
        "type" => "Update",
        "cc" => ["https://example.com/ok"]
      }

      assert MentionPolicy.filter(message) == {:ok, message}
      assert MentionPolicy.filter(update_message) == {:ok, update_message}
    end

    test "both" do
      clear_config([:mrf_mention], %{actors: ["https://example.com/blocked"]})

      message = %{
        "type" => "Create",
        "to" => ["https://example.com/ok"],
        "cc" => ["https://example.com/ok2"]
      }

      update_message = %{
        "type" => "Update",
        "to" => ["https://example.com/ok"],
        "cc" => ["https://example.com/ok2"]
      }

      assert MentionPolicy.filter(message) == {:ok, message}
      assert MentionPolicy.filter(update_message) == {:ok, update_message}
    end
  end

  describe "deny" do
    test "to" do
      clear_config([:mrf_mention], %{actors: ["https://example.com/blocked"]})

      message = %{
        "type" => "Create",
        "to" => ["https://example.com/blocked"]
      }

      update_message = %{
        "type" => "Update",
        "to" => ["https://example.com/blocked"]
      }

      assert MentionPolicy.filter(message) ==
               {:reject, "[MentionPolicy] Rejected for mention of https://example.com/blocked"}

      assert MentionPolicy.filter(update_message) ==
               {:reject, "[MentionPolicy] Rejected for mention of https://example.com/blocked"}
    end

    test "cc" do
      clear_config([:mrf_mention], %{actors: ["https://example.com/blocked"]})

      message = %{
        "type" => "Create",
        "to" => ["https://example.com/ok"],
        "cc" => ["https://example.com/blocked"]
      }

      update_message = %{
        "type" => "Update",
        "to" => ["https://example.com/ok"],
        "cc" => ["https://example.com/blocked"]
      }

      assert MentionPolicy.filter(message) ==
               {:reject, "[MentionPolicy] Rejected for mention of https://example.com/blocked"}

      assert MentionPolicy.filter(update_message) ==
               {:reject, "[MentionPolicy] Rejected for mention of https://example.com/blocked"}
    end
  end
end
