![logo](https://i.ibb.co/jDd0xzm/logo-small.png)

[ElenaSport.io](https://www.elenasport.io): Your fast, reliable and affordable sports data provider

> :warning: **Only European Football (soccer) is available right now, tennis and rugby are in apha test**

## GETTING STARTED

### Prerequisites
First of all, you are asked for opening an account on RapidApi [website](https://rapidapi.com/mararrdeveloper/api/elenasport-io1) to get your API KEY. 
>**Remember**, the API KEY is **highly confidential** and it should never be used by anyone but you.

### Installing
This is a Node.js module available through the npm registry. Installation is done using the npm install command:

```

$ npm i @elenasport/sports-api

```


## API
Import the @elenasport/sports-api module inside your modules and create the object with the new keyword
```javascript

var ElenaSport = require('@elenasport/sports-api')
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
    "results": [
        {
            "id": 10,
            "name": "Belgium",
            "alpha2code": "BE",
            "alpha3code": "BEL",
            "capital": "Brussels",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/10",
            "region": "Europe",
            "subregion": "Western Europe",
            "timezones": [
                "UTC+01:00"
            ]
        },
        {
            "id": 61,
            "name": "Northern Ireland",
            "alpha2code": null,
            "alpha3code": null,
            "capital": "Belfast",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/61",
            "region": "Europe",
            "subregion": "Western Europe",
            "timezones": [
                "UTC+01:00"
            ]
        },
        {
            "id": 45,
            "name": "Italy",
            "alpha2code": "IT",
            "alpha3code": "ITA",
            "capital": "Rome",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/45",
            "region": "Europe",
            "subregion": "Southern Europe",
            "timezones": [
                "UTC+01:00"
            ]
        },
        {
            "id": 80,
            "name": "Spain",
            "alpha2code": "ES",
            "alpha3code": "ESP",
            "capital": "Madrid",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/80",
            "region": "Europe",
            "subregion": "Southern Europe",
            "timezones": [
                "UTC",
                "UTC+01:00"
            ]
        },
        {
            "id": 62,
            "name": "Norway",
            "alpha2code": "NO",
            "alpha3code": "NOR",
            "capital": "Oslo",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/62",
            "region": "Europe",
            "subregion": "Northern Europe",
            "timezones": [
                "UTC+01:00"
            ]
        },
        {
            "id": 67,
            "name": "Portugal",
            "alpha2code": "PT",
            "alpha3code": "PRT",
            "capital": "Lisbon",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/67",
            "region": "Europe",
            "subregion": "Southern Europe",
            "timezones": [
                "UTC-01:00",
                "UTC"
            ]
        },
        {
            "id": 25,
            "name": "Egypt",
            "alpha2code": "EG",
            "alpha3code": "EGY",
            "capital": "Cairo",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/25",
            "region": "Africa",
            "subregion": "Northern Africa",
            "timezones": [
                "UTC+02:00"
            ]
        },
        {
            "id": 13,
            "name": "Brazil",
            "alpha2code": "BR",
            "alpha3code": "BRA",
            "capital": "Brasília",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/13",
            "region": "Americas",
            "subregion": "South America",
            "timezones": [
                "UTC-05:00",
                "UTC-04:00",
                "UTC-03:00",
                "UTC-02:00"
            ]
        },
        {
            "id": 5,
            "name": "Argentina",
            "alpha2code": "AR",
            "alpha3code": "ARG",
            "capital": "Buenos Aires",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/5",
            "region": "Americas",
            "subregion": "South America",
            "timezones": [
                "UTC-03:00"
            ]
        },
        {
            "id": 34,
            "name": "Greece",
            "alpha2code": "GR",
            "alpha3code": "GRC",
            "capital": "Athens",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/34",
            "region": "Europe",
            "subregion": "Southern Europe",
            "timezones": [
                "UTC+02:00"
            ]
        },
        {
            "id": 1,
            "name": "Albania",
            "alpha2code": "AL",
            "alpha3code": "ALB",
            "capital": "Tirana",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/1",
            "region": "Europe",
            "subregion": "Southern Europe",
            "timezones": [
                "UTC+01:00"
            ]
        },
        {
            "id": 44,
            "name": "Israel",
            "alpha2code": "IL",
            "alpha3code": "ISR",
            "capital": "Jerusalem",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/44",
            "region": "Asia",
            "subregion": "Western Asia",
            "timezones": [
                "UTC+02:00"
            ]
        },
        {
            "id": 2,
            "name": "Austria",
            "alpha2code": "AT",
            "alpha3code": "AUT",
            "capital": "Vienna",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/2",
            "region": "Europe",
            "subregion": "Western Europe",
            "timezones": [
                "UTC+01:00"
            ]
        },
        {
            "id": 74,
            "name": "Scotland",
            "alpha2code": null,
            "alpha3code": null,
            "capital": "Edinburgh",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/74",
            "region": "Europe",
            "subregion": "Western Europe",
            "timezones": [
                "UTC+01:00"
            ]
        },
        {
            "id": 30,
            "name": "Finland",
            "alpha2code": "FI",
            "alpha3code": "FIN",
            "capital": "Helsinki",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/30",
            "region": "Europe",
            "subregion": "Northern Europe",
            "timezones": [
                "UTC+02:00"
            ]
        },
        {
            "id": 18,
            "name": "Colombia",
            "alpha2code": "CO",
            "alpha3code": "COL",
            "capital": "Bogotá",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/18",
            "region": "Americas",
            "subregion": "South America",
            "timezones": [
                "UTC-05:00"
            ]
        },
        {
            "id": 7,
            "name": "Australia",
            "alpha2code": "AU",
            "alpha3code": "AUS",
            "capital": "Canberra",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/7",
            "region": "Oceania",
            "subregion": "Australia and New Zealand",
            "timezones": [
                "UTC+05:00",
                "UTC+06:30",
                "UTC+07:00",
                "UTC+08:00",
                "UTC+09:30",
                "UTC+10:00",
                "UTC+10:30",
                "UTC+11:30"
            ]
        },
        {
            "id": 75,
            "name": "Serbia",
            "alpha2code": "RS",
            "alpha3code": "SRB",
            "capital": "Belgrade",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/75",
            "region": "Europe",
            "subregion": "Southern Europe",
            "timezones": [
                "UTC+01:00"
            ]
        },
        {
            "id": 89,
            "name": "USA",
            "alpha2code": "US",
            "alpha3code": "USA",
            "capital": "Washington, D.C.",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/89",
            "region": "Americas",
            "subregion": "Northern America",
            "timezones": [
                "UTC-12:00",
                "UTC-11:00",
                "UTC-10:00",
                "UTC-09:00",
                "UTC-08:00",
                "UTC-07:00",
                "UTC-06:00",
                "UTC-05:00",
                "UTC-04:00",
                "UTC+10:00",
                "UTC+12:00"
            ]
        },
        {
            "id": 78,
            "name": "Slovenia",
            "alpha2code": "SI",
            "alpha3code": "SVN",
            "capital": "Ljubljana",
            "flagSVG": "https://cdn.elenasport.io/flags/svg/78",
            "region": "Europe",
            "subregion": "Southern Europe",
            "timezones": [
                "UTC+01:00"
            ]
        }
    ],
    "page": 1,
    "itemsPerPage": 20
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
