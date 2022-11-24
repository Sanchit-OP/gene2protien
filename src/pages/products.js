import React from "react";
import FooterOutside from "../Components/FooterOutside";
import ProductCombined from "../Components/ProductCombined";
import ProductTitle from "../Components/ProductTitle";
import Top from "../Components/top";

function Product() {
    return (
        <div>
            <Top color="white"/>
            <ProductTitle />
            <ProductCombined />
            <FooterOutside />
        </div>
    );
}
export default Product;
