import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import NewCandidate from "./components/newcandidate/NewCandidate";
import ManageCandidate from "./components/Manage candidate/ManageCandidate";
import CandidateShortlist from "./components/candidateShortlist/CandidateShortlist";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="NewCandidate" replace />} />
          <Route path="NewCandidate" element={<NewCandidate />} />
          <Route path="manageCandidate" element={<ManageCandidate />} />
          <Route path="candidateShortlist" element={<CandidateShortlist name="Create" />} />
          <Route path="*" element={<Navigate to="NewCandidate" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
