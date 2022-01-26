import { restApiRepository } from "../repository/restApiRepository";
import { urlList } from "../repository/urlList";
import { listCrud } from "./listCrud";

export const playListService = {
  list: [],
  currentIndex: -1,
  error: null,
  playListRepository: restApiRepository.setUrl(urlList.playList),

  addAll(list) {
    this.list = [...list];
  },

  getVideoUrlId(index) {
    //    const videoId = this.list[this.currentIndex].videoId;
    // console.log(this.list);
    return this.list[index].videoId;
  },

  mod_listLength(number) {
    const listLength = this.list.length;
    console.log(listLength);
    return ((number % listLength) + listLength) % listLength;
  },

  nextVideo() {
    console.log(this.currentIndex);
    this.currentIndex = this.mod_listLength(this.currentIndex + 1);
    console.log(this.currentIndex);
    return this.getVideoUrlId(this.currentIndex);
  },

  prevVideo() {
    this.currentIndex = this.mod_listLength(this.currentIndex - 1);
    console.log(this.currentIndex);
    return this.getVideoUrlId(this.currentIndex);
  },

  async fetchAll() {
    try {
      const videos = await this.playListRepository.fetchAll();
      this.addAll(videos.reverse());
    } catch (err) {
      this.error = err;
    }
  },

  async add(video) {
    const response = await this.playListRepository.create(video);
    this.list = [response, ...this.list];
  },

  async delete(video) {
    await this.playListRepository.deleteById(video.id);
    listCrud.delete(this.list, video);
  },

  async update(video) {
    const response = await this.playListRepository.update(video);
    listCrud.update(this.list, response);
  },

  isEmpty() {
    return listCrud.empty(this.list);
  },
};
