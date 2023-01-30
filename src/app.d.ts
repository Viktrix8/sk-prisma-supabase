// See https://kit.svelte.dev/docs/types#app

import type { TypedSupabaseClient } from '@supabase/auth-helpers-sveltekit';
import type { Session } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: Session | null;
			sb: TypedSupabaseClient;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
