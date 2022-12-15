import ItemBar from "../ItemBar";
import ItemBarHead from "../ItemBarHead";

function ItemCombinedPurify() {

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
        color="#D6CA98"
        title="Ni-NTA Resin Slurry (Affinity Purification of Proteins with 6X His tag)"
        catno="PUR10-25"
        qty="25 ml  "
        price=" 1,000"
        view="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/preview"
        down="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/view"
      />
      <ItemBar
        color="#D6CA98"
        title="G2P SpinClean Plasmid prep kit"
        catno="PUR11-50"
        qty="50 preps"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1VdL2kzU3BsggrScsj39VN-95jY00rDHj/view"
      />
      <ItemBar
        color="#D6CA98"
        title="G2P CuttingEdge Gel Extraction Kit"
        catno="​PUR12-50 "
        qty="50 preps"
        price="2,500"
        view=""
        down="https://drive.google.com/file/d/10y_AvBZDP4jgEPBvsS4e2qH1olETKMDq/view"
      />
      <ItemBar
        color="#D6CA98"
        title="G2P SpinClean PCR Cleanup Kit"
        catno="PUR13-50"
        qty="50 preps"
        price="7,000"
        view=""
        down="https://drive.google.com/file/d/10y_AvBZDP4jgEPBvsS4e2qH1olETKMDq/view"
      />
      <ItemBar
        color="#D6CA98"
        title="G2P PCR Cleanup & Gel Extraction Combo Kit"
        catno="​PUR14-50 "
        qty="50 preps"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1G9zYWrKII6Lv9Sam4_51w4d0ne9XfUnS/view"
      />
      <ItemBar
        color="#D6CA98"
        title="G2P Blood DNA Purification Kit"
        catno="​PUR15-50 "
        qty="50 preps"
        price="9,000"
        view=""
        down="https://drive.google.com/file/d/1G9zYWrKII6Lv9Sam4_51w4d0ne9XfUnS/view"
      />
      <ItemBar
        color="#D6CA98"
        title="G2P Plant DNA Purification Kit (Spin /column based)"
        catno="​PUR16-50 "
        qty="50 preps"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1AuBKoqBKLrBm5RIcsIlqDT-BCibkyByA/view"
      />
    </div>
  );

}

export default ItemCombinedPurify;
