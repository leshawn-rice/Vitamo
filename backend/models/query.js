const db = require("../db");
const { BadRequestError } = require("../expressError");
const { isString, isObject } = require("../helpers/utils");

class Query {
  static async getResult(query = undefined, table = undefined) {
    if (!query || !table) throw new BadRequestError('Invalid data');

    if (!isString(query) || !isString(table)) throw new BadRequestError('Query/Table must be of type str');

    results = await db.query(
      `SELECT query, result from $1
      WHERE query ILIKE $2`,
      [table, query]
    );

    if (!results.rows.length) { };

    return results.rows[0];
  }

  static async postResult(query = undefined, table = undefined, result = {}) {
    if (!query || !table || !result) throw new BadRequestError('Invalid data');

    if (!isString(query) || !isString(table) || !isObject(result)) throw new BadRequestError('Invalid types');

    let currentResult = this.getResult(query, table);

    if (currentResult.result) throw new BadRequestError('Query Exists');

    jsonResult = JSON.stringify(result);

    let response = await db.query(
      `INSERT INTO $1
      (query, result)
      VALUES
      ($2, $3)
      RETURNING query, result`,
      [table, query, jsonResult]
    );

    return response.rows[0];
  }
}

class RecipeQuery extends Query {
  static async getResult(query = undefined) {
    return super.getResult(query, 'Recipe_Queries');
  }

  static async postResult(query = undefined, result = {}) {
    return super.postResult(query, 'Recipe_Queries', result);
  }
}

class ProductQuery extends Query {
  static async getResult(query = undefined) {
    return super.getResult(query, 'Product_Queries');
  }

  static async postResult(query = undefined, result = {}) {
    return super.postResult(query, 'Product_Queries', result);
  }
}

class IngredientQuery extends Query {
  static async getResult(query = undefined) {
    return super.getResult(query, 'Ingredient_Queries');
  }

  static async postResult(query = undefined, result = {}) {
    return super.postResult(query, 'Ingredient_Queries', result);
  }
}

module.exports = {
  RecipeQuery,
  ProductQuery,
  IngredientQuery
}