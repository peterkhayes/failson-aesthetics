import {
  CollectionsLink,
  CollectionLink,
  CollectionItemLink,
} from 'components/ActiveLink';
import Breadcrumbs from 'components/Breadcrumbs';
import Layout from 'components/Layout';
import {
  COLLECTIONS,
  CollectionId,
  Collection,
  CollectionItemId,
  CollectionItem,
} from 'data/collections';
import { GetStaticProps, GetStaticPaths } from 'next';

type Props = {
  collection: Collection;
  item: CollectionItem;
};

export default function CollectionPage({ collection, item }: Props) {
  return (
    <Layout>
      <Breadcrumbs>
        <CollectionsLink />
        <CollectionLink collection={collection} />
        <CollectionItemLink collection={collection} item={item} />
      </Breadcrumbs>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = COLLECTIONS.flatMap(({ id: collectionId, items }) =>
    items.map(({ id: itemId }) => `/collections/${collectionId}/${itemId}`),
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  Props,
  { collectionId: CollectionId; itemId: CollectionItemId }
> = async ({ params }) => {
  const collection = COLLECTIONS.find(({ id }) => id === params?.collectionId);
  if (collection == null) throw new Error('Missing collection');
  const item = collection.items.find(({ id }) => id === params?.itemId);
  if (item == null) throw new Error('Missing item');

  return { props: { collection, item } };
};
