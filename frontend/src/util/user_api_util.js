import axios from "axios";

export const fetchFiData = (userId) => {
  return axios.patch(`/api/users/${userId}`);
};

export const updateFiNum = (userId, fireNum) => {
  return axios.patch(`/api/users/${userId}`, { fireNum: JSON.stringify(fireNum) });
};

export const updateYearsToFI = (userId, yearsToFI) => {
  return axios.patch(`/api/users/${userId}`, { yearsToFI: JSON.stringify(yearsToFI) } );
};