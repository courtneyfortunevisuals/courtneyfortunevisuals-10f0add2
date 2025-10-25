import { useState, useEffect } from "react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import ZoomableImage from "@/components/ZoomableImage";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, ChevronDown, ChevronUp } from "lucide-react";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

const Gallery = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set());
  const addItem = useCartStore(state => state.addItem);

  const toggleDescription = (productId: string) => {
    setExpandedDescriptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const image = product.node.images?.edges?.[0]?.node;
              const price = product.node.priceRange.minVariantPrice;
              
              return (
                <div key={product.node.id} className="group">
                  <div className="aspect-square mb-4">
                    {image ? (
                      <ZoomableImage
                        src={image.url}
                        alt={image.altText || product.node.title}
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary/20 rounded-md flex items-center justify-center">
                        <p className="text-muted-foreground">No image</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{product.node.title}</h3>
                    <div className="relative">
                      <p className={`text-muted-foreground text-sm ${
                        expandedDescriptions.has(product.node.id) ? '' : 'line-clamp-2'
                      }`}>
                        {product.node.description}
                      </p>
                      {product.node.description && product.node.description.length > 100 && (
                        <button
                          onClick={() => toggleDescription(product.node.id)}
                          className="text-xs text-primary hover:underline flex items-center gap-1 mt-1"
                        >
                          {expandedDescriptions.has(product.node.id) ? (
                            <>
                              Read less <ChevronUp className="h-3 w-3" />
                            </>
                          ) : (
                            <>
                              Read more <ChevronDown className="h-3 w-3" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-lg font-bold">
                        {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                      </span>
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        size="sm"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
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
