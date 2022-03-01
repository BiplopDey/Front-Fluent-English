import wordName from "./valueObjects/wordName";
import wordDto from "./wordDto";

export default class Word {
  constructor(id, name, transcription, definition, favorite) {
    this.id = id;
    let wn = wordName(name);
    this.name = wn.name;
    this.phrasalVerb = wn.isPhrasalVerb;
    this.transcription = transcription ? transcription : "";
    this.definition = definition ? definition : "";
    this.favorite = favorite ? true : false;
  }
  toDto() {
    return wordDto(
      this.id,
      this.name,
      this.transcription,
      this.definition,
      this.phrasalVerb,
      this.favorite
    );
  }
}
