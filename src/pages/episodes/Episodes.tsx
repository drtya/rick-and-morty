import EpisodeCard from "@/shared/ui/episodesCard";
import styles from "./styles.module.css";
import { useGetEpisodesQuery } from "@/entity/episode/api";
import Loader from "@/shared/ui/loader";
import { useCallback, useRef, useState } from "react";
import Error from "@/shared/ui/error";

const Episodes = () => {
  const [page, setPage] = useState(1);
  const {
    data: episodes,
    isLoading,
    isError,
    isFetching,
    error,
  } = useGetEpisodesQuery(page);

  const intersectionObs = useRef<IntersectionObserver>(null);
  const lastPostRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading || !node) return;
      if (intersectionObs.current) intersectionObs.current.disconnect();
      intersectionObs.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && episodes?.info.next) {
          setPage((prev) => prev + 1);
        }
      });
      intersectionObs.current.observe(node); // ← без этой строки observer не работает
    },
    [isLoading, episodes?.info.next],
  );

  if (isLoading)
    return (
      <div className="flex-center">
        <Loader />
      </div>
    );
  if (isError) return <Error message={error} />;

  return (
    <section className="container section-spaces">
        <h1 className={styles.title}>Список эпизодов</h1>
        <div className={styles.episodGrid}>
          {episodes?.results?.map((el, idx) => {
            if (episodes.results.length === idx + 1) {
              return <EpisodeCard ref={lastPostRef} key={el.id} episode={el} />;
            }
            return <EpisodeCard key={el.id} episode={el} />;
          })}
        </div>
        {isFetching && episodes?.info.next && <Loader />}
    </section>
  );
};

export default Episodes;
