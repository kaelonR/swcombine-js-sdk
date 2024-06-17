import axios from "axios";

export abstract class Resource {
  private resourceName: string;

  protected constructor(resourceName: string) {
    this.resourceName = resourceName;
  }

  protected async get<T>(endpointUrl: string): Promise<T> {
    const url = `https://www.swcombine.com/ws/v2.0/${this.resourceName}/${endpointUrl}`;
    const response = await axios.get<T>(url, {headers: {
      Accept: 'application/json'
    }});
    return response.data;
  }
}