'use client'
import { Button } from '@/components/ui/button'
import { deleteInvoice } from '@/lib/actions/invoice.actions'
import { PencilIcon, TrashIcon } from 'lucide-react'
import Link from 'next/link'

export function UpdateInvoice({ id }: { id: string }) {
    return (
        <Button variant="outline" asChild>
            <Link href={`/dashboard/invoices/${id}/edit`}>
                <PencilIcon className="w-5" />
            </Link>
        </Button>
    )
}

export function DeleteInvoice({ id }: { id: string }) {
    // Create an async function to handle the deletion
    const handleDelete = async (event: React.FormEvent) => {
        event.preventDefault() // Prevent the form from submitting in the traditional way

        try {
            // Call your deleteInvoice function
            const result = await deleteInvoice(id)
            
            // Optionally handle the result here, e.g. show a message, redirect, etc.
            // You can now either return `void` or `Promise<void>`

            // If you need to log or handle the result, do it here.
            console.log(result.message) // Log the response if needed

        } catch (error) {
            // Handle any errors (e.g., show an error message)
            console.error("Error deleting invoice:", error)
        }
    }


    return (
        <form onSubmit={handleDelete}>
            <Button variant="outline" type="submit">
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5" />
            </Button>
        </form>
    )
}