import axios from "axios";

export function restApiRepository(url) {
  this.url = url;

  this.create = async function (item) {
    try {
      const response = await axios.post(this.url, item);
      return response.data;
    } catch (err) {
      return err.response;
    }
  };

  this.getById = async function (id) {
    try {
      const response = await axios.get(this.url + `/${id}`);
      return response.data;
    } catch (err) {
      return err.response;
    }
  };

  this.deleteById = async function (id) {
    try {
      await axios.delete(this.url + `/${id}`);
    } catch (err) {
      return err.response;
    }
  };

  this.fetchAll = async function () {
    try {
      const response = await axios.get(this.url);
      return response.data;
    } catch (err) {
      return err.response;
    }
  };

  this.update = async function (item) {
    try {
      const response = await axios.patch(this.url + `/${item.id}`, item);
      return response.data;
    } catch (err) {
      return err.response;
    }
  };
}
