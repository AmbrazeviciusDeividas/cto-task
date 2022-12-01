import fetch from 'node-fetch';

let adults = 'adults=2';
let children = 'children=0';
let check_in = 'checkIn=2023-04-19';
let numb_of_nights = 'los=4';

let url = 'https://www.agoda.com/api/cronos/property/BelowFoldParams/GetSecondaryData?finalPriceView=2&isShowMobileAppPrice=false&cid=1896991&numberOfBedrooms=&familyMode=false&' + adults + '&' + children + '&rooms=1&maxRooms=0&' + check_in + '&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=EUR&isFreeOccSearch=false&tag=3341445A246135566B72555A514137324F736F443741&isCityHaveAsq=false&' + numb_of_nights + '&searchrequestid=2e843c4f-5e99-4dd1-aaa8-45b4e2145232&hotel_id=2454174&all=false&price_view=2&sessionid=v5upsgclwxyep05teu1glft5&pagetypeid=7';
let settings = { method: "GET" };

(async () => {

    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let rooms = json.roomGridData.masterRooms;
            let rooms_data = {};
            rooms.forEach(element => {

                let room_name = element.name;
                let room_pricing = element.rooms[0].price;

                rooms_data[room_name] = room_pricing.display;

            });
            const object_values = Object.values(rooms_data);
            const min_price = Math.min(...object_values);
            console.log('-------all rooms-------');
            console.log(rooms_data);
            console.log('-------Minimum price-------');
            console.log(min_price);
        });

})();
