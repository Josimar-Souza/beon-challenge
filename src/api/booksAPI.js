import axios from 'axios';

class BooksAPI {
  constructor(baseURL, timeout) {
    this.http = axios.create({
      baseURL,
      timeout,
    });
  }

  async getSeachedBooks(term, minYear = null, maxYear = null, page = 1, limit = 10) {
    if (minYear == null || maxYear == null) {
      const { data } = await this.http.get(`/books?q=${term}&_page=${page}&_limit=${limit}`);
      return data;
    }

    const yearFilter = `year_gte=${minYear}&year_lte=${maxYear}`;
    const { data } = await this.http.get(`/books?q=${term}&${yearFilter}&_page=${page}&_limit=${limit}`);
    return data;
  }

  async getSearchResultCount(query) {
    const { data } = await this.http.get(`/books?${query}`);
    return data.length;
  }
}

export default BooksAPI;
