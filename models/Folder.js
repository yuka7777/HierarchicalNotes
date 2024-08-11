export default class Folder {
  constructor(id, name, createdAt, updatedAt, parentId = null) {
    this.id = id; // フォルダーの一意のID
    this.name = name; // フォルダーの名前
    this.createdAt = createdAt; // 作成日時
    this.updatedAt = updatedAt; // 更新日時
    this.parentId = parentId; // 親フォルダーのID（オプション、ルートフォルダーの場合はnull）
  }
}
