import axios from "axios";
import sentenceDto from "../domain/sentenceDto";
import { urlList } from "./urlList";

export default function sentenceApiRepository() {
  const url = urlList.sentences;
  this.fetchAll = async () => {
    const response = await axios.get(url);
    return response.data.map((e) => sentenceDto(e.id, e.sentence, e.favorite));
  };

  this.save = async (sDto) => {
    const response = sDto.id
      ? await axios.put(url + `/${sDto.id}`, sDto)
      : await axios.post(url, sDto);
    const s = response.data;
    return sentenceDto(s.id, s.sentence, s.favorite);
  };

  this.deleteById = async (id) => {
    await axios.delete(url + `/${id}`);
  };

  this.get = async (id) => {
    return await axios.get(url + `/${id}`);
  };
}
