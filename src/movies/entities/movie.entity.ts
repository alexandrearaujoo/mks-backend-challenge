import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
