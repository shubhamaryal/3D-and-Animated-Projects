import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/Loading.jsx";
import NavContext from "./context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Loading>
                <NavContext>
                    <App />
                </NavContext>
            </Loading>
        </BrowserRouter>
    </StrictMode>,
);
