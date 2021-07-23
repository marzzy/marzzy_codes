import Head from 'next/head';
import { Logos, LogoCards } from 'components/kit/logos';
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
            <h2>palletes</h2>
            <Palletes />
          </section>
          <section>
            <h2>logos</h2>
            <Logos />
          </section>
          <section>
            <h2>logo-cards</h2>
            <LogoCards />
          </section>
        </main>
      </body>
    </div>
  );
}
