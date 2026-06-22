import { AuraExperience } from "@/components/aura/aura-experience";

export default function HomePage() {
  const pulseUrl = "https://pulse-khaki-six.vercel.app/?utm_source=chatgpt.com";
  const streamNestUrl = "streamNestUrl";

  return <AuraExperience pulseUrl={pulseUrl} streamNestUrl={streamNestUrl} />;
}
