module.exports = (sayHello) => {
    sayHello.on( 'hello', req => `Hello ${req.data.to}`)
}