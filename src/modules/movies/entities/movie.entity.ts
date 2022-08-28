import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  title: string;

  @Column()
  duration: number;

  @Column()
  category: string;

  @Column()
  classification: string;

  @Column({ name: 'cover_image' })
  coverImage: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
