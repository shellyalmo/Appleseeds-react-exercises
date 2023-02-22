/*CRUD actions */
//update and delete are defined in App.js
export const createDB = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const readDB = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};
