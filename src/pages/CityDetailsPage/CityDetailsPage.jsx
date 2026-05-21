import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchWeather } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const CityDetailsPage = () => {
  const { cityName } = useParams();
  const location = useLocation();
  const backLinkHref = location.state ?? "/";
  const [cityArticle, setCityArticle] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getCityWeather() {
      try {
        setLoader(true);
        const result = await fetchWeather(cityName);
        setCityArticle(result);
        console.log(result);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getCityWeather();
  }, []);
  return (
    <div>
      <NavLink to={backLinkHref}>back</NavLink>
      {loader && <Loader />}
      {cityArticle && <p>{cityArticle.name}</p>}
      {error && <ErrorMessage />}
      <NavLink to="forecast">forecast</NavLink>
      <Outlet />
    </div>
  );
};

export default CityDetailsPage;
