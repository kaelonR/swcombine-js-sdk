export default class Permission {
  public readonly name: string;

  public readonly description: string;

  // eslint-disable-next-line no-use-before-define
  public readonly inheritedPermissions: Permission[] = [];

  public constructor(name: string, description: string, inheritedPermissions: Permission[] = []) {
    this.name = name;
    this.description = description;
    this.inheritedPermissions = inheritedPermissions;
  }
}
