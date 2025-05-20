import { Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/my-portfolio/" />} />
                    <Route path="/my-portfolio/" element={<Home />} />
                    <Route path="/portfolio/projects" element={<Projects />} />
                    <Route path="*" element={<h2>Page Not Found</h2>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;