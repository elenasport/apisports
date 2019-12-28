![logo](https://i.ibb.co/jDd0xzm/logo-small.png)

[ElenaSport.io](https://www.elenasport.io): Your fast, reliable and affordable sports data provider

## GETTING STARTED

### Prerequisites
First of all, you are asked for opening an account on RapidApi [website](https://rapidapi.com/mararrdeveloper/api/elenasport-io1) to get your API KEY. 
>**Remember**, the API KEY is **highly confidential** and it should never be used by anyone but you.

### Installing
This is a Node.js module available through the npm registry. Installation is done using the npm install command:

```

$ npm install sports-api

```


## API
Import the sports-api module inside your modules and create the object with the new keyword
```javascript

var ElenaSport = require('sports-api')
var elenaSport = new ElenaSport('***YOUR_API_KEY***')

```
To call our endpoints, use the get function. This function will return a resolved promise whether the call to the endpoint is successfully performed, otherwise it will throw an error

```javascript

elenaSport.get(endpoint, params)

```
>Find out the complete list of endpoints and params on our [API Documentation](https://www.elenasport.io/documentation) 

### Example of successful call

```json

{
   "results":[
      {
         "id":10,
         "name":"Belgium"
      },
      {
         "id":20,
         "name":"Croatia"
      },
      {
         "id":23,
         "name":"Denmark"
      },
      {
         "id":27,
         "name":"England"
      },
      {
         "id":31,
         "name":"France"
      },
      {
         "id":32,
         "name":"Germany"
      },
      {
         "id":45,
         "name":"Italy"
      },
      {
         "id":47,
         "name":"Japan"
      },
      {
         "id":58,
         "name":"Netherlands"
      },
      {
         "id":62,
         "name":"Norway"
      },
      {
         "id":67,
         "name":"Portugal"
      },
      {
         "id":80,
         "name":"Spain"
      },
      {
         "id":89,
         "name":"USA"
      },
      {
         "id":2,
         "name":"Austria"
      },
      {
         "id":13,
         "name":"Brazil"
      },
      {
         "id":34,
         "name":"Greece"
      }
   ]
}

```
### Example of failed call
```json

{
  "status": 404,
  "type": "NotFoundError",
  "message": "Route not found - Welcome to ElenaSport.io - You're fast, reliable and affordable sport data provider. Please navigate to https://elenasport.io to get started",
  "requestId": "298b3f50-93e8-4036-a1c6-193e0fc0219f"
}

```

## Running example

```javascript

var ElenaSport = require('sports-api')
var elenaSport = new ElenaSport('PUT_YOUR_REFRESH_TOKEN_HERE')

var params = {
    page: 1
}

elenaSport.get('countries', params)

    .then(response => {
        console.log(response)
    })

    .catch(err => {
        console.log(err)
    })

```


## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
