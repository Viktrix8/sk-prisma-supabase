import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const courses = await prisma.course.findMany();

	return {
		courses: courses
	};
};
