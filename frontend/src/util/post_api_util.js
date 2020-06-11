import axios from "axios";

export const fetchPosts = () => {
    return axios.get("/api/posts");
};

export const fetchPost = (postId) => {
    return axios.get(`/api/posts/${postId}`)
};

export const createPost = (newPost) => {
    return axios.post("/api/posts", newPost)
};

export const updatePost = (post) => {
    return axios.patch(`/api/posts/${post._id}`,post)
}

export const deletePost = (postId) => {
    return axios.delete(`/api/posts/${postId}`);
};