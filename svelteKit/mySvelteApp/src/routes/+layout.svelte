<script>
	import '../app.pcss';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	
</script>

<Header></Header>
<h1 class="text-3xl font-bold text-center py-2">
  </h1>
<div class="container mx-auto">
	<slot />
</div>
<Footer></Footer>
