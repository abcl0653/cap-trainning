module.exports = cat => {
    cat.on('READ', 'Books', () => [
        {ID: 201, title: "Thinking in JAVA", author_ID: 301, stock: 20},
        {ID: 202, title: "NodeJS， 从入门到放弃", author_ID: 302, stock: 25}
    ])

    cat.on('READ', 'Authors', () => [
        {ID: 301, name: 'Niu Ren'},
        {ID: 302, name: 'Another Niu Ren'},
    ])
}