"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringUtil = void 0;

/**
 * Performs common operations for strings, such as checking
 * if the string is empty or null
 */
class StringUtil {
  static isEmpty(value) {
    return !value || !value.trim();
  }

  static capitalize(word) {
    return word.charAt(0).toUpperCase();
  }

}

exports.StringUtil = StringUtil;