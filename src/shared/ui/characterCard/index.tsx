import { useGetCharacterQuery } from "@/entity/character/api";
import styles from "./styles.module.css";
import type { CharacterGender } from "@/entity/character/models/dto";

const genderSvg = {
  Female: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 15v7" />
        <path d="M9 19h6" />
        <circle cx="12" cy="9" r="6" />
      </svg>
    ),
    label: "Женский",
    color: "pink",
  },
  Male: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 3h5v5" />
        <path d="m21 3-6.75 6.75" />
        <circle cx="10" cy="14" r="6" />
      </svg>
    ),
    label: "Мужской",
    color: "lightblue",
  },
  Genderless: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M4.929 4.929 19.07 19.071" />
      </svg>
    ),
    label: "Безполый",
    color: "red",
  },
  unknown: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    ),
    label: "Не известно",
    color: "white",
  },
  undefined: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    ),
    label: "Не известно",
    color: "white",
  },
};

const CharacterCard = ({ url }: { url: string }) => {
  const { data } = useGetCharacterQuery(url);
  const gender = data?.gender as CharacterGender;
  return (
    <div className={styles.characterCard}>
      <div className={styles.characterHeader}>
        <img
          className={styles.characterAvatar}
          src={data?.image}
          alt={data?.name}
        ></img>
        <span className={styles.characterName}>{data?.name}</span>
      </div>
      <div className={styles.characterGender}>
        {genderSvg[gender ?? "unknown"].label}{" "}
        <span style={{ color: genderSvg[gender].color }}>
          {genderSvg[gender ?? "unknown"].svg}
        </span>
      </div>
      <div className={styles.characterOrigin}>
        Место рождения:{" "}
        <span>
          {data?.origin.name === "unknown" ? "Неизвестно" : data?.origin.name}
        </span>
      </div>
      <div className={styles.characterLocation}>
        {data?.location.name === "unknown" ? (
          "Не был замечен"
        ) : (
          <>
            Последний раз был замечен в <span>{data?.location.name}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
