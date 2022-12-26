import ItemBar from "../ItemBar";
import ItemBar2 from "../ItemBar2";

import ItemBarHead from "../ItemBarHead";

function ItemCombinedFlu() {

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
        color="#f49ac1"
        title="Cy3-Azide"
        catno="FLUOR-010-01"
        qty="1 mg"
        price=" 1,000"
        view="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/preview"
        down="https://drive.google.com/file/d/12OCMp14UpGciu3vA_XAbhU_jmRtNENMg/view?usp=share_link
        "
      />
      <ItemBar
        color="#f49ac1"
        title="Cy3-Azide"
        catno="FLUOR-010-05"
        qty=" 5 mg"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/12OCMp14UpGciu3vA_XAbhU_jmRtNENMg/view?usp=share_link
        "
      />
      <ItemBar
        color="#f49ac1"
        title="Cy5-Azide"
        catno="FLUOR-020-01"
        qty="1 mg"
        price="2,500"
        view=""
        down="https://drive.google.com/file/d/1L6Xyl5wYiP4bZX9OiSI59nZ2Wy-69iOl/view?usp=share_link
        "
      />
      <ItemBar
        color="#f49ac1"
        title="Cy5-Azide"
        catno="FLUOR-020-05"
        qty=" 5 mg"
        price="7,000"
        view=""
        down="https://drive.google.com/file/d/1L6Xyl5wYiP4bZX9OiSI59nZ2Wy-69iOl/view?usp=share_link
        "
      />
      <ItemBar
        color="#f49ac1"
        title="CalFluor-azide"
        catno="FLUOR-030-01"
        qty="1 mg"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1Egw2_HekciGf3HWCnqgo6jbryrPzI35H/view?usp=share_link
        "
      />
      <ItemBar
        color="#f49ac1"
        title="CalFluor-azide"
        catno="FLUOR-030-05"
        qty=" 5 mg"
        price="9,000"
        view=""
        down="https://drive.google.com/file/d/1Egw2_HekciGf3HWCnqgo6jbryrPzI35H/view?usp=share_link
        "
      />
      <ItemBar2
        color="#f49ac1"
        title="FAM-azide"
        catno="FLUOR-040-01"
        qty="1 mg"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1AuBKoqBKLrBm5RIcsIlqDT-BCibkyByA/view"
      />
      <ItemBar2
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
        down="https://drive.google.com/file/d/1AgsUnZDSOYJENACZi77S4JrbphT2SCax/view?usp=share_link
        "
      />
    </div>
  );

}

export default ItemCombinedFlu;
