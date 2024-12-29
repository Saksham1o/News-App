import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';  
import Home from './components/Home'; 
import News from './components/News'; 
import NotFound from './components/NotFound'; 

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" component={News} />
          <Route component={NotFound} /> {/* Fallback for unmatched routes */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;