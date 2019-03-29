export class TmDb {
  constructor() {
    this.apiKey = 'f3e9f7d1677c7aa63c9ab526381eeceb';
    this.baseUrl = 'https://api.themoviedb.org/3';
    this.language = 'en-US';
    this.filter = '&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
    this.movieItems = [];
  }

  fetchItems() {
    const apiUrl = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&language=${this.language}${this.filter}`;
    let movies;
    console.log(apiUrl);
    fetch(apiUrl)
      .then(response => {
        console.log('Status: ' + response.status);
        console.log('response text: ' + response.statusText);

        response.json().then(data => {
          this.movieItems = data.results;
        });

      })
      .then(body => {})
        .catch(err => {
          console.log('Fetch Error: ', err);
        })
    return this;
  }

  getMovieItems() {
    console.log(this.movieItems);
    return this.movieItems;
  }

}
