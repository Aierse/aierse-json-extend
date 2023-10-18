# @aierse/json-extend

Provides useful JSON tools.

# Installation

> npm i @aierse/json-extend

# Usage

```js
import JSONExtend from "@aierse/json-extend";

const json = {
  required: {
    id: "test",
    password: "test",
  },
  notRequired: {
    phone: "010-1234-5678",
    memo: "",
    etc: undefined,
  },
};

// JSON makes flat
json = JSONExtend.flat(json);
/*
{
    id: "test",
    password: "test",
    phone: "010-1234-5678",
    memo: "",
    etc: undefined,
}
*/

// Remove targets
json = JSONExtend.filter(json, [null, undefined, ""]);
/*
{
    id: "test",
    password: "test",
    phone: "010-1234-5678",
}
*/

// JSON makes URL parameter
const param = JSONExtend.urlParameter(json);
/* id=test&password=test&phone=010-1234-5678 */

// JSON (key: value) convert to (value: key)
// Be careful, Same value causes bug
const reverse = JSONExtend.reverse(json);
/*
{
    test: "password",
    "010-1234-5678": "phone"
}
*/

const initialize = JSONExtend.initialize(["a", "b", "c"], 0);
/*
{
    a: 0,
    b: 0,
    c: 0
}
*/
```
