# @mgsisk/stylelint-config

Opinionated stylelint configurations for CSS development.

[![Latest release][badge-release]][url-release]
[![Build status][badge-build]][url-build]
[![Code maintainability][badge-maintainability]][url-maintainability]
[![Test coverage][badge-coverage]][url-coverage]
[![Maintainer funding][badge-funding]][url-funding]

The @mgsisk/stylelint-config package includes opinionated [stylelint][]
configurations for CSS development.

- `@mgsisk/stylelint-config` – Standard configuration for general development.
- `@mgsisk/stylelint-config/wordpress` – Customized version of
  [stylelint-config-wordpress][] for WordPress plugin and theme development.

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

[Support resources][] are available if you need help with this project.

## Contributing

[Contributions][] are always welcome; please read the [code of conduct][]
before you begin. See the [changelog][] for notable project changes, and report
any [security][] concerns you find.

## Thanks

To the [contributors][] that help to build, fund, and maintain this project;
the [other works][] that have contributed to and inspired this project; and
anyone that has found this project useful.

## License

[ISC][]

[badge-build]: https://img.shields.io/travis/com/mgsisk/stylelint-config
[badge-coverage]: https://img.shields.io/codeclimate/coverage/mgsisk/stylelint-config
[badge-funding]: https://img.shields.io/liberapay/receives/mgsisk
[badge-maintainability]: https://img.shields.io/codeclimate/maintainability/mgsisk/stylelint-config
[badge-release]: https://img.shields.io/github/v/tag/mgsisk/stylelint-config?sort=semver
[changelog]: https://github.com/mgsisk/stylelint-config/blob/master/docs/CHANGELOG.md
[code of conduct]: https://github.com/mgsisk/stylelint-config/blob/master/docs/CODE_OF_CONDUCT.md
[contributions]: https://github.com/mgsisk/stylelint-config/blob/master/docs/CONTRIBUTING.md
[contributors]: https://github.com/mgsisk/stylelint-config/blob/master/docs/AUTHORS.md
[isc]: https://github.com/mgsisk/stylelint-config/blob/master/LICENSE.md
[other works]: https://github.com/mgsisk/stylelint-config/blob/master/docs/THANKS.md
[security]: https://github.com/mgsisk/stylelint-config/blob/master/docs/SECURITY.md
[stylelint-config-wordpress]: https://github.com/WordPress-Coding-Standards/stylelint-config-wordpress
[stylelint]: https://stylelint.io
[support resources]: https://github.com/mgsisk/stylelint-config/blob/master/docs/SUPPORT.md
[url-build]: https://travis-ci.com/mgsisk/stylelint-config
[url-coverage]: https://codeclimate.com/github/mgsisk/stylelint-config
[url-funding]: https://github.com/mgsisk/stylelint-config/blob/master/docs/CONTRIBUTING.md#funding
[url-maintainability]: https://codeclimate.com/github/mgsisk/stylelint-config
[url-release]: https://github.com/mgsisk/stylelint-config/releases
