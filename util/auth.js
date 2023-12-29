import axios from "axios";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
}

const API_KEY = "AIzaSyCUUpkfOLgT-PWG3V1D2e_DG5mxPq4uCtM";

export async function createUser(email, password) {
  await authenticate("signup", email, password);
}

async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
