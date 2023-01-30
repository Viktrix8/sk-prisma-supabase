import { AuthApiError } from '@supabase/supabase-js';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	createUser: async ({ request, locals }) => {
		console.log('running');

		const data = Object.fromEntries(await request.formData());

		const { error: err } = await locals.sb.auth.signUp({
			email: data.email as string,
			password: data.password as string
		});

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, { error: err.message });
			}

			return fail(500, { error: 'Something went wrong with the server' });
		}

		return {
			status: 200,
			message: 'Ok'
		};
	}
};
