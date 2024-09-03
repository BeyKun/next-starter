import { AssignmentEntity } from 'src/assignments/assignments.entity';
import { RoleSettingEntity } from 'src/role-settings/role-settings.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('roles')
export class RoleEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'uuid' })
  domainId: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToMany(() => AssignmentEntity, (assignment) => assignment.role)
  assignments: AssignmentEntity[];

  @OneToMany(() => RoleSettingEntity, (roleSetting) => roleSetting.role)
  roleSettings: RoleSettingEntity[];
}
