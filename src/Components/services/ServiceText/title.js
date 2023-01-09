export default function Title(props){
    return(
        <div >
            <div className="p-10 mt-10 ml-10 text-5xl font-semibold hidden md:block" style={{ color: props.color }}>
                {props.data}
            </div>
            <div className="p-10 mt-10  text-3xl font-semibold  block md:hidden" style={{ color: props.color }}>
            {props.data}
        </div>
    </div>
    );
}