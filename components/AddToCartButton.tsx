import React from "react";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { Button } from "@/components/ui/button";
import QuantityButtons from "./QuantityButtons";
import PriceFormatter from "./PriceFormatter";

interface Props {
  product: Product;
  className?: string;
}
const AddToCartButton = ({ product, className }: Props) => {
  const isOutOfStock = product?.stock === 0;
  const itemCount = 0;
  return (
    <div className="w-full">
      {itemCount ? (
        <div className="w-full text-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Quantity</span>
            <QuantityButtons product={product} />
          </div>
          <div className="flex items-center justify-between border=t pt-1">
            <span className="text-sm font-semibold">Subtotal</span>
            <PriceFormatter
              amount={product?.price ? product?.price * itemCount : 0}
            />
          </div>
        </div>
      ) : (
        <Button
          disabled={isOutOfStock}
          className={cn(
            "w-full bg-transparent text-darkColor shadow-none border border-darkColor/30 font-semibold hover:text-white hoverEffect",
            className
          )}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};

export default AddToCartButton;
