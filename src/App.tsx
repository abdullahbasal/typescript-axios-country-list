import { useState, useEffect } from "react";
import axios from "axios";
import { CountryType } from "./types";
import "./App.css";
import Country from "./Components/Country";

function App() {
  const [contries, setcontries] = useState<CountryType[]>([]);
  const getCountries = async () => {
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v2/all"
      );
      setcontries(data);
    } catch {
      console.log("ülkeleri alırken hata oluştu");
    }
  };

  useEffect(() => {
    getCountries();
  }, []);
  console.log(contries);
  return (
    <div className="App">
      {contries.map((country) => {
        return <Country key={country.name} country={country} />;
      })}
    </div>
  );
}

export default App;
