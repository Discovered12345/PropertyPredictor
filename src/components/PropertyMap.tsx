import React from 'react';
import { GoogleMap, Marker, StreetViewPanorama } from '@react-google-maps/api';
import type { PropertyDetails } from '../types';

interface Props {
  property: PropertyDetails;
}

const mapContainerStyle = {
  width: '100%',
  height: '300px',
};

export default function PropertyMap({ property }: Props) {
  return (
    <div className="space-y-4">
      <div className="rounded-lg overflow-hidden">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={property.location}
          zoom={15}
        >
          <Marker position={property.location} />
          <StreetViewPanorama
            position={property.location}
            visible={true}
          />
        </GoogleMap>
      </div>
      {property.imageUrl && (
        <img
          src={property.imageUrl}
          alt={property.address}
          className="w-full h-48 object-cover rounded-lg"
        />
      )}
    </div>
  );
}