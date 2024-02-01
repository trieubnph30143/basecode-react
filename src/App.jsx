import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutWeb from "./layouts/LayoutWeb";
import LayoutAdmin from "./layouts/LayoutAdmin";
import HomePage from "./pages/client/homepage";
import SignIn from "./pages/client/signin";
import SignUp from "./pages/client/signup";
import CreateProduct from "./pages/admin/createproduct";
import Dashboard from "./pages/admin/dashboard";
import ProductManager from "./pages/admin/productmanager";
import UpdateProduct from "./pages/admin/updateproduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWeb />}>
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="dash" element={<Dashboard />} />
          <Route path="create" element={<CreateProduct />} />
          <Route index element={<ProductManager />} />
          <Route path="update" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
