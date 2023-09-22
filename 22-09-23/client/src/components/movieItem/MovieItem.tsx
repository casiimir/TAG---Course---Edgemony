import { memo } from "react";
import { Movie } from "@/types/movieDb";
import { splitDescription } from "@/utils/general";
import styles from "./index.module.scss";

const MovieItem = ({ movie }: { movie: Movie }) => {
  const { title, vote_average, poster_path, overview } = movie;
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className={styles.MovieItem}>
      <img src={`${imageUrl}${poster_path}`} alt={title} />
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{splitDescription(overview)}</p>
        <p>Voto: {vote_average}</p>
      </div>
    </div>
  );
};

export default memo(MovieItem);
