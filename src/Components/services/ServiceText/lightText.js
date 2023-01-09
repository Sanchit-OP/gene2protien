export default function LightText(props){
    return(
        <div>
            <div className="px-10 ml-14 font-normal text-base mr-40 leading-7 hidden md:block">
                {props.data}
            </div>
            <div className="px-10  font-normal text-base leading-7 block md:hidden">
                {props.data}
            </div>
        </div>
    );
}