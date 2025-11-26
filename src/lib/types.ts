// Types para o aplicativo Conserte o seu carro

export interface User {
  id: string;
  nome: string;
  email: string;
  senha: string; // hash
  createdAt: string;
}

export interface Vehicle {
  id: string;
  usuarioId: string;
  marca: string;
  modelo: string;
  ano: number;
  quilometragem: number;
}

export interface GuideStep {
  ordem: number;
  titulo: string;
  descricao: string;
  imagem?: string;
  video?: string;
  dica?: string;
}

export interface Guide {
  id: string;
  titulo: string;
  descricao: string;
  categoria: 'manutencao' | 'reparo' | 'diagnostico' | 'eletrica' | 'mecanica';
  dificuldade: 'facil' | 'medio' | 'dificil';
  tempoEstimado: string;
  ferramentas: string[];
  materiais: string[];
  passos: GuideStep[];
  sintomas?: string[];
  imagem: string;
}

export interface DiagnosticSymptom {
  id: string;
  sintoma: string;
  categoria: string;
  possiveisCausas: string[];
  guiasRelacionados: string[];
}
