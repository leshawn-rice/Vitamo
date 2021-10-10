const { API_KEY } = require('../config');
const axios = require('axios');

class API {
  static key = API_KEY;

  static async request(method = 'GET', endpoint = '', data = {}) {
    const url = `https://api.spoonacular.com${endpoint}`;
    let params = {};

    if (method === 'GET') {
      params = { apiKey: this.key, ...data };
    }

    const requestData = { url, method, data, params };

    return await axios(requestData);
  }

  static async get(endpoint = '', data = {}) {
    return await this.request('GET', endpoint, data);
  }

  static async post(endpoint = '', data = {}) {
    return await this.request('POST', endpoint, data);
  }
}

export default API;