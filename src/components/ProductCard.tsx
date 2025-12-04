import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ShoppingCart, ZoomIn } from "lucide-react";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

interface ProductCardProps {
  product: ShopifyProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const variants = product.node.variants.edges;
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const selectedVariant = variants[selectedVariantIndex]?.node;
  const addItem = useCartStore(state => state.addItem);

  // Get the image for the selected variant (using index to match variant position)
  const getVariantImage = () => {
    const images = product.node.images?.edges || [];
    // Try to get image at same index as variant, fallback to first image
    return images[selectedVariantIndex]?.node || images[0]?.node;
  };

  const image = getVariantImage();
  const price = selectedVariant?.price || product.node.priceRange.minVariantPrice;

  const handleVariantChange = (optionName: string, value: string) => {
    // Find the variant that matches this option value
    const index = variants.findIndex(v =>
      v.node.selectedOptions.some(o => o.name === optionName && o.value === value)
    );
    if (index !== -1) {
      setSelectedVariantIndex(index);
    }
  };

  const handleAddToCart = () => {
    if (!selectedVariant) {
      toast.error('Product variant not available');
      return;
    }

    const cartItem = {
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    };

    addItem(cartItem);
    toast.success('Added to cart', {
      description: `${product.node.title}${selectedVariant.title !== 'Default Title' ? ` - ${selectedVariant.title}` : ''}`,
      position: 'top-center',
    });
  };

  // Get current selected option value for a given option name
  const getSelectedOptionValue = (optionName: string) => {
    return selectedVariant?.selectedOptions.find(o => o.name === optionName)?.value || '';
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomOpen(true);
  };

  return (
    <div className="masonry-item group">
      <div className="relative">
        <div 
          className="cursor-zoom-in relative group/zoom"
          onClick={handleImageClick}
        >
          {image ? (
            <img
              src={image.url}
              alt={image.altText || product.node.title}
              className="w-full h-auto object-cover rounded-lg transition-opacity duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full aspect-square bg-secondary/20 flex items-center justify-center rounded-lg">
              <p className="text-muted-foreground">No image</p>
            </div>
          )}
          <div className="absolute top-3 right-3 opacity-0 group-hover/zoom:opacity-100 transition-opacity bg-black/50 p-1.5 rounded-full">
            <ZoomIn className="h-4 w-4 text-white" />
          </div>
        </div>

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
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>

        {/* Hover overlay */}
        <div className="masonry-overlay">
          <h3 className="font-bold text-lg mb-2 text-white">
            {product.node.title}
          </h3>

          {/* Variant selectors */}
          {variants.length > 1 && product.node.options.map((option) => (
            option.name !== 'Title' && (
              <div key={option.name} className="mb-3">
                <Select
                  value={getSelectedOptionValue(option.name)}
                  onValueChange={(value) => handleVariantChange(option.name, value)}
                >
                  <SelectTrigger className="w-full bg-white/20 border-white/30 text-white backdrop-blur-sm">
                    <SelectValue placeholder={`Select ${option.name}`} />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border z-50">
                    {option.values.map((value) => (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )
          ))}

          {product.node.description && variants.length <= 1 && (
            <p className="text-sm text-white/80 mb-3 line-clamp-3">
              {product.node.description}
            </p>
          )}

          <Button
            onClick={handleAddToCart}
            className="w-full bg-white text-primary hover:bg-white/90"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <Dialog open={isZoomOpen} onOpenChange={setIsZoomOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-2 bg-black/95 border-none">
          {image && (
            <img 
              src={image.url}
              alt={image.altText || product.node.title}
              className="w-full h-full max-h-[90vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductCard;
