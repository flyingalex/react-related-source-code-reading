// await/async, etc
require("@babel/polyfill");

const add1 = (a) => (a + 1);

// https://github.com/tc39/proposal-pipeline-operator
const r = 2
  |> add1;

console.log('pipeline in js', r);
