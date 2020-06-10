import axios from "axios";

export const fetchReplies = () => {
    return axios.get("/api/replies");
};

export const fetchReply = (replyId) => {
    return axios.get(`/api/replies/${replyId}`)
};

export const createReply = (newReply) => {
    return axios.post("/api/replies", newReply)
};

export const updateReply = (reply) => {
    return axios.patch(`/api/replies/${reply._id}`, reply)
}

export const deleteReply = (replyId) => {
    return axios.delete(`/api/posts/${replyId}`);
};