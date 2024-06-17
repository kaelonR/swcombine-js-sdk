import Permission from "../types/Permission";
import {GetPermissionsResponse} from "../responses/api/getPermissionsResponse";
import {Resource} from "./Resource";

export default class ApiResource extends Resource {
  public constructor() {
    super('api');
  }

  public async getPermissions(): Promise<Permission[]> {
    const response = await this.get<GetPermissionsResponse>('permissions')
    const permissionDtos: Array<{name: string, description: string, inherits: string[]}> = []

    for(const apiPermission of response.swcapi.permissions.permission) {
      const {name, description, inherits} = apiPermission.attributes;
      const inheritsArray = inherits.length == 0 ? [] : inherits.split(' ')
      permissionDtos.push({name, description, inherits: inheritsArray});
    }

    permissionDtos.sort((a, b) => {
      return b.inherits.includes(a.name) ? -1 : 1
    })

    const permissions: Record<string, Permission> = {};
    for(const dto of permissionDtos) {
      const inheritedPermissions = dto.inherits.map(x => permissions[x]!);
      permissions[dto.name] = new Permission(dto.name, dto.description, inheritedPermissions);
    }

    return Object.values(permissions);
  }
}