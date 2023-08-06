
/*
import React, { Component } from "react";

// Complete this Component
const ListItem = (props) => {
  //DeStructuring 

  const {id,name,link,icon,bgColor}=props;
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: bgColor
      }}
    >
      <img src={icon} alt={name} role="img" />
      <a href={link}>{name}</a>
    </div>
  );
};

export default ListItem;

*/

import React from "react";

const ListItem = (props) => {
  return (
    <div
      className="ListItem"
      style={{
        backgroundColor: props.bgColor,
        height: 30
      }}
    >
      <img src={props.icon} alt={props.name} />
      <a href={props.link}>{props.name}</a>
    </div>
  );
};

export default ListItem;

