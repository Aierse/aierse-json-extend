const JSONExtend = {
  /** JSON makes flat
   * @param {JSON} json
   * @return {JSON}
   */
  flat: (json) => {
    const targets = Object.keys(json);
    const param = {};

    for (const target of targets) {
      for (const key of Object.keys(json[target])) {
        param[key] = json[target][key];
      }
    }

    return param;
  },
  /** Remove target values from JSON.
   * @param {JSON} json
   * @param {any[]} [target=[null, undefined, '']]
   * @default target [null, undefined, '']
   */
  filter: (json, target = [null, undefined, ""]) => {
    const param = {};

    for (const key of Object.keys(json)) {
      if (target.includes(json[key])) continue;

      param[key] = json[key];
    }

    return param;
  },
  /** JSON makes URL parameters. key=value&key=value
   * @param {JSON} json
   * @return {string} example1=1&example2=2
   */
  urlParameter: (json) => {
    const param = [];

    for (const key of Object.keys(json)) {
      param.push(`${key}=${json[key]}`);
    }

    return JSONExtend.toArray(json, "=").join("&");
  },
  /** JSON makes array
   * @example
   * const json = {a:10, b:20}
   * const array = JSONExtend(json, '=')
   * // then
   * // ['a=10', 'b=20']
   * @param {JSON} json
   * @param {string} delimiter
   * @return {array} [`${key}${delimiter}${json[key]}`]
   */
  toArray: (json, delimiter) => {
    return Object.keys(json).map((key) => [`${key}${delimiter}${json[key]}`]);
  },
  /** JSON reverse
   * @param {JSON} json { a: 10, b: 20 }
   * @return {JSON} {10: 'a', 20: 'b' }
   */
  reverse: (json) => {
    const reversed = {};
    Object.keys(json).forEach((v) => {
      reversed[json[v]] = v;
    });

    return reversed;
  },
};

export default JSONExtend;
