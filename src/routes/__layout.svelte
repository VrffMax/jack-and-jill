<script lang="ts">
	import '../app.css';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<header>
	<Header />
</header>
<main>
	<slot />
</main>
<footer>
	<Footer />
</footer>

<style>
	main {
		flex-grow: 1;
		overflow: auto;
	}
</style>
