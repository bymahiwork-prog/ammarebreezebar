import { Button } from "@/components/ui";
import { PageHero } from "@/components/sections";

export default function NotFound() {
  return (
    <PageHero image="/images/arches-night.jpg" kicker="Page not found" plain="This table" accent="isn't set yet.">
      <p>The page you were looking for has moved or doesn&apos;t exist.</p>
      <div className="mt-10">
        <Button href="/" variant="light">
          Back to Home
        </Button>
      </div>
    </PageHero>
  );
}
