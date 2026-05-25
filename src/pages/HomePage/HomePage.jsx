import { useEffect, useState } from "react";
import { fetchWeather } from "../../services/api";
import PopularCities from "../../components/PopularCities/PopularCities";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import UserCities from "../../components/UserCities/UserCities";
import toast, { Toaster } from "react-hot-toast";
import FilterAndSortCities from "../../components/FilterAndSortCities/FilterAndSortCities";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const HomePage = () => {
  const getLocalCitiesList = () => {
    const userCities = JSON.parse(localStorage.getItem("citiesArr"));
    if (userCities) return userCities;
    return [];
  };
  const [popularCities, setPopularCities] = useState([]);
  const [citiesList, setCitiesList] = useState(getLocalCitiesList);
  const [filterName, setFilterName] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [popularCitiesLoader, setPopularCitiesLoader] = useState(false);
  const [citiesListLoader, setCitiesListLoader] = useState(false);
  const [error, setError] = useState(false);
  const [switchIndicator, setswitchIndicator] = useState("asc");
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
  const handleRefreshWeather = async () => {
    try {
      setCitiesListLoader(true);
      const results = await Promise.all(
        citiesList.map((city) => {
          return fetchWeather(city.name);
        }),
      );
      setCitiesList(results);
    } catch {
      setError(true);
    } finally {
      setCitiesListLoader(false);
    }
  };
  const filterCitiesList = citiesList.filter((city) => {
    return city.name.toLowerCase().includes(filterName.toLowerCase());
  });
  const handleClearList = () => {
    localStorage.removeItem("citiesArr");
    setCitiesList([]);
  };
  const getSortValue = (city, option) => {
    switch (option) {
      case "cityTemperature":
        return city.main.temp;
      case "cityHumidity":
        return city.main.humidity;
      case "cityWindSpeed":
        return city.wind.speed;
      case "cityName":
        return city.name;
      default:
        return null;
    }
  };
  const handleSort = (option) => {
    if (sortBy === option) {
      setswitchIndicator((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(option);
      setswitchIndicator("asc");
    }
  };
  const sortedCities = [...filterCitiesList].sort((a, b) => {
    const valueA = getSortValue(a, sortBy);
    const valueB = getSortValue(b, sortBy);
    if (typeof valueA === "string") {
      return switchIndicator == "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    } else {
      return switchIndicator == "asc" ? valueB - valueA : valueA - valueB;
    }
    return 0;
  });
  return (
    <main>
      <section className="section">
        <div className="container">
          {popularCities.length !== 0 && (
            <PopularCities cities={popularCities} />
          )}
          {popularCitiesLoader && <Loader />}
          {error && <ErrorMessage />}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle>Tracked Cities</SectionTitle>
          <FilterAndSortCities
            clearCities={handleClearList}
            value={filterName}
            change={setFilterName}
            sort={handleSort}
            sortValue={sortBy}
            switchIndicator={switchIndicator}
          />
          <UserCities
            submit={handleSearchCity}
            cities={sortedCities}
            onDelete={handledeleteCity}
            refreshed={handleRefreshWeather}
          />

          {citiesListLoader && <Loader />}
          {error && <ErrorMessage />}
        </div>
      </section>
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};

export default HomePage;
