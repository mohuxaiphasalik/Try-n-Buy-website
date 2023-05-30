import React from 'react'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Categories from './Components/Categories.jsx'
import Footer from './Components/Footer';
import LoginPage from './Pages/login';
function App() {
  console.log(document.cookie);

  if (document.cookie) {
    return (
      <>
        <Navbar />
        <Header />
        <Categories />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <LoginPage />
      </>
    );
  }
}

export default App;
