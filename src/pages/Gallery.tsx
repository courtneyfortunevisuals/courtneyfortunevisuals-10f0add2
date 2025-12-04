import { useState, useEffect } from "react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import ProductCard from "@/components/ProductCard";

const Gallery = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await getProducts(9);
        
        // Sort products by title (poster 01 to 09)
        const sortedProducts = [...fetchedProducts].sort((a, b) => {
          const titleA = a.node.title.toLowerCase();
          const titleB = b.node.title.toLowerCase();
          
          // Extract number from title if it contains "poster" followed by a number
          const extractNumber = (title: string) => {
            const match = title.match(/poster\s*(\d+)/i);
            return match ? parseInt(match[1]) : Infinity;
          };
          
          const numA = extractNumber(titleA);
          const numB = extractNumber(titleB);
          
          return numA - numB;
        });
        
        setProducts(sortedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Gallery</h1>
          <div className="masonry-container">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="masonry-item">
                <Skeleton 
                  className="w-full rounded-lg" 
                  style={{ height: `${200 + Math.random() * 200}px` }} 
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Gallery</h1>
        
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found</p>
          </div>
        ) : (
          <div className="masonry-container">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
