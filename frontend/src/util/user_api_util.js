import axios from "axios";

export const fetchFiData = (userId) => {
  return axios.patch(`/api/user/${userId}`);
};

export const updateFiNum = (user, fiNum) => {
  return axios.patch(`/api/user/${user._id}`, fiNum);
};

export const updateNumYears = (user, numYears) => {
  return axios.patch(`/api/user/${user._id}`, numYears);
};