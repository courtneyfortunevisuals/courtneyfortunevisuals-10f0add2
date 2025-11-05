import { useState, useEffect } from "react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart } from "lucide-react";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

const Gallery = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

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

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    
    if (!variant) {
      toast.error('Product variant not available');
      return;
    }

    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success('Added to cart', {
      description: product.node.title,
      position: 'top-center',
    });
  };

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
            {products.map((product) => {
              const image = product.node.images?.edges?.[0]?.node;
              const price = product.node.priceRange.minVariantPrice;

              return (
                <div key={product.node.id} className="masonry-item group">
                  <div className="relative">
                    {image ? (
                      <img 
                        src={image.url} 
                        alt={image.altText || product.node.title}
                        className="w-full h-auto object-cover rounded-lg"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full aspect-square bg-secondary/20 flex items-center justify-center rounded-lg">
                        <p className="text-muted-foreground">No image</p>
                      </div>
                    )}

                    {/* Price badge */}
                    {price && (
                      <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                        {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                      </div>
                    )}

                    {/* Quick action button */}
                    <div className="masonry-actions">
                      <Button 
                        size="icon" 
                        variant="secondary"
                        className="rounded-full bg-background/90 backdrop-blur-sm shadow-lg"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Hover overlay */}
                    <div className="masonry-overlay">
                      <h3 className="font-bold text-lg mb-2 text-white">
                        {product.node.title}
                      </h3>
                      {product.node.description && (
                        <p className="text-sm text-white/80 mb-3 line-clamp-3">
                          {product.node.description}
                        </p>
                      )}
                      <Button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-white text-primary hover:bg-white/90"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
