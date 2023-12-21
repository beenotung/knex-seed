import { Knex } from 'knex'
import { seedRow } from './core'

export async function seed(knex: Knex): Promise<void> {
  let teacher_alice_id = await seedRow(
    knex,
    'teacher',
    { name: 'Alice' },
    { subject: 'Yoga' },
  )

  await seedRow(
    knex,
    'student',
    { name: 'Bob' },
    { level: 25, teacher_id: teacher_alice_id },
  )
  await seedRow(
    knex,
    'student',
    { name: 'Charlie' },
    { level: 25, teacher_id: teacher_alice_id },
  )
}
