import { apiClient } from "./config";

export const apiSignup = async (payload) => {
  return apiClient.post("/addUser", payload);
};

export const apiLogin = async(payload) => {
    return apiClient.post("/login", payload)
};

export const apiSwitchRole = async(payload) => {
    return apiClient.patch("/switchRole", payload)
};

export const apiUpdateUser = async(payload) => {
    return apiClient.patch("/updateUser", payload, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
};