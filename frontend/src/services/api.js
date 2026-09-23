import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL 
  ? `${import.meta.env.VITE_API_URL}/api` 
  : 'http://localhost:8000/api';

const api = axios.create({
  baseURL,
});

// GET
export const getChapters = () => api.get('/chapters').then(res => res.data);
export const getThemes = () => api.get('/themes').then(res => res.data);
export const getTeam = () => api.get('/team').then(res => res.data);
export const getContactMessages = () => api.get('/contact').then(res => res.data);

// POST
export const createChapter = (data) => api.post('/chapters', data).then(res => res.data);
export const createTheme = (data) => api.post('/themes', data).then(res => res.data);
export const createTeamMember = (data) => api.post('/team', data).then(res => res.data);
export const sendContactMessage = (data) => api.post('/contact', data).then(res => res.data);

// DELETE
export const deleteChapter = (id) => api.delete(`/chapters/${id}`).then(res => res.data);
export const deleteTheme = (id) => api.delete(`/themes/${id}`).then(res => res.data);
export const deleteTeamMember = (id) => api.delete(`/team/${id}`).then(res => res.data);
