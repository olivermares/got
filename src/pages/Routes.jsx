import { Routes as RoutesDom } from "react-router-dom";
import { Route } from "react-router-dom";

import HomePage from "./HomePagePepe/HomePage";
import HousesPage from "./HousesPage/HousesPage";
import CharactersPage from "./CharactersPage/CharactersPage";
import ChronologyPage from "./ ChronologyPage / ChronologyPage";

export default function Routes() {
  return (
    <RoutesDom>
      <Route path="/" element={<HomePage />} />
      <Route path="/houses" element={<HousesPage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/chronology" element={<ChronologyPage />} />
    </RoutesDom>
  );
}
