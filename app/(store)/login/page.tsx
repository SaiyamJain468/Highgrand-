"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import toast from "react-hot-toast"

export default function LoginPage() {
  const router = useRouter()
  const [data, setData] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false
    }).then((callback) => {
      setIsLoading(false)

      if (callback?.error) {
        toast.error("Invalid credentials")
      }

      if (callback?.ok && !callback?.error) {
        toast.success("Logged in successfully!")
        router.push('/')
        router.refresh()
      }
    })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-black p-4 py-24">
      <div className="w-full max-w-md bg-brand-dark p-8 border border-brand-border">
        <h1 className="font-bebas text-h2 text-brand-white mb-2 tracking-wide text-center">LOGIN</h1>
        <p className="font-inter text-brand-muted text-body-sm text-center mb-8 uppercase tracking-widest">
          Enter your details
        </p>

        <form onSubmit={loginUser} className="space-y-6">
          <div className="space-y-1">
            <label className="font-inter text-label text-brand-muted uppercase" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full bg-transparent border-b border-brand-border py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors duration-300 font-inter text-body"
              value={data.email}
              onChange={e => setData({ ...data, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="font-inter text-label text-brand-muted uppercase" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full bg-transparent border-b border-brand-border py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors duration-300 font-inter text-body"
              value={data.password}
              onChange={e => setData({ ...data, password: e.target.value })}
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-brand-white text-brand-black py-[14px] px-[32px] font-inter font-medium text-[13px] tracking-[0.1em] uppercase hover:bg-brand-accent transition-colors duration-200 disabled:opacity-50"
          >
            {isLoading ? 'SIGNING IN...' : 'SIGN IN'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="font-inter text-body-sm text-brand-muted">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-brand-white hover:text-brand-accent transition-colors duration-300 border-b border-brand-white hover:border-brand-accent pb-0.5">
              REGISTER
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
