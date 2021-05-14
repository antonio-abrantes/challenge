import React, { useEffect, useState } from "react";
import { CartProvider } from "../contexts/CartContext";

import { Container, Wrapper } from "../styles/App";
import GlobalStyles from "../styles/GlobalStyles";

import Header from "../components/Header";
import NavBar from "../components/NavBar";

import { IProfile } from "../interfaces/ExportInterfaces";

function MyApp({ Component, pageProps }) {
  const [dataProfile, setDataProfile] = useState<IProfile>({} as IProfile);

  useEffect(() => {
    fetch("http://localhost:3333/profile-info")
      .then((response) => response.json())
      .then((data) => {
        setDataProfile(data[0]);
      });
  }, []);

  return (
    <>
      <CartProvider>
        <Container>
          <Wrapper>
            <Header dataProfile={dataProfile} />

            <NavBar />
          </Wrapper>
        </Container>

        <Component {...pageProps} />
        <GlobalStyles />
      </CartProvider>
    </>
  );
}

export default MyApp;
