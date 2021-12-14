export function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("error____");
      }
    }
  );
}
export function getUsersPosts(userId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${userId}/comments`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("error____");
    }
  });
}
