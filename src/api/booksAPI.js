import axios from 'axios';

class BooksAPI {
  constructor(baseURL, timeout) {
    this.http = axios.create({
      baseURL,
      timeout,
    });
  }

  async getTermSeachedBooks(term) {
    const result = await this.http.get(`/books?q=${term}`);
    console.log(result);
  }
}

export default BooksAPI;
