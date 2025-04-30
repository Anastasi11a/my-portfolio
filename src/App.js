import { Route, Routes } from "react-router-dom";
import { Header } from "./components";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="*" element={<h2>Page Not Found</h2>} />
                </Routes>
            </main>
        </div>
    );
}

export default App;