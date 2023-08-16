import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import { LoginProvider } from "./context/LoginContext.jsx";
import { register } from "swiper/element/bundle";

register();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LoginProvider>
            <RouterProvider router={router} />
        </LoginProvider>
    </React.StrictMode>
);
