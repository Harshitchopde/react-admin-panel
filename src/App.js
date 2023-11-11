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

// import { ThemeProvider } from "styled-components";
function App() {
  return (
    <div className="App">
      {/* <ThemeProvider> */}

        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path="new" element={<New />} />
                {/*  users/:userId */}
                <Route path=":userId" element={<Single />} />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route path="new" element={<New />} />
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
