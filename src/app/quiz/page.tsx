'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const questions = [
  {
    id: 1,
    question: 'Qual é o principal problema que você enfrenta com seu carro?',
    options: [
      'Manutenção preventiva',
      'Problemas mecânicos',
      'Problemas elétricos',
      'Quero aprender a fazer manutenção'
    ]
  },
  {
    id: 2,
    question: 'Com que frequência você leva seu carro à oficina?',
    options: [
      'Mensalmente',
      'A cada 3-6 meses',
      'Apenas quando quebra',
      'Raramente'
    ]
  },
  {
    id: 3,
    question: 'Quanto você gasta em média por ano com oficina?',
    options: [
      'Menos de R$ 1.000',
      'R$ 1.000 - R$ 3.000',
      'R$ 3.000 - R$ 5.000',
      'Mais de R$ 5.000'
    ]
  },
  {
    id: 4,
    question: 'Qual seu nível de experiência com manutenção automotiva?',
    options: [
      'Nenhuma experiência',
      'Já fiz coisas básicas',
      'Tenho experiência moderada',
      'Sou bem experiente'
    ]
  },
  {
    id: 5,
    question: 'O que mais te motiva a aprender?',
    options: [
      'Economizar dinheiro',
      'Independência',
      'Conhecimento',
      'Todos os acima'
    ]
  }
];

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfeito! Você é ideal para nosso app
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Com base nas suas respostas, você pode economizar até <span className="text-green-400 font-bold">R$ 5.000 por ano</span> fazendo suas próprias manutenções!
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Seu Perfil:</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">Potencial de economia anual: R$ 3.000 - R$ 5.000</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">Nível de conhecimento: Adequado para começar</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">Guias recomendados: 15+ procedimentos para você</span>
                </li>
              </ul>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition mb-4"
            >
              Garantir Meu Acesso Agora
            </button>
            <p className="text-gray-400 text-sm">
              🔒 Pagamento 100% seguro • Garantia de 30 dias
            </p>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition mb-6">
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </button>
          </Link>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-300 text-sm">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-gray-300 text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                  answers[currentQuestion] === option
                    ? 'bg-blue-500/20 border-blue-500'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white text-lg">{option}</span>
                  {answers[currentQuestion] === option && (
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition ${
                currentQuestion === 0
                  ? 'text-gray-500 cursor-not-allowed'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Anterior</span>
            </button>
            {answers[currentQuestion] && (
              <button
                onClick={() => handleAnswer(answers[currentQuestion])}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
              >
                <span>{currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Próxima'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
