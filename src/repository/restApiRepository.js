import axios from "axios";

export const restApiRepository = {
  url: "",

  setUrl(url) {
    this.url = url;
    return this;
  },

  async create(item) {
    try {
      const response = await axios.post(this.url, item);
      return response.data;
    } catch (err) {
      return err.response;
    }
  },

  async deleteById(id) {
    try {
      await axios.delete(this.url + `/${id}`);
    } catch (err) {
      return err.response;
    }
  },

  async fetchAll() {
    try {
      const response = await axios.get(this.url);
      return response.data;
    } catch (err) {
      return err.response;
    }
  },

  async update(item) {
    try {
      const response = await axios.patch(this.url + `/${item.id}`, item);
      return response.data;
    } catch (err) {
      return err.response;
    }
  },
};
