import React, { Component } from "react";

interface CollapsibleGroupItemProps {
  title: string;
  children?: React.ReactNode;
}

interface CollapsibleGroupItemState {
  isCollapsed: boolean;
}

class CollapsibleGroupItem extends Component<
  CollapsibleGroupItemProps,
  CollapsibleGroupItemState
> {
  constructor(props: CollapsibleGroupItemProps) {
    super(props);
    const a = 3;
    this.state = { isCollapsed: true };
  }

  handleClick = () => {
    this.setState(
      (prevState: CollapsibleGroupItemState) => ({
        isCollapsed: !prevState.isCollapsed
      }),
      this.handleStateChange
    );
  };

  handleStateChange = () => {
    if (!this.state.isCollapsed) {
      console.log(`Expanded ${this.props.title}`);
    }
  };

  render() {
    const { title, children } = this.props;
    const { isCollapsed } = this.state;
    const rootClassName = `ag-group-component ag-collapsible ag-alignment-stretch ag-level-0 ${
      isCollapsed ? "ag-collapsed" : ""
    }`;

    return (
      <div
        className={rootClassName}
        onClick={this.handleClick}
        ref="filterGroupComp"
      >
        <div className="ag-group-component-title-bar" ref="groupTitle">
          <span className="ag-column-group-icons">
            <span
              className="ag-column-group-opened-icon ag-hidden"
              ref="eGroupOpenedIcon"
            >
              <span
                className="ag-icon ag-icon-tree-open"
                unselectable="on"
              ></span>
            </span>
            <span
              className="ag-column-group-closed-icon"
              ref="eGroupClosedIcon"
            >
              <span
                className="ag-icon ag-icon-tree-closed"
                unselectable="on"
              ></span>
            </span>
          </span>
          <span ref="lbGroupTitle" className="ag-group-component-title">
            {title}
          </span>
        </div>
        <div ref="eContainer" className="ag-group-component-container">
          {children}
        </div>
      </div>
    );
  }
}

export default CollapsibleGroupItem;
