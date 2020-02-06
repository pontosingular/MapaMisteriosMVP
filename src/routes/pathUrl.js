import HomePage from '../pages/Home'
import InventarioPage from '../pages/Invetario'
import HistoryPage from '../pages/History'

const pathUrl = [{
  path: '/',
  component: HomePage,
  name: 'Explorar'
},
{
  path: '/inventario',
  component: InventarioPage,
  name: 'Inventário'
},
{
  path: '/user',
  name: 'Perfil'
},
{
  path: '/history/:id',
  component: HistoryPage
}

]

export default pathUrl
