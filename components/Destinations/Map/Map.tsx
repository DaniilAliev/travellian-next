// import React, { useEffect, useRef, useState } from 'react';
// import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

// const MapComponent = ({ address }) => {
//   const [mapState, setMapState] = useState({ center: [55.75, 37.57], zoom: 13 });
//   const [ymaps, setYmaps] = useState(null);

//   const geocode = async () => {
//     try {
//       const response = await ymaps.geocode(address);
//       console.log(response);
//       const coordinates = response.geoObjects.get(0).geometry.getCoordinates();
//       setMapState((prevState) => ({ ...prevState, center: coordinates }));
//     } catch (error) {
//       console.error('Error geocoding address:', error);
//     }
//   };

//   useEffect(() => {
//     if (ymaps) {
//       geocode();
//     }
//   }, [address, ymaps]);

//   return (
//     <YMaps
//       query={{
//         apikey: '2d5c8c9d-bc56-4a60-9db0-41ced8408eed'
//       }}
//       onLoad={(ymaps) => {
//         setYmaps(ymaps);
//       }}
//     >
//       <div>
//         <Map defaultState={mapState} modules={['geocode']}>
//           <Placemark geometry={mapState.center} />
//         </Map>
//       </div>
//     </YMaps>
//   );
// };

// export default MapComponent;