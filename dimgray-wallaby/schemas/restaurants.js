// schemas/restaurants.js
export default {
    name: 'restaurants',
    type: 'document',
    title: 'Restaurants',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'imgUrl',
        type: 'url',
        title: 'imgUrl'
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating'
      },
      {
        name: 'address',
        type: 'string',
        title: 'Address'
      },
      {
        name: 'genre',
        type: 'string',
        title: 'Genre'
      },
      {
        name: 'shortDescription',
        type: 'string',
        title: 'Short Description'
      },
      {
        name: 'dishes',
        type: 'array',
        title: 'Dishes',
        of: [
            {
              type: "object",
              name: "dish",
              fields: [
                { type: "string", name: "title" },
                { type: "number", name: "price" },
                { type: "string", name: "description"}
              ]
            }
          ],
      }
    ]
  }