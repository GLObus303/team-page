export const getBase64 = (file: any): Promise<string | ArrayBuffer> => {
  if (file?.path == null) {
    return null
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
