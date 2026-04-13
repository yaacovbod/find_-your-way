'use client'

import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs'

export default function AuthButton() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded) return null

  if (isSignedIn) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          {user.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.imageUrl}
              alt={user.firstName ?? 'User'}
              className="w-7 h-7 rounded-full border border-slate-600"
            />
          )}
          <span className="text-slate-300 text-sm font-medium hidden sm:block">
            {user.firstName ?? user.emailAddresses[0]?.emailAddress}
          </span>
        </div>
        <SignOutButton>
          <button className="text-xs text-slate-400 hover:text-amber-400 transition-colors border border-slate-700 hover:border-amber-500 rounded-lg px-3 py-1.5">
            Sign out
          </button>
        </SignOutButton>
      </div>
    )
  }

  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg px-4 py-1.5 transition-colors">
        Sign in with Google
      </button>
    </SignInButton>
  )
}
