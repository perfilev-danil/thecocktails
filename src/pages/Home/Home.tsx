import styles from "./Home.module.scss";
import Animation from "./Animation/Animation";

const Home = () => {
  return (
    <section className={styles.home}>
      <Animation />
    </section>
  );
};

export default Home;
