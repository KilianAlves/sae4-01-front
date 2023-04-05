export const BASE_URL = "http://127.0.0.1:8000/api";

export function fetchAllQuestions() {
  return fetch(`${BASE_URL}/questions`).then((response) => response.json());
}

export function getUserInfo(user) {
  return fetch(`https://127.0.0.1:8000${user}`).then((response) =>
    response.json()
  );
}

export function fetchReponsesByQuestionId(questionId) {
  return fetch(`${BASE_URL}/reponses?question=${questionId}`).then((response) =>
    response.json()
  );
}

export function fetchQuestionById(id) {
  return fetch(`${BASE_URL}/questions/${id}`).then((response) =>
    response.json()
  );
}
