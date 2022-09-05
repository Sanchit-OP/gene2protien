import './FooterList.css';
function FooterList(props){
    return(
        <div className="list-cont">
            <ul className="footlistitems">
                <li class="bold">{props.name[0]}</li>
                <li>{props.name[1]}</li>
                <li>{props.name[2]}</li>
                <li>{props.name[3]}</li>
                <li>{props.name[4]}</li>
            </ul>
        </div>
    );
}

export default FooterList;