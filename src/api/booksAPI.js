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

  async getAllBooksPerPage(page = 1, limit = 20) {
    const { data } = await this.http.get(`/books?_page=${page}&_limit=${limit}`);
    return data;
  }
}

export default BooksAPI;
