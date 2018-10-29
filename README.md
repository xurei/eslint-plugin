# eslint-plugin-xurei

Custom eslint rules used in xurei's projects. 

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-xurei`:

```
$ npm install eslint-plugin-xurei --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-xurei` globally.

## Usage

Add `xurei` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "xurei"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "xurei/rule-name": 2
    }
}
```

## Supported Rules

* no-relative-parent-imports
