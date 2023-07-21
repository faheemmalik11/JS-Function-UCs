const userRolePermissions = ['read', 'write', 'delete'];
const requiredPermissions = ['read', 'write'];

const hasAllPermissions = requiredPermissions.every(permission =>
  userRolePermissions.includes(permission) // checks if user has required permissions
);
console.log(hasAllPermissions); // true
