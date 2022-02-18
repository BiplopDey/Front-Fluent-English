export default function wordDto(
  id,
  name,
  transcription,
  definition,
  isPhrasalVerb
) {
  return {
    id: id,
    name: name,
    transcription: transcription,
    definition: definition,
    isPhrasalVerb: isPhrasalVerb,
  };
}
