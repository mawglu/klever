module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/klever/'
        : '/',
    css: {
        sourceMap: true
    }
}