import HomeItem from "../components/homeitem.jsx";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((state) => state.items);
  return (
    <main>
      <div className="items-container">
        {items.map((items) => (
          <HomeItem key={items.id} item={items}></HomeItem>
        ))}
      </div>
    </main>
  );
};

export default Home;
