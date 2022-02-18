import wordName from "../../../domain/valueObjects/wordName";

test("can capitalize a word", () => {
  const name = wordName("hello");
  expect(name.name).toBe("Hello");
});

test("a hello is not phrasal verb", () => {
  const name = wordName("Hello");
  expect(name.isPhrasalVerb).toBe(false);
});

test("a two space word is phrasal verb", () => {
  const name = wordName("set up");
  expect(name.isPhrasalVerb).toBe(true);
});

test("a tree space word is phrasal verb", () => {
  const name = wordName("clamp down on");
  expect(name.isPhrasalVerb).toBe(true);
});
