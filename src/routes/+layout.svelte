<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';
	import { supabaseClient } from '../lib/supabase';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(async () => {
		const {
			data: { subscription }
		} = await supabaseClient.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<nav class="container">
	<ul>
		<li><a href="/"><strong>Svelte & Prisma</strong></a></li>
	</ul>
	<ul>
		{#if data.session}
			<li>
				<form action="/signout" method="POST">
					<button type="submit"
						><span data-tooltip="Sign Out" data-placement="bottom">{data.session.user.email}</span>
					</button>
				</form>
			</li>
		{:else}
			<li><a href="/signin">Sign in</a></li>
			<li><a href="/signup">Sign up</a></li>
		{/if}
	</ul>
</nav>

<slot />

<style>
	form button {
		padding: 0.5rem 1rem;
	}
</style>
