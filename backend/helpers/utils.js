'use strict';

function isString(str) {
  return (typeof (str) === 'string');
}

function isNumber(num) {
  return (typeof (num) === 'number');
}

function isBoolean(bool) {
  return (typeof (bool) === 'boolean');
}

function isObject(obj) {
  return (typeof (obj) === 'object');
}

function isArray(arr) {
  return Array.isArray(arr);
}

module.exports = {
  isString,
  isNumber,
  isBoolean,
  isObject,
  isArray
};