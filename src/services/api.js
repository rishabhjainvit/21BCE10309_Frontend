  import axios from 'axios';

  // Define your base API URL
  const BASE_URL = 'https://vit-tm-task.api.trademarkia.app/api/v3/us';

  export const searchTrademarks = async (query, filters) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/trademarks`, {
        params: {
          query,
          ...filters,  // Filters like owner, law firm, attorney, etc.
          country: 'us',  // Example fixed param
        },
      });
      return response.data.results;
    } catch (error) {
      throw new Error('Error occurred while fetching data');
    }
  };
