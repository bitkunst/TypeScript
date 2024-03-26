// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    color: string;
    markerContent(): string;
}

// Hiding Functionality
// Limit access to the Google Map
export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1, // initial Map zoom level
            center: {
                lat: 0,
                lng: 0,
            }, // initial Map center
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}
