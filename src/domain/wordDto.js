export default function wordDto(
  id,
  name,
  transcription,
  definition,
  isPhrasalVerb,
  favorite
) {
  const word = {
    name: name,
    transcription: transcription,
    definition: definition,
    isPhrasalVerb: isPhrasalVerb,
    favorite: favorite,
  };

  return id === null ? word : { ...word, id: id };
}
