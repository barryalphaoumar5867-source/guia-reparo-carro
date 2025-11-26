'use client';

import { useState, useEffect } from 'react';
import { getCurrentUser, logout, getUserVehicles, getAllGuides } from '@/lib/storage';
import { User, Vehicle, Guide } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Wrench, 
  Car, 
  LogOut, 
  Search, 
  BookOpen, 
  AlertCircle,
  Settings,
  ChevronRight,
  Clock,
  Gauge
} from 'lucide-react';
import GuidesList from './guides-list';
import GuideDetail from './guide-detail';
import DiagnosticTool from './diagnostic-tool';
import VehicleManager from './vehicle-manager';

type View = 'dashboard' | 'guides' | 'guide-detail' | 'diagnostic' | 'vehicles';

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [guides, setGuides] = useState<Guide[]>([]);
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setVehicles(getUserVehicles(currentUser.id));
    }
    setGuides(getAllGuides());
  }, []);

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  const handleViewGuide = (guideId: string) => {
    setSelectedGuideId(guideId);
    setCurrentView('guide-detail');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedGuideId(null);
  };

  const handleVehiclesUpdate = () => {
    if (user) {
      setVehicles(getUserVehicles(user.id));
    }
  };

  // Estatísticas rápidas
  const recentGuides = guides.slice(0, 3);
  const easyGuides = guides.filter(g => g.dificuldade === 'facil').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={handleBackToDashboard}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">Conserte o seu Carro</h1>
                <p className="text-xs text-gray-500">Guias de reparação</p>
              </div>
            </button>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                <Car className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{user?.nome}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Sair</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'dashboard' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Olá, {user?.nome?.split(' ')[0]}! 👋
              </h2>
              <p className="text-blue-100 mb-6">
                Pronto para consertar seu carro? Explore nossos guias ou faça um diagnóstico rápido.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button
                  onClick={() => setCurrentView('guides')}
                  className="bg-white text-blue-600 hover:bg-blue-50 h-12 font-medium"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Ver Guias
                </Button>
                <Button
                  onClick={() => setCurrentView('diagnostic')}
                  className="bg-blue-700 hover:bg-blue-800 text-white h-12 font-medium"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Diagnóstico
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total de Guias</p>
                      <p className="text-3xl font-bold text-gray-900">{guides.length}</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Guias Fáceis</p>
                      <p className="text-3xl font-bold text-gray-900">{easyGuides}</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-xl">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Meus Veículos</p>
                      <p className="text-3xl font-bold text-gray-900">{vehicles.length}</p>
                    </div>
                    <div className="bg-indigo-100 p-3 rounded-xl">
                      <Car className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setCurrentView('vehicles')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Gerenciar</p>
                      <p className="text-lg font-semibold text-gray-900">Veículos</p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <Settings className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Guides */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Guias Populares</h3>
                <Button
                  variant="ghost"
                  onClick={() => setCurrentView('guides')}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Ver todos
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {recentGuides.map((guide) => (
                  <Card 
                    key={guide.id}
                    className="border-0 shadow-md hover:shadow-xl transition-all cursor-pointer group overflow-hidden"
                    onClick={() => handleViewGuide(guide.id)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={guide.imagem} 
                        alt={guide.titulo}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          guide.dificuldade === 'facil' 
                            ? 'bg-green-500 text-white' 
                            : guide.dificuldade === 'medio'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-red-500 text-white'
                        }`}>
                          {guide.dificuldade === 'facil' ? 'Fácil' : guide.dificuldade === 'medio' ? 'Médio' : 'Difícil'}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {guide.titulo}
                      </h4>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {guide.descricao}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {guide.tempoEstimado}
                        </div>
                        <div className="flex items-center gap-1">
                          <Gauge className="w-4 h-4" />
                          {guide.passos.length} passos
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  Ações Rápidas
                </CardTitle>
                <CardDescription>
                  Acesso rápido às funcionalidades principais
                </CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="h-auto py-4 flex-col items-start hover:bg-blue-50 hover:border-blue-300"
                  onClick={() => setCurrentView('diagnostic')}
                >
                  <Search className="w-6 h-6 text-blue-600 mb-2" />
                  <span className="font-semibold text-gray-900">Diagnóstico por Sintomas</span>
                  <span className="text-xs text-gray-500 mt-1">Identifique o problema</span>
                </Button>

                <Button
                  variant="outline"
                  className="h-auto py-4 flex-col items-start hover:bg-indigo-50 hover:border-indigo-300"
                  onClick={() => setCurrentView('guides')}
                >
                  <BookOpen className="w-6 h-6 text-indigo-600 mb-2" />
                  <span className="font-semibold text-gray-900">Explorar Guias</span>
                  <span className="text-xs text-gray-500 mt-1">Navegue por categoria</span>
                </Button>

                <Button
                  variant="outline"
                  className="h-auto py-4 flex-col items-start hover:bg-purple-50 hover:border-purple-300"
                  onClick={() => setCurrentView('vehicles')}
                >
                  <Car className="w-6 h-6 text-purple-600 mb-2" />
                  <span className="font-semibold text-gray-900">Meus Veículos</span>
                  <span className="text-xs text-gray-500 mt-1">Gerenciar cadastros</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {currentView === 'guides' && (
          <GuidesList onViewGuide={handleViewGuide} onBack={handleBackToDashboard} />
        )}

        {currentView === 'guide-detail' && selectedGuideId && (
          <GuideDetail guideId={selectedGuideId} onBack={() => setCurrentView('guides')} />
        )}

        {currentView === 'diagnostic' && (
          <DiagnosticTool onViewGuide={handleViewGuide} onBack={handleBackToDashboard} />
        )}

        {currentView === 'vehicles' && (
          <VehicleManager 
            userId={user?.id || ''} 
            onBack={handleBackToDashboard}
            onUpdate={handleVehiclesUpdate}
          />
        )}
      </main>
    </div>
  );
}

// Componente auxiliar
function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
