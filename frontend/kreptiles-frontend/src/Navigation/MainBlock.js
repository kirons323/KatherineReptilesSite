import React from "react";
import SideNav from "./SideNav";
import ContentBlock from "./ContentBlock";

export default function MainContent() {

  const [selectedSection, setSelectedSection] = React.useState(0);

  return (
    <div style={{ display: "flex"}}>
      <SideNav onSelect={setSelectedSection}></SideNav>
      <ContentBlock section={selectedSection}></ContentBlock>
    </div>

    
  );
}