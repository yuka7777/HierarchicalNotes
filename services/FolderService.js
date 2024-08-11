import { getItem, setItem } from '../utils/Storage';

export const saveFolder = async (folder) => {
  let folders = await getItem('folders') || [];
  folders.push(folder);
  await setItem('folders', folders);
};

export const getFolders = async () => {
  return await getItem('folders') || [];
};
