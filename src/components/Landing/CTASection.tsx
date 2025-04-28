
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join the Knowledge Network?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Create an account to upload your own resources, save favorites, and engage with the EduVault community.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/signup">
            <Button size="lg" className="gap-2">
              Sign Up Now
            </Button>
          </Link>
          <Link to="/login">
            <Button size="lg" variant="outline" className="gap-2">
              Already a Member? Log In
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
