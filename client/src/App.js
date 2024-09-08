import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-body">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
