
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Episodes from './pages/Episodes'
import Navbar from './components/common/Navbar'
import Characters from './pages/Characters'
import Locations from './pages/Locations'
import CharacterPage from './pages/CharacterPage'
import LocationPage from './pages/LocationPage'
import EpisodePage from './pages/EpisodePage'
import Error from './pages/Error'
import Todo from './pages/Todo'

function App() {
 

  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/characters' element={<Characters/>} />
            <Route path='/episodes' element={<Episodes/>} />
            <Route path='/locations' element = {<Locations/>} />
            <Route path='/character/:id' element={<CharacterPage/>} />
            <Route path='/location/:id' element={<LocationPage/>} />
            <Route path='/episode/:id' element={<EpisodePage/>} />
            <Route path='/todo' element={<Todo/>}/>
            <Route path='*' element={<Error/>} />
        </Routes>
    </div>
  )
}

export default App
