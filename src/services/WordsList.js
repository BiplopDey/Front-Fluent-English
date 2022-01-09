export class WordsList {
  constructor(list) {
    this.list = list;
  }
  addAll(list) {
    this.list = [...list];
  }
  add(word) {
    this.list = [word, ...this.list];
  }
  delete(word) {
    const index = this.findIndexById(word.id);
    this.list.splice(index, 1);
  }

  update(word) {
    const index = this.findIndexById(word.id);
    this.list[index] = word;
  }

  findIndexById(id) {
    this.list.findIndex((word) => word.id == id);
  }

  isEmpty() {
    return this.list.length === 0;
  }

  startsWith(str) {
    return this.list.filter((word) => word.name.startsWith(str));
  }
}
