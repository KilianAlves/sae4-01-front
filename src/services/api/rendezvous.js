export const BASE_URL = "https://127.0.0.1:8000/api/rendezvous";

export function getRdvSemaine(semaine) {
    return fetch(`${BASE_URL}/semaine`).then((response) => response.json());
}


