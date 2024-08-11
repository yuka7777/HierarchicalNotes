// import { getItem, setItem } from '../utils/Storage';

// export const saveNote = async (note) => {
//   let notes = await getItem('notes') || [];
//   notes.push(note);
//   await setItem('notes', notes);
// };

// export const getNotes = async () => {
//   return await getItem('notes') || [];
// };
import Note from '../models/Note';
import { getItem, setItem } from '../utils/Storage';

const NOTES_KEY = 'notes';

// 新しいメモを保存
export const saveNote = async (noteContent, folderId = null) => {
  const notes = await getNotes();
  const newNote = new Note(
    Date.now().toString(), // 一意のIDとして現在のタイムスタンプを使用
    noteContent,
    new Date(),
    new Date(),
    folderId
  );
  notes.push(newNote);
  await setItem(NOTES_KEY, notes);
  return newNote;
};

// すべてのメモを取得
export const getNotes = async () => {
  const notes = await getItem(NOTES_KEY);
  return notes ? notes : [];
};

// 指定されたIDのメモを取得
export const getNoteById = async (noteId) => {
  const notes = await getNotes();
  return notes.find(note => note.id === noteId);
};

// メモを更新
export const updateNote = async (noteId, newContent) => {
  const notes = await getNotes();
  const noteIndex = notes.findIndex(note => note.id === noteId);

  if (noteIndex !== -1) {
    notes[noteIndex].content = newContent;
    notes[noteIndex].updatedAt = new Date();
    await setItem(NOTES_KEY, notes);
    return notes[noteIndex];
  }

  return null;
};

// メモを削除
export const deleteNote = async (noteId) => {
  const notes = await getNotes();
  const filteredNotes = notes.filter(note => note.id !== noteId);
  await setItem(NOTES_KEY, filteredNotes);
  return filteredNotes;
};
