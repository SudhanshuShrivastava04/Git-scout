import React from "react";

function Userdetails({user} : {user : any}) {
  return <div>{user.login}</div>;
}

export default Userdetails;
