test('Devo conhecer as principais assertivas do jest', () => {
    let number = null
    expect(number).toBeNull()
    number = 10
    expect(number).not.toBeNull()
    expect(number).toBe(10)
    expect(number).toEqual(10)
    expect(number).toBeGreaterThan(9)
    expect(number).toBeLessThan(11)
})

test('Devo saber trabalhar com objetos', () => {
    const obj = { name: 'John', email: 'john@mail.com' }
    expect(obj).toHaveProperty('name')
})

// Sincronismo no jest

const supertest = require('supertest')

const request = supertest('http://www.google.com')

//A resposta que vira sera a 200 mas sem o return ele nao espera e continua com se desse certo
//Mesmo os codigos sendo os mesmo sem o return ele nao funciona por que e asincrono

test('Sincronismo com return faz a execução esperar  a resposta', () => {
    return request.get('/')
        .then(res => expect(res.status).toBe(400))// vai falhar
})

test('Sincronismo sem return nao esperar  a resposta', () => {
    request.get('/')
        .then(res => expect(res.status).toBe(400))// aqui nao vai 
})