import { Route, Routes } from "react-router-dom";
import { StyledAppContainer } from "./styles";
import { UserProvider } from "./contexts/userContext";
import { LoginPage } from "./pages/login";
import { Home } from "./pages/home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <StyledAppContainer>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <UserProvider>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </UserProvider>
        </StyledAppContainer>
    );
}

export default App;
