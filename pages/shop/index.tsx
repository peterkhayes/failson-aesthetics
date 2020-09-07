import { ShopLink } from 'components/ActiveLink';
import Breadcrumbs from 'components/Breadcrumbs';
import Layout from 'components/Layout';

export default function ShopPage() {
  return (
    <Layout>
      <Breadcrumbs>
        <ShopLink />
      </Breadcrumbs>
      Coming soon
    </Layout>
  );
}
