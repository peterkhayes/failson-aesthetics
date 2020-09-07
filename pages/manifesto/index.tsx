import { ManifestoLink } from 'components/ActiveLink';
import Breadcrumbs from 'components/Breadcrumbs';
import Layout from 'components/Layout';

export default function ManifestoPage() {
  return (
    <Layout>
      <Breadcrumbs>
        <ManifestoLink />
      </Breadcrumbs>
      Coming soon
    </Layout>
  );
}
