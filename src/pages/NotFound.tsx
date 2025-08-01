
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-8xl font-bold mb-4 text-primary">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
