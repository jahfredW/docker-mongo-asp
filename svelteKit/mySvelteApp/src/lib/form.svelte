<script>
    import {enhance} from "$app/forms"
    import {page} from "$app/stores"
    export let form; 
    
</script>


<div class="w-3/6 mt-4 rounded-sm p-8 bg-slate-100 ">
    <form class="my-4 " action="?/contactUs" method= "POST" use:enhance>
     <div>
     
     <label class="label text-slate-500 mr-4" for="name">Name </label>
    <input type="text" name="name" placeholder="Type here" class="ring-1 ring-slate-200 focus:outline-none rounded-sm input w-full" value={form?.name ?? ""} />
       {#if form?.errors?.name }
        <span class="py-2 px-1 text-red-400">{form?.errors?.name[0]}</span>
       {/if}
     </div>
     <div>
     <label class="label text-slate-500 mr-4" for="name">Email </label>
       <input type="email" name="email" placeholder="Type here" class="ring-1 ring-slate-200 focus:outline-none rounded-sm input w-full" value={form?.email ?? ""}/>
       {#if form?.errors?.email }
        <span class="py-2 px-1 text-red-400">{form?.errors?.email[0]}</span>
       {/if}
     </div>
     <div>
     <label class="label text-slate-500 mr-4" for="name">Message </label>
       <textarea name="message" class="textarea ring-1 ring-slate-200 focus:outline-none rounded-sm w-full" placeholder="Message" value={form?.message ?? ""}></textarea>
          
       {#if form?.errors?.message }
        <span class="py-2 px-1 text-red-400">{form?.errors?.message[0]}</span>
       {/if}
     </div>
     <div>
       <button type="submit" class="mt-2 w-1/4 btn px-8 rounded-sm btn-outline">Send</button>
     </div>
    </form>
    </div>