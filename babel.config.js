module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
                alias: {
                    '@': './src',
                    '@assets': './src/assets',
                    '@contexts': './src/contexts',
                    '@screens': './src/screens',
                    '@navigators': './src/navigators',
                },
            },
        ],
    ],
};
