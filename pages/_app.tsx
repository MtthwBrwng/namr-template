import type {AppProps} from 'next/app'
import Head from "next/head";
import {MantineProvider} from "@mantine/core";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>NAMR</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                </QueryClientProvider>
            </MantineProvider>
        </>
    )
}
