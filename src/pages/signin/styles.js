import { styled } from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 88px;

  display: flex;
  justify-content: space-between;
`

export const Wrapper = styled.div`
  max-width: 360px;
`

export const Column = styled.div`
  flex: 1;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  width: 380px;
  line-height: 44px;
`

export const TitleSignUp = styled.p`
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  line-height: 44px;
`

export const SubTitleSignUp = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;
`

export const RightAccept = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-top: 40px;
  margin-bottom: 12px;
`

export const LoginText = styled.strong`
  font-size: 16px;

  a {
    color: #23DD7A;
  }
`
