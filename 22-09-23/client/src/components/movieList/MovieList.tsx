import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/router";
import MovieItem from "../movieItem";

import { arrForInRange } from "@/utils/general";
import { Data } from "@/types/movieDb";
import { dataMock } from "@/mocks";
import styles from "./index.module.scss";

const MovieList = () => {
  const router = useRouter();
  const [movieList, setMovieList] = useState<Data>(dataMock);
  const [searchInputDate, setSearchInputDate] = useState<string>("");
  const [searchMovieDate, setSearchMovieDate] = useState<string>("");

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=it-IT&page=${router.query.page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGNiNzY2YTllNWM0N2ZkOGMzYzg0ODRlZjVjZTY4OSIsInN1YiI6IjY1MGQ0ZDJhZjkyNTMyMDBhZGUxMTJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KIhoXnYP6YFHse-oAlJpKUpNxh599De8UFJI3BnxvTE",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setMovieList(data));
  }, [router.query.page, searchMovieDate]);

  const onHandleButtonClick = (num: number) =>
    router.push(`/movieDb?page=${num}`);

  const onHandleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchMovieDate(searchInputDate);
  };

  const onRenderMovieList = () =>
    movieList.results
      .filter((movie: any) =>
        searchMovieDate !== ""
          ? movie.release_date.split("-")[0] === searchMovieDate
          : movie
      )
      .map((movie) => <MovieItem movie={movie} key={movie.id} />);

  return (
    <div className={styles.MovieList}>
      <div className={styles.list}>{onRenderMovieList()}</div>

      <form onSubmit={onHandleFormSubmit}>
        <input
          type="text"
          value={searchInputDate}
          onChange={(e) => setSearchInputDate(e.target.value)}
          placeholder="Cerca per anno..."
        />
        <input type="submit" value="cerca" />
      </form>

      <div className={styles.pagination}>
        {arrForInRange(20).map((item) => (
          <button onClick={() => onHandleButtonClick(item)} key={item}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
