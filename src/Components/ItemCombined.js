import ItemBar from "./ItemBar";
import ItemBarHead from "./ItemBarHead";

function ItemCombined() {
    return (
        <div className="grid gap-0 place-items-center pb-[10%]" style={{ backgroundColor: "white" }}>
            <ItemBarHead color="#ffffff" title="Name" catno="Catalog" qty="Quantity" price="Price" />
            <ItemBar color="#A6D8B5" title="pcr" catno="6969" qty="1000" price="1000" link="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/view" />
            <ItemBar color="#A6D8B5" title="pcr1" catno="6969" qty="1000" price="1000" />
            <ItemBar color="#A6D8B5" title="pcr1" catno="6969" qty="1000" price="1000" />
            <ItemBar color="#A6D8B5" title="pcr1" catno="6969" qty="1000" price="1000" />
            <ItemBar color="#A6D8B5" title="pcr1" catno="6969" qty="1000" price="1000" />
            <ItemBar color="#A6D8B5" title="pcr2" catno="6969" qty="1000" price="1000" />
        </div>
    );
}

export default ItemCombined