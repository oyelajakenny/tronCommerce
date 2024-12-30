"use client";
import { Loader2, Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/sanity.types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { urlFor } from "@/sanity/lib/image";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const fetchProducts = useCallback(async () => {
    if (!search) {
      setProducts([]);
      return;
    }
    try {
      const query = `*[_type == "product" && name match $search] | order(name asc)`;
      const params = { search: `${search}*` };
      console.log("Executing search with query:", query);
      console.log("Search params:", params);
      const response = await client.fetch(query, params);
      console.log("responses", response);
      setProducts(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [search]);
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchProducts();
    }, 300);
    return () => clearTimeout(debounceTimer);
  }, [search, fetchProducts]);
  return (
    <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
      <DialogTrigger onClick={() => setShowSearch(!showSearch)}>
        <Search className="w-5 h-5 hover:text-darkColor hoverEffect" />
      </DialogTrigger>
      <DialogContent className="max-w-5xl min-h-[90vh] max-h-[90vh] flex flex-col overflow-hidden">
        <DialogHeader className="w-full ">
          <DialogTitle className="mb-1">Product Searchbar</DialogTitle>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Search for products...."
              className=" w-full flex-1 rounded-md py-5 border border-darkColor/20 px-5"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <X
                onClick={() => setSearch("")}
                className="w-5 h-5 absolute right-11 top-6 hover:text-red-600 hoverEffect"
              />
            )}
            <button
              type="submit"
              className={`absolute right-0 top-0 h-full w-10 bg-darkColor/10 flex items-center justify-center 
            rounded-tr-md rounded-br-md hover:bg-darkColor hover:text-white hoverEffect ${search ? "bg-darkColor text-white" : "bg-darkColor/10"}`}
            >
              <Search className="w-5 h-5 " />
            </button>
          </form>
        </DialogHeader>
        <div className="w-full h-full overflow-y-scroll border border-darkColor/20 rounded-md">
          <div>
            {loading ? (
              <p className="flex items-center px-6 py-10 gap-1 text-center text-yellow-600 font-semibold">
                <Loader2 className="w-5 h-5 animate-spin" />
                Search in progress...
              </p>
            ) : products.length ? (
              products?.map((product: Product) => (
                <div
                  key={product?._id}
                  className="bg-white overflow-hidden border-b last:border-b-0"
                >
                  <div className="flex items-center p-1">
                    <Link
                      href={`/product/${product?.slug?.current}`}
                      className="h-20 w-20 md:h-24 md:w-24 flex-shrink-0 border border-darkColor/20 rounded-md overflow-hidden group"
                      onClick={() => setShowSearch(false)}
                    >
                      {product?.images && (
                        <Image
                          src={urlFor(product?.images[0]).url()}
                          alt="productImage"
                          width={200}
                          height={200}
                          className="object-cover w-full h-full group-hover:scale-110 hoverEffect"
                        />
                      )}
                    </Link>
                    <div className="px-4 py-2 flex-grow">
                      <Link href={`/product/${product?.slug?.current}`} onClick={() => setShowSearch(false)}>
                        <h3 className="text-sm md:text-lg font-semibold text-gray-800 line-clamp-1">{product?.name}</h3>
                        <p className="text-sm text-gray-600 line-clamp-1">{product?.intro}</p>
                      </Link>
                      <PriceView price={product?.price} discount={product?.discount} className="md:text-lg"/>
                    </div>
                    <div className="w-60 mt-1"><AddToCartButton product={product}/></div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 font-semibold tracking-wide">
                {search && !loading?  (
                  <p>
                    Nothing match the keyword{" "}
                    <span className="underline text-red-600">{search}.</span>
                    Please try something else.
                  </p>
                ) : (
                  <p className="text-green-600 flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" />
                    Search and explore your products from TronCommerce
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
