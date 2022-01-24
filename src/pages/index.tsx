import { useState } from "react";
import Cliente from "../../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";



export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [ 
    new Cliente ('Ana', 32, '1'),
    new Cliente ('Bia', 65, '2'),
    new Cliente ('Paula', 53, '3'),
    new Cliente ('Pedro', 33, '4'),
    new Cliente ('João', 13, '5')
  ]
  
  function clienteSelecionado(cliente : Cliente){
    setCliente(cliente)
    setVisivel('form')
  }
  
  function clienteExcluido(cliente : Cliente){
    console.log(`Excluir... ${cliente.nome}`)
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
    
  }

  function salvarCliente(cliente : Cliente) {
    console.log(cliente)
    setVisivel('tabela')
    
  }

  
  
  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className={`mb-4 
                  bg-gradient-to-r from-green-400 to-green-700`} 
                onClick={novoCliente}
              >Novo Cliente</Botao>
            </div>
        
            <Tabela clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>


        ) : (

          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
          
        )}
      </Layout>
    </div>
  )
}
