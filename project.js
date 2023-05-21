import styled from 'styled-components';

const App = () => {
  return (
    <>
      <TitleContainer>
        <BlueSection>
          <BlueTitleText>      LR의 {"\n"}      IT블로그         </BlueTitleText>
        </BlueSection>
        <WhiteSection>
          <WhiteBoxes>
            <WhiteBox>
              <Image src="https://via.placeholder.com/150" alt="example" />
              <TextContainer>
                <Title>블로그 이전 안내</Title>
                <Description>
                  Jan 24, 2021 {"\n"}#Notice
               </Description>
              </TextContainer>
            </WhiteBox>

            <WhiteBox>
              <Image src="https://via.placeholder.com/150" alt="example" />
              <TextContainer>
                <Title>오드로이드 H2 XPEnology 6.2.3 최신버전 설치 가이드</Title>
                <Description>
                  Aug 29, 2020 {"\n"}#Synology
               </Description>
              </TextContainer>
            </WhiteBox>

            <WhiteBox>
                <Image src="https://via.placeholder.com/150" alt="example" />
                <TextContainer>
                  <Title>Synology Download Station 클라이언트 V1.1</Title>
                  <Description>
                   Sep 2, 2020 {"\n"}#Development
                </Description>
              </TextContainer>
            </WhiteBox>
            <WhiteBox>
              <Image src="https://via.placeholder.com/150" alt="example" />
              <TextContainer>
                <Title>드래곤볼 에디션 : 아이폰X 직접 조립 후기</Title>
                <Description>
                  Apr 11, 2020 {"\n"}#Development
                </Description>
              </TextContainer>
            </WhiteBox>
            <Line />
            <Line />
          </WhiteBoxes>
          <SquareBoxes>
            <SquareBox>
              <Image2 src="https://via.placeholder.com/150" alt="example" />
              <TextContainer>
                <Title>드래곤볼 에디션 : 아이폰X 직접 조립 후기</Title>
                <Description>
                  Apr 11, 2020 {"\n"}#Development
                </Description>
              </TextContainer>
            </SquareBox>
            <SquareBox>
              <Image2 src="https://via.placeholder.com/150" alt="example" />
              <TextContainer>
                <Title>드래곤볼 에디션 : 아이폰X 직접 조립 후기</Title>
                <Description>
                  Apr 11, 2020 {"\n"}#Development
                </Description>
              </TextContainer>
            </SquareBox>
            <SquareBox>
              <Image2 src="https://via.placeholder.com/150" alt="example" />
              <TextContainer>
                <Title>드래곤볼 에디션 : 아이폰X 직접 조립 후기</Title>
                <Description>
                  Apr 11, 2020 {"\n"}#Development
                </Description>
              </TextContainer>
            </SquareBox>
          </SquareBoxes>
        </WhiteSection>
      </TitleContainer>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
`;

const BlueSection = styled.div`
  flex: 0.25;
  height: 100vh;
  background-color: #00277b;
  display: flex;
  justify-content: flex;
  align-items: flex-end;
`;

const BlueTitleText = styled.p`
  color: white;
  font-size: 50px;
  margin-right: 50px;
  margin-bottom: 50px;
  white-space: pre-wrap;
  border-bottom: 1.5px solid white;
  text-align: left;
  padding-left: 50px;
`;

const WhiteSection = styled.div`
  flex: 0.75;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  margin-left: 200px;
  `;

const WhiteBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const WhiteBox = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 550px;
  height: 160px;
  border: 1px solid #ddd;
`;

const BoxText = styled.p`
  font-size: 20px;
  text-align: center;
`;

const Line = styled.div`
  height: 2px;
  background-color: #f0f0f0;
  margin: 30px;
`;

const SquareBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`;

const SquareBox = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 500px;
  border: 1px solid #ddd;
`;

const Image = styled.img`
  width: 160px;
  height: 160px;
  margin-right: 20px;
`;

const Image2 = styled.img`
  width: 300px;
  height: 300px;
  margin-right: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #00277b;
`;

const Description = styled.p`
  font-size: 18px;
  color: #888;
  margin-top: 10px;
  white-space: pre-wrap;
`;
export default App;
