import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from './pages/CartPage';
import SignupPage from "./pages/SignupPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
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
  {
      path:"/product-detail",
      element:<ProductDetailsPage/>
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
