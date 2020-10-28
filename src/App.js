import React from "react";
import "./App.css";
import Base from "./components/Base";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className='App'>
      <Layout>
        <Base></Base>
      </Layout>
    </div>
  );
}

export default App;
