// main.jsx or index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MyProvider from "./Context.jsx";
import "./index.css";
import { Slide, ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyProvider>

    <ToastContainer
      autoClose={1000}
      position="bottom-right"
      hideProgressBar={true}
      closeOnClick
      pauseOnHover
      draggable
      theme="colored"
      newestOnTop
      transition={Slide}
      toastStyle={{
        width: "auto",
        maxWidth: "90%",
        padding: "10px 20px",
        wordBreak: "break-word",
      }}
    />
  </StrictMode>
);
