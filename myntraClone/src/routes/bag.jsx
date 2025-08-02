import BagSummary from "../components/bagSummary";
import BagItem from "../components/bagItem";
import { useSelector } from "react-redux";
const Bag = () => {
  const items = useSelector((state) => state.items);
  const bagItems = useSelector((state) => state.bag);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="leftSideofBag">
          {finalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        {bagItems.length != 0 ? (
          <BagSummary />
        ) : (
          <p className="bagEmpty">Bag is Empty</p>
        )}
      </div>
    </main>
  );
};
export default Bag;
