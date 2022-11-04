import { Span } from "../Span";
import "./style.css";
export function BoxTitleN(props) {
  return (
    <div className="BoxTitle_container_N">
      <p className="BoxTitle_Title_N">{props.icon}{props.title}</p>
      <Span number={props.number} />
    </div>
  );
}