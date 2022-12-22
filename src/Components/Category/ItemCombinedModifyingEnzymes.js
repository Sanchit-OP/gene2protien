import ItemBar from "../ItemBar";
import ItemBar2 from "../ItemBar2";
import ItemBarHead from "../ItemBarHead";

function ItemCombinedModify() {

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
        color="#fdc689"
        title="DNA Polymerase I E. coli (Klenow)"
        catno="ME325"
        qty="100U"
        price=" 1,000"
        view="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/preview"
        down="https://drive.google.com/file/d/1qqq2c_C8r_UDo0KxCl3cB1zemVsPkWbm/view?usp=share_link
        "
      />
      <ItemBar
        color="#fdc689"
        title="MMLV Reverse Transcriptase (Rnase H minus)"
        catno="ME0050"
        qty="5000U"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1qw5xrGCNX2RBxTEYgj6HVswiq8fpUw1J/view?usp=share_link
        "
      />
      <ItemBar
        color="#fdc689"
        title="T4 DNA Ligase"
        catno="ME319"
        qty="10000U"
        price="2,500"
        view=""
        down="https://drive.google.com/file/d/1PQBwfIAaEGDTAgspGWUhUxB0ksN1_kOe/view?usp=share_link
        "
      />
      <ItemBar
        color="#fdc689"
        title="T4 Polynucleotide Kinase"
        catno="ME311"
        qty="250U"
        price="7,000"
        view=""
        down="https://drive.google.com/file/d/1fGFvrp0rfVru3H1nIVPa7E6SQCQ4EU2n/view?usp=share_link
        "
      />
      <ItemBar2
        color="#fdc689"
        title="T4 RNA Ligase"
        catno="ME349"
        qty="250U"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1G9zYWrKII6Lv9Sam4_51w4d0ne9XfUnS/view"
      />
      <ItemBar
        color="#fdc689"
        title="T7 RNA Polymerase"
        catno="ME355"
        qty="1000U"
        price="9,000"
        view=""
        down="https://drive.google.com/file/d/1HfiGbdykyLehjXU2WNOmd6kCtA7f5Jqt/view?usp=share_link
        "
      />
      <ItemBar2
        color="#fdc689"
        title="Thermolabile Alkaline Phosphatase"
        catno="ME365"
        qty="200U"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1AuBKoqBKLrBm5RIcsIlqDT-BCibkyByA/view"
      />
      <ItemBar
        color="#fdc689"
        title="Uracil-DNA Glycosylase (UDG)"
        catno="ME335"
        qty="200U"
        price="9,000"
        view=""
        down="https://drive.google.com/file/d/1DKLYXpv7LyatTD2e5ZsaRjAO2Mps_C5x/view?usp=share_link
        "
      />
      <ItemBar2
        color="#fdc689"
        title="Rnase A"
        catno="ME375"
        qty="50mg"
        price="3,500"
        view=""
        down="https://drive.google.com/file/d/1P8xxlUSHRqRiREK7Y3iOkQYwHjT1-KUQ/view"
      />
    </div>
  );

}

export default ItemCombinedModify;
