# @mgsisk/stylelint-config

[![Current version][img-version]][url-version]
[![Build status][img-build]][url-build]
[![Maintainability grade][img-maintainability]][url-maintainability]
[![Test coverage][img-coverage]][url-coverage]
[![Support development][img-support]][url-support]

> Opinionated stylelint configurations for CSS development.

The @mgsisk/stylelint-config package includes opinionated [stylelint][]
configurations for CSS development.

- `@mgsisk/stylelint-config` – Standard configuration for general development.
- `@mgsisk/stylelint-config/wordpress` – Customized version of
  [stylelint-config-wordpress][] for WordPress plugin and theme development.

[stylelint]: https://stylelint.io
[stylelint-config-wordpress]: https://github.com/WordPress-Coding-Standards/stylelint-config-wordpress

## Installation

```sh
npm install --save-dev @mgsisk/stylelint-config
```

## Usage

```js
// .stylelintrc.js

module.exports = {
  …
  extends: ['@mgsisk/stylelint-config'],
  …
}
```

## Support

[Support][] resources are available.

[support]: https://github.com/mgsisk/stylelint-config/blob/master/support.md

## Contribute

[Contributions][] are always welcome.

[Contributions]: https://github.com/mgsisk/stylelint-config/blob/master/contributing.md

[img-version]: https://img.shields.io/npm/v/@mgsisk/stylelint-config.svg?logo=npm
[img-build]: https://img.shields.io/travis/mgsisk/stylelint-config.svg?logo=travis
[img-maintainability]: https://api.codeclimate.com/v1/badges/362045bf31ec72f260f8/maintainability
[img-coverage]: https://api.codeclimate.com/v1/badges/362045bf31ec72f260f8/test_coverage
[img-support]: https://img.shields.io/badge/donate-coffee-darkorange.svg?logo=gratipay&logoColor=fff

[url-version]: https://npmjs.com/package/@mgsisk/stylelint-config
[url-build]: https://travis-ci.org/mgsisk/stylelint-config
[url-maintainability]: https://codeclimate.com/github/mgsisk/stylelint-config/maintainability
[url-coverage]: https://codeclimate.com/github/mgsisk/stylelint-config/test_coverage
[url-support]: https://buymeacoffee.com/mgsisk
