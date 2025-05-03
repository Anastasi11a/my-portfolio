import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/portfolio/" element={<Home />} />
                    <Route path="*" element={<h2>Page Not Found</h2>} />
                </Routes>
            </main>
        </div>
    );
}

export default App;