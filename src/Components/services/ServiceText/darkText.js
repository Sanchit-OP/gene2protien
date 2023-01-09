export default function DarkText(props){
    return(
        <div>
            <div className="px-10 ml-14 font-medium text-lg mr-40 leading-7 hidden md:block">
                {props.data}
            </div>
            <div className="px-10  font-semibold text-lg  leading-8 block md:hidden">
                {props.data}
            </div>
        </div>
    );
}