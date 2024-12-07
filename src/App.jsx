import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./home/home";
import Footer from './homecomponents/Footer';
import Header from './homecomponents/Header';
function App() {
  return (
    <>
    {/* Header */}
    <header className="bg-gradient-to-r from-green-300 to-blue-500 text-green-200">
        <Header />
      </header>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

     {/* Footer */}
     <footer className="p-1 md:p-2 bg-gradient-to-r from-green-400 to-blue-600 text-green-200">
        <Footer />
      </footer>

    </>
  );
}

export default App;
