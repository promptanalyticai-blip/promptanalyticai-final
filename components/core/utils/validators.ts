export function validateText(input: string) {
  return {
    valid: input.trim().length > 0,
    length: input.length,
    message:
      input.trim().length > 0
        ? "Valid text input."
        : "Input cannot be empty.",
  };
}

export function validatePayload(payload: any) {
  const valid = payload && typeof payload === "object";

  return {
    valid,
    type: typeof payload,
    message: valid
      ? "Payload is valid."
      : "Payload must be a non-null object.",
  };
}

export function validateScore(score: number) {
  const valid = score >= 0 && score <= 100;

  return {
    valid,
    normalized: Math.min(100, Math.max(0, score)),
    message: valid
      ? "Score is within valid range."
      : "Score must be between 0 and 100.",
  };
}
