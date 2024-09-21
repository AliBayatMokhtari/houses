import LoadingSpinner from "components/common/loading-spinner/LoadingSpinner";
import HouseDetails from "components/house-details/HouseDetails";
import { FullLoading } from "pages/house-list/house-list.style";
import { useParams } from "react-router-dom";
import useHouse from "services/use-house";

export default function HouseDetailsPage() {
  const { houseId } = useParams();
  const { data, isFetching, isLoading, error } = useHouse(Number(houseId));

  if (isLoading)
    return (
      <FullLoading>
        <LoadingSpinner size={100} />
      </FullLoading>
    );

  if (!data || error) return <div>Something went wrong...</div>;

  return (
    <div>
      <HouseDetails house={data} loading={isFetching} />
    </div>
  );
}
