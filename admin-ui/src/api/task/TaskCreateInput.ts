import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskCreateInput = {
  assignedTo?: UserWhereUniqueInput | null;
  estimationDays?: number | null;
  project?: ProjectWhereUniqueInput | null;
  startDate?: Date | null;
  status: "New" | "Pending" | "Ongoing" | "Done";
  title: string;
};
