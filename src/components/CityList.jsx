import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";
function CityList() {
  const context = useContext(CitiesContext);
  if (context.isLoading) return <Spinner />;

  if (!context.cities.length)
    return <Message message="Add your first city by clicking a city on map" />;
  return (
    <ul className={styles.cityList}>
      {context.cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
