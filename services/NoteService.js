import { getItem, setItem } from '../utils/Storage';

export const saveNote = async (note) => {
  let notes = await getItem('notes') || [];
  notes.push(note);
  await setItem('notes', notes);
};

export const getNotes = async () => {
  return await getItem('notes') || [];
};
