export const listCrud = {
  delete(list, item) {
    list.splice(this.findIndexById(list, item.id), 1);
  },

  update(list, item) {
    list[this.findIndexById(list, item.id)] = item;
  },

  findIndexById(list, id) {
    return list.findIndex((item) => item.id == id);
  },

  empty(list) {
    return list.length === 0;
  },

  wordListstartsWith(list, str) {
    return str.length === 0
      ? list
      : list.filter((word) => word.name.startsWith(str));
  },
};
