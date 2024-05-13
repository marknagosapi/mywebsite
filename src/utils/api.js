const apiUrl = "https://opentdb.com/api.php?amount=100&category=15&type=boolean";

export const fetchQuizFromApi = () => {
    return fetch(apiUrl)
.then((response) => response.json()).then(questions => questions.results).catch((error=>Promise.reject(error)))}