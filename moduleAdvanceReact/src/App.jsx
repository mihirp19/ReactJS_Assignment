import './App.css'
// import Banner from './components/Banner'
// import Categories from './components/Categories'
// import Header from './components/Header'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddBlog from './components/AddBlog'
import BlogList from './components/BlogList'
import BlogCRUD from './components/BlogCRUD'

function App() {
 

  return (
    <>
    {/* <Header/>
    <Banner/>
    <Categories/> */}
    <Navbar/>
    <Router>
      <Routes>
        <Route path='/' element={<BlogCRUD/>}/>
        {/* <Route path='/add' element={BlogList}/> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
