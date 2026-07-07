import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import FeatureCard from "./FeatureCard";
import { features } from "@/data/features";

export default function Features() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Everything You Need"
          subtitle="One platform to learn, prepare, and get hired."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}