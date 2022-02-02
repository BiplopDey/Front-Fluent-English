import { restApiRepository } from "../repository/restApiRepository";
import { urlList } from "../repository/urlList";
import { listCrud } from "./listCrud";

export const playListService = {
  list: [],
  currentIndex: -1,
  error: null,
  playListRepository: new restApiRepository(urlList.videos),

  addAll(list) {
    this.list = [...list];
  },
  containsInPlayList(videoUrlId) {
    return this.list.findIndex((video) => video.url == videoUrlId) >= 0;
  },
  getVideoUrlId(index) {
    return this.list[index].url;
  },

  mod_listLength(number) {
    const listLength = this.list.length;
    return ((number % listLength) + listLength) % listLength;
  },

  nextVideo() {
    this.currentIndex = this.mod_listLength(this.currentIndex + 1);
    return this.getVideoUrlId(this.currentIndex);
  },

  prevVideo() {
    this.currentIndex = this.mod_listLength(this.currentIndex - 1);
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
