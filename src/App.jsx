// libraries
import { BrowserRouter } from "react-router-dom";

// utilities
import { Toaster } from "react-hot-toast";

import "./App.css";

import "react-confirm-alert/src/react-confirm-alert.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppRoutes from "AppRoutes";

const toastDefaultOptionsStyle = {
    borderRadius: "5px",
    fontSize: "14px",
};

function App() {
    return (
        <>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
            <Toaster
                toastOptions={{
                    duration: 2000,
                    style: toastDefaultOptionsStyle,
                }}
            />
        </>
    );
}

export default App;
