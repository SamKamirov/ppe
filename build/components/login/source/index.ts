const saveToken = (token: string) => localStorage.setItem('token', token);
const dropToken = () => localStorage.removeItem('token');
const getToken = () => localStorage.getItem('token');

export {saveToken, dropToken, getToken};