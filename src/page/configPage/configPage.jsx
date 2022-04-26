import React, { useState } from "react";
import { Drawer, Button } from "antd";
import MenuTree from "./components/menuTree";
const App = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rigfhtVisible, setRightVisible] = useState(false);

  const showDrawer = () => {
    setLeftVisible(true);
    setRightVisible(true);
  };

  const onClose = (value) => {
    value === "left" ? setLeftVisible(false) : setRightVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="left"
        onClose={() => onClose("left")}
        mask={false}
        visible={leftVisible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={() => onClose("right")}
        mask={false}
        visible={rigfhtVisible}
      >
        <MenuTree></MenuTree>
      </Drawer>
    </>
  );
};

export default App;
