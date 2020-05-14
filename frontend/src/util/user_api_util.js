import axios from "axios";

export const fetchFiData = (userId) => {
  return axios.patch(`/api/user/${userId}`);
};

export const updateFiNum = (user, fireNum) => {
  return axios.patch(`/api/user/${user._id}`, fireNum);
};

export const updateYearsToFI = (user, yearsToFI) => {
  return axios.patch(`/api/user/${user._id}`, yearsToFI);
};