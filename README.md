[![NPM version][npm-image]][npm-url] [![Downloads][npm-downloads-image]][npm-url] [![Dependencies][deps-image]][deps-url] [![star this repo][gh-stars-image]][gh-url] [![fork this repo][gh-forks-image]][gh-url] [![Build Status][travis-image]][travis-url] ![Code Style][codestyle-image]

# stylelint-config

> A collection of shareable Stylelint configurations

## Installation

```sh
$ yarn add @jenssimon/stylelint-config --dev
```

## Configurations

### Default configuration

This configuration targets projects using Sass. It is based on [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard#readme).

```json
{
  "extends": [
    "@jenssimon/stylelint-config"
  ]
}
```

Optionally you can enable style order and use `@jenssimon/stylelint-config/order`.

### Base configuration

This configuration is the Default configuration without the rules for Sass in the default configuration.

```json
{
  "extends": [
    "@jenssimon/stylelint-config/base"
  ]
}
```

For style order use `@jenssimon/stylelint-config/base-order`.

### SFRA configuration

This is the configuration for the Salesforce Commerce Cloud (SFCC) Storefront Reference Architecture (SFRA),

```json
{
  "extends": [
    "@jenssimon/stylelint-config/sfra"
  ]
}
```

## License

MIT © 2019 [Jens Simon](https://github.com/jenssimon)

[npm-url]: https://www.npmjs.com/package/@jenssimon/stylelint-config
[npm-image]: https://badgen.net/npm/v/@jenssimon/stylelint-config
[npm-downloads-image]: https://badgen.net/npm/dt/@jenssimon/stylelint-config

[deps-url]: https://david-dm.org/jenssimon/stylelint-config
[deps-image]: https://badgen.net/david/dep/jenssimon/stylelint-config

[gh-url]: https://github.com/jenssimon/stylelint-config
[gh-stars-image]: https://badgen.net/github/stars/jenssimon/stylelint-config
[gh-forks-image]: https://badgen.net/github/forks/jenssimon/stylelint-config

[travis-url]: https://travis-ci.com/jenssimon/stylelint-config
[travis-image]: https://travis-ci.com/jenssimon/stylelint-config.svg?branch=master

[codestyle-image]: https://badgen.net/badge/code%20style/airbnb/f2a
