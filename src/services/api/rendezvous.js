export const BASE_URL = "https://127.0.0.1:8000/api/rendez_vouse";

export function getMyRdv() {
  return fetch(`${BASE_URL}s`, {
    credentials: "include",
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Error(response.statusText);
  });
}

export function getRdvSemaine(semaine, veterinaireId) {
  return fetch(`${BASE_URL}/semaine/${veterinaireId}?date=2023-06-05`, {
    credentials: "include",
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Error(response.statusText);
  });
}

export function postRdv(date, horaire, veterinaire) {
  const body = {
    dateRdv: date,
    horaire,
    veterinaire: `api/veterinaires/${veterinaire}`,
    motif: " ",
  };
  return fetch(`${BASE_URL}s`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "POST",
    body: JSON.stringify(body),
  }).then((response) => response.json());
}
