import db from '@/db/drizzle'
import { customers, invoices } from '@/db/schema'
import { asc, eq, ilike, or, sql } from 'drizzle-orm'
import { formatCurrency } from '../utils'

export async function fetchCustomers() {
    try {
        const data = await db
            .select({
                id: customers.id,
                name: customers.name,
            })
            .from(customers)
            .orderBy(customers.name)
        return data
    } catch (error) {
        console.error('Database Error:', error)
        throw new Error('Failed to fetch all customers.')
    }
}

