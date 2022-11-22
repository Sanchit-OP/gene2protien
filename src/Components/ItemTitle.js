function ItemTitle(props) {
    return (
        <div className="grid place-items-center py-20 " style={{ backgroundColor: "white" }}>
            <h1 className="font-[poppins] font-extrabold text-8xl">{props.title}</h1>
            <h1 className="font-[poppins] font-extrabold text-4xl opacity-50">Catalogue</h1>
        </div>
    );
}

export default ItemTitle