## Corporate Employee Dashboard

[Live Demo](https://getdanarias.github.io/EmployeeDashboard-AngularJS/) Engineered to work well on Mobile and Desktop. 

### Install

Install and run the project by running:

```bash
yarn start
```

which triggers:

```bash
yarn && bower install && gulp
```

This project uses a custom Gulp that auto-injects Angular files based on naming convention. 

For any new .js file that you create, please ensure that you follow the following naming convention when using Angular:

``` javascript
/**
  Each file type is denoted by its ending name.
  A dot (.) should be placed before the name expect for the app.js file
  For example: sample.controller.js
  The files will be injected in index.html in this order from top to bottom.
  This ensures that each file has its proper dependencies injected before its
  own injection.
**/

  'app/**/*.app.js',
  'app/**/*.module.js',
  'app/**/*.constants.js',
  'app/**/*.provider.js',
  'app/**/*.enum.js',
  'app/**/*.model.js',
  'app/**/*.config.js',
  'app/**/*.filter.js',
  'app/**/*.directive.js',
  'app/**/*.decorator.js',
  'app/**/*.interceptor.js',
  'app/**/*.service.js',
  'app/**/*.workflow.js',
  'app/**/*.repository.js',
  'app/**/*.resolver.js',
  'app/**/*.controller.js',
  'app/**/*.component.js',
  'app/**/*.js'

  // Non-Angular scripts are injected last.
```

This injection is powered by a package I created called [`ngsource`](https://github.com/getDanArias/ngsource).

### Build

The project is designed to be deployed on GitHub Pages by using the `master branch /docs folder` option. To build for production run the following: 

```bash
gulp build:docs
```

Ensure that you commit the `docs` folder to GitHub.

### Architecture

The project is built following a Component Based Architecture with Container Components holding the logic and hydrating Presentational Components with data that flows unidirectionally. 

Each Presentational Component exposes an API to get data through the binding from its Host Component.

Graphs are created through [HighCharts](https://www.highcharts.com/). 
