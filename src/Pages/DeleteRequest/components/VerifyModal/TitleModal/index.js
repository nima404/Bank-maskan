import { CheckSquareOutlined } from "@ant-design/icons";
export function TitleModal({ title }) {
  return (
    <div style={{ display: "flex" }}>
      <CheckSquareOutlined />
      <p style={{ paddingRight: "10px", paddingTop: "-5px" }}>{title}</p>
    </div>
  );
}
