import { jwtDecode } from 'jwt-decode';

export const decode = (token: string): any => {
  if (token) return jwtDecode(token);
  else return null;
};

export const isValidToken = (token: string) => {
  return (new Date(decode(token).exp * 1000).getTime() - Date.now()) / 1000 > 0;
};
