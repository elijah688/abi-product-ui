const url = "https://rickandmortyapi.com/api/character";

const api = async (method, data) => {
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

exports.getCharacters = () => api("GET");
