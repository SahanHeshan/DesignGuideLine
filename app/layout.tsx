import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./globals.css";
import type { Metadata } from "next";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

import { HeaderMegaMenu } from "@/components/Header/HeaderMegaMenu";
import { createTheme, rem, MantineColorsTuple } from "@mantine/core";
import { FooterLinks } from "@/components/footer/FooterLinks";

// const foss_theme: MantineColorsTuple = [
//   "#ecf4ff",
//   "#dce4f5",
//   "#b9c7e2",
//   "#94a8d0",
//   "#748dc0",
//   "#5f7cb7",
//   "#5474b4",
//   "#44639f",
//   "#3a5890",
//   "#2c4b80",
// ];

const theme = createTheme({
  // colors: {
  //   foss_theme,
  // },

  fontFamily: "Inter, sans-serif",

  // shadows: {
  //   md: "1px 1px 3px rgba(0, 0, 0, .25)",
  //   xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  // },

  // headings: {
  //   fontFamily: "Inter, sans-serif",
  //   sizes: {
  //     h1: { fontSize: rem(36) },
  //   },
  //   },
});

export const metadata: Metadata = {
  title: "FOSS Community - University of Kelaniya",
  description: "FOSS UoK Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderMegaMenu />
          {children}
          <FooterLinks />
        </MantineProvider>
      </body>
    </html>
  );
}
