import Head from 'next/head';
import Palletes from 'components/kit/palletes';

export default function Kit() {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="robots" content="noarchive" />
        <title>Marzzy Code Kit</title>
      </Head>
      <body>
        <main>
          <section>
            <h1>palletes</h1>
            <Palletes />
          </section>
        </main>
      </body>
    </div>
  );
}
