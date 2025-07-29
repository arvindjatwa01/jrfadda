// src/components/MapComponent.js
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const [mapCenter, setMapCenter] = useState(null);
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
  
  const apiKey = 'AIzaSyAWJRq40ao0OgwMGU5hwzeYvupHGYBkvoU'; // Replace with your actual API key
  const address = '3rd Floor 23, 24, Gopalpura Bypass Rd, near Triveni Flyover 25, Vishveshvariya Nagar, Arjun Nagar, Jaipur, Rajasthan 302018';

  // Geocode address to get latitude and longitude
  const geocodeAddress = async () => {
    if (!window.google || !window.google.maps) {
      console.error('Google Maps API is not loaded');
      return;
    }

    const geocoder = new window.google.maps.Geocoder();

    try {
      const results = await new Promise((resolve, reject) => {
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK') {
            resolve(results[0].geometry.location);
          } else {
            reject('Geocode was not successful for the following reason: ' + status);
          }
        });
      });

      setMapCenter({ lat: results.lat(), lng: results.lng() });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (window.google && window.google.maps) {
      setIsGoogleMapsLoaded(true);
      geocodeAddress();
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={apiKey} onLoad={() => setIsGoogleMapsLoaded(true)}>
      <div className="h-[400px]">
        {isGoogleMapsLoaded && mapCenter && (
          <GoogleMap
            mapContainerStyle={{ height: '100%', width: '100%' }}
            center={mapCenter}
            zoom={15}
          >
            <Marker position={mapCenter} />
          </GoogleMap>
        )}
      </div>
    </LoadScript>
  );
};

export default MapComponent;
