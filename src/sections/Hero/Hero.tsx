import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.heroContainer}>
      <div className={styles.infoContainer}>
        <h1>
          Hola, Soy <b>Emerson Tejada</b> <br />
          <span className={styles.span}>Full Stack Developer</span>
        </h1>
        <p>
          Apasionado por el desarrollo web moderno, creando interfaces
          interactivas y experiencias funcionales desde el frontend hasta el
          backend.
        </p>
        <div className={styles.buttonsContainer}>
          <button>Ver Proyectos</button>
        </div>
      </div>
      <div className={styles.photoContainer}>
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Hero;
