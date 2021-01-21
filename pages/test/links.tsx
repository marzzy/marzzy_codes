import Link from 'next/link';
import Head from 'next/head';

export default function Links() {
  const id = 1;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="robots" content="noarchive" />
      </Head>
      <div>
        <h1> Links example </h1>
        <br />

        <h2>external link example</h2>
        <a href="https://github.com/marzzy"> this is an external link</a>
        <br />

        <h2>internal link example</h2>
        <Link href="/">
          link to home page(internal example)
        </Link>
        <br />

        <h2>adding class name to internal link</h2>
        <span>
          If the child of Link is a custom component that wraps an  `a` tag,
          you must add `passHref` to Link.
          This is necessary if you’re using libraries like `styled-components`.
        </span>
        <br />
        <Link href="/">
          <a className="foo" target="_blank" rel="noopener noreferrer">
            home page
          </a>
        </Link>
        <br />

        <h2>use complete usage of `Link`</h2>
        <span>1</span>
        <Link href="/" as="go to home">
          go to home
        </Link>
        <br />

        <span>2</span>
        <Link href={{
          pathname: '/posts/[id]',
          query: { id: '1', testParams: 'hi' },
        }}
        >
          1th post link with params
        </Link>
        <br />

        <span>3</span>
        <Link href={`/posts/${id}`}> 1th post another way</Link>
        <br />

        <span>4</span>
        <Link href="/posts?item=10" scroll={false}>
          Disabled-scroll to the top of the page Link
        </Link>
      </div>
    </>
  );
}
