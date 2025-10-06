import { type FC } from "react";

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: FC<ItemListContainerProps> = ({ greeting }) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
