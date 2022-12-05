import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from "./routes/routes";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={<route.component />} />
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
