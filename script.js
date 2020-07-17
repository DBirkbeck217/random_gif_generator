let API_URL =
  "https://api.giphy.com/v1/gifs/random?api_key=V6n1wy9t8q2RgkfC4A3J2aocpCWyaPXX&q=true&limit=25&offset=0&tag=cats&rating=G&lang=en";

function createGIFURL(textQuery) {
  return `https://api.giphy.com/v1/gifs/random?api_key=V6n1wy9t8q2RgkfC4A3J2aocpCWyaPXX&q=true&limit=25&offset=0&tag=${textQuery}&rating=G&lang=en`;
}

async function getGIF() {
  const response = await fetch(
    createGIFURL(document.getElementById("input").value)
  );
  const json = await response.json();
  document.getElementById("image").src = String(json.data.image_url);
}

getGIF();
