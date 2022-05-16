import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Header />

            <Main />

            <Footer />
        </div>
    );
}

export default App;
