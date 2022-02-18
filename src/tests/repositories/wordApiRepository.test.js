import axios from "axios";
import wordDto from "../../domain/wordDto";
import wordApiRepository from "../../repository/wordApiRepository";

jest.mock("axios");

test("get all words", () => {
  const words = [
    wordDto(1, "bb", "d", "f", true, false),
    wordDto(2, "dd", "d", "f", true, false),
  ];
  axios.get.mockResolvedValue({ data: words });

  return new wordApiRepository().fetchAll((data) =>
    expect(data).toEqual(words)
  );
});

test("create a word", () => {
  const word = wordDto(null, "dd", "d", "f", true, false);
  axios.post.mockResolvedValue({ data: { ...word, id: 1 } });

  return new wordApiRepository()
    .save(word)
    .then((data) => expect(data).toEqual({ ...word, id: 1 }));
});

test("update a word", () => {
  const word = wordDto(1, "dd", "d", "f", true, false);
  axios.put.mockResolvedValue({ data: word });

  return new wordApiRepository()
    .save(word)
    .then((data) => expect(data).toEqual(word));
});
