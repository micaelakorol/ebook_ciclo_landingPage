import React from "react";
import { DetailsEbook } from "../../styled-componets/Content";
import { ItemEbook } from "./DataEbook/Items";

const EbookContent = () => {
  const item = ItemEbook.items;
  return (
    <DetailsEbook>
      {item.map((content) => (
        <summary key={item.id}>{content.item}</summary>
      ))}
    </DetailsEbook>
  );
};

export default EbookContent;
