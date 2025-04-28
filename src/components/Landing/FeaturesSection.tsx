
import GlassCard from "@/components/UI/GlassCard";
import { BookOpen, Users, UploadCloud } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose EduVault?</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Our platform is designed to make educational resources accessible, engaging, and community-driven.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard hover className="text-center">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Resources</h3>
              <p className="text-muted-foreground">
                Access a curated collection of educational materials vetted by educators and experts.
              </p>
            </div>
          </GlassCard>
          
          <GlassCard hover className="text-center">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Feedback</h3>
              <p className="text-muted-foreground">
                Get ratings, reviews, and constructive feedback on educational content.
              </p>
            </div>
          </GlassCard>
          
          <GlassCard hover className="text-center">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <UploadCloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Seamless Sharing</h3>
              <p className="text-muted-foreground">
                Upload and share your own educational resources with the global community.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
