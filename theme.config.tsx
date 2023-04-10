import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Head from 'next/head';

const config: DocsThemeConfig = {
    logo: <span style={{ fontSize: "24px" }}><strong>Ders</strong>NOTLARI</span>,
    project: {
        link: 'https://github.com/heyturkiye58',
    },
    chat: {
        link: 'https://discord.com/users/852606013126606908'
    },
    docsRepositoryBase: 'https://github.com/heyturkiye58',
    useNextSeoProps() {
        return {
            titleTemplate: '%s - Notlarım',
            openGraph: {
                type: 'website',
                locale: 'en_IE',
                url: 'https://notlarim-ht-kd.fg-w.ga/',
                site_name: 'DersNOTLARI',
            }
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700" />
                <style>{`
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: "Poppins", sans-serif;
                    }

                `}</style>
            </Head>
        </>
    ),
    footer: {
        component: <></>
    },
    i18n: [
        { locale: 'tr', text: 'Türkçe (Ana dil)' }
    ]
}

export default config;
