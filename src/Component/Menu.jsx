import { MegaMenu } from "primereact/megamenu";
const Menu = () => {
  const menuItems = [
    {
      label: "Menu",
      items: [
        [
          {
            label: "Living Room",
            items: [
              { label: "Accessories" },
              { label: "Armchair" },
              { label: "Coffee Table" },
              { label: "Couch" },
              { label: "TV Stand" },
            ],
          },
        ],
        [
          {
            label: "Kitchen",
            items: [
              { label: "Bar stool" },
              { label: "Chair" },
              { label: "Table" },
            ],
          },
          {
            label: "Bathroom",
            items: [{ label: "Accessories" }],
          },
        ],
        [
          {
            label: "Bedroom",
            items: [
              { label: "Bed" },
              { label: "Chaise lounge" },
              { label: "Cupboard" },
              { label: "Dresser" },
              { label: "Wardrobe" },
            ],
          },
        ],
        [
          {
            label: "Office",
            items: [
              { label: "Bookcase" },
              { label: "Cabinet" },
              { label: "Chair" },
              { label: "Desk" },
              { label: "Executive Chair" },
            ],
          },
        ],
      ],
    },
  ];
  return (
    <MegaMenu
      pt={{
        root: { className: "h-7 bg-[black] text-white" },
        menuButtonIcon: { none: true },
      }}
      model={menuItems}
      breakpoint="960px"
    />
  );
};
export default Menu;
