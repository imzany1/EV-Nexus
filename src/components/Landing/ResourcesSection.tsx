
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/UI/GlassCard";

interface Resource {
  id: string;
  title: string;
  description: string;
  author: string;
  type: string;
  rating: number;
}

interface ResourcesSectionProps {
  resources: Resource[];
}

const ResourcesSection = ({ resources }: ResourcesSectionProps) => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Featured Resources</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Discover some of our top-rated educational materials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <GlassCard key={resource.id} hover>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {resource.type}
                  </span>
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span className="text-sm ml-1">{resource.rating}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">By {resource.author}</span>
                  <Link to={`/resource/${resource.id}`}>
                    <Button variant="outline" size="sm">
                      View Resource
                    </Button>
                  </Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/search">
            <Button variant="outline" size="lg">
              Explore All Resources
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
