import BotaoAdicionar from '../../components/BotaoAdicionar'
import ListaDeTarefas from '../../containers/ListaDeTarefas'
import Sidebar from '../../containers/Sidebar'

const Home = () => (
  <>
    <Sidebar mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
