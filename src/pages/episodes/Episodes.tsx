import EpisodeCard from "@/shared/ui/episodesCard";
import styles from "./styles.module.css";
import { episodes } from "@/entity/episode/models/mockData";

const Episodes = () => {
  return (
    <section className="container section-spaces">
      <h1 className={styles.title}>Список эпизодов</h1>
      <div className={styles.episodGrid}>
        {episodes?.map((el) => {
          return <EpisodeCard key={el.id} episode={el} />;
        })}
      </div>
    </section>
  );
};

export default Episodes;
