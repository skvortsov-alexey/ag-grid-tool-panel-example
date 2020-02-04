import React from "react";
import CollapsibleGroupItem from "./CollapsibleGroupItem";

function CollapsibleGroup() {
  return (
    <div>
      <CollapsibleGroupItem title="Group 1">some content</CollapsibleGroupItem>
      <CollapsibleGroupItem title="Group 2">some content</CollapsibleGroupItem>
      <CollapsibleGroupItem title="Group 3">some content</CollapsibleGroupItem>
      <CollapsibleGroupItem title="Group 4">some content</CollapsibleGroupItem>
      <CollapsibleGroupItem title="Group 5">some content</CollapsibleGroupItem>
    </div>
  );
}

export default CollapsibleGroup;
