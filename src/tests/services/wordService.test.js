import Word from "../../domain/Word";
import wordDto from "../../domain/wordDto";
import WordService from "../../services/wordService";

let fakeWord;
let repository;
let fakeWordList;
let service;
beforeAll(() => {
  fakeWord = {
    id: 1,
    name: "Hola",
    transcription: "tt",
    definition: "dd",
    isPhrasalVerb: false,
    favorite: false,
  };
  fakeWordList = [
    fakeWord,
    { ...fakeWord, id: 2, name: "hola2" },
    { ...fakeWord, id: 3 },
    wordDto(1, "Hola", "t", "d", false, false),
  ];
  repository = function () {
    this.fetchAll = async () =>
      new Promise((resolve, reject) => {
        resolve(fakeWordList);
      });
    this.save = async (word) =>
      new Promise((resolve, reject) => {
        resolve({ ...word, id: 1 });
      });
  };
  service = new WordService(new repository());
});

test("can fetch all data", async () => {
  const data = await service.fetchAll();
  expect(data).toEqual(fakeWordList);
});

test("can add a word", async () => {
  const wordInput = { name: "hola" };
  const wordObject = new Word(
    null,
    wordInput.name,
    wordInput.transcription,
    wordInput.definition,
    wordInput.favorite
  );
  const wDto = wordObject.toDto(); //

  const wordAdded = await service.addWord(wDto);
  expect(wordAdded).toEqual({ ...wDto, id: 1 });
});
