'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header/Navbar */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-white font-bold text-xl">Conserte o seu Carro</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">Recursos</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Preços</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition">Depoimentos</a>
            </div>
            <Link href="/quiz">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition">
                Começar Agora
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-blue-400 text-sm font-semibold">✨ Mais de 50 guias completos</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Conserte seu carro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">você mesmo</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Economize milhares de reais com nossos guias passo-a-passo profissionais. Mais de 50 procedimentos detalhados para você fazer em casa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quiz">
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition flex items-center justify-center space-x-2">
                    <span>Fazer Quiz Gratuito</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <a href="#features">
                  <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition border border-white/20">
                    Ver Recursos
                  </button>
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Sem mensalidade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Acesso vitalício</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop" 
                alt="Mecânico trabalhando"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">52+</div>
              <div className="text-gray-400">Guias Completos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10k+</div>
              <div className="text-gray-400">Usuários Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">R$ 5k+</div>
              <div className="text-gray-400">Economia Média</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4.9★</div>
              <div className="text-gray-400">Avaliação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Por que escolher nosso app?
            </h2>
            <p className="text-xl text-gray-300">
              Tudo que você precisa para consertar seu carro com confiança
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Guias Passo-a-Passo</h3>
              <p className="text-gray-300">
                Mais de 50 procedimentos detalhados com fotos, vídeos e instruções claras para você seguir facilmente.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Diagnóstico Inteligente</h3>
              <p className="text-gray-300">
                Sistema de diagnóstico por sintomas que identifica o problema do seu carro em segundos.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Economize Tempo e Dinheiro</h3>
              <p className="text-gray-300">
                Evite oficinas caras. Faça você mesmo e economize até 70% em manutenções básicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Plano Simples e Transparente
            </h2>
            <p className="text-xl text-gray-300">
              Pague uma vez, use para sempre
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border-2 border-blue-500/50 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                OFERTA LIMITADA
              </div>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Acesso Vitalício</h3>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-gray-400 line-through text-2xl">R$ 497</span>
                  <span className="text-5xl font-bold text-white">R$ 197</span>
                </div>
                <p className="text-gray-300">Pagamento único</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">Acesso a todos os 52+ guias completos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">Sistema de diagnóstico inteligente</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">Atualizações gratuitas para sempre</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">Suporte prioritário via WhatsApp</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">Garantia de 30 dias</span>
                </li>
              </ul>
              <Link href="/quiz">
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition">
                  Fazer Quiz e Começar
                </button>
              </Link>
              <p className="text-center text-gray-400 text-sm mt-4">
                🔒 Pagamento 100% seguro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              O que nossos usuários dizem
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Economizei mais de R$ 3.000 fazendo a troca de pastilhas e óleo sozinho. Os guias são muito claros!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">Carlos Silva</div>
                  <div className="text-gray-400 text-sm">São Paulo, SP</div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Nunca imaginei que conseguiria trocar a bateria sozinha. O app me deu toda a confiança que precisava!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">Ana Costa</div>
                  <div className="text-gray-400 text-sm">Rio de Janeiro, RJ</div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Melhor investimento que fiz! Já me pagou várias vezes. Recomendo para todos os meus amigos."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">Pedro Santos</div>
                  <div className="text-gray-400 text-sm">Belo Horizonte, MG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para economizar milhares de reais?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Faça nosso quiz gratuito e descubra como podemos te ajudar
          </p>
          <Link href="/quiz">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-12 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition inline-flex items-center space-x-3">
              <span>Começar Quiz Gratuito</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="text-white font-bold text-lg">Conserte o seu Carro</span>
          </div>
          <p className="text-gray-400 mb-4">
            Economize tempo e dinheiro consertando seu próprio carro
          </p>
          <div className="flex justify-center space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
            <a href="#" className="hover:text-white transition">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition">Contato</a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © 2024 Conserte o seu Carro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
