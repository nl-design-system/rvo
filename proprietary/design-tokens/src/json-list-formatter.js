/**
 * @license CC0-1.0
 * Copyright (c) 2021 Robbert Broersma
 */
module.exports = {
  'json/list': function ({ dictionary }) {
    return JSON.stringify(dictionary.allTokens, null, '  ');
  },
};
