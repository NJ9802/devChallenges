import React from "react";

interface ItemsContainerProps {
  children: React.ReactNode;
}

const ItemsContainer: React.FC<ItemsContainerProps> = ({ children }) => {
  return (
    <div
      className="
        flex
        flex-col
        gap-3
        "
    >
      {children}
    </div>
  );
};

export default ItemsContainer;
