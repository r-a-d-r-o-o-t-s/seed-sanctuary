<script lang="ts">
	import { ndk } from '$lib/store/ndk';
	import type { NDKEvent } from '@nostr-dev-kit/ndk';

	let subscriptionEvents: NDKEvent[] = [];

	const kinds: number[] = [30402];
	const subscription = $ndk.subscribe({ kinds }, { closeOnEose: false });

	subscription.on(`event`, (event) => {
		subscriptionEvents.push(event);
	});
</script>

<div class="flex flex-col w-full">
	{#if subscriptionEvents.length}
		{#each subscriptionEvents as se}
			{#key se}
				<div class="flex flex-row w-full">
					<p class="font-sans font-medium text-base">
						{`Found seeds posted by ${se.author}`}
					</p>
				</div>
			{/key}
		{/each}
	{:else}
		<div class="flex flex-row">
			<p class="font-sans font-medium text-base">
				{`There are currently no seeds posted to the exchange`}
			</p>
		</div>
	{/if}
</div>
