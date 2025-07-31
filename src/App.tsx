import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Compound from './compound/Compound'
import HOC from './HOC/HOC'

function App() {

  return (
    <div className="min-h-screen min-w-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-1 p-4">
            <Link 
              to="/compound" 
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
            >
              Compound
            </Link>
            {/* <Link to="/render-props">Render Props</Link> */}
            <Link 
              to="/hoc"
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
            >
              HOC
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/compound" element={<Compound />} />
          {/* <Route path="/render-props" element={<RenderProps />} /> */}
          <Route path="/hoc" element={<HOC />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
