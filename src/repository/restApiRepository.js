import axios from "axios";

export function restApiRepository(url) {
  this.create = async function (item) {
    try {
      const response = await axios.post(url, item);
      return response.data;
    } catch (err) {
      return err.response;
    }
  };

  this.getById = async function (id) {
    try {
      const response = await axios.get(url + `/${id}`);
      return response.data;
    } catch (err) {
      return err.response;
    }
  };

  this.deleteById = async function (id) {
    try {
      await axios.delete(url + `/${id}`);
    } catch (err) {
      return err.response;
    }
  };

  this.fetchAll = async function () {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      return err.response;
    }
  };

  this.update = async function (item) {
    try {
      const response = await axios.patch(url + `/${item.id}`, item);
      return response.data;
    } catch (err) {
      return err.response;
    }
  };
}
