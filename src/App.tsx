import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { pageRoutes } from "./routes/routes";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {pageRoutes.map((pageRoute, index) => {
            return (
              <Route key={index} path={pageRoute.path} element={<pageRoute.component />} />
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
