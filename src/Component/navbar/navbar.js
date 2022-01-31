import React from "react";
import "./navbar.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
function NavBar(props) {
  const setList = props.setList;
  let date = new Date();

  function cancelTodo() {
    setList([]);
  }

  return (
    <div className="nav-bar">
      <div className="left">
        <AccessTimeIcon fontSize="large" />
        <h2>{date.toString().slice(0, 21)}</h2>
      </div>
      <div className="right" onClick={cancelTodo}>
        <PlaylistRemoveIcon fontSize="large" />
        <h2>Cancel</h2>
      </div>
    </div>
  );
}

export default NavBar;
