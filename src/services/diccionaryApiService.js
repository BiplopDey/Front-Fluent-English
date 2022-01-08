import axios from "axios";
const url = "http://localhost:3000/dicctionary";

export const diccionaryApiService = {
  myUrl: url,

  async create(word) {
    try {
      const response = await axios.post(url, word);
      return response.data;
    } catch (err) {
      return err;
    }
  },

  deleteById(id) {
    axios.delete(url + `/${id}`);
  },

  async fetchAll() {
    try {
      const response = await axios.get(url);
      return response.data.reverse();
    } catch (err) {
      return err;
    }
  },
  update(word) {
    axios.patch(url + `/${word.id}`, word);
  },
};
