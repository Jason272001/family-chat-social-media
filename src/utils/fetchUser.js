export const fetchUser = () => {
  const userInfoString = localStorage.getItem("user");
  if (userInfoString) {
    const userInfo = JSON.parse(userInfoString);
    return userInfo;
  }
};
