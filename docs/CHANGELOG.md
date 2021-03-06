# Changelog

Notable project changes. Versions are [semantic][].

## [Unreleased][]

No unreleased changes.

## [0.6.1][] - 2020-09-22

### Fixed
- Deployment configuration

## [0.6.0][] - 2020-09-22

### Added
- `alpha-value-notation` rule
- `color-function-notation` rule
- `font-weight-notation` rule
- `hue-degree-notation` rule
- `ignoreFontFamilies` exception to
  `font-family-no-missing-generic-family-keyword` to ignore custom `mfs`, `mlh`,
  `msu`, and `vru` units
- GitHub Packages deployment

### Changed
- Deployments now run in their own stage
- `function-url-quotes` rule to require quotes around URL's
- `stylelint` peer dependency to `>= 13.0.0`

### Remove
- Deprecated rules

## [0.5.0][] - 2020-04-12

### Changed
- `max-nesting-depth` increaed to 8
- `selector-max-combinators` increased to 8
- Now extends `stylelint-config-standard` instead of
  `stylelint-config-recommended`
- Project structure

### Removed
- `declaration-property-unit-whitelist`

## [0.4.4][] - 2019-07-03

### Changed
- `vru` is now allowed as a unit for `line-height` properties in the WordPress
  standard

## [0.4.3][] - 2018-03-29

### Changed
- `vru` is now allowed as a unit for `font-size` properties

## [0.4.2][] - 2018-01-07

### Added
- `max-size` and `min-size` to ignored properties for `property-no-unknown`

### Changed
- `mlh` is now allowed as a unit for `font-size` properties to suppor the
  `postcss-short` shorthand notation `font-size: FontSize / LineHeight`

## [0.4.1][] - 2018-01-07

### Fixed
- Incorrect references to `stylelint-a11y` and
  `stylelint-no-indistinguishable-colors`

## [0.4.0][] - 2018-01-07

### Changed
- Hex colors are now allowed
- Line length limit increased from `80` to `120`
- `vru` is now allowed as a unit for `line-height` properties

### Removed
- `stylelint-a11y`
- `stylelint-no-indistinguishable-colors`

## [0.3.0][] - 2018-12-10

### Added
- `stylelint-use-nesting` plugin

## [0.2.0][] - 2018-12-10

### Changed
- Moved npm deployment to Travis configuration
- Replaced `js-yaml` with `yaml-lint`
- Replaced `jsonlint` with `jsonlint-cli`
- Replaced `markdownlint-cli` with `remark-cli`

## [0.1.3][] - 2018-12-06

### Fixed
- Installation instructions in readme

## [0.1.2][] - 2018-12-06

### Fixed
- Broken URL's in repo documentation

## [0.1.1][] - 2018-12-06

### Fixed
- Linting issues

## [0.1.0][] - 2018-12-06

### Added
- Standard stylelint configuration
- WordPress stylelint configuration

[unreleased]: https://github.com/mgsisk/stylelint-config/compare/v0.6.1...HEAD
[0.6.1]: https://github.com/mgsisk/stylelint-config/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/mgsisk/stylelint-config/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/mgsisk/stylelint-config/compare/v0.4.4...v0.5.0
[0.4.4]: https://github.com/mgsisk/stylelint-config/compare/v0.4.3...v0.4.4
[0.4.3]: https://github.com/mgsisk/stylelint-config/compare/v0.4.2...v0.4.3
[0.4.2]: https://github.com/mgsisk/stylelint-config/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/mgsisk/stylelint-config/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/mgsisk/stylelint-config/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/mgsisk/stylelint-config/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/mgsisk/stylelint-config/compare/v0.1.3...v0.2.0
[0.1.3]: https://github.com/mgsisk/stylelint-config/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/mgsisk/stylelint-config/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/mgsisk/stylelint-config/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/mgsisk/stylelint-config/tree/v0.1.0
[semantic]: https://semver.org
