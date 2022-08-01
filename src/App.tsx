import {CssBaseline} from "@mui/material";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/404/NotFound";
import ErrorBoundary from "./common/ErrorBoundary/ErrorBoundary";
import Harness from "./components/harness/Harness";

const App = () => {
    const location = useLocation();

    return (
            <>
                <CssBaseline/>
                <ErrorBoundary key={location.pathname}>
                    <Routes>
                        <Route path="/" element={<Harness><Home/></Harness>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </ErrorBoundary>
            </>
    )
}

export default App
