import { AuthApiError } from '@supabase/supabase-js';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals }) => {
	const { error: err } = await locals.sb.auth.signOut();

	if (err) {
		if (err instanceof AuthApiError && err.status === 401) {
			return new Response("You're not signed in.", { status: 401 });
		}

		return new Response('Something went wrong with the server.', { status: 500 });
	}

	throw redirect(303, '/signin');
};
