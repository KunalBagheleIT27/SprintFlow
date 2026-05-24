import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      alert('Account created successfully!')
      navigate('/login')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center px-4 py-8 relative overflow-y-auto scrollbar-hide">
      {/* Top Line */}
      <div className="fixed top-0 left-0 w-full h-1 bg-primary"></div>

      {/* Main Container */}
      <main className="w-full max-w-[420px] flex-shrink-0">
        {/* Branding */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-2xl">rocket_launch</span>
            </div>

            <h1 className="text-3xl font-bold text-primary">SprintFlow AI</h1>
          </div>

          <p className="text-on-surface-variant text-body-sm">Create your account</p>
        </div>

        {/* Card */}
        <div className="bg-surface border border-outline-variant rounded-2xl p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-label-md font-bold text-on-surface mb-2">Full Name</label>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">
                  person
                </span>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full border border-outline-variant rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest transition-all text-body-base"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-label-md font-bold text-on-surface mb-2">Email Address</label>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">
                  mail
                </span>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  className="w-full border border-outline-variant rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest transition-all text-body-base"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-label-md font-bold text-on-surface mb-2 block">Password</label>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">
                  lock
                </span>

                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full border border-outline-variant rounded-xl py-3 pl-10 pr-12 outline-none focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest transition-all text-body-base"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-label-md font-bold text-on-surface mb-2 block">Confirm Password</label>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">
                  lock_check
                </span>

                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full border border-outline-variant rounded-xl py-3 pl-10 pr-12 outline-none focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest transition-all text-body-base"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined">
                    {showConfirmPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 my-4">
              <input type="checkbox" id="terms" required className="rounded border-outline-variant text-primary" />
              <label htmlFor="terms" className="text-label-xs text-on-surface-variant">
                I agree to the{' '}
                <button type="button" className="text-primary font-bold hover:opacity-80">
                  Terms of Service
                </button>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-6 py-3 rounded-xl font-label-md font-bold text-on-primary transition-all flex items-center justify-center gap-2 ${
                loading ? 'bg-primary/60 cursor-not-allowed' : 'bg-primary hover:opacity-90 active:scale-95'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </>
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-[1px] bg-outline-variant"></div>
              <span className="text-label-xs text-on-surface-variant font-bold">OR</span>
              <div className="flex-1 h-[1px] bg-outline-variant"></div>
            </div>

            {/* Google Button */}
            <button type="button" className="w-full border border-outline-variant rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-surface-container-lowest transition-all text-body-base font-bold text-on-surface">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-on-surface-variant text-body-sm">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-primary font-bold hover:text-primary-dark transition-colors underline"
            >
              Sign in
            </button>
          </p>
        </div>
      </main>

      {/* Bottom Decoration */}
      <div className="hidden lg:grid fixed bottom-8 left-8 grid-cols-4 gap-3 opacity-10">
        <div className="w-12 h-12 bg-primary rounded"></div>
        <div className="w-12 h-12 bg-secondary rounded"></div>
        <div className="w-12 h-12 bg-primary-container rounded"></div>
        <div className="w-12 h-12 bg-tertiary rounded"></div>
      </div>

      {/* Copyright */}
      <footer className="mt-12 text-center text-label-xs text-on-surface-variant">© 2024 SprintFlow AI. Precision Engineering Systems.</footer>
    </div>
  )
}
