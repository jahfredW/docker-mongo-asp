<script>
	import '../app.pcss';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import Card from '$lib/card.svelte';
</script>

<Header></Header>
<h1 class="text-3xl font-bold">
	Hello world!
  </h1>
<Card />

<slot />
<Footer></Footer>
