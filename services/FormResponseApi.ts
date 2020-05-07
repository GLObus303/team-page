import { BASE_API_URL } from 'constants/index'

import Axios, { AxiosRequestConfig, AxiosPromise } from 'axios'
import { FormResponse } from 'model/FormResponse'

export class FormResponseApi {
  static sendFormResponse(
    body?: FormResponse,
    config?: AxiosRequestConfig
  ): AxiosPromise<{}> {
    return Axios({
      ...config,
      method: 'POST',
      url: `${BASE_API_URL}/form-responses`,
      data: body,
    })
  }
}
