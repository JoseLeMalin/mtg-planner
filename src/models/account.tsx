import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "@sequelize/core";
import { UUID } from "@sequelize/core/_non-semver-use-at-your-own-risk_/dialects/abstract/data-types.js";
import {
  Attribute,
  PrimaryKey,
  AutoIncrement,
  NotNull,
  Table,
  Default,
  Unique,
} from "@sequelize/core/decorators-legacy";
import { HasOne, NOW, UUIDV4 } from "sequelize";
import { User } from "./user";

// https://sequelize.org/docs/v7/models/naming-strategies/#manually-setting-the-table-name
// We recommend naming your attributes in lowerCamelCase. e.g. createdAt instead of created_at.

@Table<Account>({
  tableName: "Account",
  timestamps: false,
})
export class Account extends Model<
  InferAttributes<Account>,
  InferCreationAttributes<Account>
> {
  // Account Id
  @Attribute(DataTypes.UUID)
  @PrimaryKey
  @Default(UUIDV4)
  declare id: UUID;
  

  @Attribute(DataTypes.UUIDV4)
  @NotNull
  @PrimaryKey
  @Unique
  declare userId: number;

  // Auth
  @Attribute(DataTypes.STRING)
  declare type: string | null;
  @Attribute(DataTypes.STRING)
  declare provider: string | null;
  @Attribute(DataTypes.STRING)
  declare providerAccountId: string | null;
  @Attribute(DataTypes.STRING)
  declare refreshToken: string | null;
  @Attribute(DataTypes.STRING)
  declare accessToken: string | null;
  @Attribute(DataTypes.INTEGER)
  declare expiresAt: number | null;
  @Attribute(DataTypes.STRING)
  declare tokenType: string | null;
  @Attribute(DataTypes.STRING)
  declare scope: string | null;
  @Attribute(DataTypes.STRING)
  declare idToken: string | null;
  @Attribute(DataTypes.STRING)
  declare sessionState: string | null;

  // DB management
  @Attribute(DataTypes.DATE)
  @Default(NOW)
  declare createdAt: Date;
  @Attribute(DataTypes.DATE)
  declare updatedAt: Date | null;
}
