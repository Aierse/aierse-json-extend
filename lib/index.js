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
   */ urlParameter: (json) => {
    const param = [];

    for (const key of Object.keys(json)) {
      param.push(`${key}=${json[key]}`);
    }

    return param.join("&");
  },
};

export default JSONExtend;
