import Image from "../Image";

import styles from "./card.module.scss";

interface ICard {
  title: string;
  description?: string;
  image?: string;
}

const Card = ({ title, description, image }: ICard) => {
  return (
    <div className={styles.container}>
     {image && <Image src={image} />}
      <div className={styles.container__content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
