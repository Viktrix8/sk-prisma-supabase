<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<header class="container">
	<hgroup>
		<h1>New Courses</h1>
		<p>Here are few courses you can't miss on.</p>
	</hgroup>
</header>
<main class="container">
	<ul class="grid">
		{#each data.courses as course (course.id)}
			<article>
				<img src={course.banner} alt="banner for course" />
				<div>
					<hgroup>
						<h3>{course.name}</h3>
						<p>{course.description}</p>
					</hgroup>
					<small>${course.price}</small>
				</div>
			</article>
		{/each}
	</ul>
</main>

<style>
	article {
		padding: 0;
		margin: 0;
	}

	article > div {
		padding: 1rem;
	}

	article > img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	article > div > hgroup > p {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 1rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
