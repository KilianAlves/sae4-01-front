export const BASE_URL = "https://127.0.0.1:8000/api/veterinaires";

export function getAll() {
  return fetch(`${BASE_URL}`).then((response) => response.json());
}

