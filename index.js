'use strict'

var request = require('request')

const baseURL = 'https://elenasport-io1.p.rapidapi.com/'


class ElenaSport {

  constructor (API_KEY) {
    this.API_KEY = API_KEY
  }

  /**
   * Hit an ElenaSport endpoint. To get the list of all the available endpoints, visit our API Documentation https://www.elenasport.io/documentation/
   *
   * @param {string} endpoint - The endpoint name. Examples: 'v1/countries', 'v1/countries/10/leagues'
   * @param {string} params - Query parameters to attacht to the request (if any). Examples: {page: 2}
   * @return {Promise} The api response
   *
   */
  get (endpoint, params = {}) {

    return new Promise((resolve, reject) => {

      if (!endpoint) return reject(new Error('Endpoint cannot be empty'))

      request({
        uri: `${baseURL}/${endpoint}`,
        qs: params,
        headers: { 'x-rapidapi-key': this.API_KEY },
        json: 'body',
      }, function (err, response) {
        if (err) return reject(err)
        if (response.statusCode != 200) return reject(response.body)
        resolve(response.body)
      })
    })
  }

}

module.exports = ElenaSport

