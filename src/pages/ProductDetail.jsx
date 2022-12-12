import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const params = useParams();
  return (
    <section className="container">
      <h1>{params.productName}</h1>
      <p>상품의 이름으로 상품 페이지를 출력하고 있습니다.</p>
    </section>
  );
};

export default ProductDetail;
