import axios from "axios";
import wordDto from "../domain/wordDto";
import { urlList } from "./urlList";

export default function wordApiRepository() {
  const url = urlList.words;
  this.fetchAll = async () => {
    const response = await axios.get(url);
    return response.data.map((w) =>
      wordDto(
        w.id,
        w.name,
        w.transcription,
        w.definition,
        w.isPhrasalVerb,
        w.favorite
      )
    );
  };

  this.save = async (wDto) => {
    const response = wDto.id
      ? await axios.put(url + `/${wDto.id}`, wDto)
      : await axios.post(url, wDto);
    const w = response.data;
    return wordDto(
      w.id,
      w.name,
      w.transcription,
      w.definition,
      w.isPhrasalVerb,
      w.favorite
    );
  };

  this.deleteById = async (id) => {
    await axios.delete(url + `/${id}`);
  };

  this.get = async (id) => {
    return await axios.get(url + `/${id}`);
  };
}
