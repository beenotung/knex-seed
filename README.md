# knex-seed

Helper function to insert or update seed data with ease using knex.

[![npm Package Version](https://img.shields.io/npm/v/knex-seed)](https://www.npmjs.com/package/knex-seed)

## Installation

```bash
npm i knex-seed
```

## Usage Example

```typescript
import { Knex } from 'knex'
import { seedRow } from 'knex-seed'

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
```

## Typescript Signature

```typescript
import { Knex } from 'knex'

export function seedRow(
  knex: Knex,
  table: string,
  filter: object,
  extraData?: object,
): Promise<number>
```

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
