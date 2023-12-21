import { Knex } from 'knex'
import { seedRow } from './core'

export async function seed(knex: Knex): Promise<void> {
  let teacher_alice_id = await seedRow(
    knex,
    'teacher',
    { email: 'alice.wong@example.com' },
    { name: 'Alice', course: 'Yoga' },
  )

  await seedRow(
    knex,
    'student',
    { tel: '98765432' },
    { name: 'Bob', teacher_id: teacher_alice_id },
  )
  await seedRow(
    knex,
    'student',
    { tel: '65432198' },
    { name: 'Charlie', teacher_id: teacher_alice_id },
  )
}
