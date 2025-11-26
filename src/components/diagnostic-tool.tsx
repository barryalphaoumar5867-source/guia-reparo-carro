'use client';

import { useState } from 'react';
import { DIAGNOSTIC_SYMPTOMS } from '@/lib/mock-data';
import { DiagnosticSymptom } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, 
  Search,
  AlertTriangle,
  ChevronRight,
  Lightbulb,
  BookOpen
} from 'lucide-react';

interface DiagnosticToolProps {
  onViewGuide: (guideId: string) => void;
  onBack: () => void;
}

export default function DiagnosticTool({ onViewGuide, onBack }: DiagnosticToolProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState<DiagnosticSymptom | null>(null);

  const filteredSymptoms = DIAGNOSTIC_SYMPTOMS.filter(symptom =>
    symptom.sintoma.toLowerCase().includes(searchTerm.toLowerCase()) ||
    symptom.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      eletrica: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      freios: 'bg-red-100 text-red-800 border-red-300',
      motor: 'bg-blue-100 text-blue-800 border-blue-300',
      suspensao: 'bg-purple-100 text-purple-800 border-purple-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={selectedSymptom ? () => setSelectedSymptom(null) : onBack}
          className="hover:bg-white"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Diagnóstico por Sintomas</h2>
          <p className="text-gray-600">Identifique o problema do seu veículo</p>
        </div>
      </div>

      {!selectedSymptom ? (
        <>
          {/* Search */}
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Descreva o problema (ex: carro não liga, ruído ao frear...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="border-0 shadow-md bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Como usar o diagnóstico</h4>
                  <p className="text-sm text-blue-800">
                    Digite o sintoma que você está observando no seu veículo. Vamos ajudá-lo a 
                    identificar as possíveis causas e sugerir guias de reparo relacionados.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Symptoms List */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">
              {searchTerm ? 'Resultados da busca' : 'Sintomas comuns'}
            </h3>

            {filteredSymptoms.length === 0 ? (
              <Card className="border-0 shadow-md">
                <CardContent className="p-12 text-center">
                  <AlertTriangle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Nenhum sintoma encontrado
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tente buscar por outros termos ou navegue pelos sintomas comuns
                  </p>
                  <Button
                    onClick={() => setSearchTerm('')}
                    variant="outline"
                  >
                    Limpar busca
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {filteredSymptoms.map((symptom) => (
                  <Card 
                    key={symptom.id}
                    className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    onClick={() => setSelectedSymptom(symptom)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {symptom.sintoma}
                            </h4>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(symptom.categoria)}`}>
                              {symptom.categoria}
                            </span>
                            <span className="text-sm text-gray-600">
                              {symptom.possiveisCausas.length} possíveis causas
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        /* Symptom Detail */
        <div className="space-y-6">
          {/* Symptom Header */}
          <Card className="border-0 shadow-md bg-gradient-to-r from-orange-50 to-red-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {selectedSymptom.sintoma}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(selectedSymptom.categoria)}`}>
                    {selectedSymptom.categoria}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Possible Causes */}
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                Possíveis Causas
              </h4>
              <ul className="space-y-3">
                {selectedSymptom.possiveisCausas.map((causa, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{causa}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Related Guides */}
          {selectedSymptom.guiasRelacionados.length > 0 && (
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  Guias Relacionados
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Encontramos guias que podem ajudar a resolver este problema:
                </p>
                <div className="space-y-3">
                  {selectedSymptom.guiasRelacionados.map((guideId) => (
                    <Button
                      key={guideId}
                      onClick={() => onViewGuide(guideId)}
                      variant="outline"
                      className="w-full justify-between h-auto py-4 hover:bg-indigo-50 hover:border-indigo-300"
                    >
                      <span className="font-medium">Ver guia de reparo</span>
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Warning */}
          <Card className="border-0 shadow-md bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">Importante</h4>
                  <p className="text-sm text-yellow-800">
                    Este diagnóstico é apenas uma orientação inicial. Para problemas complexos ou 
                    se você não tiver certeza do procedimento, consulte sempre um mecânico profissional.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
