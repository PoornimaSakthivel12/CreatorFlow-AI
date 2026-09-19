import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { BrandLockup } from "@/components/creatorflow/BrandMark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — CreatorFlow AI" },
      {
        name: "description",
        content:
          "Sign in to CreatorFlow AI with a 6-digit code sent to your email. No password to remember.",
      },
      { property: "og:title", content: "Sign in — CreatorFlow AI" },
      {
        property: "og:description",
        content: "Enter your email, get a 6-digit code, and start creating with CreatorFlow AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

const MAX_ATTEMPTS = 5;
const RESEND_SECONDS = 60;

function AuthPage() {
  const { session, loading } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [cooldown, setCooldown] = useState(0);

  // Returning verified users skip the code entirely.
  useEffect(() => {
    if (!loading && session) navigate({ to: "/" });
  }, [loading, session, navigate]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((value) => value - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  const sendCode = async () => {
    const address = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) {
      toast.error("Enter a valid email address.");
      return;
    }
    setSending(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: address,
      options: { shouldCreateUser: true },
    });
    setSending(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setEmail(address);
    setStep("code");
    setCode("");
    setAttempts(0);
    setCooldown(RESEND_SECONDS);
    toast.success(`We sent a 6-digit code to ${address}. It expires in 10 minutes.`);
  };

  const verify = async () => {
    if (code.length !== 6) {
      toast.error("Enter the 6-digit code from your email.");
      return;
    }
    setVerifying(true);
    const { error } = await supabase.auth.verifyOtp({ email, token: code, type: "email" });
    setVerifying(false);
    if (error) {
      const next = attempts + 1;
      setAttempts(next);
      if (next >= MAX_ATTEMPTS) {
        toast.error("Too many wrong codes. Request a new one.");
        setStep("email");
        setCode("");
        setAttempts(0);
        return;
      }
      toast.error(`${error.message} (${MAX_ATTEMPTS - next} attempts left)`);
      return;
    }
    navigate({ to: "/" });
  };

  return (
    <div className="grid min-h-screen place-items-center bg-gradient-to-b from-accent/60 to-background px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-center">
          <BrandLockup tagline />
        </div>
        <div className="rounded-2xl border bg-card p-6 shadow-lift sm:p-8">
          {step === "email" ? (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                void sendCode();
              }}
              className="space-y-4"
            >
              <div>
                <h1 className="font-display text-xl font-semibold">Sign in to keep creating</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  We'll email you a 6-digit code — no password needed.
                </p>
              </div>
              <Input
                type="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@email.com"
                className="h-11"
              />
              <Button type="submit" className="h-11 w-full" disabled={sending}>
                {sending ? <Loader2 className="animate-spin" /> : null} Send code
              </Button>
            </form>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                void verify();
              }}
              className="space-y-4"
            >
              <div>
                <h1 className="font-display text-xl font-semibold">Enter your code</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Sent to <span className="font-medium text-foreground">{email}</span>. The code
                  expires in 10 minutes.
                </p>
              </div>
              <Input
                inputMode="numeric"
                autoComplete="one-time-code"
                autoFocus
                maxLength={6}
                value={code}
                onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="123456"
                className="h-12 text-center text-lg tracking-[0.5em]"
              />
              <Button type="submit" className="h-11 w-full" disabled={verifying}>
                {verifying ? <Loader2 className="animate-spin" /> : null} Verify and continue
              </Button>
              <div className="flex items-center justify-between text-sm">
                <button
                  type="button"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => {
                    setStep("email");
                    setCode("");
                  }}
                >
                  Use another email
                </button>
                <button
                  type="button"
                  disabled={cooldown > 0 || sending}
                  className="font-medium text-primary disabled:text-muted-foreground"
                  onClick={() => void sendCode()}
                >
                  {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
                </button>
              </div>
            </form>
          )}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          One source. Many possibilities.
        </p>
      </div>
    </div>
  );
}
