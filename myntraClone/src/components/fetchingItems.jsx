import { useEffect } from "react";
import { itemSliceActions } from "../store/ItemSlice";
import { fetchingStatusActions } from "../store/fetchingStatusSlice";
import { useSelector, useDispatch } from "react-redux";

const FetchingItems = () => {
  const fetchStatus = useSelector((state) => state.fetchingStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.markFetchingDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchingStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((response) => response.json())
      .then(({ items }) => {
        dispatch(fetchingStatusActions.markFetchingDone());
        dispatch(fetchingStatusActions.markFetchingFinished());
        dispatch(itemSliceActions.addInitialItems(items));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchingItems;
