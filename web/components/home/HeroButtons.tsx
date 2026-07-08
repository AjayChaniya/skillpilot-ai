import { Button } from "@/components/ui/button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex gap-4">
      <Button size="lg">
        Start Free
      </Button>

      <Button
        variant="outline"
        size="lg"
      >
        Watch Demo
      </Button>
    </div>
  );
}