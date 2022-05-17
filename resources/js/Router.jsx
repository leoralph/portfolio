import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/portfolio/navbar/Navbar";
import Home from "./pages/portfolio/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
