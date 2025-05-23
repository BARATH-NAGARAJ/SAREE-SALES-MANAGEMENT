import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import List from "./pages/List";
import Add from "./pages/Add";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const url = "https://saree-sales-management-backend.onrender.com";

  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="flex max-padd-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/list" />} />
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
