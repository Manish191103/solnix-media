"use client"

import * as React from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Lead capture schema
const leadSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    phone: z
        .string()
        .min(10, { message: "Phone must be at least 10 digits." })
        .max(15, { message: "Phone must be at most 15 digits." })
        .regex(/^\+?\d+$/, { message: "Invalid phone number." }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z.string().min(5, { message: "Message must be at least 5 characters." }),
    industry: z.string().min(2, { message: "Industry must be at least 2 characters." }),
})

export function FormInbound() {
    const form = useForm<z.infer<typeof leadSchema>>({
        resolver: zodResolver(leadSchema),
        defaultValues: { name: "", phone: "", email: "", message: "", industry: "" },
    })

    const [loading, setLoading] = React.useState(false)
    const [result, setResult] = React.useState<string | null>(null)
    const [error, setError] = React.useState<string | null>(null)

    function onSubmit(values: z.infer<typeof leadSchema>) {
        setLoading(true)
        setResult(null)
        setError(null)
        fetch('/api/lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        })
            .then(async (res) => {
                setLoading(false)
                if (!res.ok) {
                    const err = await res.text()
                    setError(err || 'Something went wrong')
                } else {
                    setResult('Lead captured successfully!')
                    form.reset()
                }
            })
            .catch((err) => {
                setLoading(false)
                setError('Network error: ' + err.message)
            })
    }

    return (
        <div className="w-full max-w-sm p-4 sm:p-6 border rounded-lg shadow bg-white dark:bg-zinc-900 overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold mb-6 text-primary">Lead Capture Form</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Name" {...field} />
                                </FormControl>
                                <FormDescription>Enter your full name.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="+1234567890" type="tel" {...field} />
                                </FormControl>
                                <FormDescription>Enter your phone number.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="you@example.com" type="email" {...field} />
                                </FormControl>
                                <FormDescription>Enter your email address.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Industry</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Industry" {...field} />
                                </FormControl>
                                <FormDescription>Enter your industry.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <textarea
                                        className="min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                                        placeholder="Your message"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>Enter your message.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full text-lg py-2" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Lead'}
                    </Button>
                </form>
            </Form>
            <div className="mt-4 min-h-[24px]">
                {result && <div className="text-green-600 dark:text-green-400">{result}</div>}
                {error && <div className="text-red-600 dark:text-red-400">{error}</div>}
            </div>
        </div>
    )
}

export default FormInbound;
