export const BASE_URL = "http://127.0.0.1:8000";

export function fetchAllQuestions() {
  return fetch(`${BASE_URL}/api/questions`).then((response) => response.json());
}

export function getUserInfo(user) {
  return fetch(`https://127.0.0.1:8000${user}`).then((response) =>
    response.json()
  );
}

export function fetchReponsesByQuestionId(questionId) {
  return fetch(`${BASE_URL}/api/reponses?question=${questionId}`).then((response) =>
    response.json()
  );
}

export function fetchQuestionById(id) {
  return fetch(`${BASE_URL}/api/questions/${id}`).then((response) =>
    response.json()
  );
}

export function getMe() {
  return fetch(`${BASE_URL}/api/me`, { credentials: 'include' })
    .then((response) => {
      if (response.status === 401) {
        return Promise.resolve(null);
      }
      return response.json();
    });
}

export function loginUrl() {
  return `${BASE_URL}/login?redirect=${window.location}`;
}

export function logoutUrl() {
  return `${BASE_URL}/logout`;
}

export function postQuestion(data) {
  return fetch(`${BASE_URL}/api/questions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  })
    .then((response) => response.json());
}

export function postReponse(data) {
  return fetch(`${BASE_URL}/api/reponses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  })
    .then((response) => response.json());
}