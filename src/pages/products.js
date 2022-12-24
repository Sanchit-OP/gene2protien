import React from "react";
import FooterOutside from "../Components/FooterOutside";
import ProductCombined from "../Components/ProductCombined";
import ProductTitle from "../Components/ProductTitle";
import Top2 from "../Components/top2";

function Product() {
    return (
        <div>
            <Top2 color="white" />
            <ProductTitle />
            <ProductCombined />
            <FooterOutside />
        </div>
    );
}
export default Product;
