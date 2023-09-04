export const minPasswordLength = 6;

export const errorTypes = {
  email: 'email',
  password: 'password',
  password2: 'password2',
  server: 'server',
}

export const serverProblem = `Something went wrong, please try again later`;
export const notValidEmail = `Not valid email`;
export const shortPassword = `Password is too short min length is ${minPasswordLength}`;
export const passwordsAreNotEqual = 'Passwords are not equal';
export const defaultDebounceTime = 500;
export const apiEndpoints = {
  login: 'http://localhost:3000/api/auth/login',
  signUp: 'http://localhost:3000/api/auth/signup',
  logout: 'http://localhost:3000/api/auth/logout',
}

export type formKeysType = {login: "login", signUp: "signUp"};
export const formsKeys = {
  login: "login",
  signUp: "signUp"
} as formKeysType;

export const title = {
  login: "Log-in",
  signUp: "Sign up"
}

export const placeholders = {
  email: "ex: krisnerodev@gmail.com",
  password: "ex: don't_tell_anyone"
}

export const routes = {
  dashboard: "/dashboard",
  login: "/login",
  logout: "/logout",
}
