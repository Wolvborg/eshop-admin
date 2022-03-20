import IResponseInterface, { IResponseDataInterface } from '../interface/ResponseInterface';

class ResponseData {
  status: number;
  data: IResponseDataInterface;
  error: Error | null;
  meta: Record<string, Record<string, any>>;

  constructor(status: number, data: IResponseDataInterface, error: Error | null) {
    this.status = status;
    this.meta = {};
    if (error) {
      this.error = error;
      this.data = null;
    } else {
      this.data = data;
      this.error = null;
    }
  }

  public getResponse(): IResponseInterface {
    return this;
  }
}

export default ResponseData;
