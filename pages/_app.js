import '<nig>/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}



// npx tailwindcss -i ./styles/globals.css -o ./styles/output.css --watch