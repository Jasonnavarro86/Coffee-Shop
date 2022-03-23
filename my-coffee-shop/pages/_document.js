import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link rel='preload' href='/fonts/PaletteMosaic-Regular.ttf' as='font' crossOrigin='anonymous'></link>
             
            </Head>
            <body className="my-doc">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}