import ClothingCarousel from "../components/ClothingCarousel";
import { Card } from "@/components/ui/card";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted text-foreground">
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Shop Our Collection</h1>
        <ClothingCarousel />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {["Chechen Hoodie", "Chechen T-Shirt", "Chechen Sneakers"].map(
            (product, index) => (
              <Card key={index} className="p-4 bg-card text-card-foreground">
                <h2 className="text-xl font-bold">{product}</h2>
                <p>${60 - index * 20}</p>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
}
