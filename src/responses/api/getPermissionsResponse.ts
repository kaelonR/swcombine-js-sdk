import SwcApiResponse from "../SwcApiResponse";

export type GetPermissionsResponse = SwcApiResponse<GetPermissionsResponsePermissions>;

interface GetPermissionsResponsePermissions {
  permissions: {
    permission: GetPermissionsResponsePermission[]
  }
}

interface GetPermissionsResponsePermission {
  attributes: GetPermissionsResponsePermissionAttributes
}

interface GetPermissionsResponsePermissionAttributes {
  name: string;
  description: string
  inherits: string;
}