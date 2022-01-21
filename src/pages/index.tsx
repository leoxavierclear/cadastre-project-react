import Cliente from "../../core/Cliente";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";

const clientes = [ 
  new Cliente ('Ana', 32, '1'),
  new Cliente ('Bia', 65, '1'),
  new Cliente ('Paula', 53, '1'),
  new Cliente ('Pedro', 33, '1'),
  new Cliente ('JOão', 13, '1')
]


export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
      `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
