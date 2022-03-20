export type IResponseDataInterface =
  | Record<string, Record<string, unknown>>
  | Array<unknown>
  | null;

export default interface IResponseInterface {
  status: number;
  meta: Record<string, Record<string, unknown>>;
  error: Error | null;
  data: IResponseDataInterface;
}
