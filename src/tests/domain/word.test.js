import Word from "../../domain/Word";

test("word class is working", () => {
  const word = new Word(1, "hello", "transciption", "definition");
  expect(word.name).toBe("Hello");
  expect(word.transcription).toBe("transciption");
  expect(word.definition).toBe("definition");
});

test("set up is phrasal verb working", () => {
  const word = new Word(1, "set up", "transciption", "definition");
  expect(word.name).toBe("Set up");
  expect(word.isPhrasalVerb).toBe(true);
});

test("set no null definition is converted empty string", () => {
  const word = new Word(1, "set up", "transciption", null);

  expect(word.definition).toBe("");
});
