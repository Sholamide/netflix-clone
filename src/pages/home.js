import React from "react";
import { Feature, OptForm } from "../components";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited Novels</Feature.Title>
          <Feature.SubTitle>
            Acess anywhere, anytime, any place.
          </Feature.SubTitle>

          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Get Started</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to explore? Enter your email to sign up to our newsletter
              for new novel drops notifications.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
