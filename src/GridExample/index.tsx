import React, { Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

import CustomStatsToolPanel from "./CustomStatsToolPanel";
import AccordionExampleToolPanel from './AccordionExampleToolPanel';

interface GridExampleState {
  modules?: any,
  columnDefs?: any,
  defaultColDef?: any,
  icons?: any,
  sideBar?: any,
  frameworkComponents?: any,
  onGridReady?: any,
  rowData?: any
}

class GridExample extends Component<{}, GridExampleState> {
  protected gridApi = null;
  protected gridColumnApi = null;

  constructor(props: any) {
    super(props);

    this.state = {
      modules: AllModules,
      columnDefs: [
        {
          field: "athlete",
          width: 150,
          filter: "agTextColumnFilter"
        },
        {
          field: "age",
          width: 90
        },
        {
          field: "country",
          width: 120
        },
        {
          field: "year",
          width: 90
        },
        {
          field: "date",
          width: 110
        },
        {
          field: "gold",
          width: 100,
          filter: false
        },
        {
          field: "silver",
          width: 100,
          filter: false
        },
        {
          field: "bronze",
          width: 100,
          filter: false
        },
        {
          field: "total",
          width: 100,
          filter: false
        }
      ],
      defaultColDef: { filter: true },
      icons: { "custom-stats": '<span class="ag-icon ag-icon-custom-stats"></span>' },
      sideBar: {
        toolPanels: [
          {
            id: "columns",
            labelDefault: "Columns",
            labelKey: "columns",
            iconKey: "columns",
            toolPanel: "agColumnsToolPanel"
          },
          {
            id: "filters",
            labelDefault: "Filters",
            labelKey: "filters",
            iconKey: "filter",
            toolPanel: "agFiltersToolPanel"
          },
          {
            id: "customStats",
            labelDefault: "Custom Stats",
            labelKey: "customStats",
            iconKey: "custom-stats",
            toolPanel: "customStatsToolPanel"
          },
          {
            id: "accordionExample",
            labelDefault: "Accordion Example",
            labelKey: "accordionExample",
            iconKey: "accordion-example",
            toolPanel: "accordionExampleToolPanel"            
          }
        ],
        defaultToolPanel: "customStats"
      },
      frameworkComponents: { 
        customStatsToolPanel: CustomStatsToolPanel,
        accordionExampleToolPanel: AccordionExampleToolPanel
      },
      rowData: []
    };
  }

  onGridReady = (params: any) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = (data: any) => {
      this.setState({ rowData: data });
    };

    httpRequest.open(
      "GET",
      "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json"
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  };

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ height: "100%", boxSizing: "border-box" }}>
          <div
            id="myGrid"
            style={{
              height: "100%",
              width: "100%"
            }}
            className="ag-theme-balham"
          >
            <AgGridReact
              modules={this.state.modules}
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              icons={this.state.icons}
              sideBar={this.state.sideBar}
              frameworkComponents={this.state.frameworkComponents}
              onGridReady={this.onGridReady}
              rowData={this.state.rowData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GridExample;
