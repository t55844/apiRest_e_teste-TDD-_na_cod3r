function helloWorld(){
    console.log('Hello World')
}

const saudacao = (hora)=>{
    return hora <= 12? 'Bom Dia': hora <=18?'Boa Tarde':'Boa Noite'
}

helloWorld()
console.log(saudacao(22))
console.log(saudacao(17))
console.log(saudacao(11))