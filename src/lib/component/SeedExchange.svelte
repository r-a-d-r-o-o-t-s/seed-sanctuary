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

<div class="flex flex-col w-full justify-center items-center p-8">
	<div class="grid grid-rows-6 grid-cols-4 h-12 w-full">
		<div class="row-span-1 col-span-1 border-mud/70 border-l-2" />
		<div class="row-span-1 col-span-1 border-mud/70 border-l-2" />
		<div class="row-span-1 col-span-1 border-mud/70 border-l-2" />
		<div class="row-span-1 col-span-1 border-mud/70 border-l-2 border-r-2" />
		<div class="row-span-5 col-span-1 border-mud/70 border-l-2 border-t-2">
			<div class="flex flex-col h-full w-full justify-center items-center">
				<p class="font-magda font-bold text-lg text-mud-type/80">
					{`Seeds`}
				</p>
			</div>
		</div>
		<div class="row-span-5 col-span-1 border-mud/70 border-l-2 border-t-2">
			<div class="flex flex-col h-full w-full justify-center items-center">
				<p class="font-magda font-bold text-lg text-mud-type/80">
					{`Location`}
				</p>
			</div>
		</div>
		<div class="row-span-5 col-span-1 border-mud/70 border-l-2 border-t-2">
			<div class="flex flex-col h-full w-full justify-center items-center">
				<p class="font-magda font-bold text-lg text-mud-type/80">
					{`Count`}
				</p>
			</div>
		</div>
		<div class="row-span-5 col-span-1 border-mud/70 border-l-2 border-r-2 border-t-2">
			<div class="flex flex-col h-full w-full justify-center items-center">
				<p class="font-magda font-bold text-lg text-mud-type/80">
					{`Price`}
				</p>
			</div>
		</div>
	</div>
	{#if subscriptionEvents.length}
		{#each subscriptionEvents as se}
			{#key se}
				<a href={`view/${se.author}`} class="flex flex-row w-full">
					<div class="grid grid-rows-5 grid-cols-4 h-10 w-full hover:bg-white/90 cursor-pointer">
						<div class="row-span-5 col-span-1 border-mud/70 border-l-2 border-t-2">
							<div class="flex flex-col h-full w-full justify-center items-center">
								<p class="font-magda font-medium text-lg text-mud-type">
									{`*seeds*`}
								</p>
							</div>
						</div>
						<div class="row-span-5 col-span-1 border-mud/70 border-l-2 border-t-2">
							<div class="flex flex-row h-full w-full justify-between items-center px-4">
								<div class="flex flex-row pr-2 overflow-hidden">
									<p class="font-magda font-medium text-lg text-mud-type truncate text-ellipsis">
										{`*city*, `}
									</p>
								</div>
								<div class="flex flex-row flex-1">
									<p class=" font-magda font-bold text-lg text-mud-type opacity-90">
										{`*country*`}
									</p>
								</div>
							</div>
						</div>
						<div class="row-span-5 col-span-1 border-mud/70 border-l-2 border-t-2">
							<div class="flex flex-col h-full w-full justify-center items-center">
								<p class="font-magda font-medium text-lg text-mud-type">
									{`*count*`}
								</p>
							</div>
						</div>
						<div class="row-span-5 col-span-1 border-mud/70 border-l-2 border-r-2 border-t-2">
							<div class="flex flex-col h-full w-full justify-center items-center">
								<p class="font-magda font-medium text-lg text-mud-type">
									{`*price*`}
								</p>
							</div>
						</div>
					</div>
				</a>
			{/key}
		{/each}
		<div class="grid grid-rows-1 grid-cols-4 h-2 w-full">
			<div class="row-span-1 col-span-1 border-mud/70 border-t-2" />
			<div class="row-span-1 col-span-1 border-mud/70 border-t-2" />
			<div class="row-span-1 col-span-1 border-mud/70 border-t-2" />
			<div class="row-span-1 col-span-1 border-mud/70 border-t-2" />
		</div>
	{:else}
		{#each Array(10) as _}
			<div class="grid grid-rows-5 grid-cols-4 h-10 w-full">
				<div class="row-span-5 col-span-1 border-mud/70 border-l-2 border-t-2" />
				<div class="row-span-5 col-span-1 border-mud/70 border-l-2 border-t-2" />
				<div class="row-span-5 col-span-1 border-mud/70 border-l-2 border-t-2" />
				<div class="row-span-5 col-span-1 border-mud/70 border-l-2 border-t-2 border-r-2" />
			</div>
		{/each}
		<div class="grid grid-rows-1 grid-cols-4 h-2 w-full">
			<div class="row-span-1 col-span-1 border-mud/70 border-t-2" />
			<div class="row-span-1 col-span-1 border-mud/70 border-t-2" />
			<div class="row-span-1 col-span-1 border-mud/70 border-t-2" />
			<div class="row-span-1 col-span-1 border-mud/70 border-t-2" />
		</div>
	{/if}
</div>
