import React from "react";

import "./SideMenu.css";
import { Typography } from "@material-ui/core";
import { Select, MenuItem as MaterialMenuItem } from "@material-ui/core";

function MenuItem({ icon, label }) {
  return (
    <div className="menu__item">
      <div className="menu__icon">{icon}</div>
      <Typography className="menu__title">{label}</Typography>
    </div>
  );
}

export default function SideMenu() {
  return (
    <div className="leftside">
      <div className="leftside__menu">
        <MenuItem icon="X" label="Per Te" />
        <MenuItem icon="X" label="Scopri" />
        <MenuItem icon="X" label="Seguiti" />
        <div className="leftside__login">Accedi per commentare</div>
      </div>
      <div className="leftside__other">
        <div className="leftside__footer">
          Lorem Ipsum Dolor Sit Amet Bla bla Ciccio Formaggio
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value="Italiano"
          >
            <MaterialMenuItem value="">
              <em>None</em>
            </MaterialMenuItem>
            <MaterialMenuItem value={"Italiano"}>Italiano</MaterialMenuItem>
            <MaterialMenuItem value={"Inglese"}>Inglese</MaterialMenuItem>
            <MaterialMenuItem value={"Tedesco"}>Tedesco</MaterialMenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
}
