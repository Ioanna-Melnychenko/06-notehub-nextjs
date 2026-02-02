export interface Note {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    tag: NoteTag;
}
    
export type NoteTag = "Todo" | "Shopping" | "Meeting" | "Personal" | "Work";

export interface NewNoteContent {
    title: string;
    content?: string;
    tag: NoteTag;
}