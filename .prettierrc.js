module.exports = {
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    arrowParens: 'avoid',
    bracketSpacing: true,
    htmlWhitespaceSensitivity: 'css',
    insertPragma: false,
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    proseWrap: 'preserve',
    quoteProps: 'as-needed',
    requirePragma: false,
    semi: true,
    trailingComma: 'es5',
    useTabs: false,
    vueIndentScriptAndStyle: false,
    overrides: [
        {
            files: '*.css',
            options: {
                parser: 'css',
            },
        },
    ],
};
