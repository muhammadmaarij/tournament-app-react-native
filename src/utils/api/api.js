import axios from 'axios';
import {SERVER_URL} from '../constants'; // Ensure this is your Django server URL

const API = axios.create({baseURL: SERVER_URL});

// API.interceptors.request.use(async req => {
//   const token = await AsyncStorage.getItem('token');
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

// Tournaments
export const fetchTournaments = () => API.get('/api/tournaments/');
export const fetchTournamentDetail = id => API.get(`/api/tournaments/${id}/`);
export const createTournament = data => {
  return API.post('/api/tournaments/', data)
    .then(response => response.data)
    .catch(error => {
      console.error('Error in createTournament:', error);
      if (error.response) {
        // Detailed error information
        console.log('Response Data:', error.response.data);
        console.log('Response Status:', error.response.status);
        console.log('Response Headers:', error.response.headers);
      } else {
        console.log('Error Message:', error.message);
      }
      throw error; // Re-throw the error for further handling
    });
};
export const updateTournament = (id, data) =>
  API.put(`/api/tournaments/${id}/`, data);
export const deleteTournament = id => API.delete(`/api/tournaments/${id}/`);

// Matches
export const fetchMatches = () => API.get('/api/matches/');
export const fetchMatchDetail = id => API.get(`/api/matches/${id}/`);
export const createMatch = data => API.post('/api/matches/', data);
export const updateMatch = (id, data) => API.put(`/api/matches/${id}/`, data);
export const deleteMatch = id => API.delete(`/api/matches/${id}/`);

// Teams
export const fetchTeams = () => API.get('/api/teams/');
export const fetchTeamDetail = id => API.get(`/api/teams/${id}/`);
export const createTeam = data => API.post('/api/teams/', data);
export const updateTeam = (id, data) => API.put(`/api/teams/${id}/`, data);
export const deleteTeam = id => API.delete(`/api/teams/${id}/`);

// Tournament Results
export const fetchTournamentResults = () => API.get('/api/results/');
export const fetchTournamentResultDetail = id => API.get(`/api/results/${id}/`);
export const createTournamentResult = data => API.post('/api/results/', data);
export const updateTournamentResult = (id, data) =>
  API.put(`/api/results/${id}/`, data);
export const deleteTournamentResult = id => API.delete(`/api/results/${id}/`);

export default API;
