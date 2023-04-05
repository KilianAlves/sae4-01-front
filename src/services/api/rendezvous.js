export const BASE_URL = "http://127.0.0.1:8000/api/rendez_vouse";

export function getRdvSemaine(semaine) {
    return fetch(`${BASE_URL}/semaine`).then((response) => response.json());
}

export function postRdv(date, horaire, veterinaire) {
    const body = {
        dateRdv: date,
        horaire: horaire,
        veterinaire: "api/veterinaires/"+veterinaire,
        motif: " ",
        estUrgent: 1,
        commentaireVeto: " ",
        estDomicile: 1,
    }
    return fetch(`${BASE_URL}s`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(body)}).then((response) => response.json());
}
