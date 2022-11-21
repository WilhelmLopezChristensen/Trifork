export async function GetPost() {
  const endpoint = "https://reactservicebackend.azurewebsites.net/getPosts";
  // const endpoint = "http://localhost:8080/getPosts";
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error));
  if (response) {
    return response;
  }

  return [];
}

export async function CreatePost(data: any) {
  const endpoint = "https://reactservicebackend.azurewebsites.net/createPost";
  // const endpoint = "http://localhost:8080/createPost";
  await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => console.error("Error:", error));
}

export async function DeletePost(id: string) {
  const endpoint = "https://reactservicebackend.azurewebsites.net";
  // const endpoint = "http://localhost:8080";
  await fetch(`${endpoint}/deletePost/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => console.error("Error:", error));
}
