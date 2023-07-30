import { PUBLIC_NOSTR_RELAY } from "$env/static/public";
import NDK from "@nostr-dev-kit/ndk";
import { writable } from "svelte/store";

export const ndk = writable<NDK>(new NDK(
    {
        explicitRelayUrls: [PUBLIC_NOSTR_RELAY],
    }
))
