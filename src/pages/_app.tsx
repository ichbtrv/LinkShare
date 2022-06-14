import "../styles/global.css";
import { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactNode, useState } from "react";
import { FileContext } from "@/contexts/FileContext";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [files, setFiles] = useState<File[] | null>(null);

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <FileContext.Provider value={[files, setFiles]}>
      <Component {...pageProps} />
    </FileContext.Provider>
  );
}
