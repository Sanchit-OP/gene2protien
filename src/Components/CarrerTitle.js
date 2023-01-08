function CarrerTitle() {
    return (
        <div>
        <div className="hidden mb:block">
        <div className="grid place-items-center py-20 " style={{ backgroundColor: "white" }}>
            <h1 className="font-[poppins] font-extrabold text-8xl">We're</h1>
            <div className="font-extrabold text-8xl flex"><div className="green">Hi</div>ring!</div>
            <h1 className="font-[poppins] font-extrabold text-4xl opacity-50"></h1>
        </div>
        </div>
        <div className="block mb:hidden">
        <div className="grid place-items-center py-20 " style={{ backgroundColor: "white" }}>
            <h1 className="font-[poppins] font-extrabold text-6xl">We're</h1>
            <div className="font-extrabold text-6xl flex"><div className="green">Hi</div>ring!</div>
            <h1 className="font-[poppins] font-extrabold text-4xl opacity-50"></h1>
        </div>
        </div>
        </div>
    );
}

export default CarrerTitle