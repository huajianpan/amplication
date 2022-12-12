import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  startDate?: Date | null;
};
