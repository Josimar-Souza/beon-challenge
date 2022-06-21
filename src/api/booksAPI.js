import axios from 'axios';

class BooksAPI {
  constructor(baseURL, timeout) {
    this.http = axios.create({
      baseURL,
      timeout,
    });
  }

  async getTermSeachedBooks(term) {
    const { data } = await this.http.get(`/books?q=${term}`);

    return data;
  }
}

export default BooksAPI;
