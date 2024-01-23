<script>
    import { page } from '$app/stores';
    import Form from '$lib/form.svelte';
</script>

<div>
    <p>{ $page.data }</p>
    <Form />
</div>