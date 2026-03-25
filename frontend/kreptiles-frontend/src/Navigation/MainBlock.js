import React from "react";
import SideNav from "./Header";
import ContentBlock from "../Content/ContentBlock";
import "../css/MainBlock.css";

export default function MainContent() {

  const [selectedSection, setSelectedSection] = React.useState(0);

  return (
    <div className="main-content" style={{ display: "flex"}}>
      <SideNav onSelect={setSelectedSection}></SideNav>
      <ContentBlock section={selectedSection}></ContentBlock>
    </div>

    
  );
}