import { COLORS, BORDER_RADIUS, FONT_SIZE } from 'constants/theme'

import React from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import { tablet, laptop } from 'utils/CssUtils'

const Container = styled.div`
  margin-top: 20px;
  color: ${COLORS.GREY};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
`

const ErrorText = styled.div`
  width: 100%;
  margin-bottom: 10px;
  color: ${COLORS.ALERT};
`

const StyledZone = styled.div`
  height: 40px;
  background: ${COLORS.WHITE};
  border: 2px dashed ${COLORS.BLACK};
  box-sizing: border-box;
  border-radius: ${BORDER_RADIUS.MAIN};
  width: 405px;

  ${laptop`
      width:   390px;
  `}

  ${tablet`
      width: 100%;
  `}
`

const StyledText = styled.div`
  padding: 7px 10px;
  width: 100%;
  font-size: ${FONT_SIZE.BASE};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${tablet`
      width: 100%;
  `}
`

const getDragMessage = (isDragActive: boolean, acceptedFileName: string) => {
  if (isDragActive) {
    return 'Drop files'
  }

  if (acceptedFileName) {
    return acceptedFileName
  }

  return 'Attach files'
}

interface DropzoneProps {
  onDrop: (acceptedFiles: any) => void
}

const fiveMegaBytes = 5242880

export const Dropzone: React.FC<DropzoneProps> = ({ onDrop }) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: fiveMegaBytes,
  })

  const errorReason = fileRejections?.[0]?.errors?.[0]?.code
  const acceptedFileName = acceptedFiles?.[0]?.name

  return (
    <Container>
      {errorReason === 'file-too-large' && (
        <ErrorText>File should be smaller than 5 MB</ErrorText>
      )}
      <StyledZone {...getRootProps()}>
        <input {...getInputProps()} />
        <StyledText>
          {getDragMessage(isDragActive, acceptedFileName)}
        </StyledText>
      </StyledZone>
    </Container>
  )
}
