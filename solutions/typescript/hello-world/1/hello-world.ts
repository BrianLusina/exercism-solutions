class HelloWorld {
    static hello(name: string = "") {
        return `Hello, ${name ? name : 'World'}!`
    }
}

export default HelloWorld