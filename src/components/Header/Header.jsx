import styles from "./Header.module.css";
import "./header.css";
import image_pasc_town_src from "../../assets/headerbg.jpg";
import image_valencia_src from "../../assets/valencia.jfif";
import image_zaragoza_src from "../../assets/zaragoza.jfif";
import Carousel from "react-bootstrap/Carousel";

export default function Header() {
  return (
    <header className={styles.header_wrapper}>
      {/* <figure className={styles.img_container}>
        <img className={styles.bg_img} src={bgimage} alt="Archena photo" />
      </figure> */}
      <Carousel className={styles.img_container}>
        <Carousel.Item className={styles.img_container}>
          <img
            className={`${styles.bg_img} ${styles.object_position_negative_100}`}
            src={image_pasc_town_src}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Explore</h1>
            <h3>See the towns around</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.img_container}>
          <img
            className={styles.bg_img}
            src={image_valencia_src}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Admire</h1>
            <h3>Contemplate the astonishing buildings in the city</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.img_container}>
          <img
            className={styles.bg_img}
            src={image_zaragoza_src}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Nature</h1>
            <h3>
              Relax walking next to the river
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}
