import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Logo } from "@/components/logo";
import {
  PricingTable,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="landing-wrapper">
      <header className="landing-header">
        <div className="landing-header-inner">
          <div className="logo-container">
            <Link href="/">
              <Logo />
            </Link>
            <Show when="signed-in">
              <div className="nav-actions">
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <UserButton />
              </div>
            </Show>
            <Show when="signed-out">
              <div className="nav-actions">
                <SignInButton />
                <SignUpButton />
              </div>
            </Show>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-heading">
        <div className="text-center">
          <p>
            <span className="hero-subtitle">
              The AI executive assistant
            </span>
          </p>
          <h1>
            Email and calendar, <br />
            on autopilot.
          </h1>

          <p className="hero-description">
            Replai reads your inbox every 15 minutes — drafts replies, extracts
            tasks, and schedules your week so you don't have to.
          </p>
          <div className="hero-buttons">
            <Link href="/sign-up">
              <Button size="lg" className="text-lg">
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-heading">
        <h2 className="text-foreground">Powerful Features</h2>
        <div className="features-grid">
          {[
            {
              key: "email-management",
              title: "Autonomous Email Management",
              description:
                "AI processes your emails every 15 minutes, categorizes them, and drafts intelligent replies",
            },
            {
              key: "task-extraction",
              title: "Smart Task Extraction",
              description:
                "Automatically creates tasks from your emails and calendar events. Never miss a to-do again",
            },
            {
              key: "calendar-intelligence",
              title: "Calendar Intelligence",
              description:
                "Suggests optimal meeting times, detects conflicts, and keeps your schedule organized",
            },
          ].map((feature) => (
            <Card key={feature.key} className="p-6">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-heading" id="pricing">
        <h2 className="text-foreground">Simple, Transparent Pricing</h2>
        <PricingTable />
      </section>
    </div>
  );
}
