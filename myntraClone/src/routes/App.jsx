import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import { Outlet } from "react-router-dom";
import FetchingItems from "../components/fetchingItems.jsx";
import LoadingSpinner from "../components/loadingSpinner.jsx";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus = useSelector((state) => state.fetchingStatus);

  return (
    <>
      <Header />
      <FetchingItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}
export default App;
