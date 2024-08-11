export default class Note {
  constructor(id, content, createdAt, updatedAt, folderId = null) {
    this.id = id; // メモの一意のID
    this.content = content; // メモの内容
    this.createdAt = createdAt; // 作成日時
    this.updatedAt = updatedAt; // 更新日時
    this.folderId = folderId; // メモが所属するフォルダーのID（オプション）
  }
}
