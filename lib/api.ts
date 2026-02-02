import axios from "axios";
import type { NewNoteContent, Note } from "../types/note";

axios.defaults.baseURL = "https://notehub-public.goit.study/api";

axios.defaults.headers.common.Authorization = `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`

interface FetchNotesResponse {
    notes: Note[];
    totalPages: number;
}

export async function fetchNotes(page: number, searchQuery: string) {
    const params = {
        search: searchQuery,
        page,
        perPage: 12,
    }

    const res = await axios.get<FetchNotesResponse>("/notes", { params })
    return res.data;
}


export async function createNote(newNote: NewNoteContent) {
    const res = await axios.post<Note>("/notes", newNote);
    return res.data;
}

export async function deleteNote(id: Note["id"]) {
    const res = await axios.delete<Note>(`/notes/${id}`);
    return res.data;
}

export async function fetchNoteById(id: Note["id"]) {
    const res = await axios.get<Note>(`/notes/${id}`);
    return res.data;
}