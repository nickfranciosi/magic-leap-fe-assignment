# Magic Leap Front End Assignment - Watto’s Spaceship Emporium

This is a fake shop application (_Users can not actually purchase space ships :smirk:_) built to show my skills utilizing technologies such as React, Next, Redux, Styled Components, Express, Flow, and Jest.

Production Instance [ADD THIS]()

## Notes on application architecture

### Component folders
All UI components live in the `/components` directory. I generally prefer to keep these in folders (_`/myComponent/index.js`_) opposed to being just a stand alone file (_`/myComponent.js`_). This allows you to group components based on what they do and export them from a central place. It also allows you to keep your tests for each component nested in the same folder structure, making it easier to move the component within your application or even into a separate component library.

### Style utilities and variables
To keep style consistency within applications with things like font size and colors I prefer to keep those values stored as constants in a central place and share them across components. Even though this application didn't call for too many of these types of settings, I set it up this way as an example of how I might organize style variables.

### Style utilities and variables
To keep style consistency between components and pages I saved values for fonts, colors, and media queries in a central `/styles` folder. This makes updating values that should change across the entire application easier by only having to update one file. 

### Default and named exports
For components that need access to the redux store, I have a default export that is the connected version of the component (_see `/components/cartActions/index.js` for example) and also a named export of the component without the redux wrapper. This makes testing these components much easier since we can mock the props that redux would pass in.

### Redux structure
The redux store is simple. It is comprised of a list of products and a shopping cart. For a large application I might separate reducers, actions, and components into a feature based file system, but I thought that would be excessive for the requirements of this application. I put all the reducers under one folder (`/reducers`) and have them split into files based on the piece of state they are managing. Similarly, since I only have three actions, I kept them all in one file (`/actions/index`) with a central export for all action types (`/actions/types.js`).

### `withCart` Higher Order Component
Since several places in the application needed the same pieces of the redux store, I built a utility Higher Order Component (`/containers/withCart`) that wraps any component with the appropriate redux state needed for cart data and functionality. This way I didn't have to keep implementing `mapStateToProps` for every place I needed cart data. By wrapping a component with my HOC, I have access to the props I need. 

### Using selectors for deriving state
I wanted to keep my redux state as simple as possible. I have one flat list of products and one flat list of items in a cart. The cart entries have an `id` field and `quantity` field and map to an item in the product list. Using selectors allows me to compute derived data such as cart total count and cart total cost. I utilized a library called [reselect](https://github.com/reduxjs/reselect) that helps manage the memoization of these function calls. If the specific piece of state I am deriving data from doesn't change, then the last value is returned instead of our selector having to recompute any values.

### Next js overrides for `_app` and `_document`
In order to easily add the redux provider to the application I had to override the `/pages/_app` component that comes out of the box with Next. The same process was required for the  `/pages/_document` component in order to implement server rendering for styled components.

### Custom Express server for routing
In order to have a master/detail routing system, I pointed Next to a custom express server (`./server.js`). This server listens for routes that match `/shop/:productId`, tells the applications which page template to render, and passes along the appropriate props that are needed to fetch the product. If there is no match then Next's default routing takes over. 

### Custom Flow lib definitions
I used custom Flow types to describe my application state in `/flow-typed/watto.js`. This made the development process much easier since my text editor gave me nice autocomplete options when trying to access fields on variable types such as `Product`.

## What I would add next

### Moving the products API call to the server
This application is simple enough in nature, but I would have liked to have built out a small express api wrapper around the endpoint provided. This would have allowed me to massage the data and not have to handle anything like string to number conversions on the client.

### More robust utility components
I only needed one icon for this application so I stuck the raw svg into the component. Ideally, I would have built a wrapper `<Icon />` component that can render any svg that is passed to it.

### Design Features
When beginning this project I had planned on displaying product statistics in a more graphical way by utilizing a library like D3. I would also add a product comparison tool, where a user could select 2 or 3 products and get a side by side comparison of values like max acceleration, length, and price.

### Persistent data
Further development of this application would benefit from saving the redux state in either localStorage or a cookie, so that products would not have to be fetched again and cart data could be persisted between sessions. 

### Real Time Data with GraphQL/ Apollo
Wrapping the data in a GraphQL server and subscribing via Apollo on the client would take care of the server side data massaging I mentioned above and also add a way for new product data to be pushed to the client dynamically.  



## Getting Started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before you get started you will need to have Node installed on your machine. If you don't have it installed directions can be found [here](https://nodejs.org/en/);


Make sure you are running on at least version 8.0.
```
$ node -v
v8.11.1

$ npm -v
6.0.1
```
This has been built and tested using Node v8.11.1



### Installing


Start by cloning the repository locally
```
$ git clone git@github.com:nickfranciosi/magic-leap-fe-assignment.git
```
or you can download the ZIP directly [here](https://github.com/nickfranciosi/magic-leap-fe-assignment/archive/master.zip)

after the project is on your machine make sure to change to that directory
```
$ cd magic-leap-fe-assignment
```

Install all packages and dependencies
```
$ npm i
```

To start the application in dev mode
```
$ npm run dev
```

This will start the app at `http://localhost:3000`.

Dev mode will let you make changes to the code and immediately see updates in the browser

- Automatic transpilation and bundling (with webpack and babel)
- Hot code reloading

To run a production version of the build locally
```
$ npm run build
$ npm run start
```

This will also start the app at `http://localhost:3000` but will be running the production build.

## Running the tests

Before any commit is made all linting, flow, and unit tests are run against the codebase, but these tests can also be run manually

If you want to run all 3 in tandem
```
$ npm run test:all
```

### Unit tests
To run Jest unit tests
```
$ npm run test
```
To have tests run and watch for changes
```
$ npm run test:watch
```
### Linting
To run eslint
```
$ npm run lint
```
### Flow
To run flow check
```
$ npm run flow
```



## Deployment

I have been deploying this with [Now](https://zeit.co/now), but this can be deployed anywhere where node is available.

To deploy using Now:

make sure you have now [installed](https://zeit.co/download) and are at the root of the project folder

first run the production build
```
$ npm run build
```
and then...
```
$ now
```

Done!!


## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux](https://redux.js.org/) - Application state management
* [Next](https://nextjs.org/docs#setup) - Framework for server-rendered or statically-exported React apps
* [Styled Components](https://www.styled-components.com/docs) -  css library used to build React components
* [Flow](https://flow.org/en/docs/) -  static type checking for Javascript
* [Jest](https://facebook.github.io/jest/docs/en/getting-started.html) -  Javascript testing library

## Authors

* [**Nick Franciosi**](https://github.com/nickfranciosi)

