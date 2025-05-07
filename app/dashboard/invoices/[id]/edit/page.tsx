import Breadcrumbs from '@/components/shared/invoices/breadcrumbs'
import EditInvoiceForm from '@/components/shared/invoices/edit-form'
import { fetchCustomers } from '@/lib/actions/customer.actions'
import { fetchInvoiceById } from '@/lib/actions/invoice.actions'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
    title: 'Edit Invoice',
}

interface PageProps {
    params: Promise<{
        id: string
    }>
}

export default async function Page({ params }: PageProps) {
    // Await params before accessing it
    const resolvedParams = await params
    const id = resolvedParams.id

    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ])

    if (!invoice) {
        notFound()
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices' },
                    {
                        label: 'Edit Invoice',
                        href: `/dashboard/invoices/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <EditInvoiceForm invoice={invoice} customers={customers} />
        </main>
    )
}