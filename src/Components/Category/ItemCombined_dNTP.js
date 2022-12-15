import ItemBar from "../ItemBar";
import ItemBarHead from "../ItemBarHead";

function ItemCombinedDNPT() {

  return (
    <div
      className="grid gap-0 place-items-center pb-[10%]"
      style={{ backgroundColor: "white" }}
    >
      <ItemBarHead
        color="#ffffff"
        title="Name"
        catno="Catalog"
        qty="Quantity"
        price="Price"
      />
      <ItemBar
        color="#ADB3BE"
        title="dNTP mix, 10mM of each"
        catno="N022"
        qty="1 ml"
        price=" 1,000"
        view="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/preview"
        down="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/view"
      />
      <ItemBar
        color="#ADB3BE"
        title="dNTP Set, 10mM of each"
        catno="N023"
        qty="1 ml"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1VdL2kzU3BsggrScsj39VN-95jY00rDHj/view"
      />
      <ItemBar
        color="#ADB3BE"
        title="dNTP mix, 100mM of each"
        catno="N027"
        qty="1 ml"
        price="2,500"
        view=""
        down="https://drive.google.com/file/d/10y_AvBZDP4jgEPBvsS4e2qH1olETKMDq/view"
      />
      <ItemBar
        color="#ADB3BE"
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
