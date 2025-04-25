import { ReactNode } from "react";
import Image from "../Image";

import styles from "./card.module.scss";

interface ICard {
  title: string;
  description?: ReactNode;
  image?: string;
  className?: string;
}

const Card = ({ title, description, image, className }: ICard) => {
  return (
    <div className={`${styles.container} ${className}`}>
     {image && <Image src={image} />}
      <div className={styles.container__content}>
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Card;
