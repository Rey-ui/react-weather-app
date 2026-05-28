import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchWeather } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import CityDetails from "../../components/CityDetails/CityDetails";
import { IoArrowBackOutline } from "react-icons/io5";
import css from "./CityDetailsPage.module.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaCalendarDays } from "react-icons/fa6";
const CityDetailsPage = () => {
  const { cityName } = useParams();
  const [cityDetails, setCityDetails] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkHref = location.state ?? "/";

  useEffect(() => {
    async function getCityWeather() {
      try {
        setLoader(true);
        const result = await fetchWeather(cityName);
        setCityDetails(result);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getCityWeather();
  }, []);
  return (
    <main>
      <section className="section">
        <div className="container">
          <NavLink className={css.detailsBackBtn} to={backLinkHref}>
            <IoArrowBackOutline />
            <span>Back</span>
          </NavLink>
          {loader && <Loader />}
          {cityDetails && <CityDetails city={cityDetails} />}
          {error && <ErrorMessage />}
        </div>
      </section>
      <section className="section">
        <div className="container">
          {cityDetails && (
            <>
              <SectionTitle>5-Day Forecast</SectionTitle>
              <NavLink className={css.forecastBtn} to="forecast">
                <FaCalendarDays />
                <span>Forecast</span>
              </NavLink>
              <Outlet />
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default CityDetailsPage;
