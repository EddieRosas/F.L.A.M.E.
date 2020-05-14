import axios from "axios";

export const fetchFiData = (userId) => {
  return axios.patch(`/api/users/${userId}`);
};

export const updateFiNum = (user, fireNum) => {
  return axios.patch(`/api/users/${user._id}`, fireNum);
};

export const updateYearsToFI = (user, yearsToFI) => {
  return axios.patch(`/api/users/${user._id}`, yearsToFI);
};