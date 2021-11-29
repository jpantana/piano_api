// src/notes/notes.interface.ts

import { Note } from "./note.interface";

export interface Notes {
  [key: number]: Note;
}