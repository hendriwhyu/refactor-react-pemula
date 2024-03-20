import { Button } from "flowbite-react";
import { FaTrash } from "react-icons/fa";
import React from "react";

const DeleteButton = (props) => {
  const { id, onDelete } = props;
  return (
    <Button color="failure" onClick={() => onDelete(id)}>
      {/* <HiShoppingCart className="mr-2 h-5 w-5" /> */}
      <FaTrash className="mr-2 h-5 w-5" />
      Delete
    </Button>
  );
};

export default DeleteButton;
