
function FooterList(props){
    return(
        <div className="mr-16">
            <ul className="list-none">
                <li class="font-bold leading-10">{props.name[0]}</li>
                <li className='leading-10'>{props.name[1]}</li>
                <li className='leading-10'>{props.name[2]}</li>
                <li className='leading-10'>{props.name[3]}</li>
                <li className='leading-10'>{props.name[4]}</li>
            </ul>
        </div>
    );
}

export default FooterList;
