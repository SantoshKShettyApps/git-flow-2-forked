import dlv from "dlv";
import Service from "../lib/service";

const Obj = {
  test: {
    best: {
      profile: "sjadlfjdskljf"
    }
  }
};

export default () => {
  Service();
  const ENV = Netlify.env.get("READ_THIS_ENV");
  return new Response(`${dlv(Obj, "test.best.profile")} : ${ENV}`);
}

export const config = { path: "/test" };
