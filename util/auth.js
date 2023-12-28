import axios from 'axios';

const API_KEY = 'AIzaSyCUUpkfOLgT-PWG3V1D2e_DG5mxPq4uCtM'

export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  );
}
