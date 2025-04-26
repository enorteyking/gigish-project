import { apiClient } from "./config";

    export const apiCreateGig = async (payload) => {
        return apiClient.post("/createGig", payload)
    };

    export const apiGetAllGigs = async () =>  apiClient.get("/viewGigs");

    export const apiSingleGig = async (id) =>  apiClient.get(`/viewSingleGigbyId/${id}`);

    export const apiDeleteGig = async (id) => apiClient.delete(`/deleteGig/${id}`);

