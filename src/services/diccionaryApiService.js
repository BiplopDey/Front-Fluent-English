import axios from "axios";
const url = "http://localhost:3000/dicctionary";

export const diccionaryApiService = {
  myUrl: url,

  async create(word) {
    try {
      const response = await axios.post(url, word);
      return response.data;
    } catch (err) {
      return err.response;
    }
  },

  async deleteById(id) {
    try {
      await axios.delete(url + `/${id}`);
      return id;
    } catch (err) {
      return err.response;
    }
  },

  async fetchAll() {
    try {
      const response = await axios.get(url);
      return response.data.reverse();
    } catch (err) {
      return err.response;
    }
  },
  async update(word) {
    try {
      const response = await axios.patch(url + `/${word.id}`, word);
      return response.data;
    } catch (err) {
      return err.response;
    }
  },
};
