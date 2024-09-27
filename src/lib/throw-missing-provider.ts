export default function throwMissingProvider(provider: string) {
  throw new Error(`${provider} is missing at the top levels`);
}
