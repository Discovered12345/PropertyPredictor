import React from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { MapPin } from 'lucide-react';

interface Props {
  onSelect: (address: string, placeId: string, location: google.maps.LatLngLiteral) => void;
}

export default function AddressSearch({ onSelect }: Props) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: 'us' } },
    debounce: 300,
  });

  const handleSelect = async (address: string, placeId: string) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      onSelect(address, placeId, { lat, lng });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          placeholder="Enter an address..."
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {status === 'OK' && (
        <ul className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border">
          {data.map(({ place_id, description }) => (
            <li
              key={place_id}
              onClick={() => handleSelect(description, place_id)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}