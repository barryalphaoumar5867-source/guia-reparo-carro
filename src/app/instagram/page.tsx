"use client";

import { ArrowRight, CheckCircle, Wrench, BookOpen, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

export default function InstagramLanding() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400">
      {/* Hero Section - Otimizado para Instagram */}
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 animate-pulse">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Oferta Especial Instagram</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Conserte Seu Carro
            <br />
            <span className="text-yellow-300">Sem Gastar Fortuna</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
            Mais de 50 guias passo-a-passo para você economizar com mecânico e fazer a manutenção do seu carro em casa
          </p>

          {/* CTA Principal */}
          <button
            onClick={() => router.push("/quiz")}
            className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 mb-12"
          >
            Fazer Quiz Grátis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Benefícios Rápidos */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">50+ Guias</h3>
              <p className="text-white/80 text-sm">Passo-a-passo detalhado</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Fácil de Seguir</h3>
              <p className="text-white/80 text-sm">Até iniciantes conseguem</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Economize Muito</h3>
              <p className="text-white/80 text-sm">Até 80% em reparos</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <p className="text-white text-lg mb-2">
              "Economizei mais de R$ 800 no primeiro mês!"
            </p>
            <p className="text-white/70 text-sm">- Carlos, São Paulo</p>
          </div>

          {/* Lista de Benefícios */}
          <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-left">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">O Que Você Vai Aprender:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Trocar óleo e filtros",
                "Diagnosticar problemas",
                "Manutenção de freios",
                "Sistema elétrico",
                "Suspensão e amortecedores",
                "Limpeza e polimento",
                "Troca de pneus",
                "E muito mais..."
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Secundário */}
          <div className="mt-12">
            <button
              onClick={() => router.push("/quiz")}
              className="group bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
            >
              Começar Agora - É Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-white/70 text-sm mt-4">
              Sem cartão de crédito necessário para o quiz
            </p>
          </div>
        </div>
      </div>

      {/* Footer Simples */}
      <div className="border-t border-white/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70 text-sm">
            © 2024 Conserte o Seu Carro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
