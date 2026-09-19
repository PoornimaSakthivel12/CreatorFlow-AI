import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

import { AppShell } from "@/components/creatorflow/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useProfile } from "@/lib/chat-store";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — CreatorFlow AI" },
      {
        name: "description",
        content:
          "Manage your CreatorFlow AI account: email, reply language, appearance and connected services.",
      },
      { property: "og:title", content: "Settings — CreatorFlow AI" },
      {
        property: "og:description",
        content: "Your CreatorFlow AI profile, language preference and account controls.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SettingsPage,
});

const LANGUAGES = [
  { value: "auto", label: "Auto detect (recommended)" },
  { value: "English", label: "English" },
  { value: "Tamil", label: "Tamil" },
  { value: "Tanglish", label: "Tanglish" },
  { value: "Hindi", label: "Hindi" },
  { value: "Malayalam", label: "Malayalam" },
  { value: "Telugu", label: "Telugu" },
  { value: "Kannada", label: "Kannada" },
  { value: "Bengali", label: "Bengali" },
  { value: "Marathi", label: "Marathi" },
  { value: "Spanish", label: "Spanish" },
  { value: "French", label: "French" },
  { value: "German", label: "German" },
  { value: "Japanese", label: "Japanese" },
  { value: "Korean", label: "Korean" },
  { value: "Chinese", label: "Chinese" },
  { value: "Arabic", label: "Arabic" },
];

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border bg-card p-5 shadow-soft">
      <h2 className="font-display text-base font-semibold">{title}</h2>
      {description ? (
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      ) : null}
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function SettingsPage() {
  const { session, user, loading } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: profile } = useProfile();
  const [language, setLanguage] = useState("auto");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !session) navigate({ to: "/auth" });
  }, [loading, session, navigate]);

  useEffect(() => {
    if (profile?.language) setLanguage(profile.language);
  }, [profile?.language]);

  const saveLanguage = async (value: string) => {
    setLanguage(value);
    if (!user) return;
    setSaving(true);
    const { error } = await supabase.from("profiles").update({ language: value }).eq("id", user.id);
    setSaving(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    queryClient.invalidateQueries({ queryKey: ["profile"] });
    toast.success("Language preference saved");
  };

  if (loading || !session) {
    return (
      <div className="grid h-screen place-items-center text-sm text-muted-foreground">
        Loading settings…
      </div>
    );
  }

  return (
    <AppShell headerTitle="Settings">
      <div className="h-full overflow-y-auto px-4 py-8">
        <div className="mx-auto w-full max-w-2xl space-y-5">
          <div>
            <h1 className="font-display text-2xl font-semibold">Settings</h1>
            <p className="text-sm text-muted-foreground">
              One source. Many possibilities — tuned to how you work.
            </p>
          </div>

          <Section title="Profile" description="Your account is identified by your email address.">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={user?.email ?? ""} readOnly className="bg-muted" />
              <p className="text-xs text-muted-foreground">
                Sign-in codes are sent to this address.
              </p>
            </div>
          </Section>

          <Section
            title="Reply language"
            description="Auto detect answers in the same language you write in, including mixed input like Tanglish."
          >
            <Select value={language} onValueChange={(value) => void saveLanguage(value)}>
              <SelectTrigger disabled={saving} className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {LANGUAGES.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Section>

          <Section title="Appearance" description="CreatorFlow AI uses a light, focused theme.">
            <p className="text-sm text-muted-foreground">
              A dark theme isn't available yet — tell me if you want it and I'll add it.
            </p>
          </Section>

          <Section
            title="AI preferences"
            description="How CreatorFlow AI behaves in every conversation."
          >
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>· Answers are grounded in the files you attach.</li>
              <li>· It replies in your language automatically.</li>
              <li>· It never claims a video was rendered or an image generated unless it was.</li>
            </ul>
          </Section>

          <Section
            title="Connected services"
            description="Live trend data and social publishing aren't connected yet."
          >
            <p className="text-sm text-muted-foreground">
              Trending asks for a real data source before showing numbers, so nothing is invented.
            </p>
          </Section>

          <Section title="Account">
            <Button
              variant="outline"
              className="gap-2"
              onClick={async () => {
                await supabase.auth.signOut();
                navigate({ to: "/auth" });
              }}
            >
              <LogOut /> Log out
            </Button>
          </Section>
        </div>
      </div>
    </AppShell>
  );
}
