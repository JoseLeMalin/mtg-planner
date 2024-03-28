/* import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from "@sequelize/core";
import { UUID } from "@sequelize/core/_non-semver-use-at-your-own-risk_/dialects/abstract/data-types.js";
import {
  Attribute,
  PrimaryKey,
  AutoIncrement,
  NotNull,
  Default,
  AllowNull,
  Table,
  HasOne,
} from "@sequelize/core/decorators-legacy";
import { NOW, type NonAttribute } from "sequelize";
import { Account } from "./account";

// https://sequelize.org/docs/v7/models/naming-strategies/#manually-setting-the-table-name
// We recommend naming your attributes in lowerCamelCase. e.g. createdAt instead of created_at.

@Table<User>({
  tableName: "User",
  timestamps: false,
})
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @Attribute(DataTypes.UUID)
  @PrimaryKey
  @AutoIncrement
  declare id: UUID;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare firstName: string;
  @Attribute(DataTypes.STRING)
  declare lastName: string | null;
  @Attribute(DataTypes.STRING)
  declare image: string | null;
  @Attribute(DataTypes.STRING)
  declare email: string | null;
  @Attribute(DataTypes.DATE)
  declare emailVerified: Date | null;

  // Associations
  @HasOne(() => Account, {
    foreignKey: {
      name: "userId",
      columnName: "userId",
    },
    // By default => The foreign key will reference the `id` attribute of the `Account` model
    // sourceKey: "id",
  })
  declare account: NonAttribute<Account>;

  // DB management
  @Attribute(DataTypes.DATE)
  @Default(NOW)
  declare createdAt: Date;
  @Attribute(DataTypes.DATE)
  declare updatedAt: Date | null;
}
 */
