import { storageKeys } from "lib/storage";
import usePersistedState from "lib/use-persisted-state";
import { Navigate } from "react-router-dom";
import { routes } from "./routes";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const [apiKey] = usePersistedState<string | null>(storageKeys.apiToken, "");

  if (!apiKey) return <Navigate to={routes.register} replace />;

  return children;
}
