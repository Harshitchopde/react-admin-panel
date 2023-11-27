import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Login from "./pages/login/Login";
import { productInput, userInput } from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
// import { ThemeProvider } from "styled-components";
function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode?"app dark":"app"}>
      {/* <ThemeProvider> */}

        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path="new" element={<New inputs={userInput} title="Add new user"/>} />
                {/*  users/:userId */}
                <Route path=":userId" element={<Single />} />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route path="new" element={<New inputs={productInput} title="Add new product"/>} />
                <Route path=":productId" element={<Single />} />
              </Route>

            </Route>
          </Routes>
        </BrowserRouter>
      {/* </ThemeProvider> */}

    </div>
  );
}

export default App;
