import axois from "axios";

// routes might change based on backend
export const fetchEntries = (userId) => {
  return axois.get("/api/tables", userId);
};

export const fetchEntry = (entryId) => {
  return axois.get(`/api/tables/${entryId}`)
};

export const createEntry = (entry) => {
  return axois.post("/api/tables/new", entry);
};

export const updateEntry = (entry) => {
  return axois.patch(`/api/tables/${entry.id}`);
};

export const deleteEntry = (entryId) => {
  return axois.delete(`/api/tables/${entryId}`);
};
