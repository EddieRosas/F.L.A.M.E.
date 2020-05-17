import axios from "axios";

// routes might change based on backend
export const fetchEntries = () => {
  return axios.get("/api/entries");
}; // removed params for entries. backend handles userId

export const fetchEntry = (entryId) => {
  return axios.get(`/api/entries/${entryId}`);
};

export const createEntry = (entry) => {
  return axios.post("/api/entries", entry);
};

export const updateEntry = (entry) => {
  return axios.patch(`/api/entries/${entry._id}`, entry);
};

export const deleteEntry = (entryId) => {
  return axios.delete(`/api/entries/${entryId}`);
};
