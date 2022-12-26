export default function Title(props){
    return(
        <div className="p-10 mt-10 ml-10 text-5xl font-semibold" style={{ color: props.color }}>
            {props.data}
        </div>
    );
}