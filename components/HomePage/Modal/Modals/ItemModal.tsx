import Image from "next/image";
import { SpecialOfferData } from "../../SpecialOffer/data";
import { FC } from "react";

interface Info {
	info: SpecialOfferData,
}

const ItemModal: FC<Info> = ({ info }) => {
	return (
		<>
			<h1>{`${info.city}, ${info.country}`}</h1>
			<div style={{width: '100%', height: '300px', paddingBottom: 40}}>
				<Image src={info.img} alt="item" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}/>
			</div>
			<p>5 nights and 4 days in 5 star hotel, breakfast and lunch included. 
      Very popular during the renaissance. Passage and going through the 
      cites of the world in classical literature.</p>
		</>
	)
}

export default ItemModal;