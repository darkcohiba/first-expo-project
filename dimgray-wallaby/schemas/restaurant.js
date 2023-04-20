// schemas/restaurant.js
export default {
    name: 'restaurant',
    type: 'document',
    title: 'Restaurant',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Restaurant name',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image of the Restaurant'
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating',
        validation: (Rule) => Rule.required()
            .min(1)
            .max(5)
            .error("Please enter a number between 1 and 5")
      },
      {
        name: 'address',
        type: 'string',
        title: 'Address',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'genre',
        type: 'string',
        title: 'Genre'
      },
      {
        name: 'lat',
        type: 'number',
        title: 'Latitude of the Restaurant'
      },
      {
        name: 'long',
        type: 'number',
        title: 'Longitude of the Restaurant'
      },
      {
        name: 'short_description',
        type: 'string',
        title: 'Short Description',
        validation: (Rule)=> Rule.max(200)
      }
    ]
}