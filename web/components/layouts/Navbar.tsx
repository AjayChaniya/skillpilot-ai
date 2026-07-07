import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { navLinks } from "@/constants/navigation";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 py-5">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">SkillPilot AI</h1>

          <div className="hidden md:flex gap-8">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <Button>Login</Button>
        </div>
      </Container>
    </nav>
  );
}
