'use client';

import { useState } from 'react';
import { User } from '@/lib/types';
import { 
  findUserByEmail, 
  saveUser, 
  setCurrentUser, 
  hashPassword, 
  verifyPassword 
} from '@/lib/storage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Car, CheckCircle2, AlertCircle } from 'lucide-react';

interface AuthPageProps {
  onAuthSuccess: () => void;
}

export default function AuthPage({ onAuthSuccess }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (isLogin) {
      // Login
      const user = findUserByEmail(formData.email);
      
      if (!user) {
        setError('Email não encontrado. Crie uma conta primeiro.');
        return;
      }

      if (!verifyPassword(formData.senha, user.senha)) {
        setError('Senha incorreta.');
        return;
      }

      setCurrentUser(user);
      setSuccess('Login realizado com sucesso!');
      setTimeout(() => onAuthSuccess(), 500);
    } else {
      // Cadastro
      if (!formData.nome || !formData.email || !formData.senha) {
        setError('Preencha todos os campos.');
        return;
      }

      if (formData.senha !== formData.confirmarSenha) {
        setError('As senhas não coincidem.');
        return;
      }

      if (formData.senha.length < 6) {
        setError('A senha deve ter no mínimo 6 caracteres.');
        return;
      }

      const existingUser = findUserByEmail(formData.email);
      if (existingUser) {
        setError('Este email já está cadastrado.');
        return;
      }

      const newUser: User = {
        id: Date.now().toString(),
        nome: formData.nome,
        email: formData.email,
        senha: hashPassword(formData.senha),
        createdAt: new Date().toISOString()
      };

      saveUser(newUser);
      setCurrentUser(newUser);
      setSuccess('Conta criada com sucesso!');
      setTimeout(() => onAuthSuccess(), 500);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess('');
    setFormData({ nome: '', email: '', senha: '', confirmarSenha: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Lado esquerdo - Branding */}
        <div className="hidden md:block space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-2xl shadow-lg">
              <Wrench className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Conserte o seu Carro
              </h1>
              <p className="text-gray-600 text-lg">Guias práticos de reparação</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-blue-100 p-2 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Guias Passo-a-Passo</h3>
                <p className="text-gray-600 text-sm">Instruções detalhadas para cada reparo</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Car className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Diagnóstico Rápido</h3>
                <p className="text-gray-600 text-sm">Identifique problemas por sintomas</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Wrench className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Economize Dinheiro</h3>
                <p className="text-gray-600 text-sm">Faça manutenções simples você mesmo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado direito - Formulário */}
        <Card className="shadow-2xl border-0">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center md:hidden mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-2xl">
                <Wrench className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center">
              {isLogin ? 'Bem-vindo de volta' : 'Criar conta'}
            </CardTitle>
            <CardDescription className="text-center">
              {isLogin 
                ? 'Entre para acessar seus guias e veículos' 
                : 'Cadastre-se para começar a consertar seu carro'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="João Silva"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="h-11"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="senha">Senha</Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder="••••••••"
                  value={formData.senha}
                  onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                  className="h-11"
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmarSenha">Confirmar senha</Label>
                  <Input
                    id="confirmarSenha"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmarSenha}
                    onChange={(e) => setFormData({ ...formData, confirmarSenha: e.target.value })}
                    className="h-11"
                  />
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {success && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-sm text-green-600">{success}</p>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium"
              >
                {isLogin ? 'Entrar' : 'Criar conta'}
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={toggleMode}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  {isLogin 
                    ? 'Não tem conta? Cadastre-se' 
                    : 'Já tem conta? Faça login'}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
