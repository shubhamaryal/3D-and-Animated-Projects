import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projets from "./pages/Projets";
import FullNav from "./components/FullNav";

const App = () => {
    return (
        <div>
            <FullNav />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/agence" element={<Agence />}></Route>
                <Route path="/projets" element={<Projets />}></Route>
            </Routes>
        </div>
    );
};

export default App;
