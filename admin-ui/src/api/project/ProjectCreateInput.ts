import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  startDate?: Date | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
};
