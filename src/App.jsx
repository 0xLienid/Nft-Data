import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { projects } from "./projects";
import { useEffect, useState } from "react";
import { getAllProjectData } from "./helpers/getProjectData";
import { useSelector } from "react-redux";
import { AllNfts } from "./Views/AllNfts/AllNfts";
import { NftsByCategory } from "./Views/NftsByCategory/NftsByCategory";
import "./App.css";

export const App = () => {
  const [projectsData, setProjectsData] = useState();

  useEffect(() => {
    (async () => {
      const data = await getAllProjectData(projects);
      setProjectsData(data);
    })();
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "#3D4875" }}>
      <Router basename="/#/">
        <Routes>
          <Route exact path="/" element={<AllNfts projectsData={projectsData} />} />
          <Route exact path="/ethereum" element={<NftsByCategory projectsData={projectsData} category="ethereum" />} />
          <Route exact path="/solana" element={<NftsByCategory projectsData={projectsData} category="solana" />} />
          <Route exact path="/binance-smart-chain" element={<NftsByCategory projectsData={projectsData} category="binance-smart-chain" />} />
          <Route exact path="/avalanche" element={<NftsByCategory projectsData={projectsData} category="avalanche" />} />
          <Route exact path="/polygon" element={<NftsByCategory projectsData={projectsData} category="polygon" />} />
          <Route exact path="/tezos" element={<NftsByCategory projectsData={projectsData} category="tezos" />} />
        </Routes>
      </Router>
    </div>
  );
}
