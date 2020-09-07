export type CollectionId = string;

export type Collection = {
  id: CollectionId;
  name: string;
  season: string;
  image: string;
  description: string;
  items: Array<CollectionItem>;
};

export type CollectionItemId = string;

export type CollectionItem = {
  id: CollectionItemId;
  name: string;
  image: string;
  description: string;
};

export const COLLECTIONS: Array<Collection> = [
  {
    id: 'floor',
    name: 'Floor Mattresses',
    season: 'Summer 2019',
    image: '',
    description: '',
    items: [
      {
        id: '1',
        name: 'Jason',
        image: '',
        description: 'Pile of clothes, XBox 360, 8-pack LaCroix',
      },
      {
        id: '2',
        name: 'Amy',
        image: '',
        description: '3 towels, cat fur',
      },
    ],
  },
  {
    id: 'weeb',
    name: 'Weeb Shit',
    season: 'Winter 2019',
    image: '',
    description: '',
    items: [],
  },
];
