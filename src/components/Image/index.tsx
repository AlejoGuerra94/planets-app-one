import styles from './image.module.scss'

 const Image = ({src}:{src:string}) => {
  return (
    <div className={styles.container}>
        <img src={src} className={styles.img} />
    </div>
  )
}
export default Image;