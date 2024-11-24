import { useState } from "react";
import { dataList } from "./data/dataList";
import ProductList from "./ProductList";

interface Data {
  final_price: number;
  image: string;
  meta_title: string;
  meta_description: string;
  name: string;
  short_description: string;
  status: number;
  url_path?: string;
  sku: string;
  slug: string;
  stock: number;
  materials?: string;
  main_category: string;
  instruction?: string;
  is_pre_order?: boolean;
}

const Product = () => {
  const [load, setLoad] = useState(10);
  const handleLoad = () => {
    setLoad((prev) => prev + 10);
  };
  const spliceData = (data: Data[]) => {
    return data.slice(0, load);
  };

  return (
    <>
      <ul className="">
        {spliceData(dataList).map((data, index) => (
          <ProductList key={index} data={data} />
        ))}
      </ul>
      <div onClick={() => handleLoad()}>
        {load >= dataList.length ? "" : "Load more"}
      </div>
    </>
  );
};

export default Product;
