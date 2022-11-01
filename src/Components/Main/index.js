import { Layout } from "antd";
import { PromissyNote } from "../../Pages/PromissyNote";
const { Content } = Layout;
export function Main() {
  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <div className="site-card-border-less-wrapper">
          <PromissyNote />
        </div>
      </div>
    </Content>
  );
}
