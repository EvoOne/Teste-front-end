export interface GeocoderResponse {
  status: string;
  error_message: string;
  results: google.maps.GeocoderResult[];
}


export interface Coordinates {
  address: string
  location: google.maps.LatLng
}
