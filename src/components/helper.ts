import {
  apiEndpoints,
  errorTypes,
  minPasswordLength,
  notValidEmail,
  passwordsAreNotEqual,
  shortPassword
} from "@/components/constants";

interface errorsI {
  [key: string]: string
}

export function isValidEmail(email: string) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return emailRegex.test(email);
}

export const validateEmail = (errors: errorsI, email: string) => {
  if (!email.length) return {...errors, [errorTypes.email]: ''};
  const error = isValidEmail(email) ? '' : notValidEmail;
  return {...errors, [errorTypes.email]: error};
}

export const validatePassword = (errors: errorsI, password: string) => {
  if (!password.length) return {...errors, [errorTypes.password]: ''};
  const error = password.length < minPasswordLength ? shortPassword : '';
  return {...errors, [errorTypes.password]: error}
}

export const validateRepeatPassword = (errors: errorsI, password: string, password2: string) => {
  if (!password2.length) return {...errors, [errorTypes.password2]: ''};
  const error = password !== password2 ? passwordsAreNotEqual : '';
  return {...errors, [errorTypes.password2]: error}
}

export const initCustomFetch = () => {
  const originalFetch = global.fetch;
  const customFetch = (url, {method, body}) => {
    const bodyJson = JSON.parse(body);
    return new Promise((resolve) => {
      if (url === apiEndpoints.login) {
        setTimeout(() => resolve({status: 200, ok: 200, json: () => Promise.resolve({userName: bodyJson?.email})}), 2000)
      } else if (url === apiEndpoints.signUp) {
        setTimeout(() => resolve({status: 200, ok: 200, json: () => Promise.resolve({userName: bodyJson?.email})}), 2000)
      } else return resolve(originalFetch(url, {method, body}))
    });
  };

  global.fetch = customFetch;
}