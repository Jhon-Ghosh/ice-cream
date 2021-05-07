import React from "react";
import "./App.css";
import Body from "./Component/FunctionalComponent/Body/Body";
import Footer from "./Component/FunctionalComponent/Footer/Footer";
import Header from "./Component/FunctionalComponent/Header/Header";
import Layout from "./Component/FunctionalComponent/Layout/Layout";

function App() {
  return (
    <Layout>
      <Header />
      <Body />
      <Footer />
    </Layout>
  );
}

export default App;
