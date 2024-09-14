import { memo } from "react";

function Child() {
  console.log("child component");
  return <>
  
  </>;
}

export default memo(Child);