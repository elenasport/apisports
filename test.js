const ElenaSport = require('./index')
const elenaSport = new ElenaSport('***SECRET_API_KEY***')
const {assert} = require('chai')

describe('Calls', function () {

  it('/countries', async function () {
    const countriesPage2 = await elenaSport.get('v1/countries', { page: 2 })
    assert.isObject(countriesPage2, 'The response is not an object')
  })

  it('/leagues', async function () {
    const leagues = await elenaSport.get('v1/leagues')
    assert.isObject(leagues, 'The response is not an object')
  })

})
