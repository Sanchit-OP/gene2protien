import React from "react";
import FooterOutside from "../Components/FooterOutside";
import ProductCombined from "../Components/ProductCombined";
import ProductTitle from "../Components/ProductTitle";

function Product() {
    return (
        <div>
            <ProductTitle />
            <ProductCombined />
            <FooterOutside />
        </div>
    );
}
export default Product;
