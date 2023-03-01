/**
 * @license Agylam
 * App.tsx
 * Компании "Facebook" и "Meta" признаны в РФ экстремисскими. Их деятельность в РФ запрещена. 
 */
import {Route, Routes} from 'react-router-dom'

import { IndexPage } from './Pages/IndexPage'
import { SchedulePage } from './Pages/SchedulePage'

import './css/main.css'
import './css/color-light.css'
function App() {
  return (
      <Routes>
        <Route path="/" element={<IndexPage />}/>
        <Route path="/schedule" element={<SchedulePage />}/>
      </Routes>
  )
}

export default App