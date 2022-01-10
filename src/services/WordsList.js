export const wordsList = {
  list: [
    {
      name: "hello words",
      transcription: "iz",
      definition: "ser",
      id: 4,
    },
  ],
  addAll: (list) => {
    this.list = [...list];
  },
  add: (word) => {
    this.list = [word, ...this.list];
  },
  delete: (word) => {
    this.list.splice(this.findIndexById(word.id), 1);
  },
  update: (word) => {
    this.list[this.findIndexById(word.id)] = word;
  },
  findIndexById: (id) => this.list.findIndex((word) => word.id == id),
  isEmpty: () => this.list.length === 0,
  startsWith: (str) => this.list.filter((word) => word.name.startsWith(str)),
};
