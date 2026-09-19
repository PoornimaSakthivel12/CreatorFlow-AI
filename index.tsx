import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import { AppShell } from "@/components/creatorflow/AppShell";
import { WelcomeWorkspace } from "@/components/creatorflow/ChatWorkspace";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CreatorFlow AI — Create more. Transform anything." },
      {
        name: "description",
        content:
          "CreatorFlow AI turns one idea or file into notes, presentations, documents, quizzes, creator content and more — in any language.",
      },
      { property: "og:title", content: "CreatorFlow AI — Create more. Transform anything." },
      {
        property: "og:description",
        content:
          "One source, many possibilities. Chat with AI, upload a file and transform it into notes, slides, quizzes and creator content.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const { session, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !session) navigate({ to: "/auth" });
  }, [loading, session, navigate]);

  if (loading || !session) {
    return (
      <div className="grid h-screen place-items-center text-sm text-muted-foreground">
        Loading CreatorFlow AI…
      </div>
    );
  }

  return (
    <AppShell headerTitle="New chat">
      <WelcomeWorkspace />
    </AppShell>
  );
}
