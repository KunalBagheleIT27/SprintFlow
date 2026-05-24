import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword() {
  const [step, setStep] = useState(1) // Step 1: Email, Step 2: Reset Code & Password
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [resetCode, setResetCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const navigate = useNavigate()

  const handleSendCode = (e) => {
    e.preventDefault()
    if (!email) {
      alert('Please enter your email')
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setCodeSent(true)
      setStep(2)
    }, 1500)
  }

  const handleResetPassword = (e) => {
    e.preventDefault()

    if (!resetCode || !newPassword || !confirmPassword) {
      alert('Please fill all fields')
      return
    }

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    if (newPassword.length < 8) {
      alert('Password must be at least 8 characters long')
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Password reset successfully!')
      navigate('/login')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center px-4 py-8 relative overflow-y-auto scrollbar-hide">
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
          <p className="text-text-tertiary text-base font-medium">Reset Your Password</p>
        </div>

        {/* Card */}
        <div className="card-elevated p-8">
          {/* Step 1: Email Verification */}
          {step === 1 && (
            <form onSubmit={handleSendCode} className="space-y-5 animate-fadeIn">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-3">
                  Enter Your Email Address
                </label>
                <p className="text-xs text-text-tertiary mb-3">
                  We'll send you a code to reset your password
                </p>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-tertiary">mail</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                    className="input-field pl-12"
                  />
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
                    Sending Code...
                  </>
                ) : (
                  <>
                    Send Reset Code
                    <span className="material-symbols-outlined text-lg ml-2">arrow_forward</span>
                  </>
                )}
              </button>

              {/* Back to Login */}
              <div className="text-center mt-6">
                <button
                  type="button"
                  onClick={() => navigate('/login')}
                  className="text-text-tertiary hover:text-text-primary transition-colors font-medium text-sm flex items-center justify-center gap-2 w-full"
                >
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  Back to Login
                </button>
              </div>
            </form>
          )}

          {/* Step 2: Password Reset */}
          {step === 2 && (
            <form onSubmit={handleResetPassword} className="space-y-5 animate-fadeIn">
              {/* Reset Code */}
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Verification Code
                </label>
                <p className="text-xs text-text-tertiary mb-3">
                  Check your email for the reset code
                </p>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-tertiary">key</span>
                  <input
                    type="text"
                    value={resetCode}
                    onChange={(e) => setResetCode(e.target.value)}
                    placeholder="Enter 6-digit code"
                    maxLength="6"
                    required
                    className="input-field pl-12 text-center font-mono text-lg tracking-widest"
                  />
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  New Password
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-tertiary">lock</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
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
                <p className="text-xs text-text-tertiary mt-1">
                  Must be at least 8 characters
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-tertiary">lock_check</span>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="input-field pl-12 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined">{showConfirmPassword ? 'visibility_off' : 'visibility'}</span>
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
                    Resetting Password...
                  </>
                ) : (
                  <>
                    Reset Password
                    <span className="material-symbols-outlined text-lg ml-2">check_circle</span>
                  </>
                )}
              </button>

              {/* Change Email Button */}
              <button
                type="button"
                onClick={() => {
                  setStep(1)
                  setResetCode('')
                  setNewPassword('')
                  setConfirmPassword('')
                  setCodeSent(false)
                }}
                className="text-text-tertiary hover:text-text-primary transition-colors font-medium text-sm flex items-center justify-center gap-2 w-full"
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Use Different Email
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-text-secondary font-medium text-sm">
            Remember your password?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-primary font-semibold hover:text-primary-dark transition-colors underline"
            >
              Sign in
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
