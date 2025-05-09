import {
    pgTable,
    uuid,
    varchar,
    unique,
    integer,
    text,
    date,
} from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

//https://github.com/drizzle-team/drizzle-orm/issues/1238#issuecomment-2849234595
//https://github.com/drizzle-team/drizzle-orm/issues/3697

export const customers = pgTable('customers', {
    id: uuid('id')
        .default(sql`gen_random_uuid()`)
        .primaryKey()
        .notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    image_url: varchar('image_url', { length: 255 }).notNull(),
})

export const revenue = pgTable('revenue', {
    month: varchar('month', { length: 4 }).notNull(),
    revenue: integer('revenue').notNull(),
    },
    (table) => [
        unique('revenue_month_key').on(table.month),
    ]
)

export const users = pgTable('users', {
    id: uuid('id')
        .default(sql`gen_random_uuid()`)
        .primaryKey()
        .notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    },
    (table) => [unique('users_email_key').on(table.email),
    ]
)

export const invoices = pgTable('invoices', {
    id: uuid('id')
        .default(sql`gen_random_uuid()`)
        .primaryKey()
        .notNull(),
    customer_id: uuid('customer_id').notNull(),
    amount: integer('amount').notNull(),
    status: varchar('status', { length: 255 }).notNull(),
    date: date('date').notNull(),
})