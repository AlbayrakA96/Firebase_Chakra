import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    </Router>
  );
}

export default App;
