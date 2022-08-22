import "./MenuItem.css";

function MenuItem(props) {
  return( 
    <div className="item">
        <div className="itemName"> {props.name.toUpperCase()} </div>
    </div>
  );
}

export default MenuItem;
