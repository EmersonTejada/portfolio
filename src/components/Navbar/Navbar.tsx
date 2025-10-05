import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="#home">Inicio</a>
      <a href="#about">Sobre mi</a>
      <a href="#experience">Experiencia</a>
      <a href="#projects">Proyectos</a>
      <a href="#contact">Contacto</a>
    </nav>
  );
};

export default Navbar;
