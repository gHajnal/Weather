
# Weather at Capital - v1.0

Data is provided by OpenWeatherMap's:
[Current Weather API](https://openweathermap.org/current)

Originally created as a homework assignment for an interview. 
The task has since been expanded and significantly enhanced, transforming it into a more elaborate project. 
Further expansions and developments are expected in the future, as efforts continue to refine and improve its functionality.  

## Features

- Capitals can be searched, added and removed
- Weather data is presented per capital, along with local time for the city 
- Temperature unit can be changed. Unit toggles between fahrenheit and celsius

> Using: NPM | JS | HTML | CSS | SASS | React | React Router Dom | ReduxToolkit | Luxon 

## Requirements

### API Key

In order to run the app locally, you are expected to generate your own API key.

Register at https://openweathermap.org/ for free, and generate your key. 

API key must be placed in /.env file, under the key name of REACT_APP_API_KEY.

> _REACT_APP_API_KEY="77777777777777777777777777777777"_

## How to run

1. Clone the repo
2. Run `npm install`
3. Create .env file in project's root folder
4. Add your API key under the key name "REACT_APP_API_KEY"
3. Run `npm start`
4. App is expected to open at http://localhost:3000/ in browser
5. Click on: green plus icon to add capitals

## Available Scripts

### `npm install`
Runs necessary installs for the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm start; sass --watch src:public/stylesheets`

Runs the app in development mode, compiles SASS on the fly. 

## Known issues

Capitals list is provided from inside the application from a fixed data set. 

Requests are made using capital's name.

API accepts these names, but in some specific cases the provided response contains a different version for the given capital. 

>Examples: 
>* Bandar Seri Begawan returns _Brunei Town_
>* Fort-de-France returns _Fort Royal_
