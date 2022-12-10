import {BrowserRouter, Route, Routes} from "react-router-dom";
import BaseLayout from "./layout/base/BaseLayout";
import {routes} from "./routes/config";
import './App.css'

function App() {
  return (
      <BrowserRouter basename="/">
          <Routes>
              <Route element={<BaseLayout/>}>
                  {routes.map(route => (
                      <Route key={route.path} path={route.path} element={<route.component />}></Route>
                  ))}
              </Route>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
