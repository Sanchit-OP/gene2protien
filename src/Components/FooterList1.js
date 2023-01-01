function FooterList1(props){
    return(
        <div className="mr-16">
            <ul className="list-none">
                <li class="font-bold leading-10">{props.name[0]}</li>
                <li className='leading-10'><a href='/Contact'>{props.name[1]}</a></li>
                <li className='leading-10'><a href='/Career'></a>{props.name[2]}</li>
                <li className='leading-10'><a href="/Distributor">{props.name[3]}</a></li>
                <li className='leading-10'>{props.name[4]}</li>
            </ul>
        </div>
    );
}

export default FooterList1;
