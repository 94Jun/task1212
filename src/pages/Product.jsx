import { Link, Outlet} from "react-router-dom";
import { useState } from "react";
const Product = () => {
  const [enteredProduct, setEnteredProduct] = useState("");
  const changeProductHandler = (e) => {
    setEnteredProduct(e.target.value);
  };
  return (
    <>
      <section className="container">
        <h1>값을 입력받아서 페이지를 이동합니다</h1>
        <div className="input_wrap">
          <input type="text" onChange={changeProductHandler} value={enteredProduct} />
          <Link to={enteredProduct}>페이지 이동</Link>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Product;
