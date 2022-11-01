import React from "react";
import { Details } from "../../../Details";
import ShowUserInfromation from "../../components/ShowUsersInformation";

const index = () => {
  return (
      <Details headerTitle={"صادر کننده سفته"}>
        <ShowUserInfromation></ShowUserInfromation>
      </Details>
  );
};

export default index;
