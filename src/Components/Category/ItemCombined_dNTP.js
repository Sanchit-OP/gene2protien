import ItemBar from "../ItemBar";
import ItemBar2 from "../ItemBar2";

import ItemBarHead from "../ItemBarHead";

function ItemCombinedDNPT() {

  return (
    <div
      className="grid gap-0 place-items-center pb-[10%]"
      style={{ backgroundColor: "white" }}
    >
      <ItemBarHead
        color="#ffffff"
        title="Product"
        catno="Cat #"
        qty="Quantity"
        price="Price"
      />
      <ItemBar
        color="#7da7d9"
        title="dNTP mix, 10mM of each"
        catno="N022"
        qty="1 ml"
        price=" 1,000"
        view=""
        down="https://drive.google.com/file/d/12vkFTUCssxOxpjsOE0nB1mEidUf_WSi0/view?usp=share_link
        "
      />
      <ItemBar2
        color="#7da7d9"
        title="dNTP Set, 10mM of each"
        catno="N023"
        qty="1 ml"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1VdL2kzU3BsggrScsj39VN-95jY00rDHj/view"
      />
      <ItemBar
        color="#7da7d9"
        title="dNTP mix, 100mM of each"
        catno="N027"
        qty="1 ml"
        price="2,500"
        view=""
        down="https://drive.google.com/file/d/12vkFTUCssxOxpjsOE0nB1mEidUf_WSi0/view?usp=share_link
        "
      />
      <ItemBar2
        color="#7da7d9"
        title="dNTP set, 100 mM of each"
        catno="N028"
        qty="1 ml"
        price="7,000"
        view=""
        down="https://drive.google.com/file/d/10y_AvBZDP4jgEPBvsS4e2qH1olETKMDq/view"
      />
    </div>
  );

}

export default ItemCombinedDNPT;
