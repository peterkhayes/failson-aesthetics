import { Children, Fragment } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Breadcrumbs({ children }: Props) {
  return (
    <div className="terminal-nav">
      <nav className="terminal-menu">
        <ul
          style={{
            justifyContent: 'flex-start',
            marginBottom: 'calc(var(--global-space) * 4)',
          }}
        >
          {Children.toArray(children).map((child, i) => (
            <Fragment key={i}>
              {i !== 0 && <li>|</li>}
              <li>{child}</li>
            </Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
}

// export function Collec
