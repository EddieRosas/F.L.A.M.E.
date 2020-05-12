import axois from "axios";

// routes might change based on backend
export const fetchEntries = () => {
  return axois.get("/api/entries");
}; // removed params for entries. backend handles userId

export const fetchEntry = (entryId) => {
  return axois.get(`/api/entries/${entryId}`)
};

export const createEntry = (entry) => {
  return axois.post("/api/entries/new", entry);
};

export const updateEntry = (entry) => {
  return axois.patch(`/api/entries/${entry.id}`);
};

export const deleteEntry = (entryId) => {
  return axois.delete(`/api/entries/${entryId}`);
};
