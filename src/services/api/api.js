export const BASE_URL = 'https://127.0.0.1:8000/api';

export function fetchAllQuestions() {
    return fetch(`${BASE_URL}/bookmarks`)
      .then((response) => response.json());
  }
  