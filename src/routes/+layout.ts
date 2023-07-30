import { ndk } from '$lib/store/ndk'
import { get } from 'svelte/store'

export async function load() {
    try {
        const _ndk = get(ndk)
        await _ndk.connect()
        console.log(`[seed sanctuary] Connected to Nostr relay.`)
    } catch (e) {
        console.log(`[seed sanctuary] Connection not established to Nostr relay.`)
    } finally {
        return {}
    }
}