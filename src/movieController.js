import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const { id } = req.params;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

export const addNew = (req, res) => {
  const {
    body: { title, genres, synopsis },
  } = req;
  if (req.method == "GET") {
    return res.render("add", { pageTitle: "Add Movie" });
  } else {
    addMovie({ title, synopsis, genres: genres.split(",") });
    return res.redirect("/");
  }
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
