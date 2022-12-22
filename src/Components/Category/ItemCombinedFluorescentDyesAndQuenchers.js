import ItemBar from "../ItemBar";
import ItemBarHead from "../ItemBarHead";

function ItemCombinedFlu() {

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
        color="#f49ac1"
        title="Cy3-Azide"
        catno="FLUOR-010-01"
        qty="1 mg"
        price=" 1,000"
        view="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/preview"
        down="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/view"
      />
      <ItemBar
        color="#f49ac1"
        title="Cy3-Azide"
        catno="FLUOR-010-05"
        qty=" 5 mg"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1VdL2kzU3BsggrScsj39VN-95jY00rDHj/view"
      />
      <ItemBar
        color="#f49ac1"
        title="Cy5-Azide"
        catno="FLUOR-020-01"
        qty="1 mg"
        price="2,500"
        view=""
        down="https://drive.google.com/file/d/10y_AvBZDP4jgEPBvsS4e2qH1olETKMDq/view"
      />
      <ItemBar
        color="#f49ac1"
        title="Cy5-Azide"
        catno="FLUOR-020-05"
        qty=" 5 mg"
        price="7,000"
        view=""
        down="https://drive.google.com/file/d/10y_AvBZDP4jgEPBvsS4e2qH1olETKMDq/view"
      />
      <ItemBar
        color="#f49ac1"
        title="CalFluor-azide"
        catno="FLUOR-030-01"
        qty="1 mg"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1G9zYWrKII6Lv9Sam4_51w4d0ne9XfUnS/view"
      />
      <ItemBar
        color="#f49ac1"
        title="CalFluor-azide"
        catno="FLUOR-030-05"
        qty=" 5 mg"
        price="9,000"
        view=""
        down="https://drive.google.com/file/d/1G9zYWrKII6Lv9Sam4_51w4d0ne9XfUnS/view"
      />
      <ItemBar
        color="#f49ac1"
        title="FAM-azide"
        catno="FLUOR-040-01"
        qty="1 mg"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1AuBKoqBKLrBm5RIcsIlqDT-BCibkyByA/view"
      />
      <ItemBar
        color="#f49ac1"
        title="FAM-azide"
        catno="FLUOR-040-05"
        qty="5 mg"
        price="9,000"
        view=""
        down="https://drive.google.com/file/d/1AuBKoqBKLrBm5RIcsIlqDT-BCibkyByA/view"
      />
      <ItemBar
        color="#f49ac1"
        title="UniQTM Universal Quencher"
        catno="FLUOR-007-100"
        qty="100 mg"
        price="3,500"
        view=""
        down="https://drive.google.com/file/d/1P8xxlUSHRqRiREK7Y3iOkQYwHjT1-KUQ/view"
      />
    </div>
  );

}

export default ItemCombinedFlu;
