import { updateSession, config } from "./middleware";

// Next.js 16 renamed middleware to proxy.
// This wrapper lets Next 16 run the same admin auth guard from middleware.js.
export async function proxy(request) {
  return updateSession(request);
}

export { config };
