import axios from "axios";
const url = "http://localhost:3000/dicctionary";

export const diccionaryApiService = {
  myUrl: url,
  create(word) {
    axios.post(url, word);
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
