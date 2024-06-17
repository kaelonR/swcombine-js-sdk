export default abstract class SwcApiResponse<T> {
  version: string;
  timestamp: number;
  resource: string;
  request: string;
  abstract swcapi: T;
}