import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import { AppShell } from "@/components/creatorflow/AppShell";
import { ChatView } from "@/components/creatorflow/ChatWorkspace";
import { useAuth } from "@/hooks/useAuth";
import { useChatMessages, useChats } from "@/lib/chat-store";

export const Route = createFileRoute("/chat/$chatId")({
  head: () => ({
    meta: [
      { title: "Chat — CreatorFlow AI" },
      {
        name: "description",
        content:
          "Continue your CreatorFlow AI conversation: transform files and ideas into notes, slides, documents, quizzes and creator content.",
      },
      { property: "og:title", content: "Chat — CreatorFlow AI" },
      {
        property: "og:description",
        content: "Your CreatorFlow AI workspace conversation, saved and ready to continue.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChatRoute,
});

function ChatRoute() {
  const { chatId } = Route.useParams();
  const { session, loading } = useAuth();
  const navigate = useNavigate();
  const messagesQuery = useChatMessages(session ? chatId : null);
  const { data: chats } = useChats();

  useEffect(() => {
    if (!loading && !session) navigate({ to: "/auth" });
  }, [loading, session, navigate]);

  const title = chats?.find((chat) => chat.id === chatId)?.title;

  if (loading || !session || messagesQuery.isLoading) {
    return (
      <div className="grid h-screen place-items-center text-sm text-muted-foreground">
        Loading conversation…
      </div>
    );
  }

  return (
    <AppShell activeChatId={chatId} headerTitle={title}>
      <ChatView key={chatId} chatId={chatId} initialMessages={messagesQuery.data ?? []} />
    </AppShell>
  );
}
