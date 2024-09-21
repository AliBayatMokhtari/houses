import {
  ParamParseKey,
  PathMatch,
  PathPattern,
  matchPath,
  useLocation,
} from "react-router-dom";

export default function useAnyMatch<
  ParamKey extends ParamParseKey<Path>,
  Path extends string
>(patterns: Array<PathPattern<Path> | Path>): PathMatch<ParamKey> | null {
  const { pathname } = useLocation();
  return patterns.reduce((result, currentPattern) => {
    return result || matchPath(currentPattern, pathname);
  }, matchPath(patterns[0], pathname));
}
