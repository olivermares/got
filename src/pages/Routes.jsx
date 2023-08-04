import { Routes as RoutesDom } from "react-router-dom";
import { Route } from "react-router-dom";


import HousesPage from "./HousesPage/HousesPage";
import CharactersPage from "./CharactersPage/CharactersPage";
import ChronologyPage from "./ChronologyPage/ChronologyPage";
import HomePage from "./HomePage/HomePage";


export default function Routes() {
  return (
    <RoutesDom>
      <Route path="/" element={<HomePage/>} />
      <Route path="/houses" element={<HousesPage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/chronology" element={<ChronologyPage />} />
    </RoutesDom>
  );
}
