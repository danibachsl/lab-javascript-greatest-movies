// The `movies` array from the file `src/data.js`.
const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirector = movies.map((film) => {
    return film.director;
  });
  return allDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let newArray = movies.filter (elem => {return elem.director === "Steven Spielberg" && elem.genre.includes('Drama')})
  return newArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const totalAverages = movies.reduce((acc, elem) => {
    if (elem.score !== undefined) {
      return acc + elem.score;
    } else {
      return acc;
    }
  }, 0);
  let avg = totalAverages / movies.length;
  if (movies.length === 0) {
    return 0;
  }
  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaFilms = movies.filter(elem => {return elem.genre.includes('Drama')})
  let totalScores = scoresAverage(dramaFilms);
  return Number(totalScores.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let newOrderedArray = JSON.parse(JSON.stringify(movies));
  newOrderedArray.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year === b.year) {
      if(a.title < b.title){
        return -1;
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  })
  return newOrderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  finalArray = JSON.parse(JSON.stringify(movies));
  finalArray.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });

  let array = [];
  for (let elem of finalArray) {
    array.push(elem.title);
  }

  if (array.length >= 20) {
    return array.slice(0, 20);
  } else {
    return array;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
