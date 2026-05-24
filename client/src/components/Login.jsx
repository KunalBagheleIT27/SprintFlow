import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      // Simulate login and store user data
      const userData = {
        fullName: 'Alex Sterling',
        email: formData.email,
        role: 'Lead Engineer',
        bio: 'Building the future of project management',
        phone: '+1 (555) 123-4567',
      }
      
      login(userData)
      setLoading(false)
      navigate('/dashboard')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center px-4 relative overflow-y-auto scrollbar-hide">
      {/* Top accent line */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-transparent"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-lighter rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse-soft"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary-lighter rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>

      {/* Main Container */}
      <main className="w-full max-w-[440px] relative z-10">
        {/* Branding */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
            </div>
            <h1 className="text-4xl font-bold text-text-primary">SprintFlow</h1>
          </div>
          <p className="text-text-tertiary text-base font-medium">Enterprise Agile Platform</p>
        </div>

        {/* Card */}
        <div className="card-elevated p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Email Address</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-tertiary">mail</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  className="input-field pl-12"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-text-primary">Password</label>
                <button 
                  type="button" 
                  onClick={() => navigate('/forgot-password')}
                  className="text-sm text-primary hover:text-primary-dark transition-colors font-semibold"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-tertiary">lock</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="input-field pl-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`btn-primary-lg w-full mt-8 shadow-lg ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'}`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline-block mr-2"></div>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <span className="material-symbols-outlined text-lg ml-2">arrow_forward</span>
                </>
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-4">
              <div className="flex-1 h-px bg-border"></div>
              <span className="text-xs font-semibold text-text-tertiary">OR</span>
              <div className="flex-1 h-px bg-border"></div>
            </div>

            {/* Google Button */}
            <button type="button" className="btn-secondary w-full">
              <svg width="18" height="18" viewBox="0 0 24 24" className="inline mr-2">
                <path fill="#2563EB" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </form>
        </div>

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <p className="text-text-secondary font-medium text-sm">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-primary font-semibold hover:text-primary-dark transition-colors ml-1 underline"
            >
              Create one
            </button>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 text-center text-xs text-text-tertiary">
        © 2024 SprintFlow. All rights reserved.
      </footer>
    </div>
  )
}
