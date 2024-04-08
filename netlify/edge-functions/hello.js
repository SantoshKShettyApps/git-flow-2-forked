export default () => new Response(Netlify.env.get("READ_THIS_ENV"));

export const config = { path: "/test" };
