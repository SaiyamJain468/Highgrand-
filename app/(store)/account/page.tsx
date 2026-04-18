"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AccountPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-black p-4">
        <p className="text-brand-white font-inter text-body">Loading...</p>
      </div>
    )
  }

  if (!session) return null

  return (
    <div className="min-h-screen bg-brand-black pt-[104px] pb-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-brand-border pb-8 mb-12">
          <div>
            <h1 className="font-bebas text-h1 text-brand-white tracking-wide">MY ACCOUNT</h1>
            <p className="font-inter text-brand-muted text-body-lg mt-2">
              Welcome back, {session.user?.name}
            </p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="mt-6 md:mt-0 bg-transparent text-brand-white border border-brand-white py-[12px] px-[24px] font-inter font-medium text-[13px] tracking-[0.1em] uppercase hover:bg-brand-white hover:text-brand-black transition-colors duration-200"
          >
            LOG OUT
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="font-bebas text-h3 text-brand-white tracking-wide mb-6">ORDER HISTORY</h2>
              <div className="bg-brand-dark border border-brand-border p-8 text-center text-brand-muted font-inter">
                <p>You haven&apos;t placed any orders yet.</p>
              </div>
            </section>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="font-bebas text-h3 text-brand-white tracking-wide mb-6">ACCOUNT DETAILS</h2>
              <div className="font-inter text-brand-white space-y-2">
                <p>{session.user?.name}</p>
                <p className="text-brand-muted">{session.user?.email}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
