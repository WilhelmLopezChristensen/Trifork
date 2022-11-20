export async function GetPost() {
  const endpoint = "https://localhost:7217/getPosts";
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
  const endpoint = "https://localhost:7217/createPost";
  await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => console.error("Error:", error));
}

export async function DeletePost(id: string) {
  const endpoint = "https://localhost:7217";
  await fetch(`${endpoint}/deletePost/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => console.error("Error:", error));
}
