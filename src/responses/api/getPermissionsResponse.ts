import SwcApiResponse from "../SwcApiResponse";

export class GetPermissionsResponse extends SwcApiResponse<GetPermissionsResponsePermissions> {
  swcapi: GetPermissionsResponsePermissions;
}

export class GetPermissionsResponsePermissions {
  permissions: {
    permission: GetPermissionsResponsePermission[]
  }
}

export class GetPermissionsResponsePermission {
  attributes: GetPermissionsResponsePermissionAttributes
}

export class GetPermissionsResponsePermissionAttributes {
  name: string;
  description: string
  inherits: string;
}