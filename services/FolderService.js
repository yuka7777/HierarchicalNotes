// import { getItem, setItem } from '../utils/Storage';

// export const saveFolder = async (folder) => {
//   let folders = await getItem('folders') || [];
//   folders.push(folder);
//   await setItem('folders', folders);
// };

// export const getFolders = async () => {
//   return await getItem('folders') || [];
// };
import Folder from '../models/Folder';
import { getItem, setItem } from '../utils/Storage';

const FOLDERS_KEY = 'folders';

// 新しいフォルダーを保存
export const saveFolder = async (folderName, parentId = null) => {
  const folders = await getFolders();
  const newFolder = new Folder(
    Date.now().toString(), // 一意のIDとして現在のタイムスタンプを使用
    folderName,
    new Date(),
    new Date(),
    parentId
  );
  folders.push(newFolder);
  await setItem(FOLDERS_KEY, folders);
  return newFolder;
};

// すべてのフォルダーを取得
export const getFolders = async () => {
  const folders = await getItem(FOLDERS_KEY);
  return folders ? folders : [];
};

// 指定されたIDのフォルダーを取得
export const getFolderById = async (folderId) => {
  const folders = await getFolders();
  return folders.find(folder => folder.id === folderId);
};

// フォルダーを更新
export const updateFolder = async (folderId, newName) => {
  const folders = await getFolders();
  const folderIndex = folders.findIndex(folder => folder.id === folderId);

  if (folderIndex !== -1) {
    folders[folderIndex].name = newName;
    folders[folderIndex].updatedAt = new Date();
    await setItem(FOLDERS_KEY, folders);
    return folders[folderIndex];
  }

  return null;
};

// フォルダーを削除
export const deleteFolder = async (folderId) => {
  const folders = await getFolders();
  const filteredFolders = folders.filter(folder => folder.id !== folderId);
  await setItem(FOLDERS_KEY, filteredFolders);
  return filteredFolders;
};
