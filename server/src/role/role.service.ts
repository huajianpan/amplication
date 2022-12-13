import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RoleServiceBase } from "./base/role.service.base";

@Injectable()
export class RoleService extends RoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
