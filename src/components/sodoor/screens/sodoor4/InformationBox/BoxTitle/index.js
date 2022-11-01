import "./style.css";
export function BoxTitle(props) {
  return (
    <div className="BoxTitle_container">
      {props.icon}
      <p className="BoxTitle_Title">{props.title}</p>
    </div>
  );
}
