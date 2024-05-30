import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import EditBlog from './pages/EditBlog'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<EditBlog />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App