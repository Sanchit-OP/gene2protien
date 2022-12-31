import ItemBar from "../ItemBar";
import ItemBar4 from "../itembar/ItemBar4";
import ItemBar5 from "../itembar/ItemBar5";
import ItemBar6 from "../itembar/ItemBar6";
import ItemBar7 from "../itembar/ItemBar7";


import ItemBarHead from "../ItemBarHead";

function ItemCombinedRNA() {
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
      <ItemBar7
        color="#c4df9b"
        title="G2P-ZOLTM"
        catno="RNA001"
        qty="100 ml"
        price=" 1,000"
        view="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/preview"
        down="https://drive.google.com/file/d/16bLGZ4Zqi_-rioIMnXKi2mRc1IdtHmx9/view?usp=share_link
        "
      />
      
      <ItemBar
        color="#c4df9b"
        title="RNA Vanish (Equivalent to RNA Zap)"
        catno="RNA002"
        qty="100 ml"
        price="2,500"
        view=""
        down="https://drive.google.com/file/d/1Qro9R-UC-isUfcX6iCotFvIdsLiD6tzB/view?usp=share_link
        "
      />
      <ItemBar
        color="#c4df9b"
        title="RNA Stay (Equivalent to RNA Later)"
        catno="RNA003"
        qty="100 ml"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1KnCstBJ1cFNfBIFWiGycJVhhtF-bgW_E/view?usp=share_link
        "
      />
      <ItemBar4
        color="#c4df9b"
        title="Compli-ScriptTM 1st strand cDNA synthesis Kit"
        catno="RNA005-50"
        qty="50 Rxn"
        price="7,000"
        view=""
        down="https://drive.google.com/file/d/1GRhxCQZwJM9BE7aq-V873oHJD1U4wVXy/view?usp=share_link
        "
      />
      <ItemBar4
        color="#c4df9b"
        title="Compli-ScriptTM 1st strand cDNA synthesis Kit"
        catno="RNA005-100"
        qty="100 Rxn"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1G9zYWrKII6Lv9Sam4_51w4d0ne9XfUnS/view"
      />
      <ItemBar5
        color="#c4df9b"
        title="Compli-AmpTM  High fidelity Two step RT-PCR Kit"
        catno="RNA007-50"
        qty="50 Rxn"
        price="9,000"
        view=""
        down="https://drive.google.com/file/d/1Hy0RaTII9t2V83IiotNmkKph_EXfJakS/view?usp=share_link
        "
      />
      <ItemBar5
        color="#c4df9b"
        title="Compli-AmpTM  High fidelity Two step RT-PCR Kit"
        catno="RNA007-100"
        qty="100 Rxn"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/130djPRFrjtkNsgzJkbgfihtH0kIHvRGV/view?usp=share_link
        "
      />
      <ItemBar6
        color="#c4df9b"
        title="Compli-AmpTM One-Step RT-PCR Kit"
        catno="RNA009-50"
        qty="50 Rxn"
        price="9,000"
        view=""
        down="https://docs.google.com/document/d/1CadiA4xaZu4Qt3lnfDhBxb5Es8joX1pI/edit?usp=share_link&ouid=113248020034958671231&rtpof=true&sd=true
        "
      />
      <ItemBar6
        color="#c4df9b"
        title="Compli-AmpTM One-Step RT-PCR Kit"
        catno="RNA009-100"
        qty="100 Rxn"
        price="3,500"
        view=""
        down="https://docs.google.com/document/d/1CadiA4xaZu4Qt3lnfDhBxb5Es8joX1pI/edit?usp=share_link&ouid=113248020034958671231&rtpof=true&sd=true
        "
      />
    </div>
  );
}

export default ItemCombinedRNA;
