export default function sentenceDto(id, sentence, favorite) {
  const sentenceObj = {
    sentence: sentence,
    favorite: favorite,
  };

  return id === null ? sentenceObj : { ...sentenceObj, id: id };
}
