import Axios, { AxiosRequestConfig, AxiosPromise } from 'axios'

export class FormResponseApi {
  static sendFormResponse(
    body?: FormData,
    config?: AxiosRequestConfig
  ): AxiosPromise<{}> {
    return Axios({
      ...config,
      method: 'POST',
      url: 'http://localhost:1337/form-responses',
      data: body,
    })
  }
}
