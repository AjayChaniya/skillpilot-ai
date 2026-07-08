import Container from "@/components/ui/Container";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <HeroBadge />
            <HeroContent />
            <HeroButtons />
            <HeroStats />
          </div>

          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}