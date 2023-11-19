import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import AllPages from "./components/AllPages"
import Test from "./components/Test"

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={<AllPages />}
                    ></Route>
                    <Route
                        path="/menu"
                        element={<Test />}
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
