import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

export default function Home() {
  const limit = 4
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={limit}
      />
    </>
  );
}
