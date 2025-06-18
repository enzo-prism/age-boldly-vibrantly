
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Lock } from 'lucide-react';

interface PasswordProtectionProps {
  onPasswordCorrect: () => void;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const correctPassword = 'suz';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Add a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    if (password === correctPassword) {
      localStorage.setItem('site-access', 'granted');
      onPasswordCorrect();
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-teal-50 to-coral-50 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/5"></div>
      
      <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
            <Lock className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Protected Access</h1>
          <p className="text-gray-600">Enter the password to access Rebellious Aging</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="pr-12 h-12 text-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500"
              disabled={isLoading}
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              disabled={isLoading}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center bg-red-50 py-2 px-4 rounded-lg">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-12 text-lg bg-teal hover:bg-teal-dark transition-colors"
            disabled={isLoading || !password}
          >
            {isLoading ? 'Checking...' : 'Access Site'}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Age boldly, live loudly</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtection;
