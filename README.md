## user-registration-app

This application inclueds following features:

* Challenge
The ‘About You’ form should use the appropriate validation:
1. Email should be valid.
2. First name and last name contain only letters.
3. Confirm email address matches.
4. National insurance number is valid: two prefix letters, six digits and one
suffix letter e.g SN123456G.
5. All fields are required except for Middle Name.
6. Add dropdown field Region which is populated by these values:
Americas, Asia, Africa, Oceania, Europe, Polar and acts as a filter for
countries drowdown.
7. Use https://restcountries.eu/rest/v2/region/europe to populate the
countries dropdown for Europe region,
https://restcountries.eu/rest/v2/region/americas to populate the
countries dropdown for Americas regions and etc.

## Steps to setup application in local
* Go to Root directory of application and execute following commands:
    ```sh
    $ cd user-registration-app
    $ user-registration-app/web> npm install
    $ user-registration-app/web> npm start
    ```

## Leftover part
* Test cases not done

## Challenges faced
* Autocomplete not supporting, which still need to be fixed.

## What could be improved
* API error handling, to show in modal window.
* Create reusable components to handle Form elements seperately that can be extend later.
* Dynamic rendering of Form based on form data and data type.

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
