## Rocky's Movie Picker

[https://trpglobokar.github.io/movie-picker/](https://trpglobokar.github.io/movie-picker/)

Queries [themoviedb.org](themoviedb.org) for a list of user-selected movies, then allows said user to filter movies by site rating and genre. If user still cannot decide what to watch, a "Choose for Me" button selects one movie from remaining valid movies.

### To run:

1. Clone repo
2. Run `npm install`
3. Run `npm start`
4. App should open automatically at [http://localhost:3000](http://localhost:3000)

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To Do's:
- give users more control over available movie lists
  - provide text box for user to c/p their own movie list in
  - provide link to [themoviedb.org](themoviedb.org) for user to create their own new movie list
  -  provide direct link to [themoviedb.org](themoviedb.org)'s movie list page for user to edit existing movie
- add additional filters
  - by range of release date
  - by text search of movie description; provides for additional subgenre filtering (i.e. zombie)
  - possible link with metacritic scores?
- add multi-list comparisons
  - if have two "want to watch" lists, filter by shared items
- display additional movie info
  - expandable info in general movie list