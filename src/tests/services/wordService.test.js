import Word from "../../domain/Word";
import WordService from "../../services/wordService";

test("can fetch all data", async () => {
  const fakeWord = {
    id: 1,
    name: "hola",
    transcription: "tt",
    description: "dd",
  };
  const fakeWordList = [
    fakeWord,
    { ...fakeWord, id: 2, name: "hola2" },
    { ...fakeWord, id: 3 },
  ];
  const repository = jest.fn(function () {
    this.fetchAll = async () =>
      new Promise((resolve, reject) => {
        resolve(fakeWordList);
      });
  });

  const service = new WordService(new repository());
  const data = await service.fetchAll();
  expect(data).toBe(fakeWordList);

  //   const data = await new repository().fetchAll();
  //   expect(data).toBe(wordList);
});
