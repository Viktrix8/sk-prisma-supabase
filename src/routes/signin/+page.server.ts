import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';

export const actions: Actions = {
	signin: async ({ locals, request }) => {
		const { email, password } = Object.fromEntries(await request.formData());

		const { error: err } = await locals.sb.auth.signInWithPassword({
			email: email as string,
			password: password as string
		});

		if (err) {
			if (err instanceof AuthApiError && err.status === 401) {
				return fail(401, { error: 'Invalid email or password.' });
			}

			return fail(500, { error: 'Something went wrong with the server.' });
		}

		throw redirect(303, '/');
	}
};
