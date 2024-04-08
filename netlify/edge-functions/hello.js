import dlv from "dlv";
import Service from "../../lib/service/index.js";

const Obj = {
  test: {
    best: {
      profile: "sjadlfjdskljf"
    }
  }
};

export default () => {
  const ENV = Netlify.env.get("READ_THIS_ENV");
  return new Response(`${Service()} -- ${dlv(Obj, "test.best.profile")} : ${ENV}`);
}

export const config = { path: "/test" };
