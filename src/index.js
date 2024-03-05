import _ from "lodash";
import "./style.css";
import createBoard from "./gameLogic/gameboard.js";

function component() {
  const contentDiv = document.getElementById("content");
  const element = document.createElement("div");

  element.appendChild(createBoard);
  contentDiv.appendChild(element);
}

document.body.appendChild(component());
