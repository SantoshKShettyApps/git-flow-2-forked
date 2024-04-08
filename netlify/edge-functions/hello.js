const Service = require("../../lib/service");

export default () => {
  const ENV = Netlify.env.get("READ_THIS_ENV");
  const response = Service();
  return new Response(`${response} : ${ENV}`);
}

export const config = { path: "/test" };
