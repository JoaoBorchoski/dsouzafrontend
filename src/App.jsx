import { Route, Routes } from "react-router-dom";
import { StyledAppContainer } from "./styles";
import { UserProvider } from "./contexts/userContext";
import { LoginPage } from "./pages/login";
import { Home } from "./pages/home";

function App() {
    return (
        <StyledAppContainer>
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
