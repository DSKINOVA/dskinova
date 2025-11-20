import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider  } from "react-helmet-async";

createRoot(document.getElementById("root")).render(

  <HelmetProvider >
    <Toaster
      position="top-right"
      toastOptions={{
        style: { fontSize: "14px" },
        success: { iconTheme: { primary: "#16a34a", secondary: "white" } },
        error: { iconTheme: { primary: "#dc2626", secondary: "white" } },
      }}
    />
    <App />
    </HelmetProvider>
 
);
