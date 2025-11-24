import Head from "next/head";

export default function Home() {
      async function handleLogin(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Login bem-sucedido!");
    } else {
      alert("Usuário ou senha incorretos");
    }
  }
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

      <style>{`
          *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,body{  
    height: 100%;
}


body{
    overflow-y:hidden;
    background: linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%);
    background-repeat: no-repeat;
    width: 100%;
    min-height: 52vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

main.container{
    background-color: floralwhite;
    position: relative;
    min-width: 250px;
    min-height: 40vh;
    padding: 2rem;
    box-shadow: 5px 5px 15px rgba(0,0,0,);
    border-radius: 8px;
}

main h1{
    position: relative;
    font-weight: 600px;
    margin-bottom: 2rem;
}

main h1::before{
    content:"";
    position: absolute;
    height: 4px;
    width: 25px;
    bottom: 3px;
    left: 0;
    border-radius: 8px;
    background: linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%);
}

form{
    display: flex;
    flex-direction: column;
}

.input input{
    background-color: transparent;
    border: transparent;
    outline: 0;
}

.input{
    position: relative;
}

main .input{
    margin-bottom: 1.5rem
}

.input .underline::before{
    content:"";
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: -5px;
    left: 0;
    background: rgba(0,0,0,0.2)
}

.input .underline::after{
    content:"";
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: -5px;
    left: 0;
    background: linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%);
    transform: scaleX(0);
    transition: all .3s ease-in-out;
    transform-origin: left;
}

.input input:focus ~ .underline::after{
    transform: scaleX(1);
}

.botao button{
    width: 100%;
    height: 30px;
    cursor: pointer;
    border: transparent;
}
        `}</style>

      <main className="container">
        <h1>login</h1>

        <form onSubmit={handleLogin}>
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
