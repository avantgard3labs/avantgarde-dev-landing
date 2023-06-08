import "./App.css";
import PageContainer from "./components/PageContainer/PageContainer";
import "./App.css";
import Testimonials from "./pages/Testimonials/Testimonials";
import NavContainer from "./components/NavContainer/NavContainer";
import Apps from "./Apps";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Finbot from "./pages/Finbot/Finbot";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Apps />} />
  <Route path="/finbot" element={<Finbot/>}/>
            </Routes>
        </Router>
    );
}

export default App;
