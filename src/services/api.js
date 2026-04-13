const BASE_URL = "https://event-nexus-2-0-backend.vercel.app";

export const registerUser = async (user) => {
    const res = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if (!res.ok) {
        throw new Error("Registration failed");
    }

    return res.json();
};

export const loginUser = async (userData) => {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }

    return data;
};

export const getEvents = async (token) => {
    const response = await fetch(`${BASE_URL}/api/events`, {
        method: "GET",
        headers: {
            Authorization: `${token}`,
        },
    });
    return response.json();
};

export const createEvent = async (formData, token) => {
    const res = await fetch(`${BASE_URL}/api/admin/events/create`, {
        method: "POST",
        headers: {
            Authorization: `${token}`
        },
        body: formData
    });

    if (!res.ok) {
        throw new Error("Event creation failed");
    }

    return res.json();
};

export const getEventById = async (id, token) => {
    const response = await fetch(`${BASE_URL}/api/events/${id}`, {
        method: "GET",
        headers: {
            Authorization: `${token}`
        },
    });

    if (!response.ok) {
        throw new Error("Event fetch failed");
    }

    return response.json();
};

export const deleteEventById = async (id, token) => {
    const response = await fetch(`${BASE_URL}/api/admin/events/delete/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `${token}`
        },
    });

    if (!response.ok) {
        throw new Error("Event deletion failed");
    }

    return response.json();
};

export const updateEvent = async (id, formData, token) => {
    const res = await fetch(`${BASE_URL}/api/admin/events/update/${id}`, {
        method: "PATCH",  
        headers: {
            Authorization: `${token}`
        },
        body: formData
    });

    if (!res.ok) {
        throw new Error("Event update failed");
    }

    return res.json();
};