import styled from 'styled-components/macro'

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1110px;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`

export const Heading = styled.h1`
  text-align: center;
  color: #171f46;
  font-family: roboto;
  font-weight: 500;
  font-size: 18px;
  line-height: 2.7;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const CCBPHeading = styled.span`
  color: #2b237c;
  font-family: roboto;
  font-weight: 500;
  font-size: 24px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
