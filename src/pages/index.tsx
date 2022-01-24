import Cliente from "../../core/Cliente";
import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";

const clientes = [ 
  new Cliente ('Ana', 32, '1'),
  new Cliente ('Bia', 65, '1'),
  new Cliente ('Paula', 53, '1'),
  new Cliente ('Pedro', 33, '1'),
  new Cliente ('João', 13, '1')
]

function clienteSelecionado(cliente : Cliente){
  console.log(cliente.nome)
}

function clienteExcluido(cliente : Cliente){
  console.log(`Excluir... ${cliente.nome}`)
}


export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
      `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>
        
        <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  )
}
