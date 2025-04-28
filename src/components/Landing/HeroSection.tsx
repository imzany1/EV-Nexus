
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
          Empowering Students Through Shared Knowledge
        </h1>
        <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
          Join our community of learners sharing high-quality educational resources.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link to="/signup">
            <Button size="lg" className="gap-2">
              Get Started
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="gap-2">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
