<div class="container">
	<div class="public container container-center padding">
		<div class="h2">
			<a sveltekit:prefetch href="/public" class="public">Public</a>
		</div>
	</div>
	<div class="container container-center padding">
		<div class="h1">
			<a sveltekit:prefetch href="/">Jack & Jill</a>
		</div>
	</div>
	<div class="private container container-center padding">
		<div class="h2">
			<a sveltekit:prefetch href="/private" class="private">Private</a>
		</div>
	</div>
</div>

<style>
	div.public {
		flex-grow: 1;
		color: var(--public-fore-color);
		background-color: var(--public-background-color);
	}

	div.private {
		flex-grow: 1;
		color: var(--private-fore-color);
		background-color: var(--private-background-color);
	}
</style>
