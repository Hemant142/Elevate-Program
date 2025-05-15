import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "4c8d21d4fe6aa180bad4528f62cd79c4";

const useFetchWeather = (city) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError("");
      setData(null);
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: city,
              appid: API_KEY,
              units: "metric",
            },
          }
        );

        console.log(res, "response");

        const response = res.data;

        const transformed = {
          name: response.name,
          temp: response.main.temp,
          condition: response.weather[0].main,
          humidity: response.main.humidity,
          wind: response.wind.speed,
        };

        setData(transformed);
      } catch (err) {
        console.log(err, "err");
        setError(
          err.response?.data?.message || err.message || "Something went wrong."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { data, isLoading, error };
};

export default useFetchWeather;
