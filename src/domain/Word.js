import wordName from "./valueObjects/wordName";
import wordDto from "./wordDto";

export default class Word {
  constructor(id, name, transcription, definition) {
    this.id = id;
    let wn = wordName(name);
    this.name = wn.name;
    this.isPhrasalVerb = wn.isPhrasalVerb;
    this.transcription = transcription ? transcription : "";
    this.definition = definition ? definition : "";
  }
  toObject() {
    return wordDto(
      1,
      this.name,
      this.transcription,
      this.definition,
      this.isPhrasalVerb
    );
  }
}
