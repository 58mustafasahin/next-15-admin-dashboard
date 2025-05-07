import CustomersTable from '@/components/shared/customers/table'
import { fetchFilteredCustomers } from '@/lib/actions/customer.actions'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
    title: 'Customers',
}

interface PageProps {
    // Update searchParams to be a Promise
    searchParams?: Promise<{
        query?: string
        page?: string
    }>
}

const Page: NextPage<PageProps> = async ({ searchParams }) => {
    // Await searchParams to ensure it's ready before accessing it
    const resolvedSearchParams = await searchParams

    const query = resolvedSearchParams?.query || ''

    const customers = await fetchFilteredCustomers(query)

    return (
        <main>
            <CustomersTable customers={customers} />
        </main>
    )
}

export default Page