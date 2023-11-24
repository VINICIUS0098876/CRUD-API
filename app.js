'use strict'

// Função - GET
async function listarUsuarios(){
    const url = 'http://10.107.140.2:8080/usuarios/'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

// Função - POST
async function cadastrarUsuario(usuario){
    const url = 'http://10.107.140.2:8080/usuarios/'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}

// Função - PUT 
async function atualizarUsuario(usuario){
    const url = `http://10.107.140.2:8080/usuarios/${usuario.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}

// Função - DELETE
async function deletarUsuario(id){
    const url = `http://10.107.140.2:8080/usuarios/${id}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}









// Area de teste

// deletarUsuario(20)

// const usuarioAtualizado={
//     id: '20',
//     nome: 'Maria',
//     email: 'maria@gmail.com'
// }

// atualizarUsuario(usuarioAtualizado)

// const usuarioNovo = {
//     nome: 'Vinicius',
//     email: 'vinicius@email.com'
// }

// cadastrarUsuario(usuarioNovo)

// listarUsuarios()