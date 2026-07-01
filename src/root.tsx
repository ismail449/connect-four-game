import "./index.css";

export function Root(props: { url: URL }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Connect Four</title>
      </head>
      <body>
        <App {...props} />
      </body>
    </html>
  );
}

function App(props: { url: URL }) {
  return <div id="root">Connect Four Game</div>;
}
