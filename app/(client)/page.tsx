import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductsGrid from "@/components/ProductsGrid";

export default function Home() {
  return (
    <div className="p-10">
      <Container>
        <HomeBanner />
        <ProductsGrid />
     
      </Container>
    </div>
  );
}
