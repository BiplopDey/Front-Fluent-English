import Word from "../../domain/Word";
import wordDto from "../../domain/wordDto";
import WordService from "../../services/wordService";

test("can fetch all data", async () => {
  const fakeWord = {
    id: 1,
    name: "Hola",
    transcription: "tt",
    definition: "dd",
    isPhrasalVerb: false,
  };
  const fakeWordList = [
    fakeWord,
    { ...fakeWord, id: 2, name: "hola2" },
    { ...fakeWord, id: 3 },
    wordDto(1, "Hola", "t", "d", false),
  ];
  const repository = function () {
    this.fetchAll = async () =>
      new Promise((resolve, reject) => {
        resolve(fakeWordList);
      });
  };

  const service = new WordService(new repository());
  const data = await service.fetchAll();
  expect(data).toBe(fakeWordList);
});

test("can add a word", () => {
  const wordToAss = { name: "hola" };
});
