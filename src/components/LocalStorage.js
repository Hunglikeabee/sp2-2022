export const userToken = "superToken";
export const userName = "superUser";
const userCart = "superCart";

/* Get data functions */

function getLocal(key) {
  const localData = localStorage.getItem(key);

  if (!localData) {
    return null;
  }
  return JSON.parse(localData);
}

export function getToken() {
  const localToken = getLocal(userToken);

  if (!localToken) {
    return null;
  }
  return localToken;
}

export function getCart() {
  const localCart = getLocal(userCart);

  if (!localCart) {
    return [];
  }
  return localCart;
}

export function getUser() {
  const user = getLocal(userName);

  if (!user) {
    return null;
  }
  return user;
}

/* Save data functions */

export function saveLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function saveUser(user) {
  saveLocal(userName, user);
}

export function saveToken(token) {
  saveLocal(userToken, token);
}

export function saveShoes(id, data) {
  let local = getLocal(userCart);
  if (!local) {
    local = [];
  }
  const itemExists = local.filter((item) => item.id === parseInt(id));
  if (!itemExists || itemExists.length === 0) {
    data[0].count = 1;
    local.push(data[0]);
    saveLocal(userCart, local);
  } else {
    const idItem = data[0].id;
    const theIndex = local.findIndex((item) => item.id == idItem);
    const theCount = local[theIndex].count;
    local[theIndex].count = theCount + 1;
    saveLocal(userCart, local);
  }
}
