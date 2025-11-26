'use client';

import { useState, useEffect } from 'react';
import { getUserVehicles, saveVehicle, deleteVehicle } from '@/lib/storage';
import { Vehicle } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Car,
  Plus,
  Trash2,
  Edit,
  Calendar,
  Gauge
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface VehicleManagerProps {
  userId: string;
  onBack: () => void;
  onUpdate: () => void;
}

export default function VehicleManager({ userId, onBack, onUpdate }: VehicleManagerProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    ano: new Date().getFullYear(),
    quilometragem: 0
  });

  useEffect(() => {
    loadVehicles();
  }, [userId]);

  const loadVehicles = () => {
    const userVehicles = getUserVehicles(userId);
    setVehicles(userVehicles);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const vehicle: Vehicle = {
      id: editingVehicle?.id || Date.now().toString(),
      usuarioId: userId,
      marca: formData.marca,
      modelo: formData.modelo,
      ano: formData.ano,
      quilometragem: formData.quilometragem
    };

    saveVehicle(vehicle);
    loadVehicles();
    onUpdate();
    handleCloseDialog();
  };

  const handleEdit = (vehicle: Vehicle) => {
    setEditingVehicle(vehicle);
    setFormData({
      marca: vehicle.marca,
      modelo: vehicle.modelo,
      ano: vehicle.ano,
      quilometragem: vehicle.quilometragem
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (vehicleId: string) => {
    if (confirm('Tem certeza que deseja remover este veículo?')) {
      deleteVehicle(vehicleId);
      loadVehicles();
      onUpdate();
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingVehicle(null);
    setFormData({
      marca: '',
      modelo: '',
      ano: new Date().getFullYear(),
      quilometragem: 0
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
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
            <h2 className="text-2xl font-bold text-gray-900">Meus Veículos</h2>
            <p className="text-gray-600">Gerencie seus veículos cadastrados</p>
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Veículo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingVehicle ? 'Editar Veículo' : 'Adicionar Veículo'}
              </DialogTitle>
              <DialogDescription>
                Preencha as informações do seu veículo
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="marca">Marca</Label>
                <Input
                  id="marca"
                  placeholder="Ex: Toyota, Volkswagen, Fiat..."
                  value={formData.marca}
                  onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modelo">Modelo</Label>
                <Input
                  id="modelo"
                  placeholder="Ex: Corolla, Gol, Uno..."
                  value={formData.modelo}
                  onChange={(e) => setFormData({ ...formData, modelo: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ano">Ano</Label>
                <Input
                  id="ano"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  value={formData.ano}
                  onChange={(e) => setFormData({ ...formData, ano: parseInt(e.target.value) })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quilometragem">Quilometragem (km)</Label>
                <Input
                  id="quilometragem"
                  type="number"
                  min="0"
                  value={formData.quilometragem}
                  onChange={(e) => setFormData({ ...formData, quilometragem: parseInt(e.target.value) })}
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCloseDialog}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  {editingVehicle ? 'Salvar' : 'Adicionar'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Vehicles List */}
      {vehicles.length === 0 ? (
        <Card className="border-0 shadow-md">
          <CardContent className="p-12 text-center">
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nenhum veículo cadastrado
            </h3>
            <p className="text-gray-600 mb-6">
              Adicione seu primeiro veículo para começar a acompanhar manutenções
            </p>
            <Button
              onClick={() => setIsDialogOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Veículo
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(vehicle)}
                      className="h-8 w-8 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(vehicle.id)}
                      className="h-8 w-8 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-1">{vehicle.marca}</CardTitle>
                <CardDescription className="text-base mb-4">{vehicle.modelo}</CardDescription>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Ano: {vehicle.ano}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Gauge className="w-4 h-4" />
                    <span>{vehicle.quilometragem.toLocaleString('pt-BR')} km</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Info Card */}
      {vehicles.length > 0 && (
        <Card className="border-0 shadow-md bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Car className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Dica</h4>
                <p className="text-sm text-blue-800">
                  Mantenha as informações dos seus veículos atualizadas para receber recomendações 
                  personalizadas de manutenção baseadas na quilometragem e idade do veículo.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
