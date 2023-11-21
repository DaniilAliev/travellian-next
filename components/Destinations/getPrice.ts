const getPrice = (guestsNumber: string, price: number, daysDiff: number ) : number => {
  const guestsNumberNum = Number(guestsNumber);
  
  if (guestsNumberNum === 1) {
    return price * daysDiff;
  } else {
    return (price / 2 * guestsNumberNum * daysDiff);
  }
}

export default getPrice;