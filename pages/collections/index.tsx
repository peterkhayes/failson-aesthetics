import { CollectionsLink, CollectionLink } from 'components/ActiveLink';
import Breadcrumbs from 'components/Breadcrumbs';
import Layout from 'components/Layout';
import { COLLECTIONS } from 'data/collections';

export default function CollectionsPage() {
  return (
    <Layout>
      <Breadcrumbs>
        <CollectionsLink />
      </Breadcrumbs>
      <ul>
        {COLLECTIONS.map((collection) => (
          <li key={collection.id}>
            <CollectionLink collection={collection} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
