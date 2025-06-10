function validateHello(greetings){
    const difGreetings = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
    const myGreetings = greetings.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase()
    return difGreetings.some(greet => myGreetings.includes(greet))
}