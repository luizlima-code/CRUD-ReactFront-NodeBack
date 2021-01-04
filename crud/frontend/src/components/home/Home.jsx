import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="Início"
        subtitle="Criação de usuário React">
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className="mb-0">Aplicativo desenvolvido para a criação de um cadastro de clientes.</p>
    </Main>