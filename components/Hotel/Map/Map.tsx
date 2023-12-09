import React, { FC, useEffect, useRef, useState } from 'react';
import { useYMaps } from '@pbe/react-yandex-maps';

const MapComponent: FC<{address: string}> = ({ address }) => {
  const [mapState, setMapState] = useState({ center: [], zoom: 15 });

  const mapRef = useRef(null);
  const ymaps = useYMaps(['Map', 'Placemark', 'geocode', 'GeocodeResult']);

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    const myMap = new ymaps.Map(mapRef.current, {
      center: mapState.center,
      zoom: mapState.zoom,
    });

    ymaps.ready(() => {
      ymaps
        .geocode(address)
        .then((res: any) => {
          if (res !== null && res?.geoObjects) {
            const coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            myMap.setCenter(coordinates);
            myMap.geoObjects.add(
              new ymaps.Placemark(coordinates, {
                balloonContent: 'Адрес 1',
              })
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });


  }, [ymaps, address]);

  return (
    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '40px'}}>
     <div ref={mapRef} style={{ maxWidth: '1000px', width: '100%', height: '300px' }} />
    </div>
  );
};

export { MapComponent };