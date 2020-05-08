import { Hexagon } from 'constants/hexagonShape'
import { COLORS, BORDER_RADIUS, FONT_SIZE } from 'constants/theme'

import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { Layout } from 'components/Layout'
import { tablet, mobile, laptop, smallMobile } from 'utils/CssUtils'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { Button } from 'components/Button'
import { NextPage } from 'next'
import { Dropzone } from 'components/Dropzone'
import { FormResponseApi } from 'services/FormResponseApi'
import { Client } from 'filestack-js'
import { Spinner } from 'components/Icons/Spinner'
import { Check } from 'components/Icons/Check'

const StyledLayout = styled(Layout)`
  overflow: visible;
`

const Container = styled.div`
  margin-left: 120px;
  height: 100%;
  position: relative;
  overflow: visible;

  ${laptop`
    background: linear-gradient(180deg, ${COLORS.GREY} -30%, #fff 80%);
    overflow-x: hidden;
    overflow-y: scroll;
  `}

  ${tablet`
      margin-left: 80px;
  `}

  ${mobile`
      margin-left: 0;
  `}
`

const HexagonTopSection = styled.div`
  position: absolute;
  max-width: 1100px;
  width: 80vw;
  height: 850px;
  left: -200px;
  top: -320px;
  background: linear-gradient(180deg, ${COLORS.GREEN} 0%, ${COLORS.BLUE} 100%);
  transform: rotate(-9deg);
  clip-path: ${Hexagon};

  ${laptop`
    left: -150px;
  `}

  ${tablet`
    height: 600px;
    top: -160px;
    left: -120px;
    min-width: 700px;
  `}

  ${mobile`
    top: -100px;
    height: 450px;
    left: -80px;
    min-width: 500px;
  `}
`

const TextContainer = styled.div`
  height: 80%;
  width: 55%;
  margin: 0 auto;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  transform: rotate(9deg);

  ${tablet`
    height: 75%;
    width: 55%;
  `}

  ${smallMobile`
    height: 60%;
  `}
`

const StyledHeading = styled(Heading)`
  ${laptop`
     font-size: ${FONT_SIZE.HEADING};;
  `}
`

const NoMobileText = styled(Text)`
  ${mobile`
    display: none;
  `}
`

const HexagonBottomSection = styled.div`
  position: absolute;
  width: 1150px;
  height: 850px;
  left: 370px;
  top: 250px;
  background: linear-gradient(180deg, ${COLORS.GREY} -30%, #fff 80%);
  transform: rotate(-10deg);
  clip-path: ${Hexagon};

  ${laptop`
    clip-path: none;
    background: none;
    width: 100%;
    left: 0;
  `}

  ${tablet`
    height: 700px;
  `}

  ${mobile`
     top: 220px;
     height: 500px;
  `}

   ${smallMobile`
    top: 160px;
    height: 450px;
  `}
`

const FormContainer = styled.form`
  height: 100%;
  width: 50%;
  margin: 0 auto;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transform: rotate(10deg);

  ${laptop`
    width: 100%;
    max-width: 600px;
    padding: 0 20px;
  `}
`

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const SuccessMark = styled.div`
  width: 150px;
  height: 150px;
  padding: 40px;
  background-color: ${COLORS.GREEN};
  clip-path: ${Hexagon};
`

const SuccessText = styled.div`
  color: ${COLORS.BLACK};
  font-size: ${FONT_SIZE.MEDIUM};
  width: 100%;
  margin-top: 20px;
`

const inputSharedCss = css`
  width: 100%;
  border-radius: ${BORDER_RADIUS.MAIN};
  padding: 20px;
  margin-top: 20px;
  font-size: ${FONT_SIZE.BASE};
  border: 2px solid black;
`

const StyledInput = styled.input`
  height: 70px;
  ${inputSharedCss}
`

const StyledTextInput = styled.textarea`
  ${inputSharedCss}
  height: 200px;
  resize: none;
`

const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${tablet`
    flex-direction: column;
  `}
`

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  min-width: 150px;
  height: 40px;
  margin-left: 20px;
  margin-top: 20px;
  border: 2px dashed ${COLORS.BLACK};
  background: ${COLORS.WHITE};
  border-radius: ${BORDER_RADIUS.MAIN};
`

const StyledButton = styled(Button)<{ isReponseSent: boolean }>`
  min-width: 150px;
  height: 40px;
  margin-left: 20px;
  margin-top: 20px;
  align-self: flex-end;
  padding: 0;
  border: none;
  background-color: ${({ isReponseSent }) => isReponseSent && COLORS.GREEN};
`

const Contact: NextPage = () => {
  const [fileToUpload, setFileToUpload] = useState<any>({})
  const [isReponseSent, setIsResponseSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length > 0) {
      setFileToUpload(acceptedFiles[0])
    }
  }, [])

  const onSubmit = async (event: any) => {
    event.preventDefault()
    setIsSubmitting(true)

    const name = event.target.name?.value
    const company = event.target.company?.value
    const message = event.target.message?.value

    let file = ''

    try {
      if (fileToUpload?.path != null) {
        const clientResponse = await new Client(
          process.env.FILESTACK_API_KEY
        ).upload(fileToUpload)

        file = clientResponse?.url
      }
    } catch (error) {
      file = error?.toString()
    }

    FormResponseApi.sendFormResponse({
      name,
      company,
      message,
      file,
    })

    setIsResponseSent(true)
    setIsSubmitting(false)
  }

  return (
    <StyledLayout>
      <Container>
        <HexagonTopSection>
          <TextContainer>
            <StyledHeading margin="0 0 24px 0">
              Just one more step
            </StyledHeading>
            <NoMobileText margin="0 0 24px 0">
              No matter if you have an offer, question or just want to say hi.
              Do not hesitate to contact us.
            </NoMobileText>
          </TextContainer>
        </HexagonTopSection>
        <HexagonBottomSection>
          <FormContainer onSubmit={onSubmit}>
            {isReponseSent ? (
              <SuccessContainer>
                <SuccessMark>
                  <Check />
                </SuccessMark>
                <SuccessText>Successfully sent! Thank you!</SuccessText>
              </SuccessContainer>
            ) : (
              <>
                <StyledInput placeholder="Name" name="name" required />
                <StyledInput placeholder="Company name" name="company" />
                <StyledTextInput
                  placeholder="Purpose / Message"
                  name="message"
                  required
                />
                <FooterSection>
                  <Dropzone onDrop={onDrop} />
                  {isSubmitting ? (
                    <SpinnerContainer>
                      <Spinner />
                    </SpinnerContainer>
                  ) : (
                    <StyledButton type="submit" isReponseSent={isReponseSent}>
                      Send
                    </StyledButton>
                  )}
                </FooterSection>
              </>
            )}
          </FormContainer>
        </HexagonBottomSection>
      </Container>
    </StyledLayout>
  )
}

export default Contact
