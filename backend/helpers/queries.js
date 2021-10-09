'use strict';

const { ExpressError } = require('../expressError');
const { RecipeQuery, ProductQuery, IngredientQuery } = require('../models/query');

async function queryRecipe(query) {
  try {
    const response = await RecipeQuery.getResult(query);
    if (response.result) return response;
    throw new ExpressError('No Query Found');
  }
  catch (err) {
    if (err.message === 'No Query Found') {
      // call API, store result, and return it
    }
    else {
      // Allow the route to handle the error (invalid query)
      throw err;
    }
  }
}

async function queryProduct(query) {
  try {
    const response = await ProductQuery.getResult(query);
    if (response.result) return response;
    throw new ExpressError('No Query Found');
  }
  catch (err) {
    if (err.message === 'No Query Found') {
      // call API, store result, and return it
    }
    else {
      // Allow the route to handle the error (invalid query)
      throw err;
    }
  }
}

async function queryIngredient(query) {
  try {
    const response = await IngredientQuery.getResult(query);
    if (response.result) return response;
    throw new ExpressError('No Query Found');
  }
  catch (err) {
    if (err.message === 'No Query Found') {
      // call API, store result, and return it
    }
    else {
      // Allow the route to handle the error (invalid query)
      throw err;
    }
  }
}

module.exports = {
  queryRecipe,
  queryProduct,
  queryIngredient
};