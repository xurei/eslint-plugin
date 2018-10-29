# Make sure that imports are not relative (no-relative-parent-imports)

Disallow the use of relative paths to parent files/folders with `import`.
Typically used in conjunction with [babel-plugin-root-import](https://www.npmjs.com/package/babel-plugin-root-import).

## Rule Details

Examples of **incorrect** code for this rule:

```ecmascript 6
import { foo } from '../bar/gen';
```

Examples of **correct** code for this rule:

```ecmascript 6
import { foo } from './gen';
import { foo } from '/bar/gen';
import { foo } from 'myroot/bar/gen';
```

### Options

* rootPathPrefix: The prefix used to define the root path (default "/").

## When Not To Use It

If you don't use babel-plugin-root-import-check, this rule will give you unsolvable errors.

## Further Reading

[babel-plugin-root-import](https://www.npmjs.com/package/babel-plugin-root-import)