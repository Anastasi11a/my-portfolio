import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <main>
                <Routes>
                    <Route path="*" element={<h2>Page Not Found</h2>} />
                </Routes>
            </main>
        </div>
    );
}

export default App;