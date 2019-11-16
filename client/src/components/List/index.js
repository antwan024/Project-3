import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

export function Dropdown({ children }) {
  return (
      <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Choose a task!</label>
      </div>
        <select class="custom-select" id="inputGroupSelect01">
          {children}
        </select>
    </div>
  );
}

export function DropItem({children}) {
  return (
        <option selected>{children}</option>
  );
}
