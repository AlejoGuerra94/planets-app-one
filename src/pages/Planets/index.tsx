import { useEffect, useState } from "react";
import { planetImages } from "./constants";
import { PlanetsService } from "../../services/planets";
import { useNavigate } from "react-router-dom";
import { Card, Input, Loader, Select } from "../../components";

import styles from "./planets.module.scss";

const Planets = () => {
  const [planet, setPlanet] = useState<IPlanet[]>([]);
  const [loading, setloading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const navigate = useNavigate();

  useEffect(() => {
    const planets = async () => {
      try {
        const data = await PlanetsService.getAllPlanets();
        setPlanet(data);
      } catch (error) {
        console.error("Error al encontrar los planetas:", error);
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
           onClick={() => navigate(`/detailPlanet/${planet.id}`)}
         >
            <Card title={planet.englishName} image={planetImages[planet.id]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
