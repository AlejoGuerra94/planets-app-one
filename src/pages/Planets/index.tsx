import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { planetImages } from "./constants";
import { Input } from "../../components/Input";
import { PlanetService } from "../../services/planets";
import Loader from "../../components/Loader";

import styles from "./planets.module.scss";
import { Select } from "../../components/Select";

const Planets = () => {
  const [planet, setPlanet] = useState<IPlanet[]>([]);
  const [loading, setloading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const planets = async () => {
      try {
        const data = await PlanetService.getAllPlanets();
        setPlanet(data);
      } catch (error) {
        console.error("Error al encontrar lo splanetas:", error);
        throw error;
      } finally {
        setloading(false);
      }
    };
    planets();
  }, []);

  const filterPlanets = planet
    .filter((planet) =>
      planet.englishName.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      return sortOrder === "asc"
        ? a.englishName.localeCompare(b.englishName)
        : b.englishName.localeCompare(a.englishName);
    });
  if (loading) return <Loader />;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Planetas del sistema solar</h2>
        <div className={styles.filtersContainer}>
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Select value={sortOrder} onChange={(value) => setSortOrder(value)} />
        </div>
      </div>
      <div className={styles.cardContainer}>
        {filterPlanets.map((planet) => (
           <div
           key={planet.id}
           className={styles.card}
         >
            <Card title={planet.englishName} image={planetImages[planet.id]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
