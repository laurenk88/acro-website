import { createFileRoute, redirect } from "@tanstack/react-router";

// The old guide was retired. Anyone with the old link lands on the homepage.
export const Route = createFileRoute("/guides/operational-efficiency")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
