'use client';

import { useState, useEffect } from 'react';
import { getGuideById } from '@/lib/storage';
import { Guide } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Clock, 
  Gauge,
  Wrench,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  Lightbulb
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface GuideDetailProps {
  guideId: string;
  onBack: () => void;
}

export default function GuideDetail({ guideId, onBack }: GuideDetailProps) {
  const [guide, setGuide] = useState<Guide | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const foundGuide = getGuideById(guideId);
    if (foundGuide) {
      setGuide(foundGuide);
    }
  }, [guideId]);

  if (!guide) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Guia não encontrado</p>
        <Button onClick={onBack} className="mt-4">
          Voltar
        </Button>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    const colors: Record<string, string> = {
      facil: 'bg-green-500',
      medio: 'bg-yellow-500',
      dificil: 'bg-red-500'
    };
    return colors[difficulty] || 'bg-gray-500';
  };

  const getDifficultyLabel = (difficulty: string) => {
    const labels: Record<string, string> = {
      facil: 'Fácil',
      medio: 'Médio',
      dificil: 'Difícil'
    };
    return labels[difficulty] || difficulty;
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      manutencao: 'Manutenção',
      reparo: 'Reparo',
      diagnostico: 'Diagnóstico',
      eletrica: 'Elétrica',
      mecanica: 'Mecânica'
    };
    return labels[category] || category;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="hover:bg-white"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{getCategoryLabel(guide.categoria)}</Badge>
            <Badge className={`${getDifficultyColor(guide.dificuldade)} text-white`}>
              {getDifficultyLabel(guide.dificuldade)}
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{guide.titulo}</h2>
          <p className="text-gray-600 mt-1">{guide.descricao}</p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src={guide.imagem} 
          alt={guide.titulo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg">
              <Clock className="w-5 h-5" />
              <span className="font-medium">{guide.tempoEstimado}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg">
              <Gauge className="w-5 h-5" />
              <span className="font-medium">{guide.passos.length} passos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Ferramentas */}
        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Wrench className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900">Ferramentas Necessárias</h3>
            </div>
            <ul className="space-y-2">
              {guide.ferramentas.map((ferramenta, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{ferramenta}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Materiais */}
        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900">Materiais Necessários</h3>
            </div>
            <ul className="space-y-2">
              {guide.materiais.map((material, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{material}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Steps */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Passo a Passo</h3>
          
          <div className="space-y-6">
            {guide.passos.map((passo, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                      index <= currentStep ? 'bg-gradient-to-br from-blue-600 to-indigo-600' : 'bg-gray-300'
                    }`}>
                      {index + 1}
                    </div>
                    {index < guide.passos.length - 1 && (
                      <div className={`w-0.5 h-16 mx-auto mt-2 ${
                        index < currentStep ? 'bg-blue-600' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pb-8">
                    <h4 className="font-bold text-gray-900 mb-2">{passo.titulo}</h4>
                    <p className="text-gray-700 mb-3">{passo.descricao}</p>
                    
                    {passo.dica && (
                      <div className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-yellow-900 mb-1">Dica:</p>
                          <p className="text-sm text-yellow-800">{passo.dica}</p>
                        </div>
                      </div>
                    )}

                    {index === currentStep && index < guide.passos.length - 1 && (
                      <Button
                        onClick={() => setCurrentStep(currentStep + 1)}
                        className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      >
                        Próximo passo
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}

                    {index === currentStep && index === guide.passos.length - 1 && (
                      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center gap-2 text-green-800">
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="font-semibold">Parabéns! Você completou este guia.</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Reset */}
          {currentStep > 0 && (
            <div className="mt-6 pt-6 border-t">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(0)}
                className="w-full sm:w-auto"
              >
                Reiniciar guia
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Safety Warning */}
      <Card className="border-0 shadow-md bg-orange-50 border-orange-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-orange-900 mb-2">Aviso de Segurança</h4>
              <p className="text-sm text-orange-800">
                Sempre siga as recomendações de segurança do fabricante. Se não se sentir confortável 
                realizando o procedimento, procure um profissional qualificado. Use equipamentos de 
                proteção individual adequados.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
