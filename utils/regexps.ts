export const emailRegexp = '^[\\w\\-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';
export const nameRegexp = '[A-Z]*[a-zA-Z]*[^0-9]-*[a-zA-Z]*';
export const surnameRegexp = '[A-Z]*[a-zA-Z]*[^0-9]-*[a-zA-Z]*';
export const loginRegexp = '([a-zA-Z0-9]+\\-*\\_*[[a-zA-Z0-9]*){3,20}';
export const passwordRegexp = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,40}';
export const phoneRegexp = '\\+*[0-9]{10,15}';
export const messageRegexp = '.';
export const searchRegexp = '';
