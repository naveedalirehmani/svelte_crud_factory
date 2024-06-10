import { error } from "@sveltejs/kit";
/** @type {import('./$types').PageServerLoad} */ 

export async function load({
  params,
}) {
  // const post = await getPostFromDatabase(params.slug);
  if (true) {
    return  {
			title: 'Hello world!',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
  }
  error(404, "Not found");
}
