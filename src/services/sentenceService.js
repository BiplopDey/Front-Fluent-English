export default function SentenceService(repository) {
  this.all = async function () {
    return await repository.fetchAll();
  };
  this.create = async function (wordDto) {
    return await repository.save(wordDto);
  };
  this.update = async function (wordDto) {
    return await repository.save(wordDto);
  };
  this.get = async function (id) {
    return await repository.get(id);
  };
  this.deleteById = async function (id) {
    return await repository.deleteById(id);
  };
  this.toggleStar = async function (word) {
    word.favorite = !word.favorite;
    return await this.update(word);
  };
}
