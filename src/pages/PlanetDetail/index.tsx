import { useParams } from "react-router-dom";
import { planetImages } from "../Planets/constants";
import { useEffect, useState } from "react";
import { getPlanetId } from "../../services/planets";
import { Card, Loader } from "../../components";

import styles from "./planetDetail.module.scss";

const PlanetDetail = () => {
  const { planetId } = useParams<{ planetId: string }>();
  const [planet, setPlanet] = useState<IPlanet | null>(null);

  useEffect(() => {
    const planetDetal = async () => {
      try {
        const data = await getPlanetId(planetId);
        setPlanet(data);
      } catch (error) {
        console.error("Error al encontrar el planeta seleccionado:", error);
        throw error;
      }
    };
    planetDetal();
  }, []);

  if (!planet) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <h2>Detalles del planeta</h2>
        <button
          onClick={() => window.history.back()}
          className={styles.backButton}
        >
          Volver
        </button>
      </div>
      <div className={styles.cardContainer}>
        <Card
          title={planet.englishName}
          className={styles.detailCard}
          image={planetImages[planet.id]}
          description={
            <div className={styles.detailCard__description}>
              <p>
                <strong>Gravedad:</strong> {planet.gravity} m/s²
              </p>
              <p>
                <strong>Dencidad:</strong> {planet.density} g.cm3
              </p>
              <p>
                <strong>Inclinación:</strong> {planet.inclination}
              </p>
              <p>
                <strong>Gravedad:</strong> {planet.gravity} m.s-2
              </p>
              <p>
                <strong>Numero de lunas:</strong> {planet.moons.length}
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default PlanetDetail;
