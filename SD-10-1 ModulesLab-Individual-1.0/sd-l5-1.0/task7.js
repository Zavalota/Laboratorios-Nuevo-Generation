export function rubricPerfect(score) {
  if (Number(score) === 11) {
    return "Perfect";
  } else {
    return "Pass";
  }
}