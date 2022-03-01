export default function wordDto(
  id,
  name,
  transcription,
  definition,
  phrasalVerb,
  favorite
) {
  const word = {
    name: name,
    transcription: transcription,
    definition: definition,
    phrasalVerb: phrasalVerb,
    favorite: favorite,
  };

  return id === null ? word : { ...word, id: id };
}
