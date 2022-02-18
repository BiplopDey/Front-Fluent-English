import Word from "../../domain/Word";

test("word class is working", () => {
  const word = new Word(1, "hello", "transciption", "description");
  expect(word.name).toBe("hello");
  expect(word.transcription).toBe("transciption");
  expect(word.description).toBe("description");
});
