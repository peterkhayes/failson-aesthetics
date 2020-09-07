import classNames from 'classnames';
import { Collection, CollectionItem } from 'data/collections';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    activeClassName?: string;
  };

export default function ActiveLink({
  children,
  href,
  as,
  className,
  activeClassName = 'active',
  ...props
}: Props) {
  const { asPath } = useRouter();
  const isActive = asPath === href || asPath === as;

  return (
    <Link href={href} as={as}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a {...props} className={classNames(className, isActive && activeClassName)}>
        {children}
      </a>
    </Link>
  );
}

export function CollectionsLink() {
  return <ActiveLink href="/collections">Collections</ActiveLink>;
}

export function CollectionLink({ collection }: { collection: Collection }) {
  return (
    <ActiveLink href="/collections/[collectionId]" as={`/collections/${collection.id}`}>
      {collection.name}
    </ActiveLink>
  );
}

export function CollectionItemLink({
  collection,
  item,
}: {
  collection: Collection;
  item: CollectionItem;
}) {
  return (
    <ActiveLink
      href="/collections/[collectionId]/[itemId]"
      as={`/collections/${collection.id}/${item.id}`}
    >
      {item.name}
    </ActiveLink>
  );
}

export function ManifestoLink() {
  return <ActiveLink href="/manifesto">Manifesto</ActiveLink>;
}

export function ShopLink() {
  return <ActiveLink href="/shop">Shop</ActiveLink>;
}
