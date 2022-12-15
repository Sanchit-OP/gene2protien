import ItemBar from "../ItemBar";
import ItemBarHead from "../ItemBarHead";

function ItemCombinedRNA() {

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
        color="#C8C2A5"
        title="G2P-ZOLTM"
        catno="RNA001"
        qty="100 ml"
        price=" 1,000"
        view="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/preview"
        down="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/view"
      />
      <ItemBar
        color="#C8C2A5"
        title="RNA Stay (Equivalent to RNA Later)"
        catno="RNA003"
        qty="100 ml"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1VdL2kzU3BsggrScsj39VN-95jY00rDHj/view"
      />
      <ItemBar
        color="#C8C2A5"
        title="RNA Vanish (Equivalent to RNA Zap)"
        catno="RNA002"
        qty="100 ml"
        price="2,500"
        view=""
        down="https://drive.google.com/file/d/10y_AvBZDP4jgEPBvsS4e2qH1olETKMDq/view"
      />
      <ItemBar
        color="#C8C2A5"
        title="Compli-ScriptTM 1st strand cDNA synthesis Kit"
        catno="RNA005-50"
        qty="50 Rxn"
        price="7,000"
        view=""
        down="https://drive.google.com/file/d/10y_AvBZDP4jgEPBvsS4e2qH1olETKMDq/view"
      />
      <ItemBar
        color="#C8C2A5"
        title="Compli-ScriptTM 1st strand cDNA synthesis Kit"
        catno="RNA005-100"
        qty="100 Rxn"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1G9zYWrKII6Lv9Sam4_51w4d0ne9XfUnS/view"
      />
      <ItemBar
        color="#C8C2A5"
        title="Compli-AmpTM  High fidelity Two step RT-PCR Kit"
        catno="RNA007-50"
        qty="50 Rxn"
        price="9,000"
        view=""
        down="https://drive.google.com/file/d/1G9zYWrKII6Lv9Sam4_51w4d0ne9XfUnS/view"
      />
      <ItemBar
        color="#C8C2A5"
        title="Compli-AmpTM  High fidelity Two step RT-PCR Kit"
        catno="RNA007-100"
        qty="100 Rxn"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1AuBKoqBKLrBm5RIcsIlqDT-BCibkyByA/view"
      />
      <ItemBar
        color="#C8C2A5"
        title="Compli-AmpTM One-Step RT-PCR Kit"
        catno="RNA009-50"
        qty="50 Rxn"
        price="9,000"
        view=""
        down="https://drive.google.com/file/d/1AuBKoqBKLrBm5RIcsIlqDT-BCibkyByA/view"
      />
      <ItemBar
        color="#C8C2A5"
        title="Compli-AmpTM One-Step RT-PCR Kit"
        catno="RNA009-100"
        qty="100 Rxn"
        price="3,500"
        view=""
        down="https://drive.google.com/file/d/1P8xxlUSHRqRiREK7Y3iOkQYwHjT1-KUQ/view"
      />
    </div>
  );

}

export default ItemCombinedRNA;
