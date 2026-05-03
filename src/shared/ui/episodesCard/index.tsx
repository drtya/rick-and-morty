import { Link } from "react-router";
import styles from "./styles.module.css";
import type { Episode } from "@/entity/episode/models/dto";
import { forwardRef, type HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  episode: Episode;
}
const EpisodeCard = forwardRef<HTMLElement, Props>(
  ({ episode, className, ...props }, ref) => {
    const getInitials = (url: string) => {
      const id = url.split("/").pop() ?? "?";
      return `/episode/${id}`;
    };

    return (
      <article className={className + " " + styles.card} ref={ref} {...props}>
        <div className={styles.header}>
          <div className={styles.dateArea}>{episode.air_date}</div>
          <h2 className={styles.title}>{episode.name}</h2>
          <span className={styles.epicodeCode}>{episode.episode}</span>
        </div>

        <div className={styles.body}>
          <Link to={episode.url} className={styles.sectionLabel}>
            В эпизоде было замечено {episode.characters.length} персонажей
          </Link>

          <div className={styles.divider} />

          <div className={styles.metaRow}>
            <div className={styles.metaItem}>
              <span className={styles.metaVal}>
                {episode.characters.length}
              </span>
              <span className={styles.metaLabel}>ПЕРСОНАЖЕЙ</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaVal}>{episode.episode}</span>
              <span className={styles.metaLabel}>ЭПИЗОД</span>
            </div>
            <div className={`${styles.metaItem} ${styles.metaRight}`}>
              <span className={styles.metaVal}>
                {episode.air_date.split(", ").pop()}
              </span>
              <span className={styles.metaLabel}>ГОД ВЫХОДА</span>
            </div>
          </div>

          <div className={styles.footer}>
            <Link to={getInitials(episode.url)} className={styles.linkBtn}>
              Подробнее
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 10L10 2M10 2H5M10 2V7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    );
  },
);
EpisodeCard.displayName = "EpisodeCard";

export default EpisodeCard;
