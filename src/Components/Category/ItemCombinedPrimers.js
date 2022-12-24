import ItemBar2 from "../ItemBar2";
import ItemBarHead from "../ItemBarHead";

function ItemCombinedPrimer() {

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
      <ItemBar2
        color="#798cc9"
        title="M13 Universal Primer Forward"
        catno="PR001"
        qty="20 µl of 100 nM"
        price=" 1,000"
        view="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/preview"
        down="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/view"
      />
      <ItemBar2
        color="#798cc9"
        title="M13 Universal Primer Reverse"
        catno="PR002"
        qty="20 µl of 100 nM"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1VdL2kzU3BsggrScsj39VN-95jY00rDHj/view"
      />
      <ItemBar2
        color="#798cc9"
        title="T7 promoter primer Forward"
        catno="PR003"
        qty="20 µl of 100 nM"
        price="2,500"
        view=""
        down="https://drive.google.com/file/d/10y_AvBZDP4jgEPBvsS4e2qH1olETKMDq/view"
      />
      <ItemBar2
        color="#798cc9"
        title="T7 terminator primer Reverse"
        catno="PR004"
        qty="20 µl of 100 nM"
        price="7,000"
        view=""
        down="https://drive.google.com/file/d/10y_AvBZDP4jgEPBvsS4e2qH1olETKMDq/view"
      />
      <ItemBar2
        color="#798cc9"
        title="Oligo (dT)21"
        catno="PR005"
        qty="20 µl of 100 nM"
        price="3,000"
        view=""
        down="https://drive.google.com/file/d/1G9zYWrKII6Lv9Sam4_51w4d0ne9XfUnS/view"
      />
      <ItemBar2
        color="#798cc9"
        title="Random Nonamer"
        catno="PR006"
        qty="20 µl of 100 nM"
        price="9,000"
        view=""
        down="https://drive.google.com/file/d/1G9zYWrKII6Lv9Sam4_51w4d0ne9XfUnS/view"
      />
    </div>
  );

}

export default ItemCombinedPrimer;
