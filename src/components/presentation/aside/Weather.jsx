import { Box, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      const apiKey = "659f0c3e5ef3b41805bc068590ae878c";
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      )
        .then((v) => v.json())
        .then((v) => {
          setWeather((prev) => v.weather.main);
          setTemp((prev) => v.main.temp);
        });
    });
  }, []);

  return (
    <Box
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "10px",
        width: "100%",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <Text size={"5"}>날씨 : {weather}</Text>
      <Text size={"5"}>온도 : {temp}</Text>
    </Box>
  );
};

export default Weather;
