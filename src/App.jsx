import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CityForecast from "./components/CityForecast/CityForecast.jsx";
import Loader from "./components/Loader/Loader.jsx";
import Header from "./components/Header/Header.jsx";
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage/NotFoundPage.jsx"),
);
const CityDetailsPage = lazy(
  () => import("./pages/CityDetailsPage/CityDetailsPage.jsx"),
);
function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/city/:cityName" element={<CityDetailsPage />}>
            <Route path="forecast" element={<CityForecast />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
