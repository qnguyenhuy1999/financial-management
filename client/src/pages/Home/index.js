import React, { useState } from "react";
import { Button } from "antd";

import ContainerCard from "../../components/ContainerCard";
import AddTransaction from "../../components/AddTransaction";
import ListTransaction from "../../components/ListTransaction";

export default function () {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <ContainerCard />

      <Button
        type="primary"
        className="add-transaction"
        style={{ margin: "20px 0" }}
        onClick={() => setShowModal(true)}
      >
        Add transaction
      </Button>

      <AddTransaction showModal={showModal} setShowModal={setShowModal} />

      <ListTransaction />
    </div>
  );
}
