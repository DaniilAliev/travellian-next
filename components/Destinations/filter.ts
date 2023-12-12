import { Hotel } from "@/types/types";
import getPrice from "./getPrice";
import { AppDispatch } from "@/slices/store";
import { OtelsActionsType } from ".";

const filter = (
	filtered: Hotel[],
	dispatch: AppDispatch,
	otelsActions: OtelsActionsType,
	minPrice: number,
	maxPrice: number,
	guests: string,
	daysDiff: number
) => {
	if (minPrice) {
		const filteredByMinPrice = filtered.filter((item: Hotel) => getPrice(guests, item.price, daysDiff) > minPrice);
		dispatch(otelsActions.addOtels(filteredByMinPrice));
	}

	if (maxPrice) {
		const filteredByMaxPrice = filtered.filter((item: Hotel) => getPrice(guests, item.price, daysDiff) < maxPrice);
		dispatch(otelsActions.addOtels(filteredByMaxPrice));
	}

	if (minPrice && maxPrice) {
		const filteredByPriceRange = filtered.filter((item: Hotel) => {
			const price = getPrice(guests, item.price, daysDiff);
			return price >= minPrice && price <= maxPrice;
		});
		dispatch(otelsActions.addOtels(filteredByPriceRange));
	}
}

export default filter