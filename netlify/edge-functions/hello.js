export default () => new Response(process.env.READ_THIS_ENV);

export const config = { path: "/test" };
