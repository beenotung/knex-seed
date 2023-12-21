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
