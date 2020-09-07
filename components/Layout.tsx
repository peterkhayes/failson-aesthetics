import Head from 'next/head';
import ActiveLink, { CollectionsLink, ShopLink, ManifestoLink } from './ActiveLink';

type Props = {
  children?: React.ReactNode;
  title?: string;
};

export default function Layout({ children, title }: Props) {
  const fullTitle = ['Failson Aesthetics', title].filter(Boolean).join(' - ');
  return (
    <div className="terminal">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <meta name="description" content="A site for Andrea's plants" />
        <meta name="og:title" content={fullTitle} /> */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <title>{fullTitle}</title>
      </Head>
      <div className="container">
        <div className="terminal-nav">
          <header className="terminal-logo">
            <ActiveLink href="/">Failson Aesthetics</ActiveLink>
          </header>
          <nav className="terminal-menu" style={{ flex: 1 }}>
            <ul>
              <li>
                <ManifestoLink />
              </li>
              <li>
                <CollectionsLink />
              </li>
              <li>
                <ShopLink />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container">{children || 'Coming soon'}</div>
    </div>
  );
}
