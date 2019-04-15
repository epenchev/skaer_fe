export class ApiAgent {
  constructor(onSuccess) {
    this.onSuccess = onSuccess;
    this.apiUrls = {
      providerList: `http://localhost:8080/providers_list`,
      providerEntries: `http://localhost:8080/provider_entries?provid=`
    }
  }
 
  callApi(apiUrl, onSuccess) {
    fetch(apiUrl)
      .then(response => {
        console.log('Fetcing ' + apiUrl);
        console.log('Status: ' + response.status);
        console.log('response text: ' + response.statusText);

        response.json().then(data => {
          if (onSuccess === null) {
              this.onSuccess(data);
          } else {
              onSuccess(data);
          }
        });
      })
      .then(body => {})
        .catch(err => {
          console.log('Fetch Error: ', err);
        })
  }

  fetchProviders(onSuccess = null) {
    const apiUrl = this.apiUrls.providerList;
    this.callApi(apiUrl, onSuccess);
  }

  fetchProviderEntries(provid, onSuccess = null) {
    const apiUrl = this.apiUrls.providerEntries + provid; 
    this.callApi(apiUrl, onSuccess);
  }

  fetchTmdbEntries(onSuccess = null) {
    const apiKey = 'f3e9f7d1677c7aa63c9ab526381eeceb';
    const baseUrl = 'https://api.themoviedb.org/3';
    const language = 'en-US';
    const filter = '&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
    const apiUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&language=${language}${filter}`;
    this.callApi(apiUrl, onSuccess);
  }
}

