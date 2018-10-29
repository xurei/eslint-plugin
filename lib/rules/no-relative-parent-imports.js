/**
 * @fileoverview Make sure that imports are not relative; Works in conjunction with babel-plugin-root-import
 * @author xurei
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: 'Make sure that imports are not relative; Works in conjunction with babel-plugin-root-import',
            category: 'ECMAScript 6',
            recommended: false,
        },
        fixable: null,  // or 'code' or 'whitespace'
        schema: [
            {
                type: 'object',
                properties: {
                    rootPathPrefix: {
                        type: 'string'
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create: function(context) {
        var config = context.options[0] || {};
        var rootPathPrefix = config.rootPathPrefix || '/';

        return {
            ImportDeclaration(node) {
                
                if (node.source.value.startsWith('..')) {
                    var report = {
                        node,
                        message: 'Import should not use a relative path to a parent directory.',
                    };
                    context.report(report);
                }
            }
        };
    }
};
