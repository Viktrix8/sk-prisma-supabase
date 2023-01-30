<main class="container">
	<article class="grid">
		<div>
			<hgroup>
				<h1>Sign in</h1>
				<h2>Please sign in to use our app.</h2>
			</hgroup>
			<form action="?/signin" method="POST">
				<input
					type="text"
					name="email"
					placeholder="Email"
					aria-label="email"
					autocomplete="nickname"
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					aria-label="Password"
					autocomplete="current-password"
					required
				/>
				<fieldset>
					<label for="remember">
						<input type="checkbox" role="switch" id="remember" name="remember" />
						Remember me
					</label>
				</fieldset>
				<button type="submit" class="contrast">Login</button>
			</form>
			<a href="/signup">Already have an account</a>
		</div>
		<img
			alt="mountains"
			src="https://images.unsplash.com/photo-1473277087567-8e0937304e17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
		/>
	</article>
</main>

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.container {
		display: grid;
		place-items: center;
		height: 100vh;
	}

	article {
		padding: 0;
	}

	article > div {
		padding: 2rem;
	}
</style>
