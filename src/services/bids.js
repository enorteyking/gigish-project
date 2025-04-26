import { apiClient } from "./config";

export const apiCreateBid = async (id, data) => {
    return apiClient.post(`/createBid/${id}`, data, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}


export const apiGetAllBids = async () =>  apiClient.get("/viewBids");

export const apiAcceptBid = async () =>  apiClient.post(`/acceptBid/${id}`);

export const apiRejectBid = async () =>  apiClient.post(`/rejectBid/${id}`);

export const apiDeleteBid = async () =>  apiClient.delete(`/delectBid/${id}`);


