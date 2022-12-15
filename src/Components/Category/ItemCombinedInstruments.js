import ItemBar from "../ItemBar";
import ItemBarHead from "../ItemBarHead";

function ItemCombinedInstrument() {

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
        color="#839CE3"
        title="Submarine Gel electrophoresis System "
        catno="GEL01-01"
        qty="1"
        price=" 1,000"
        view="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/preview"
        down="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/view"
      />
      <ItemBar
        color="#839CE3"
        title="Power supply"
        catno="GEL02-01"
        qty="1"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1VdL2kzU3BsggrScsj39VN-95jY00rDHj/view"
      />
      <ItemBar
        color="#839CE3"
        title="PRO-Spin 6000 rpm Microcentrifuge with 8 x 2ml/1.5ml vial rotor  and 2 x PCR Strip rotor"
        catno="G2P-PRO0806"
        qty="1"
        price="2,500"
        view=""
        down="https://drive.google.com/file/d/10y_AvBZDP4jgEPBvsS4e2qH1olETKMDq/view"
      />
    </div>
  );

}

export default ItemCombinedInstrument;
