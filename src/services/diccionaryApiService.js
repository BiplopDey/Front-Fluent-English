import axios from "axios";
const url = "http://localhost:3000/dicctionary";

export const diccionaryApiService = {
  create(word) {
    axios.post(url, word);
  },
  deleteById(id) {
    axios.delete(url + `/${id}`);
  },
  fetchAll() {
    return axios.get(url).then((res) => res.data);
  },
  update(movie) {
    axios.patch(url + `/${movie.id}`, movie);
  },
};
