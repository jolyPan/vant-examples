module.exports = function () {
    return {
        entry: {
            'site-mobile': ['./docs/site/entry'],
            'site-desktop': ['./docs/site/entry'],
        },
        module: {
            rules: [
                {
                    test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                    loader: 'file-loader'
                },
            ]
        },
    };
};
