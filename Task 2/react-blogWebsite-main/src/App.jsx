import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';
import Detail from './components/Detail/Detail';
import NewBlog from './components/NewBlog/NewBlog';
// import Footer from './components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Posts />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/newblog' element={<NewBlog />}></Route>
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
