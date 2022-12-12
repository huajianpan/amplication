import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  projects?: ProjectCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
