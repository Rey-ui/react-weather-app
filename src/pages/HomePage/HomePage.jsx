import { useEffect, useState } from "react";
import { fetchWeather } from "../../services/api";
import PopularCities from "../../components/PopularCities/PopularCities";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import UserCities from "../../components/UserCities/UserCities";
import toast, { Toaster } from "react-hot-toast";

const HomePage = () => {
  const getLocalCitiesList = () => {
    const userCities = JSON.parse(localStorage.getItem("citiesArr"));
    if (userCities) return userCities;
    return [];
  };
  const [popularCities, setPopularCities] = useState([]);
  const [citiesList, setCitiesList] = useState(getLocalCitiesList);
  const [popularCitiesLoader, setPopularCitiesLoader] = useState(false);
  const [citiesListLoader, setCitiesListLoader] = useState(false);
  // const [cityName, setCityName] = useState("");
  const [error, setError] = useState(false);
  const popularCitiesNames = [
    "kyiv",
    "london",
    "tokio",
    "paris",
    "berlin",
    "seul",
    "rome",
    "singapore",
  ];
  useEffect(() => {
    async function getPopularCityWeather() {
      try {
        setPopularCitiesLoader(true);
        const results = await Promise.all(
          popularCitiesNames.map((popularCity) => {
            return fetchWeather(popularCity);
          }),
        );
        setPopularCities(results);
      } catch {
        setError(true);
      } finally {
        setPopularCitiesLoader(false);
      }
    }
    getPopularCityWeather();
  }, []);
  useEffect(() => {
    localStorage.setItem("citiesArr", JSON.stringify(citiesList));
  }, [citiesList]);
  const handleSearchCity = async (query) => {
    const cityName = query.trim().toLowerCase();

    try {
      setCitiesListLoader(true);
      if (!cityName) return;
      const result = await fetchWeather(cityName);
      if (!result) {
        toast.error("sorry, enter the correct value!");
        return;
      }
      const someCity = citiesList.some((city) => {
        return city.id === result.id;
      });
      if (someCity) {
        toast.error("sorry, this city already exist!");
        return citiesList;
      }
      toast.success("The city has been successfully added!");
      setCitiesList((prev) => [...prev, result]);
    } catch {
      toast.error("sorry, enter the correct value!");
      return citiesList;
    } finally {
      setCitiesListLoader(false);
    }
  };
  const handledeleteCity = (cityId) => {
    setCitiesList((prev) => {
      return prev.filter((city) => {
        return city.id !== cityId;
      });
    });
  };
  return (
    <main>
      <section>
        {popularCities.length !== 0 && <PopularCities cities={popularCities} />}
        {popularCitiesLoader && <Loader />}
        {error && <ErrorMessage />}
      </section>
      <section>
        <UserCities
          submit={handleSearchCity}
          cities={citiesList}
          onDelete={handledeleteCity}
        />

        {citiesListLoader && <Loader />}
        {error && <ErrorMessage />}
      </section>
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};

export default HomePage;
