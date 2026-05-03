import { useGetEpisodeQuery } from "@/entity/episode/api";
import Error from "@/shared/ui/error";
import Loader from "@/shared/ui/loader";
import styles from "./styles.module.css";
import { Link, useParams } from "react-router";
import Button from "@/shared/ui/button/button";

const EpisodeById = () => {
  const { episodeId } = useParams();
  const {
    data: episode,
    isError,
    isLoading,
    error,
  } = useGetEpisodeQuery(episodeId!);

  if (isLoading)
    return (
      <div className="flex-center">
        <Loader />
      </div>
    );
  if (isError) return <Error message={error!} />;
  if (!episode) {
    return <Error message={{ status: 404, message: "Эпизод не найден" }} />;
  }
  const season = episode.episode.match(/S([0-9]\d*)E([0-9]\d*)/);

  return (
    <section className="container section-spaces">
      <h1 className={styles.title}>{episode?.name}</h1>

      <div className={styles.episodeGrid}>
        <div className={styles.Characters}></div>
        <div>
          <div className={styles.episodeCard}>
            {season && (
              <>
                <span className={styles.episodeLabel}>Сезон</span>
                <p className={styles.episodeInfo}>
                  {parseInt(season[1] ?? "0")}
                </p>
                <span className={styles.episodeLabel}>Серия</span>
                <p className={styles.episodeInfo}>
                  {parseInt(season[2] ?? "0")}
                </p>
              </>
            )}
            <span className={styles.episodeLabel}>Старт показа</span>
            <p className={styles.episodeInfo}>{episode?.air_date}</p>
          </div>
          <Link to={episode?.url} target="_blank">
            <Button style={{ width: "100%" }} variant="default">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="null"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              Исходные данные
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EpisodeById;
