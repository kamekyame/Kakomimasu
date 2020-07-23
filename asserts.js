import util from "./util.js";

class AssertionError extends Error {
}

const assertEquals = (x, y) => {
  if (!util.deepEquals(x, y)) {
    throw new AssertionError(`${x} is not equals ${y}`);
  }
};

// const test = Deno.test; // for 1.0.5 bug
const test = async (s, f) => {
  let res = "ok";
  try {
    if (f.constructor.name === "AsyncFunction") await f();
    else f();
  } catch (e) {
    res = "err";
  }
  console.log("test " + s, res);
};

export { test, assertEquals };
