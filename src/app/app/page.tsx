'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, initializeGuides } from '@/lib/storage';
import { MOCK_GUIDES } from '@/lib/mock-data';
import AuthPage from '@/components/auth-page';
import Dashboard from '@/components/dashboard';

export default function AppPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Inicializa os guias no primeiro acesso
    initializeGuides(MOCK_GUIDES);

    // Verifica se há usuário logado
    const user = getCurrentUser();
    setIsAuthenticated(!!user);
    setIsLoading(false);
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AuthPage onAuthSuccess={handleAuthSuccess} />;
  }

  return <Dashboard />;
}
