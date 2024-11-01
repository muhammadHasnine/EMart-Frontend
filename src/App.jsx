import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from './pages/CartPage';
import SignupPage from "./pages/SignupPage";
const router = createBrowserRouter([
  {
      path: "/",
      element:<Home/>
  },
  {
      path:"/login",
      element:<LoginPage/>
  },
  {
      path:"/signup",
      element:<SignupPage/>
  },
  {
      path:"/cart",
      element:<CartPage/>
  },
])
function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
