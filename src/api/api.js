const baseUrl = "https://rickandmortyapi.com/api/character";

const api = async (path, method, data) => {
  const url = path || baseUrl;
  const payload = data ? { body: JSON.stringify(data) } : {};
  const options = {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    ...payload
  }


  const response = await fetch(url, options);
  return response.json();
}

exports.getCharacters = (path) => api(path, "GET");
