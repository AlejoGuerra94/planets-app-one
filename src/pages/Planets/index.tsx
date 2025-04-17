import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { planetImages } from "./constants";

import styles from './planets.module.scss'

const Planets = () => {
    const [planet, setPlanet] = useState<IPlanet[]>([]);
    const [loading, setloading] = useState<boolean>(true);
  
    useEffect(() => {
      const getPlanets = async () => {
        try {
          const response = await fetch(
            "https://api.le-systeme-solaire.net/rest/bodies/"
          );
          const data = await response.json();
          const planets = data.bodies.filter(
            (planet: IPlanet) => planet.isPlanet
          );
  
          setPlanet(planets);
        } catch (error) {
          console.log("Error en la carga de planetas", error);
        } finally {
          setloading(false);
        }
      };
      getPlanets();
    }, []);
  
    if (loading) return <div>Cargando...</div>;
  return (
    <div>
        <h2>Planetas del sistema solar</h2>
        <div className={styles.contentPlanets}>
        {
            planet.map((planet) =>(
               <div key={planet.id}>
                <Card
                    title={planet.englishName}
                    image={planetImages[planet.id]}
                />
               </div>
            ))
                
        }
        </div>
    </div>
  );
};

export default Planets;
