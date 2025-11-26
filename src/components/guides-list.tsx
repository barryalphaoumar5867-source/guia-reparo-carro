'use client';

import { useState, useEffect } from 'react';
import { getAllGuides } from '@/lib/storage';
import { Guide } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Search, 
  Filter,
  Clock,
  Gauge,
  Wrench
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GuidesListProps {
  onViewGuide: (guideId: string) => void;
  onBack: () => void;
}

export default function GuidesList({ onViewGuide, onBack }: GuidesListProps) {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [filteredGuides, setFilteredGuides] = useState<Guide[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  useEffect(() => {
    const allGuides = getAllGuides();
    setGuides(allGuides);
    setFilteredGuides(allGuides);
  }, []);

  useEffect(() => {
    let filtered = guides;

    // Filtro de busca
    if (searchTerm) {
      filtered = filtered.filter(guide => 
        guide.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guide.descricao.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro de categoria
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(guide => guide.categoria === categoryFilter);
    }

    // Filtro de dificuldade
    if (difficultyFilter !== 'all') {
      filtered = filtered.filter(guide => guide.dificuldade === difficultyFilter);
    }

    setFilteredGuides(filtered);
  }, [searchTerm, categoryFilter, difficultyFilter, guides]);

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

  const getDifficultyLabel = (difficulty: string) => {
    const labels: Record<string, string> = {
      facil: 'Fácil',
      medio: 'Médio',
      dificil: 'Difícil'
    };
    return labels[difficulty] || difficulty;
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
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Guias de Reparação</h2>
          <p className="text-gray-600">Explore nossos guias passo-a-passo</p>
        </div>
      </div>

      {/* Filters */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative md:col-span-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Buscar guias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-11"
              />
            </div>

            {/* Category Filter */}
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="h-11">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as categorias</SelectItem>
                <SelectItem value="manutencao">Manutenção</SelectItem>
                <SelectItem value="reparo">Reparo</SelectItem>
                <SelectItem value="diagnostico">Diagnóstico</SelectItem>
                <SelectItem value="eletrica">Elétrica</SelectItem>
                <SelectItem value="mecanica">Mecânica</SelectItem>
              </SelectContent>
            </Select>

            {/* Difficulty Filter */}
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="h-11">
                <Gauge className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Dificuldade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as dificuldades</SelectItem>
                <SelectItem value="facil">Fácil</SelectItem>
                <SelectItem value="medio">Médio</SelectItem>
                <SelectItem value="dificil">Difícil</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          {(categoryFilter !== 'all' || difficultyFilter !== 'all' || searchTerm) && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t">
              <span className="text-sm text-gray-600">Filtros ativos:</span>
              {searchTerm && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  Busca: {searchTerm}
                </span>
              )}
              {categoryFilter !== 'all' && (
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                  {getCategoryLabel(categoryFilter)}
                </span>
              )}
              {difficultyFilter !== 'all' && (
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  {getDifficultyLabel(difficultyFilter)}
                </span>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                  setDifficultyFilter('all');
                }}
                className="ml-auto text-gray-600 hover:text-gray-900"
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {filteredGuides.length} {filteredGuides.length === 1 ? 'guia encontrado' : 'guias encontrados'}
        </p>
      </div>

      {/* Guides Grid */}
      {filteredGuides.length === 0 ? (
        <Card className="border-0 shadow-md">
          <CardContent className="p-12 text-center">
            <Wrench className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nenhum guia encontrado
            </h3>
            <p className="text-gray-600 mb-4">
              Tente ajustar os filtros ou buscar por outros termos
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('all');
                setDifficultyFilter('all');
              }}
              variant="outline"
            >
              Limpar filtros
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <Card 
              key={guide.id}
              className="border-0 shadow-md hover:shadow-xl transition-all cursor-pointer group overflow-hidden"
              onClick={() => onViewGuide(guide.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={guide.imagem} 
                  alt={guide.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                    {getCategoryLabel(guide.categoria)}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    guide.dificuldade === 'facil' 
                      ? 'bg-green-500 text-white' 
                      : guide.dificuldade === 'medio'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}>
                    {getDifficultyLabel(guide.dificuldade)}
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
      )}
    </div>
  );
}
