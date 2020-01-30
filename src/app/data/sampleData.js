const sampleData = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://www.randomlists.com/img/animals/chipmunk.webp',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://www.randomlists.com/img/animals/elk.webp'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://www.randomlists.com/img/animals/frog.webp'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://www.randomlists.com/img/animals/grizzly_bear.webp',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://www.randomlists.com/img/animals/grizzly_bear.webp'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://www.randomlists.com/img/animals/chipmunk.webp'
      }
    ]
  }
];

export default sampleData;
