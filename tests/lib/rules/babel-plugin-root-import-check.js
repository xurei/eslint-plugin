/**
 * @fileoverview Make sure that imports are not relative; Works in conjunction with babel-plugin-root-import
 * @author xurei
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-relative-parent-imports'),
RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6, sourceType: "module" } });
ruleTester.run('babel-plugin-root-import-check', rule, {
    valid: [
        {
            code: 'import { obj } from \'/my-code\';',
        },
        {
            code: 'import { obj } from \'./my-code\';',
        },
        {
            code: 'import { obj, obj2 } from \'/subfolder/my-code\';',
        },
        {
            code: 'import { obj, obj2 } from \'mysources/subfolder/my-code\';',
            options: [{
                rootPathPrefix: "mysources",
            }]
        }
    ],

    invalid: [
        {
            code: 'import { bla } from \'../my-code\';',
            errors: [{
                message: 'Import should not use a relative path.',
                type: 'ImportDeclaration'
            }],
            filename: '/path/to/src/sub1/sub2/index',
            //output: 'import { bla } from \'/sub1/my-code\';',
        },
        {
            code: 'import { bla } from \'../my-code\';',
            options: [{
                rootPathPrefix: "mysources",
            }],
            errors: [{
                message: 'Import should not use a relative path to a parent directory.',
                type: 'ImportDeclaration'
            }],
            filename: '/path/to/src/sub/index',
            //output: 'import { bla } from \'mysources/my-code\';',
        }
    ]
});
