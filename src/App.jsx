import React from 'react'
import Header from './components/Header.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.jsx'
import ProductScreen from './screens/ProductScreen.jsx'
import FAQScreen from './screens/FAQScreen.jsx'
import ContactScreen from './screens/ContactScreen.jsx'
import { FiHome } from 'react-icons/fi'

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/products" component={ProductScreen} />
      <Route exact path="/faq" component={FAQScreen} />
      <Route exact path="/contact" component={ContactScreen} />
    </Router>
  )
}

export default App
