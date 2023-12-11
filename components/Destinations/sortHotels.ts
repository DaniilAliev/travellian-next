import { AppDispatch } from "@/slices/store";
import { Hotel } from "@/types/types";
import { OtelsActionsType } from ".";

const sortHotels = (hotels: Hotel[], sortOrder: string, dispatch: AppDispatch, otelsActions: OtelsActionsType) => {
  let sorted: Hotel[];
  switch (sortOrder) {
    case 'price-increase':
      sorted = [...hotels].sort((a, b) => a.price - b.price);
      dispatch(otelsActions.addOtels(sorted));
      break;
    case 'price-decrease':
      sorted = [...hotels].sort((a, b) => b.price - a.price);
      dispatch(otelsActions.addOtels(sorted));
      break;
    case 'rating-increase':
      sorted = [...hotels].sort((a, b) => a.rating - b.rating);
      dispatch(otelsActions.addOtels(sorted));
      break;
    case 'rating-decrease':
      sorted = [...hotels].sort((a, b) => b.rating - a.rating);
      dispatch(otelsActions.addOtels(sorted));
      break;
    default:
      break;
  }
};

export default sortHotels;