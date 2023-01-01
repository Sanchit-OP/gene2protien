export default function DistributorDetail(props){
    return(
        <div className="p-10 m-20 my-5">
            <div className="text-[#7cc576] font-semibold text-xl">
                {props.cname}
            </div>
            <div className="font-medium text-lg black">
                Name: {props.name}
            </div>
            <div>
                Contact no : {props.no}
            </div>
            <div>
                Email : {props.email}
            </div>
            <div>
                Address : {props.address}
            </div>
        </div>
    );
}