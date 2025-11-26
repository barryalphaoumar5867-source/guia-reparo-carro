'use client';

import { useState } from 'react';
import { ArrowLeft, CheckCircle, CreditCard, Lock, Shield } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    cpf: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de pagamento
    setTimeout(() => {
      router.push('/app');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/quiz">
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulário de Pagamento */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
            <div className="flex items-center space-x-2 mb-6">
              <Lock className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">Pagamento Seguro</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-8">Finalizar Compra</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="João Silva"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="joao@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">CPF</label>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="000.000.000-00"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Número do Cartão</label>
                <div className="relative">
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="0000 0000 0000 0000"
                  />
                  <CreditCard className="absolute right-4 top-3.5 w-6 h-6 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Validade</label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="MM/AA"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="000"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition"
              >
                Finalizar Pagamento - R$ 197
              </button>

              <div className="flex items-center justify-center space-x-4 text-gray-400 text-sm">
                <div className="flex items-center space-x-1">
                  <Lock className="w-4 h-4" />
                  <span>Seguro</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4" />
                  <span>Criptografado</span>
                </div>
              </div>
            </form>
          </div>

          {/* Resumo do Pedido */}
          <div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-white mb-6">Resumo do Pedido</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Acesso Vitalício</span>
                  <span className="line-through">R$ 497</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Desconto Especial</span>
                  <span className="text-green-400">-R$ 300</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between text-white text-xl font-bold">
                  <span>Total</span>
                  <span>R$ 197</span>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-green-400 font-semibold mb-1">Garantia de 30 dias</div>
                    <div className="text-gray-300 text-sm">
                      Se não gostar, devolvemos 100% do seu dinheiro
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold mb-3">Você terá acesso a:</h4>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">52+ guias completos passo-a-passo</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Sistema de diagnóstico inteligente</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Atualizações gratuitas para sempre</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Suporte prioritário via WhatsApp</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Acesso imediato após pagamento</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
              <div className="text-orange-400 font-bold mb-2">⚡ Oferta por tempo limitado!</div>
              <div className="text-gray-300 text-sm">
                Apenas 47 vagas restantes com este desconto especial
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
