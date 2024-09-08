const API_URL = "http://localhost:8000";

//TODO-6: Write a function getNotes to fetch all notes from the server.

export const getNote = async (id) => {
    const response = await fetch(API_URL + "/notes/" + id);
    const { data } = await response.json();
    return data;
};

export const createNote = async (title, content) => {
    const response = await fetch(API_URL + "/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
    });
    const { data } = await response.json();
    return data;
};

export const deleteNote = async (id) => {
    const response = await fetch(API_URL + "/notes/" + id, {
        method: "DELETE",
    });
    const { data } = await response.json();
    return data;
};

export const updateNote = async (id, title, content) => {
    const response = await fetch(API_URL + "/notes/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
    });
    const { data } = await response.json();
    return data;
};
