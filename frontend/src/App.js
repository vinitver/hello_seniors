import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./style.scss";
import Createpost from './pages/Createpost';
import Displaypost from "./pages/Displaypost";
import Home from './pages/Home';
import Register from "./pages/Register";
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home/>
    </div>,
  },
  {
    path: "/createpost",
    element: <Createpost></Createpost>,
  },
  {
    path: "/displaypost/:id",
    element: <Displaypost></Displaypost>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);
function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
