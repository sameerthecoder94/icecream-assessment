# Overview

We love ice cream! Tell us what the top five ice cream shops in Alpharetta are and why.

## Requirements
- use the Yelp Fusion API (https://api.yelp.com/v3/)
- output should include:
  - business name
  - business address (street, city)
  - excerpt from a review of that business
  - name of the person that wrote the review
  - business information should be output in the order received from the API response

## Notes
- The data is handled through Yelp Fusion API
- The data when error is seen in the http request will switch to a dummy data which is formatted in the same way as the data that could have been received by the components.
- When the image of the data on `SingleItemComponent` is clicked, a `Modal` is opened in the application which will show the brief about the ice-cream shop.
- The brief on the Modal includes the data given by the `Yelp Business Search` API.

## Config File
```js
    const config = {
        bearerAuthorization:
            'your API key',
        clientID: 'your client ID (Optional)',
        cors: 'https://cors-anywhere.herokuapp.com/',
        baseURL: 'https://api.yelp.com/v3/',
        defaultParams: {
            location: 'Alpharetta',
            categories: 'icecream',
        },
    };

export default config;
```