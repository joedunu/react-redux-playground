module.exports = {
    plugins: {
        'postcss-import': {
            root: __dirname
        },
        'postcss-cssnext': {}
    },
    customProperties: {
        variables: {
            c_bg: '#222'
        }
    },
    customMedia: {
        extensions: {
            v_small: '(min-width: 30rem)',
            v_medium: '(min-width: 48rem)'
        }
    }
}