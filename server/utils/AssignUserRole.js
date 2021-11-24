const { db_update } = require("./database");

function AssignUserRole(RoleType, TrackId) {
  db_update(
    "presence",
    { tracking_code: TrackId },
    {
      email_verified: true,
      role: RoleType,
    }
  );
}
module.exports = AssignUserRole;
