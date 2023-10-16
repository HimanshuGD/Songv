module.exports = {
    // ... other Webpack configurations

    module: {
        rules: [
            // ... other rules
            {
                test: /\.html$/,
                use: 'html-loader'
            },
        ],
    },
};
