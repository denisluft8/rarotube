function getTokenFromLocalStorage() {
  const token = localStorage.getItem("token");
  return token ? token : "";
}

export default getTokenFromLocalStorage;
