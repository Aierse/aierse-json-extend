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

const items = [
  {
    value1: 0,
    value2: 0,
    time: "2023-10-19",
  },
  {
    value1: 1,
    value2: 1,
    time: "2023-10-19",
  },
  {
    value1: 2,
    value2: 2,
    time: "2023-10-20",
  },
  {
    value1: 3,
    value2: 3,
    time: "2023-10-21",
  },
];

// JSON groupBy
const groupBy = JSONExtend.groupBy(items, "time");
/*
{
  '2023-10-19': [
    {
      value1: 0,
      value2: 0,
      time: '2023-10-19'
    },
    {
      value1: 1,
      value2: 1,
      time: '2023-10-19'
    }
  ],
  '2023-10-20': [
    {
      value1: 2,
      value2: 2,
      time: "2023-10-20",
    }
  ],
  '2023-10-21': [
    {
      value1: 3,
      value2: 3,
      time: "2023-10-21",
    }
  ]
}
*/
```
