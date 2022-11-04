import { Layout } from "antd";
import React from "react";
import { Main } from "./../Main/index";
export function Dashboard() {
  return (
    <>
      <Layout>
        {/* <Sider>Sider</Sider> */}
        <Layout>
          {/* <Header /> */}

          <Main />
        </Layout>
      </Layout>
    </>
  );
}
