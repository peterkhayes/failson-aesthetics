import {
  CollectionsLink,
  CollectionLink,
  CollectionItemLink,
} from 'components/ActiveLink';
import Breadcrumbs from 'components/Breadcrumbs';
import Layout from 'components/Layout';
import { COLLECTIONS, CollectionId, Collection } from 'data/collections';
import { GetStaticProps, GetStaticPaths } from 'next';

type Props = {
  collection: Collection;
};

export default function CollectionPage({ collection }: Props) {
  return (
    <Layout>
      <Breadcrumbs>
        <CollectionsLink />
        <CollectionLink collection={collection} />
      </Breadcrumbs>
      <section>
        <h1>{collection.name}</h1>
        <p>{collection.season}</p>
        <ul>
          {collection.items.map((item) => (
            <li key={item.id}>
              <CollectionItemLink collection={collection} item={item} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = COLLECTIONS.map(({ id }) => `/collections/${id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  Props,
  { collectionId: CollectionId }
> = async ({ params }) => {
  const collection = COLLECTIONS.find(({ id }) => id === params?.collectionId);
  if (collection == null) throw new Error('Missing collection');
  return { props: { collection } };
};
