import Head from "next/head";
import "../pages/css/style.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta name="description" content="exemplo de descrição para o meu site" />
        <meta name="keywords" content="palavras-chaves-separadas-por-virgulas" />
        <meta name="author" content="Augusto" />
        <title>table form</title>
      </Head>

      <main className="container">
        <h1>login</h1>

        <form action="">
          <div className="input">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
            />
            <div className="underline"></div>
          </div>

          <div className="input">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <div className="underline"></div>
          </div>

          <div className="botao">
            <a href="https://www.youtube.com">
              <button type="button">Continuar</button>
            </a>
          </div>
        </form>
      </main>
    </>
  );
}
