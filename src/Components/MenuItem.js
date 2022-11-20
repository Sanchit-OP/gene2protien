

function MenuItem(props) {
  return( 
    <div className="m-10">
        <div className="text-white font-bold" > {props.name.toUpperCase()} </div>
    </div>
  );
}

export default MenuItem;
