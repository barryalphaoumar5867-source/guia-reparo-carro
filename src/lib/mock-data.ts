// Dados mock para o MVP

import { Guide, DiagnosticSymptom } from './types';

export const MOCK_GUIDES: Guide[] = [
  {
    id: '1',
    titulo: 'Troca de Óleo do Motor',
    descricao: 'Aprenda a trocar o óleo do motor do seu carro de forma segura e econômica.',
    categoria: 'manutencao',
    dificuldade: 'facil',
    tempoEstimado: '30-45 minutos',
    ferramentas: ['Chave de filtro', 'Bandeja coletora', 'Funil', 'Chave de boca'],
    materiais: ['Óleo de motor (4-5 litros)', 'Filtro de óleo novo', 'Arruela de vedação'],
    imagem: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    sintomas: ['Óleo escuro', 'Luz de óleo acesa', 'Motor barulhento'],
    passos: [
      {
        ordem: 1,
        titulo: 'Prepare o veículo',
        descricao: 'Estacione em superfície plana, aplique o freio de mão e deixe o motor esfriar por 10 minutos.',
        dica: 'Nunca troque óleo com motor muito quente para evitar queimaduras.'
      },
      {
        ordem: 2,
        titulo: 'Localize o bujão de drenagem',
        descricao: 'Posicione a bandeja coletora sob o cárter e localize o parafuso de drenagem.',
        dica: 'Use uma lanterna para melhor visualização.'
      },
      {
        ordem: 3,
        titulo: 'Drene o óleo usado',
        descricao: 'Remova o bujão com cuidado e deixe o óleo drenar completamente (5-10 minutos).',
        dica: 'O óleo pode estar morno e fluir mais rápido.'
      },
      {
        ordem: 4,
        titulo: 'Troque o filtro de óleo',
        descricao: 'Remova o filtro antigo com a chave apropriada. Lubrifique a borracha do filtro novo com óleo limpo antes de instalar.',
        dica: 'Aperte o filtro apenas com a mão, não use ferramentas.'
      },
      {
        ordem: 5,
        titulo: 'Recoloque o bujão',
        descricao: 'Instale a arruela nova e aperte o bujão com torque adequado.',
        dica: 'Não aperte demais para não danificar a rosca.'
      },
      {
        ordem: 6,
        titulo: 'Adicione óleo novo',
        descricao: 'Remova a tampa de óleo e adicione a quantidade recomendada pelo fabricante usando o funil.',
        dica: 'Consulte o manual do proprietário para a especificação correta.'
      },
      {
        ordem: 7,
        titulo: 'Verifique o nível',
        descricao: 'Ligue o motor por 1 minuto, desligue e aguarde 5 minutos. Verifique o nível com a vareta.',
        dica: 'O nível deve estar entre as marcas MIN e MAX.'
      }
    ]
  },
  {
    id: '2',
    titulo: 'Substituição de Pastilhas de Freio',
    descricao: 'Guia completo para trocar as pastilhas de freio dianteiras com segurança.',
    categoria: 'reparo',
    dificuldade: 'medio',
    tempoEstimado: '1-2 horas',
    ferramentas: ['Macaco hidráulico', 'Cavaletes', 'Chave de roda', 'Chave Allen', 'Alicate de pressão'],
    materiais: ['Jogo de pastilhas novas', 'Graxa para freios', 'Fluido de freio'],
    imagem: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop',
    sintomas: ['Ruído ao frear', 'Pedal de freio baixo', 'Vibração ao frear'],
    passos: [
      {
        ordem: 1,
        titulo: 'Segurança primeiro',
        descricao: 'Estacione em superfície plana, aplique freio de mão e calce as rodas traseiras.',
        dica: 'Nunca trabalhe sob um carro apoiado apenas no macaco.'
      },
      {
        ordem: 2,
        titulo: 'Remova a roda',
        descricao: 'Afrouxe as porcas da roda, levante o carro com o macaco e apoie em cavaletes. Remova a roda completamente.',
        dica: 'Afrouxe as porcas antes de levantar o carro.'
      },
      {
        ordem: 3,
        titulo: 'Acesse a pinça de freio',
        descricao: 'Localize a pinça de freio e remova os parafusos que a prendem ao suporte.',
        dica: 'Fotografe a posição original para facilitar a montagem.'
      },
      {
        ordem: 4,
        titulo: 'Remova as pastilhas antigas',
        descricao: 'Retire a pinça e remova as pastilhas gastas. Observe a posição das molas e clips.',
        dica: 'Guarde as peças pequenas em um recipiente.'
      },
      {
        ordem: 5,
        titulo: 'Recue o pistão',
        descricao: 'Use o alicate de pressão para empurrar o pistão de volta para dentro da pinça.',
        dica: 'Faça isso lentamente para não danificar o pistão.'
      },
      {
        ordem: 6,
        titulo: 'Instale as pastilhas novas',
        descricao: 'Aplique graxa nas costas das pastilhas e instale-as na pinça com os clips e molas.',
        dica: 'Certifique-se de que estão bem encaixadas.'
      },
      {
        ordem: 7,
        titulo: 'Remonte tudo',
        descricao: 'Recoloque a pinça, aperte os parafusos, reinstale a roda e aperte as porcas em estrela.',
        dica: 'Use torquímetro para apertar com a força correta.'
      },
      {
        ordem: 8,
        titulo: 'Teste o pedal',
        descricao: 'Antes de dirigir, bombeie o pedal de freio várias vezes até ficar firme.',
        dica: 'Faça um teste em baixa velocidade antes de usar normalmente.'
      }
    ]
  },
  {
    id: '3',
    titulo: 'Troca de Bateria',
    descricao: 'Como substituir a bateria do seu veículo de forma segura.',
    categoria: 'eletrica',
    dificuldade: 'facil',
    tempoEstimado: '15-30 minutos',
    ferramentas: ['Chave de boca 10mm', 'Luvas de proteção', 'Escova de aço'],
    materiais: ['Bateria nova', 'Graxa para terminais', 'Bicarbonato de sódio'],
    imagem: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop',
    sintomas: ['Carro não liga', 'Luzes fracas', 'Motor de arranque lento'],
    passos: [
      {
        ordem: 1,
        titulo: 'Desligue tudo',
        descricao: 'Desligue o motor, luzes, rádio e todos os acessórios elétricos.',
        dica: 'Certifique-se de ter o código do rádio antes de desconectar.'
      },
      {
        ordem: 2,
        titulo: 'Localize a bateria',
        descricao: 'Abra o capô e localize a bateria. Identifique os terminais positivo (+) e negativo (-).',
        dica: 'O terminal positivo geralmente tem uma capa vermelha.'
      },
      {
        ordem: 3,
        titulo: 'Desconecte o terminal negativo',
        descricao: 'SEMPRE remova primeiro o cabo negativo (-) usando a chave apropriada.',
        dica: 'Isso evita curto-circuito acidental.'
      },
      {
        ordem: 4,
        titulo: 'Desconecte o terminal positivo',
        descricao: 'Agora remova o cabo positivo (+).',
        dica: 'Mantenha os cabos afastados dos terminais.'
      },
      {
        ordem: 5,
        titulo: 'Remova a bateria antiga',
        descricao: 'Solte a presilha de fixação e retire a bateria com cuidado (ela é pesada!).',
        dica: 'Baterias pesam entre 10-20kg. Peça ajuda se necessário.'
      },
      {
        ordem: 6,
        titulo: 'Limpe os terminais',
        descricao: 'Use a escova de aço e uma solução de bicarbonato para limpar os terminais dos cabos.',
        dica: 'Terminais limpos garantem melhor conexão.'
      },
      {
        ordem: 7,
        titulo: 'Instale a bateria nova',
        descricao: 'Posicione a bateria nova, fixe com a presilha e conecte primeiro o terminal positivo (+).',
        dica: 'Certifique-se de que está bem fixada.'
      },
      {
        ordem: 8,
        titulo: 'Conecte o terminal negativo',
        descricao: 'Por último, conecte o cabo negativo (-) e aperte bem.',
        dica: 'Aplique graxa nos terminais para evitar corrosão.'
      }
    ]
  },
  {
    id: '4',
    titulo: 'Calibragem de Pneus',
    descricao: 'Mantenha seus pneus na pressão correta para segurança e economia.',
    categoria: 'manutencao',
    dificuldade: 'facil',
    tempoEstimado: '10-15 minutos',
    ferramentas: ['Calibrador de pneus', 'Compressor de ar'],
    materiais: ['Nenhum material necessário'],
    imagem: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop',
    sintomas: ['Desgaste irregular', 'Consumo alto', 'Direção pesada'],
    passos: [
      {
        ordem: 1,
        titulo: 'Verifique a pressão recomendada',
        descricao: 'Consulte o manual do veículo ou o adesivo na porta do motorista para saber a pressão correta.',
        dica: 'A pressão é diferente para pneus dianteiros e traseiros.'
      },
      {
        ordem: 2,
        titulo: 'Meça com pneus frios',
        descricao: 'Verifique a pressão antes de dirigir ou após o carro estar parado por 3 horas.',
        dica: 'Pneus quentes mostram pressão maior que a real.'
      },
      {
        ordem: 3,
        titulo: 'Remova a tampa da válvula',
        descricao: 'Retire a tampa de proteção da válvula do pneu.',
        dica: 'Guarde as tampas em local seguro.'
      },
      {
        ordem: 4,
        titulo: 'Meça a pressão atual',
        descricao: 'Encaixe o calibrador firmemente na válvula e leia a pressão.',
        dica: 'Faça uma leitura rápida para não perder ar.'
      },
      {
        ordem: 5,
        titulo: 'Ajuste se necessário',
        descricao: 'Se baixa, adicione ar. Se alta, libere ar pressionando o pino central da válvula.',
        dica: 'Adicione ar aos poucos e meça frequentemente.'
      },
      {
        ordem: 6,
        titulo: 'Repita para todos os pneus',
        descricao: 'Calibre todos os 4 pneus, incluindo o estepe.',
        dica: 'O estepe geralmente requer pressão maior.'
      },
      {
        ordem: 7,
        titulo: 'Recoloque as tampas',
        descricao: 'Coloque as tampas de volta para proteger as válvulas de sujeira.',
        dica: 'Tampas evitam perda lenta de ar.'
      }
    ]
  },
  {
    id: '5',
    titulo: 'Substituição de Lâmpadas',
    descricao: 'Troque lâmpadas queimadas dos faróis, lanternas e sinaleiras.',
    categoria: 'eletrica',
    dificuldade: 'facil',
    tempoEstimado: '10-20 minutos',
    ferramentas: ['Chave de fenda', 'Luvas de algodão'],
    materiais: ['Lâmpada nova (tipo correto)', 'Álcool isopropílico'],
    imagem: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&h=600&fit=crop',
    sintomas: ['Luz não acende', 'Luz fraca', 'Luz piscando'],
    passos: [
      {
        ordem: 1,
        titulo: 'Identifique a lâmpada',
        descricao: 'Verifique qual lâmpada está queimada e consulte o manual para o tipo correto.',
        dica: 'Leve a lâmpada velha na loja para garantir o tipo certo.'
      },
      {
        ordem: 2,
        titulo: 'Desligue o veículo',
        descricao: 'Desligue o motor e as luzes. Aguarde alguns minutos para esfriar.',
        dica: 'Lâmpadas halógenas ficam muito quentes.'
      },
      {
        ordem: 3,
        titulo: 'Acesse o compartimento',
        descricao: 'Abra o capô e localize a parte traseira do farol. Remova a tampa de proteção.',
        dica: 'Alguns modelos exigem remover o farol completo.'
      },
      {
        ordem: 4,
        titulo: 'Desconecte o soquete',
        descricao: 'Gire o soquete no sentido anti-horário e puxe com cuidado.',
        dica: 'Não puxe pelos fios, apenas pelo soquete.'
      },
      {
        ordem: 5,
        titulo: 'Remova a lâmpada queimada',
        descricao: 'Dependendo do tipo, puxe ou gire a lâmpada para remover.',
        dica: 'Use luvas para não tocar no vidro da lâmpada nova.'
      },
      {
        ordem: 6,
        titulo: 'Instale a lâmpada nova',
        descricao: 'Encaixe a lâmpada nova no soquete sem tocar no vidro.',
        dica: 'Óleo da pele reduz a vida útil da lâmpada.'
      },
      {
        ordem: 7,
        titulo: 'Reconecte e teste',
        descricao: 'Recoloque o soquete, a tampa e teste se a luz está funcionando.',
        dica: 'Teste antes de fechar tudo completamente.'
      }
    ]
  },
  {
    id: '6',
    titulo: 'Limpeza do Filtro de Ar',
    descricao: 'Mantenha o filtro de ar limpo para melhor desempenho do motor.',
    categoria: 'manutencao',
    dificuldade: 'facil',
    tempoEstimado: '10-15 minutos',
    ferramentas: ['Chave de fenda', 'Compressor de ar ou aspirador'],
    materiais: ['Filtro de ar novo (se necessário)'],
    imagem: 'https://images.unsplash.com/photo-1632823469770-0fbd4750d7c8?w=800&h=600&fit=crop',
    sintomas: ['Perda de potência', 'Consumo alto', 'Fumaça preta'],
    passos: [
      {
        ordem: 1,
        titulo: 'Localize a caixa do filtro',
        descricao: 'Abra o capô e encontre a caixa do filtro de ar (geralmente uma caixa preta retangular).',
        dica: 'Consulte o manual se tiver dificuldade.'
      },
      {
        ordem: 2,
        titulo: 'Abra a caixa',
        descricao: 'Solte as travas ou parafusos que prendem a tampa da caixa.',
        dica: 'Algumas têm travas de pressão, outras parafusos.'
      },
      {
        ordem: 3,
        titulo: 'Remova o filtro',
        descricao: 'Retire o filtro com cuidado e inspecione seu estado.',
        dica: 'Olhe contra a luz para ver se está muito sujo.'
      },
      {
        ordem: 4,
        titulo: 'Limpe ou substitua',
        descricao: 'Se pouco sujo, use ar comprimido para limpar. Se muito sujo, substitua por novo.',
        dica: 'Sopre de dentro para fora para não empurrar sujeira.'
      },
      {
        ordem: 5,
        titulo: 'Limpe a caixa',
        descricao: 'Aproveite para limpar o interior da caixa do filtro.',
        dica: 'Use um pano úmido para remover poeira.'
      },
      {
        ordem: 6,
        titulo: 'Reinstale o filtro',
        descricao: 'Coloque o filtro limpo ou novo de volta na posição correta.',
        dica: 'Certifique-se de que está bem encaixado.'
      },
      {
        ordem: 7,
        titulo: 'Feche a caixa',
        descricao: 'Recoloque a tampa e trave ou aperte os parafusos.',
        dica: 'Verifique se está bem fechada para não entrar sujeira.'
      }
    ]
  },
  {
    id: '7',
    titulo: 'Troca de Velas de Ignição',
    descricao: 'Substitua as velas de ignição para melhorar o desempenho do motor.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '45-60 minutos',
    ferramentas: ['Chave de vela', 'Calibrador de velas', 'Extensão', 'Escova de aço'],
    materiais: ['Jogo de velas novas', 'Graxa dielétrica', 'Spray desengripante'],
    imagem: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    sintomas: ['Falhas na aceleração', 'Consumo alto', 'Dificuldade para ligar', 'Motor falhando'],
    passos: [
      {
        ordem: 1,
        titulo: 'Deixe o motor esfriar',
        descricao: 'Aguarde pelo menos 30 minutos após desligar o motor.',
        dica: 'Velas quentes podem causar queimaduras graves.'
      },
      {
        ordem: 2,
        titulo: 'Localize as velas',
        descricao: 'Identifique os cabos de vela conectados ao motor.',
        dica: 'Consulte o manual para localização exata.'
      },
      {
        ordem: 3,
        titulo: 'Remova um cabo por vez',
        descricao: 'Puxe o cabo pela base (não pelo fio) e limpe ao redor da vela.',
        dica: 'Troque uma vela por vez para não confundir a ordem.'
      },
      {
        ordem: 4,
        titulo: 'Remova a vela antiga',
        descricao: 'Use a chave de vela para desatarraxar no sentido anti-horário.',
        dica: 'Se estiver presa, use spray desengripante e aguarde.'
      },
      {
        ordem: 5,
        titulo: 'Verifique a folga da vela nova',
        descricao: 'Use o calibrador para ajustar a distância entre os eletrodos conforme especificação.',
        dica: 'A folga incorreta afeta o desempenho.'
      },
      {
        ordem: 6,
        titulo: 'Instale a vela nova',
        descricao: 'Aperte manualmente primeiro, depois use a chave com cuidado.',
        dica: 'Não aperte demais para não danificar a rosca.'
      },
      {
        ordem: 7,
        titulo: 'Reconecte o cabo',
        descricao: 'Aplique graxa dielétrica e encaixe o cabo até ouvir um clique.',
        dica: 'Certifique-se de que está bem conectado.'
      },
      {
        ordem: 8,
        titulo: 'Repita para todas as velas',
        descricao: 'Siga o mesmo processo para cada vela, uma de cada vez.',
        dica: 'Mantenha a ordem dos cabos correta.'
      }
    ]
  },
  {
    id: '8',
    titulo: 'Sangria do Sistema de Freio',
    descricao: 'Remova o ar do sistema de freios para garantir frenagem eficiente.',
    categoria: 'reparo',
    dificuldade: 'dificil',
    tempoEstimado: '1-2 horas',
    ferramentas: ['Chave de sangria', 'Mangueira transparente', 'Recipiente', 'Macaco'],
    materiais: ['Fluido de freio DOT 3/4', 'Luvas', 'Óculos de proteção'],
    imagem: 'https://images.unsplash.com/photo-1632823471565-1ecdf7610bc7?w=800&h=600&fit=crop',
    sintomas: ['Pedal de freio esponjoso', 'Pedal vai até o fundo', 'Freio fraco'],
    passos: [
      {
        ordem: 1,
        titulo: 'Verifique o nível do reservatório',
        descricao: 'Complete o reservatório de fluido de freio até o nível máximo.',
        dica: 'Mantenha o reservatório cheio durante todo o processo.'
      },
      {
        ordem: 2,
        titulo: 'Levante o veículo',
        descricao: 'Use o macaco para levantar o carro e remova as rodas.',
        dica: 'Trabalhe em uma roda por vez.'
      },
      {
        ordem: 3,
        titulo: 'Localize o parafuso de sangria',
        descricao: 'Encontre o parafuso de sangria na pinça de freio.',
        dica: 'Comece sempre pela roda mais distante do reservatório.'
      },
      {
        ordem: 4,
        titulo: 'Conecte a mangueira',
        descricao: 'Encaixe a mangueira no parafuso e coloque a outra ponta em um recipiente.',
        dica: 'Use um recipiente transparente para ver o fluido.'
      },
      {
        ordem: 5,
        titulo: 'Bombeie o pedal',
        descricao: 'Peça a um ajudante para bombear o pedal 3-4 vezes e manter pressionado.',
        dica: 'Comunicação clara é essencial.'
      },
      {
        ordem: 6,
        titulo: 'Abra o parafuso de sangria',
        descricao: 'Com o pedal pressionado, abra o parafuso. Feche antes de soltar o pedal.',
        dica: 'Observe bolhas de ar saindo com o fluido.'
      },
      {
        ordem: 7,
        titulo: 'Repita o processo',
        descricao: 'Continue até não sair mais bolhas de ar. Verifique o nível do reservatório.',
        dica: 'Nunca deixe o reservatório esvaziar.'
      },
      {
        ordem: 8,
        titulo: 'Faça em todas as rodas',
        descricao: 'Repita o processo nas 4 rodas na ordem correta.',
        dica: 'Ordem: traseira direita, traseira esquerda, dianteira direita, dianteira esquerda.'
      }
    ]
  },
  {
    id: '9',
    titulo: 'Troca do Filtro de Combustível',
    descricao: 'Substitua o filtro de combustível para manter o sistema limpo.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '30-45 minutos',
    ferramentas: ['Chaves de boca', 'Alicate', 'Bandeja coletora', 'Panos'],
    materiais: ['Filtro de combustível novo', 'Abraçadeiras novas'],
    imagem: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop',
    sintomas: ['Perda de potência', 'Motor falhando', 'Dificuldade para ligar'],
    passos: [
      {
        ordem: 1,
        titulo: 'Despressurize o sistema',
        descricao: 'Remova o fusível da bomba de combustível e ligue o motor até morrer.',
        dica: 'Isso evita vazamento de combustível.'
      },
      {
        ordem: 2,
        titulo: 'Localize o filtro',
        descricao: 'O filtro geralmente fica sob o carro, próximo ao tanque.',
        dica: 'Consulte o manual para localização exata.'
      },
      {
        ordem: 3,
        titulo: 'Posicione a bandeja',
        descricao: 'Coloque a bandeja sob o filtro para coletar combustível.',
        dica: 'Trabalhe em área ventilada, longe de chamas.'
      },
      {
        ordem: 4,
        titulo: 'Solte as conexões',
        descricao: 'Remova as abraçadeiras e desconecte as mangueiras.',
        dica: 'Tenha panos prontos para limpar vazamentos.'
      },
      {
        ordem: 5,
        titulo: 'Remova o filtro antigo',
        descricao: 'Retire o filtro do suporte.',
        dica: 'Observe a direção do fluxo (seta no filtro).'
      },
      {
        ordem: 6,
        titulo: 'Instale o filtro novo',
        descricao: 'Posicione o filtro novo respeitando a direção do fluxo.',
        dica: 'A seta deve apontar para o motor.'
      },
      {
        ordem: 7,
        titulo: 'Reconecte as mangueiras',
        descricao: 'Conecte as mangueiras e aperte as abraçadeiras novas.',
        dica: 'Certifique-se de que estão bem firmes.'
      },
      {
        ordem: 8,
        titulo: 'Recoloque o fusível e teste',
        descricao: 'Recoloque o fusível, ligue o motor e verifique vazamentos.',
        dica: 'Deixe o motor funcionar por alguns minutos.'
      }
    ]
  },
  {
    id: '10',
    titulo: 'Alinhamento e Balanceamento',
    descricao: 'Entenda quando e por que fazer alinhamento e balanceamento.',
    categoria: 'manutencao',
    dificuldade: 'facil',
    tempoEstimado: '45-60 minutos',
    ferramentas: ['Serviço profissional recomendado'],
    materiais: ['Nenhum material necessário'],
    imagem: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop',
    sintomas: ['Volante torto', 'Carro puxa para um lado', 'Vibração em alta velocidade', 'Desgaste irregular dos pneus'],
    passos: [
      {
        ordem: 1,
        titulo: 'Identifique os sintomas',
        descricao: 'Observe se o carro puxa para um lado ou se há vibração no volante.',
        dica: 'Teste em uma via reta e plana.'
      },
      {
        ordem: 2,
        titulo: 'Verifique os pneus',
        descricao: 'Inspecione o desgaste dos pneus. Desgaste irregular indica problemas.',
        dica: 'Pneus devem ter desgaste uniforme.'
      },
      {
        ordem: 3,
        titulo: 'Escolha um serviço confiável',
        descricao: 'Procure uma oficina especializada com equipamento adequado.',
        dica: 'Peça recomendações e verifique avaliações.'
      },
      {
        ordem: 4,
        titulo: 'Alinhamento',
        descricao: 'O alinhamento ajusta os ângulos das rodas conforme especificações do fabricante.',
        dica: 'Faça a cada 10.000 km ou após trocar pneus.'
      },
      {
        ordem: 5,
        titulo: 'Balanceamento',
        descricao: 'O balanceamento distribui o peso uniformemente nas rodas.',
        dica: 'Faça sempre que trocar ou consertar pneus.'
      },
      {
        ordem: 6,
        titulo: 'Teste após o serviço',
        descricao: 'Dirija em linha reta e verifique se o volante está centralizado.',
        dica: 'O carro não deve puxar para nenhum lado.'
      }
    ]
  },
  {
    id: '11',
    titulo: 'Troca do Líquido de Arrefecimento',
    descricao: 'Substitua o líquido de arrefecimento para evitar superaquecimento.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '1 hora',
    ferramentas: ['Chave de boca', 'Bandeja coletora', 'Funil'],
    materiais: ['Líquido de arrefecimento', 'Água destilada', 'Aditivo anticorrosivo'],
    imagem: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    sintomas: ['Motor superaquecendo', 'Líquido com cor alterada', 'Nível baixo frequente'],
    passos: [
      {
        ordem: 1,
        titulo: 'Motor frio obrigatório',
        descricao: 'NUNCA abra o radiador com motor quente. Aguarde pelo menos 2 horas.',
        dica: 'Líquido quente pode causar queimaduras graves.'
      },
      {
        ordem: 2,
        titulo: 'Localize o dreno do radiador',
        descricao: 'Encontre o parafuso de drenagem na parte inferior do radiador.',
        dica: 'Consulte o manual se tiver dificuldade.'
      },
      {
        ordem: 3,
        titulo: 'Drene o líquido antigo',
        descricao: 'Posicione a bandeja e abra o dreno. Remova a tampa do radiador para drenar mais rápido.',
        dica: 'Descarte o líquido usado de forma adequada.'
      },
      {
        ordem: 4,
        titulo: 'Lave o sistema',
        descricao: 'Feche o dreno, adicione água destilada, ligue o motor por 5 minutos e drene novamente.',
        dica: 'Isso remove resíduos e ferrugem.'
      },
      {
        ordem: 5,
        titulo: 'Prepare a mistura',
        descricao: 'Misture o líquido de arrefecimento com água destilada na proporção 50/50.',
        dica: 'Siga as instruções do fabricante do líquido.'
      },
      {
        ordem: 6,
        titulo: 'Adicione o líquido novo',
        descricao: 'Feche o dreno e adicione a mistura pelo bocal do radiador.',
        dica: 'Adicione lentamente para evitar bolhas de ar.'
      },
      {
        ordem: 7,
        titulo: 'Remova o ar do sistema',
        descricao: 'Ligue o motor com a tampa aberta até o ventilador ligar. Complete o nível.',
        dica: 'Aperte a mangueira superior para ajudar a expelir ar.'
      },
      {
        ordem: 8,
        titulo: 'Verifique vazamentos',
        descricao: 'Feche a tampa e verifique se há vazamentos. Monitore o nível nos próximos dias.',
        dica: 'Complete o reservatório se necessário.'
      }
    ]
  },
  {
    id: '12',
    titulo: 'Substituição de Correia Dentada',
    descricao: 'Troque a correia dentada no intervalo recomendado para evitar danos graves.',
    categoria: 'motor',
    dificuldade: 'dificil',
    tempoEstimado: '3-5 horas',
    ferramentas: ['Jogo de chaves', 'Chave de impacto', 'Ferramentas de trava', 'Torquímetro'],
    materiais: ['Kit de correia dentada', 'Tensor', 'Bomba d\'água (recomendado)'],
    imagem: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    sintomas: ['Ruído de tique-taque', 'Motor não liga', 'Correia visualmente gasta'],
    passos: [
      {
        ordem: 1,
        titulo: 'Consulte o manual',
        descricao: 'Verifique o intervalo de troca (geralmente 60.000-100.000 km).',
        dica: 'Este é um serviço complexo. Considere contratar um profissional.'
      },
      {
        ordem: 2,
        titulo: 'Desconecte a bateria',
        descricao: 'Remova o terminal negativo da bateria.',
        dica: 'Segurança primeiro.'
      },
      {
        ordem: 3,
        titulo: 'Remova componentes acessórios',
        descricao: 'Retire correias auxiliares, tampa da correia e componentes que bloqueiam o acesso.',
        dica: 'Fotografe cada etapa para facilitar a remontagem.'
      },
      {
        ordem: 4,
        titulo: 'Alinhe as marcas de sincronismo',
        descricao: 'Gire o motor até alinhar as marcas do virabrequim e comando de válvulas.',
        dica: 'Esta é a etapa mais crítica. Não pule!'
      },
      {
        ordem: 5,
        titulo: 'Trave o motor',
        descricao: 'Use ferramentas de trava para manter o motor na posição correta.',
        dica: 'Não confie apenas nas marcas visuais.'
      },
      {
        ordem: 6,
        titulo: 'Remova o tensor e a correia',
        descricao: 'Solte o tensor e remova a correia dentada antiga.',
        dica: 'Inspecione todos os componentes.'
      },
      {
        ordem: 7,
        titulo: 'Instale a correia nova',
        descricao: 'Posicione a correia nova seguindo a ordem correta de instalação.',
        dica: 'Não force a correia. Ela deve encaixar naturalmente.'
      },
      {
        ordem: 8,
        titulo: 'Instale o tensor novo',
        descricao: 'Monte o tensor novo e ajuste a tensão conforme especificação.',
        dica: 'Use torquímetro para apertar corretamente.'
      },
      {
        ordem: 9,
        titulo: 'Verifique o sincronismo',
        descricao: 'Gire o motor manualmente 2 voltas completas e verifique se as marcas alinham.',
        dica: 'Se não alinhar, refaça todo o processo.'
      },
      {
        ordem: 10,
        titulo: 'Remonte tudo',
        descricao: 'Reinstale todos os componentes na ordem inversa.',
        dica: 'Não esqueça nenhum parafuso ou conexão.'
      }
    ]
  },
  {
    id: '13',
    titulo: 'Limpeza de Bicos Injetores',
    descricao: 'Limpe os bicos injetores para melhorar o desempenho e economia.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '2-3 horas',
    ferramentas: ['Chaves diversas', 'Kit de limpeza de injetores', 'Multímetro'],
    materiais: ['Líquido de limpeza', 'Juntas novas', 'Spray limpa contatos'],
    imagem: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    sintomas: ['Falhas na aceleração', 'Consumo alto', 'Fumaça preta', 'Marcha lenta irregular'],
    passos: [
      {
        ordem: 1,
        titulo: 'Despressurize o sistema',
        descricao: 'Remova o fusível da bomba e ligue o motor até morrer.',
        dica: 'Evita vazamento de combustível.'
      },
      {
        ordem: 2,
        titulo: 'Desconecte a bateria',
        descricao: 'Remova o terminal negativo da bateria.',
        dica: 'Segurança ao trabalhar com sistema elétrico.'
      },
      {
        ordem: 3,
        titulo: 'Acesse os injetores',
        descricao: 'Remova a tampa do motor e componentes que bloqueiam acesso.',
        dica: 'Fotografe as conexões elétricas.'
      },
      {
        ordem: 4,
        titulo: 'Desconecte os injetores',
        descricao: 'Remova os conectores elétricos e a linha de combustível.',
        dica: 'Tenha panos prontos para combustível residual.'
      },
      {
        ordem: 5,
        titulo: 'Remova os injetores',
        descricao: 'Solte os parafusos e retire os injetores com cuidado.',
        dica: 'Não danifique as pontas dos injetores.'
      },
      {
        ordem: 6,
        titulo: 'Limpe externamente',
        descricao: 'Use spray limpa contatos para limpar a parte externa.',
        dica: 'Deixe secar completamente.'
      },
      {
        ordem: 7,
        titulo: 'Limpe internamente',
        descricao: 'Use o kit de limpeza ou ultrassom para limpar internamente.',
        dica: 'Serviço profissional pode ser mais eficaz.'
      },
      {
        ordem: 8,
        titulo: 'Teste os injetores',
        descricao: 'Use multímetro para verificar a resistência elétrica.',
        dica: 'Compare com valores do manual.'
      },
      {
        ordem: 9,
        titulo: 'Reinstale com juntas novas',
        descricao: 'Instale juntas novas e recoloque os injetores.',
        dica: 'Aperte com torque correto.'
      },
      {
        ordem: 10,
        titulo: 'Reconecte tudo e teste',
        descricao: 'Reconecte tudo, ligue o motor e verifique vazamentos.',
        dica: 'Observe se a marcha lenta melhorou.'
      }
    ]
  },
  {
    id: '14',
    titulo: 'Troca de Amortecedores',
    descricao: 'Substitua amortecedores gastos para melhorar conforto e segurança.',
    categoria: 'suspensao',
    dificuldade: 'dificil',
    tempoEstimado: '2-3 horas',
    ferramentas: ['Macaco', 'Cavaletes', 'Chaves diversas', 'Compressor de molas'],
    materiais: ['Par de amortecedores', 'Coxins novos', 'Batentes'],
    imagem: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop',
    sintomas: ['Carro balançando', 'Ruídos na suspensão', 'Desgaste irregular de pneus', 'Vazamento de óleo'],
    passos: [
      {
        ordem: 1,
        titulo: 'Levante o veículo',
        descricao: 'Use macaco e cavaletes para levantar o carro com segurança.',
        dica: 'Nunca trabalhe sob carro apoiado só no macaco.'
      },
      {
        ordem: 2,
        titulo: 'Remova a roda',
        descricao: 'Retire a roda para acessar o amortecedor.',
        dica: 'Trabalhe em um amortecedor por vez.'
      },
      {
        ordem: 3,
        titulo: 'Desconecte a parte inferior',
        descricao: 'Remova os parafusos que prendem o amortecedor à bandeja.',
        dica: 'Suporte a bandeja com macaco auxiliar.'
      },
      {
        ordem: 4,
        titulo: 'Acesse a parte superior',
        descricao: 'Abra o capô ou porta-malas para acessar a fixação superior.',
        dica: 'Pode estar coberta por tampas plásticas.'
      },
      {
        ordem: 5,
        titulo: 'Remova o amortecedor',
        descricao: 'Solte os parafusos superiores e retire o conjunto.',
        dica: 'Cuidado com a mola - está sob pressão!'
      },
      {
        ordem: 6,
        titulo: 'Comprima a mola',
        descricao: 'Use compressor de molas para comprimir a mola com segurança.',
        dica: 'NUNCA tente sem ferramenta adequada - risco de acidente grave!'
      },
      {
        ordem: 7,
        titulo: 'Desmonte o conjunto',
        descricao: 'Remova a porca superior e desmonte o conjunto.',
        dica: 'Observe a ordem das peças para remontagem.'
      },
      {
        ordem: 8,
        titulo: 'Monte com amortecedor novo',
        descricao: 'Instale coxins e batentes novos junto com o amortecedor novo.',
        dica: 'Use peças novas para melhor resultado.'
      },
      {
        ordem: 9,
        titulo: 'Reinstale o conjunto',
        descricao: 'Posicione o conjunto e aperte os parafusos com torque correto.',
        dica: 'Aperte primeiro a parte superior.'
      },
      {
        ordem: 10,
        titulo: 'Teste e faça alinhamento',
        descricao: 'Após trocar todos, faça um teste e leve para alinhamento.',
        dica: 'Alinhamento é essencial após trocar suspensão.'
      }
    ]
  },
  {
    id: '15',
    titulo: 'Limpeza do Sistema de Ar Condicionado',
    descricao: 'Limpe e higienize o sistema de ar condicionado.',
    categoria: 'manutencao',
    dificuldade: 'facil',
    tempoEstimado: '30 minutos',
    ferramentas: ['Nenhuma ferramenta especial'],
    materiais: ['Spray higienizador', 'Filtro de cabine novo'],
    imagem: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&h=600&fit=crop',
    sintomas: ['Mau cheiro', 'Ar fraco', 'Umidade no vidro'],
    passos: [
      {
        ordem: 1,
        titulo: 'Localize o filtro de cabine',
        descricao: 'Geralmente fica atrás do porta-luvas ou sob o capô.',
        dica: 'Consulte o manual do veículo.'
      },
      {
        ordem: 2,
        titulo: 'Remova o filtro antigo',
        descricao: 'Abra o compartimento e retire o filtro usado.',
        dica: 'Observe a direção do fluxo de ar.'
      },
      {
        ordem: 3,
        titulo: 'Limpe o compartimento',
        descricao: 'Use aspirador para remover sujeira do compartimento.',
        dica: 'Remova folhas e detritos acumulados.'
      },
      {
        ordem: 4,
        titulo: 'Aplique o higienizador',
        descricao: 'Com o motor ligado e ar no máximo, aplique o spray no sistema.',
        dica: 'Siga as instruções do produto.'
      },
      {
        ordem: 5,
        titulo: 'Deixe agir',
        descricao: 'Mantenha o ar ligado por 10-15 minutos com portas abertas.',
        dica: 'Isso permite que o produto circule.'
      },
      {
        ordem: 6,
        titulo: 'Instale filtro novo',
        descricao: 'Coloque o filtro novo respeitando a direção do fluxo.',
        dica: 'Filtros com carvão ativado são mais eficientes.'
      },
      {
        ordem: 7,
        titulo: 'Teste o sistema',
        descricao: 'Ligue o ar e verifique se o cheiro melhorou.',
        dica: 'Repita o processo se necessário.'
      }
    ]
  },
  {
    id: '16',
    titulo: 'Verificação de Fluidos',
    descricao: 'Rotina completa de verificação de todos os fluidos do veículo.',
    categoria: 'manutencao',
    dificuldade: 'facil',
    tempoEstimado: '20 minutos',
    ferramentas: ['Lanterna', 'Panos limpos'],
    materiais: ['Fluidos diversos conforme necessidade'],
    imagem: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    sintomas: ['Manutenção preventiva'],
    passos: [
      {
        ordem: 1,
        titulo: 'Óleo do motor',
        descricao: 'Com motor frio, retire a vareta, limpe, reinsira e verifique o nível.',
        dica: 'Nível deve estar entre MIN e MAX.'
      },
      {
        ordem: 2,
        titulo: 'Líquido de arrefecimento',
        descricao: 'Verifique o nível no reservatório (motor frio).',
        dica: 'Nunca abra o radiador com motor quente.'
      },
      {
        ordem: 3,
        titulo: 'Fluido de freio',
        descricao: 'Verifique o nível no reservatório do freio.',
        dica: 'Nível baixo pode indicar pastilhas gastas.'
      },
      {
        ordem: 4,
        titulo: 'Fluido da direção hidráulica',
        descricao: 'Verifique o nível no reservatório (se aplicável).',
        dica: 'Alguns carros têm direção elétrica.'
      },
      {
        ordem: 5,
        titulo: 'Água do limpador',
        descricao: 'Complete o reservatório do limpador de para-brisa.',
        dica: 'Use água com aditivo para melhor limpeza.'
      },
      {
        ordem: 6,
        titulo: 'Óleo da transmissão',
        descricao: 'Verifique conforme manual (alguns não têm vareta).',
        dica: 'Transmissões automáticas exigem motor ligado.'
      },
      {
        ordem: 7,
        titulo: 'Registre as verificações',
        descricao: 'Anote as datas e níveis para controle.',
        dica: 'Facilita identificar consumo anormal.'
      }
    ]
  },
  {
    id: '17',
    titulo: 'Polimento de Faróis',
    descricao: 'Restaure faróis opacos para melhorar visibilidade e aparência.',
    categoria: 'estetica',
    dificuldade: 'facil',
    tempoEstimado: '1 hora',
    ferramentas: ['Lixas d\'água (600, 1000, 2000)', 'Furadeira com boina', 'Panos'],
    materiais: ['Massa de polir', 'Verniz UV', 'Fita crepe'],
    imagem: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&h=600&fit=crop',
    sintomas: ['Faróis amarelados', 'Luz fraca', 'Aparência envelhecida'],
    passos: [
      {
        ordem: 1,
        titulo: 'Limpe os faróis',
        descricao: 'Lave bem os faróis com água e sabão.',
        dica: 'Remova toda sujeira antes de começar.'
      },
      {
        ordem: 2,
        titulo: 'Proteja a pintura',
        descricao: 'Use fita crepe para proteger a pintura ao redor.',
        dica: 'Deixe margem de segurança.'
      },
      {
        ordem: 3,
        titulo: 'Lixe com lixa 600',
        descricao: 'Molhe a lixa e o farol. Lixe em movimentos horizontais.',
        dica: 'Mantenha sempre molhado.'
      },
      {
        ordem: 4,
        titulo: 'Lixe com lixa 1000',
        descricao: 'Repita o processo com lixa 1000 em movimentos verticais.',
        dica: 'Isso remove as marcas da lixa anterior.'
      },
      {
        ordem: 5,
        titulo: 'Lixe com lixa 2000',
        descricao: 'Finalize com lixa 2000 em movimentos circulares.',
        dica: 'O farol ficará fosco - é normal.'
      },
      {
        ordem: 6,
        titulo: 'Lave e seque',
        descricao: 'Lave bem para remover resíduos e seque completamente.',
        dica: 'Use pano de microfibra.'
      },
      {
        ordem: 7,
        titulo: 'Pula com boina',
        descricao: 'Aplique massa de polir e use a boina na furadeira.',
        dica: 'Não pressione muito - deixe a ferramenta trabalhar.'
      },
      {
        ordem: 8,
        titulo: 'Aplique verniz UV',
        descricao: 'Aplique 2-3 camadas de verniz UV para proteção.',
        dica: 'Isso evita que o farol fique opaco novamente.'
      }
    ]
  },
  {
    id: '18',
    titulo: 'Troca de Palhetas do Limpador',
    descricao: 'Substitua palhetas gastas para melhor visibilidade.',
    categoria: 'manutencao',
    dificuldade: 'facil',
    tempoEstimado: '10 minutos',
    ferramentas: ['Nenhuma'],
    materiais: ['Par de palhetas novas'],
    imagem: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop',
    sintomas: ['Limpeza irregular', 'Ruído ao limpar', 'Borracha ressecada'],
    passos: [
      {
        ordem: 1,
        titulo: 'Levante o braço do limpador',
        descricao: 'Puxe o braço para longe do para-brisa.',
        dica: 'Cuidado para não bater no vidro.'
      },
      {
        ordem: 2,
        titulo: 'Identifique o tipo de encaixe',
        descricao: 'Observe como a palheta se conecta ao braço.',
        dica: 'Existem vários tipos de encaixe.'
      },
      {
        ordem: 3,
        titulo: 'Remova a palheta antiga',
        descricao: 'Pressione a trava e deslize a palheta para fora.',
        dica: 'Segure o braço para não bater no vidro.'
      },
      {
        ordem: 4,
        titulo: 'Instale a palheta nova',
        descricao: 'Encaixe a palheta nova até ouvir um clique.',
        dica: 'Certifique-se de que está bem presa.'
      },
      {
        ordem: 5,
        titulo: 'Abaixe o braço com cuidado',
        descricao: 'Retorne o braço suavemente ao vidro.',
        dica: 'Não solte de uma vez.'
      },
      {
        ordem: 6,
        titulo: 'Repita para o outro lado',
        descricao: 'Faça o mesmo processo no outro limpador.',
        dica: 'Troque sempre os dois juntos.'
      },
      {
        ordem: 7,
        titulo: 'Teste o funcionamento',
        descricao: 'Ligue o limpador e verifique a limpeza.',
        dica: 'Ajuste se necessário.'
      }
    ]
  },
  {
    id: '19',
    titulo: 'Limpeza de Terminais da Bateria',
    descricao: 'Limpe terminais corroídos para melhor conexão elétrica.',
    categoria: 'eletrica',
    dificuldade: 'facil',
    tempoEstimado: '15 minutos',
    ferramentas: ['Chave de boca', 'Escova de aço', 'Luvas'],
    materiais: ['Bicarbonato de sódio', 'Água', 'Graxa para terminais'],
    imagem: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop',
    sintomas: ['Dificuldade para ligar', 'Luzes fracas', 'Corrosão visível'],
    passos: [
      {
        ordem: 1,
        titulo: 'Desligue o motor',
        descricao: 'Certifique-se de que tudo está desligado.',
        dica: 'Use luvas de proteção.'
      },
      {
        ordem: 2,
        titulo: 'Desconecte o terminal negativo',
        descricao: 'Sempre remova primeiro o cabo negativo (-).',
        dica: 'Evita curto-circuito.'
      },
      {
        ordem: 3,
        titulo: 'Desconecte o terminal positivo',
        descricao: 'Agora remova o cabo positivo (+).',
        dica: 'Mantenha os cabos separados.'
      },
      {
        ordem: 4,
        titulo: 'Prepare a solução',
        descricao: 'Misture 1 colher de bicarbonato em 1 copo de água.',
        dica: 'Isso neutraliza o ácido.'
      },
      {
        ordem: 5,
        titulo: 'Aplique a solução',
        descricao: 'Despeje sobre os terminais e observe a reação.',
        dica: 'Vai fazer espuma - é normal.'
      },
      {
        ordem: 6,
        titulo: 'Escove os terminais',
        descricao: 'Use a escova de aço para remover a corrosão.',
        dica: 'Limpe também os cabos.'
      },
      {
        ordem: 7,
        titulo: 'Enxágue e seque',
        descricao: 'Lave com água limpa e seque bem.',
        dica: 'Certifique-se de que está completamente seco.'
      },
      {
        ordem: 8,
        titulo: 'Reconecte e proteja',
        descricao: 'Conecte primeiro o positivo (+), depois o negativo (-). Aplique graxa.',
        dica: 'Graxa evita nova corrosão.'
      }
    ]
  },
  {
    id: '20',
    titulo: 'Verificação de Correias',
    descricao: 'Inspecione e ajuste as correias do motor.',
    categoria: 'motor',
    dificuldade: 'facil',
    tempoEstimado: '20 minutos',
    ferramentas: ['Lanterna', 'Chave de boca'],
    materiais: ['Correias novas (se necessário)'],
    imagem: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    sintomas: ['Ruído de guincho', 'Bateria descarregando', 'Ar condicionado fraco'],
    passos: [
      {
        ordem: 1,
        titulo: 'Localize as correias',
        descricao: 'Abra o capô e identifique as correias do motor.',
        dica: 'Pode haver uma ou várias correias.'
      },
      {
        ordem: 2,
        titulo: 'Inspecione visualmente',
        descricao: 'Procure por rachaduras, desgaste ou ressecamento.',
        dica: 'Use lanterna para melhor visualização.'
      },
      {
        ordem: 3,
        titulo: 'Verifique a tensão',
        descricao: 'Pressione a correia no meio. Deve ceder cerca de 1cm.',
        dica: 'Muito frouxa ou muito apertada é problema.'
      },
      {
        ordem: 4,
        titulo: 'Verifique o alinhamento',
        descricao: 'As correias devem estar centralizadas nas polias.',
        dica: 'Desalinhamento causa desgaste prematuro.'
      },
      {
        ordem: 5,
        titulo: 'Ajuste a tensão se necessário',
        descricao: 'Solte o parafuso do tensor e ajuste a posição.',
        dica: 'Consulte o manual para tensão correta.'
      },
      {
        ordem: 6,
        titulo: 'Substitua se necessário',
        descricao: 'Se a correia estiver muito gasta, substitua por nova.',
        dica: 'Troque todas se uma estiver ruim.'
      },
      {
        ordem: 7,
        titulo: 'Teste o funcionamento',
        descricao: 'Ligue o motor e observe se há ruídos.',
        dica: 'Guincho indica correia frouxa.'
      }
    ]
  },
  {
    id: '21',
    titulo: 'Limpeza do Corpo de Borboleta',
    descricao: 'Limpe o corpo de borboleta para melhorar a resposta do acelerador.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '45 minutos',
    ferramentas: ['Chaves diversas', 'Panos limpos'],
    materiais: ['Spray limpa carburador', 'Junta nova (se necessário)'],
    imagem: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    sintomas: ['Marcha lenta irregular', 'Falhas na aceleração', 'Consumo alto'],
    passos: [
      {
        ordem: 1,
        titulo: 'Desconecte a bateria',
        descricao: 'Remova o terminal negativo da bateria.',
        dica: 'Segurança ao trabalhar com sistema elétrico.'
      },
      {
        ordem: 2,
        titulo: 'Localize o corpo de borboleta',
        descricao: 'Encontre o corpo de borboleta entre o filtro de ar e o motor.',
        dica: 'Consulte o manual se necessário.'
      },
      {
        ordem: 3,
        titulo: 'Remova a mangueira de ar',
        descricao: 'Solte as abraçadeiras e remova a mangueira.',
        dica: 'Fotografe as conexões.'
      },
      {
        ordem: 4,
        titulo: 'Desconecte cabos e sensores',
        descricao: 'Remova conectores elétricos e cabos do acelerador.',
        dica: 'Marque a posição de cada um.'
      },
      {
        ordem: 5,
        titulo: 'Remova o corpo de borboleta',
        descricao: 'Solte os parafusos e retire o corpo de borboleta.',
        dica: 'Cuidado com a junta.'
      },
      {
        ordem: 6,
        titulo: 'Limpe com spray',
        descricao: 'Aplique spray limpa carburador e limpe com pano.',
        dica: 'Não force a borboleta - ela pode estar eletrônica.'
      },
      {
        ordem: 7,
        titulo: 'Limpe a junta',
        descricao: 'Limpe as superfícies de contato.',
        dica: 'Use junta nova se a antiga estiver danificada.'
      },
      {
        ordem: 8,
        titulo: 'Reinstale tudo',
        descricao: 'Monte na ordem inversa com torque correto.',
        dica: 'Não aperte demais os parafusos.'
      },
      {
        ordem: 9,
        titulo: 'Reconecte a bateria',
        descricao: 'Reconecte o terminal negativo.',
        dica: 'Pode ser necessário fazer adaptação eletrônica.'
      },
      {
        ordem: 10,
        titulo: 'Teste e adapte',
        descricao: 'Ligue o motor e deixe em marcha lenta por 10 minutos.',
        dica: 'Isso permite que o sistema se adapte.'
      }
    ]
  },
  {
    id: '22',
    titulo: 'Substituição de Sensor de Oxigênio',
    descricao: 'Troque o sensor de oxigênio para melhorar economia e desempenho.',
    categoria: 'eletrica',
    dificuldade: 'medio',
    tempoEstimado: '30-45 minutos',
    ferramentas: ['Chave para sensor de O2', 'Chave de boca', 'Macaco'],
    materiais: ['Sensor de oxigênio novo', 'Pasta anti-gripante'],
    imagem: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop',
    sintomas: ['Luz do motor acesa', 'Consumo alto', 'Perda de potência'],
    passos: [
      {
        ordem: 1,
        titulo: 'Identifique o sensor',
        descricao: 'Localize o sensor no sistema de escapamento.',
        dica: 'Pode haver mais de um sensor.'
      },
      {
        ordem: 2,
        titulo: 'Levante o veículo',
        descricao: 'Use macaco e cavaletes para acessar o sensor.',
        dica: 'Trabalhe com motor frio.'
      },
      {
        ordem: 3,
        titulo: 'Desconecte o conector elétrico',
        descricao: 'Localize e desconecte o conector do sensor.',
        dica: 'Pode estar preso com clipe.'
      },
      {
        ordem: 4,
        titulo: 'Remova o sensor antigo',
        descricao: 'Use a chave específica para desatarraxar o sensor.',
        dica: 'Se estiver preso, aqueça levemente com soprador térmico.'
      },
      {
        ordem: 5,
        titulo: 'Limpe a rosca',
        descricao: 'Limpe a rosca no escapamento.',
        dica: 'Remova resíduos de carbono.'
      },
      {
        ordem: 6,
        titulo: 'Prepare o sensor novo',
        descricao: 'Aplique pasta anti-gripante na rosca do sensor novo.',
        dica: 'Não aplique na ponta do sensor.'
      },
      {
        ordem: 7,
        titulo: 'Instale o sensor novo',
        descricao: 'Aperte manualmente primeiro, depois com a chave.',
        dica: 'Não aperte demais.'
      },
      {
        ordem: 8,
        titulo: 'Reconecte o conector',
        descricao: 'Conecte o conector elétrico até ouvir o clique.',
        dica: 'Certifique-se de que está bem encaixado.'
      },
      {
        ordem: 9,
        titulo: 'Limpe os códigos de erro',
        descricao: 'Use scanner OBD2 para limpar os códigos.',
        dica: 'Ou desconecte a bateria por 15 minutos.'
      },
      {
        ordem: 10,
        titulo: 'Teste o veículo',
        descricao: 'Dirija por alguns km e verifique se a luz apagou.',
        dica: 'Pode levar alguns ciclos de direção.'
      }
    ]
  },
  {
    id: '23',
    titulo: 'Troca de Rolamento de Roda',
    descricao: 'Substitua rolamento de roda com ruído ou folga.',
    categoria: 'suspensao',
    dificuldade: 'dificil',
    tempoEstimado: '2-3 horas',
    ferramentas: ['Macaco', 'Cavaletes', 'Chaves diversas', 'Prensa hidráulica', 'Saca polia'],
    materiais: ['Rolamento novo', 'Graxa', 'Porca nova'],
    imagem: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop',
    sintomas: ['Ruído de ronco', 'Vibração', 'Folga na roda'],
    passos: [
      {
        ordem: 1,
        titulo: 'Levante e apoie o veículo',
        descricao: 'Use macaco e cavaletes com segurança.',
        dica: 'Este é um serviço complexo - considere profissional.'
      },
      {
        ordem: 2,
        titulo: 'Remova a roda',
        descricao: 'Retire a roda para acessar o cubo.',
        dica: 'Afrouxe as porcas antes de levantar.'
      },
      {
        ordem: 3,
        titulo: 'Remova a pinça de freio',
        descricao: 'Solte a pinça e amarre para não forçar a mangueira.',
        dica: 'Não deixe pendurada pelo flexível.'
      },
      {
        ordem: 4,
        titulo: 'Remova o disco de freio',
        descricao: 'Retire o disco de freio.',
        dica: 'Pode estar preso por corrosão.'
      },
      {
        ordem: 5,
        titulo: 'Solte a porca do cubo',
        descricao: 'Remova a porca central (geralmente muito apertada).',
        dica: 'Use chave de impacto se disponível.'
      },
      {
        ordem: 6,
        titulo: 'Remova o cubo',
        descricao: 'Use saca polia para remover o cubo da manga.',
        dica: 'Não force - use ferramenta adequada.'
      },
      {
        ordem: 7,
        titulo: 'Remova o rolamento antigo',
        descricao: 'Use prensa hidráulica para extrair o rolamento.',
        dica: 'Serviço de oficina pode ser necessário.'
      },
      {
        ordem: 8,
        titulo: 'Instale o rolamento novo',
        descricao: 'Prense o rolamento novo no cubo.',
        dica: 'Certifique-se de que está alinhado.'
      },
      {
        ordem: 9,
        titulo: 'Remonte tudo',
        descricao: 'Reinstale na ordem inversa com torque correto.',
        dica: 'Use porca nova - não reutilize.'
      },
      {
        ordem: 10,
        titulo: 'Teste e faça alinhamento',
        descricao: 'Teste em baixa velocidade e faça alinhamento.',
        dica: 'Alinhamento é essencial.'
      }
    ]
  },
  {
    id: '24',
    titulo: 'Limpeza de Válvula EGR',
    descricao: 'Limpe a válvula EGR para melhorar o desempenho.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '1-2 horas',
    ferramentas: ['Chaves diversas', 'Escova de aço', 'Raspador'],
    materiais: ['Spray limpa carburador', 'Junta nova'],
    imagem: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    sintomas: ['Luz do motor acesa', 'Marcha lenta irregular', 'Perda de potência'],
    passos: [
      {
        ordem: 1,
        titulo: 'Localize a válvula EGR',
        descricao: 'Encontre a válvula EGR no motor.',
        dica: 'Consulte o manual do veículo.'
      },
      {
        ordem: 2,
        titulo: 'Desconecte a bateria',
        descricao: 'Remova o terminal negativo.',
        dica: 'Segurança primeiro.'
      },
      {
        ordem: 3,
        titulo: 'Desconecte os cabos',
        descricao: 'Remova conectores elétricos e mangueiras.',
        dica: 'Fotografe antes de remover.'
      },
      {
        ordem: 4,
        titulo: 'Remova a válvula',
        descricao: 'Solte os parafusos e retire a válvula.',
        dica: 'Cuidado com a junta.'
      },
      {
        ordem: 5,
        titulo: 'Inspecione a válvula',
        descricao: 'Verifique o acúmulo de carbono.',
        dica: 'Carbono excessivo indica problema.'
      },
      {
        ordem: 6,
        titulo: 'Limpe com spray',
        descricao: 'Aplique spray limpa carburador generosamente.',
        dica: 'Deixe agir por alguns minutos.'
      },
      {
        ordem: 7,
        titulo: 'Raspe o carbono',
        descricao: 'Use raspador e escova para remover carbono.',
        dica: 'Não danifique as superfícies de vedação.'
      },
      {
        ordem: 8,
        titulo: 'Limpe os dutos',
        descricao: 'Limpe também os dutos de entrada e saída.',
        dica: 'Carbono acumulado reduz eficiência.'
      },
      {
        ordem: 9,
        titulo: 'Reinstale com junta nova',
        descricao: 'Monte com junta nova e aperte com torque correto.',
        dica: 'Não reutilize junta velha.'
      },
      {
        ordem: 10,
        titulo: 'Reconecte e teste',
        descricao: 'Reconecte tudo, limpe códigos e teste.',
        dica: 'Pode levar alguns km para normalizar.'
      }
    ]
  },
  {
    id: '25',
    titulo: 'Troca de Cabo de Embreagem',
    descricao: 'Substitua cabo de embreagem esticado ou rompido.',
    categoria: 'transmissao',
    dificuldade: 'medio',
    tempoEstimado: '1-2 horas',
    ferramentas: ['Chaves diversas', 'Alicate', 'Lanterna'],
    materiais: ['Cabo de embreagem novo', 'Graxa'],
    imagem: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop',
    sintomas: ['Pedal pesado', 'Dificuldade para engatar marchas', 'Pedal sem resistência'],
    passos: [
      {
        ordem: 1,
        titulo: 'Acesse o pedal',
        descricao: 'Remova o painel inferior para acessar o pedal.',
        dica: 'Use lanterna para melhor visualização.'
      },
      {
        ordem: 2,
        titulo: 'Desconecte do pedal',
        descricao: 'Remova o pino que conecta o cabo ao pedal.',
        dica: 'Pode ter trava ou cupilha.'
      },
      {
        ordem: 3,
        titulo: 'Acesse o compartimento do motor',
        descricao: 'Abra o capô e localize a outra ponta do cabo.',
        dica: 'Conecta-se ao garfo da embreagem.'
      },
      {
        ordem: 4,
        titulo: 'Solte o ajuste',
        descricao: 'Afrouxe a porca de ajuste do cabo.',
        dica: 'Anote a posição para referência.'
      },
      {
        ordem: 5,
        titulo: 'Desconecte do garfo',
        descricao: 'Remova o cabo do garfo da embreagem.',
        dica: 'Observe como está conectado.'
      },
      {
        ordem: 6,
        titulo: 'Remova o cabo antigo',
        descricao: 'Puxe o cabo pela cabine, passando pelo passa-cabo.',
        dica: 'Observe o caminho do cabo.'
      },
      {
        ordem: 7,
        titulo: 'Instale o cabo novo',
        descricao: 'Passe o cabo novo pelo mesmo caminho.',
        dica: 'Lubrifique o cabo com graxa.'
      },
      {
        ordem: 8,
        titulo: 'Conecte no pedal',
        descricao: 'Fixe o cabo no pedal com o pino.',
        dica: 'Certifique-se de que está bem preso.'
      },
      {
        ordem: 9,
        titulo: 'Conecte no garfo',
        descricao: 'Conecte a outra ponta no garfo da embreagem.',
        dica: 'Deixe folga para ajuste.'
      },
      {
        ordem: 10,
        titulo: 'Ajuste o cabo',
        descricao: 'Ajuste a porca até obter a folga correta no pedal.',
        dica: 'Folga típica: 2-3cm no topo do pedal.'
      }
    ]
  },
  {
    id: '26',
    titulo: 'Limpeza de Radiador',
    descricao: 'Limpe o radiador interna e externamente.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '2 horas',
    ferramentas: ['Chaves diversas', 'Mangueira de água', 'Escova macia'],
    materiais: ['Produto de limpeza para radiador', 'Líquido de arrefecimento novo'],
    imagem: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    sintomas: ['Superaquecimento', 'Radiador entupido', 'Fluxo de ar reduzido'],
    passos: [
      {
        ordem: 1,
        titulo: 'Motor frio obrigatório',
        descricao: 'Aguarde o motor esfriar completamente.',
        dica: 'Nunca trabalhe com motor quente.'
      },
      {
        ordem: 2,
        titulo: 'Drene o líquido',
        descricao: 'Abra o dreno e remova o líquido de arrefecimento.',
        dica: 'Descarte adequadamente.'
      },
      {
        ordem: 3,
        titulo: 'Remova o radiador (opcional)',
        descricao: 'Para limpeza profunda, remova o radiador.',
        dica: 'Desconecte mangueiras e suportes.'
      },
      {
        ordem: 4,
        titulo: 'Limpe externamente',
        descricao: 'Use mangueira de água para remover sujeira das aletas.',
        dica: 'Jato de baixa pressão - não danifique as aletas.'
      },
      {
        ordem: 5,
        titulo: 'Escove as aletas',
        descricao: 'Use escova macia para remover insetos e sujeira.',
        dica: 'Cuidado para não entortar as aletas.'
      },
      {
        ordem: 6,
        titulo: 'Prepare solução de limpeza',
        descricao: 'Misture produto de limpeza conforme instruções.',
        dica: 'Use produto específico para radiador.'
      },
      {
        ordem: 7,
        titulo: 'Lave internamente',
        descricao: 'Adicione a solução, ligue o motor por 10 minutos e drene.',
        dica: 'Isso remove ferrugem e depósitos.'
      },
      {
        ordem: 8,
        titulo: 'Enxágue com água',
        descricao: 'Enxágue várias vezes com água limpa.',
        dica: 'Continue até sair água limpa.'
      },
      {
        ordem: 9,
        titulo: 'Reinstale o radiador',
        descricao: 'Se removeu, reinstale com cuidado.',
        dica: 'Verifique todas as conexões.'
      },
      {
        ordem: 10,
        titulo: 'Complete com líquido novo',
        descricao: 'Adicione líquido de arrefecimento novo e sangre o sistema.',
        dica: 'Siga procedimento de sangria.'
      }
    ]
  },
  {
    id: '27',
    titulo: 'Troca de Bomba de Combustível',
    descricao: 'Substitua a bomba de combustível com defeito.',
    categoria: 'motor',
    dificuldade: 'dificil',
    tempoEstimado: '2-4 horas',
    ferramentas: ['Chaves diversas', 'Macaco', 'Bandeja coletora'],
    materiais: ['Bomba de combustível nova', 'Junta nova', 'Abraçadeiras'],
    imagem: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop',
    sintomas: ['Motor não liga', 'Falhas em alta velocidade', 'Perda de potência', 'Ruído no tanque'],
    passos: [
      {
        ordem: 1,
        titulo: 'Despressurize o sistema',
        descricao: 'Remova o fusível da bomba e ligue o motor até morrer.',
        dica: 'Essencial para segurança.'
      },
      {
        ordem: 2,
        titulo: 'Esvazie o tanque',
        descricao: 'Quanto menos combustível, mais fácil e seguro.',
        dica: 'Trabalhe em área ventilada.'
      },
      {
        ordem: 3,
        titulo: 'Levante o veículo',
        descricao: 'Use macaco e cavaletes para acessar o tanque.',
        dica: 'Ou acesse pela tampa no banco traseiro (alguns modelos).'
      },
      {
        ordem: 4,
        titulo: 'Desconecte as mangueiras',
        descricao: 'Remova mangueiras de combustível e conectores elétricos.',
        dica: 'Tenha panos prontos para vazamentos.'
      },
      {
        ordem: 5,
        titulo: 'Solte o tanque (se necessário)',
        descricao: 'Remova as cintas que prendem o tanque.',
        dica: 'Use macaco para apoiar o tanque.'
      },
      {
        ordem: 6,
        titulo: 'Acesse a bomba',
        descricao: 'Remova a tampa de acesso ou abra o tanque.',
        dica: 'Limpe ao redor antes de abrir.'
      },
      {
        ordem: 7,
        titulo: 'Remova a bomba antiga',
        descricao: 'Gire o anel de trava e retire o conjunto da bomba.',
        dica: 'Cuidado com o sensor de nível.'
      },
      {
        ordem: 8,
        titulo: 'Instale a bomba nova',
        descricao: 'Posicione a bomba nova com junta nova.',
        dica: 'Certifique-se de que está alinhada.'
      },
      {
        ordem: 9,
        titulo: 'Remonte tudo',
        descricao: 'Reinstale na ordem inversa.',
        dica: 'Verifique todas as conexões.'
      },
      {
        ordem: 10,
        titulo: 'Teste o sistema',
        descricao: 'Ligue a ignição sem dar partida para pressurizar. Verifique vazamentos.',
        dica: 'Depois ligue o motor e teste.'
      }
    ]
  },
  {
    id: '28',
    titulo: 'Ajuste de Faróis',
    descricao: 'Ajuste o alinhamento dos faróis para melhor iluminação.',
    categoria: 'eletrica',
    dificuldade: 'facil',
    tempoEstimado: '30 minutos',
    ferramentas: ['Chave de fenda', 'Fita métrica', 'Giz ou fita'],
    materiais: ['Nenhum'],
    imagem: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&h=600&fit=crop',
    sintomas: ['Faróis muito altos', 'Faróis muito baixos', 'Iluminação desalinhada'],
    passos: [
      {
        ordem: 1,
        titulo: 'Prepare o veículo',
        descricao: 'Estacione em superfície plana a 7,5m de uma parede.',
        dica: 'Calibre os pneus e coloque peso normal no carro.'
      },
      {
        ordem: 2,
        titulo: 'Marque a parede',
        descricao: 'Ligue os faróis e marque o centro de cada feixe na parede.',
        dica: 'Use giz ou fita adesiva.'
      },
      {
        ordem: 3,
        titulo: 'Meça a altura',
        descricao: 'Meça a altura do centro do farol até o chão.',
        dica: 'Anote esta medida.'
      },
      {
        ordem: 4,
        titulo: 'Trace linhas de referência',
        descricao: 'Trace linhas horizontal e vertical na parede.',
        dica: 'Use nível para garantir precisão.'
      },
      {
        ordem: 5,
        titulo: 'Localize os parafusos de ajuste',
        descricao: 'Encontre os parafusos de ajuste vertical e horizontal.',
        dica: 'Geralmente atrás do farol.'
      },
      {
        ordem: 6,
        titulo: 'Ajuste vertical',
        descricao: 'O feixe deve estar 5-10cm abaixo da altura do farol.',
        dica: 'Gire o parafuso vertical.'
      },
      {
        ordem: 7,
        titulo: 'Ajuste horizontal',
        descricao: 'O feixe deve estar levemente para a direita.',
        dica: 'Evita ofuscar motoristas na pista contrária.'
      },
      {
        ordem: 8,
        titulo: 'Teste em estrada',
        descricao: 'Dirija à noite e verifique se a iluminação está adequada.',
        dica: 'Ajuste novamente se necessário.'
      }
    ]
  },
  {
    id: '29',
    titulo: 'Troca de Filtro de Cabine',
    descricao: 'Substitua o filtro de cabine para ar mais limpo.',
    categoria: 'manutencao',
    dificuldade: 'facil',
    tempoEstimado: '15 minutos',
    ferramentas: ['Chave de fenda (às vezes)'],
    materiais: ['Filtro de cabine novo'],
    imagem: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&h=600&fit=crop',
    sintomas: ['Ar fraco', 'Mau cheiro', 'Embaçamento frequente'],
    passos: [
      {
        ordem: 1,
        titulo: 'Localize o filtro',
        descricao: 'Geralmente atrás do porta-luvas ou sob o capô.',
        dica: 'Consulte o manual do veículo.'
      },
      {
        ordem: 2,
        titulo: 'Acesse o compartimento',
        descricao: 'Remova o porta-luvas ou tampa de acesso.',
        dica: 'Alguns têm travas laterais.'
      },
      {
        ordem: 3,
        titulo: 'Remova a tampa do filtro',
        descricao: 'Solte as travas da tampa do compartimento do filtro.',
        dica: 'Observe como está montado.'
      },
      {
        ordem: 4,
        titulo: 'Retire o filtro antigo',
        descricao: 'Puxe o filtro para fora.',
        dica: 'Observe a direção do fluxo de ar.'
      },
      {
        ordem: 5,
        titulo: 'Limpe o compartimento',
        descricao: 'Use aspirador para limpar o compartimento.',
        dica: 'Remova folhas e detritos.'
      },
      {
        ordem: 6,
        titulo: 'Instale o filtro novo',
        descricao: 'Insira o filtro novo respeitando a direção do fluxo.',
        dica: 'Seta indica direção do ar.'
      },
      {
        ordem: 7,
        titulo: 'Remonte tudo',
        descricao: 'Recoloque a tampa e o porta-luvas.',
        dica: 'Certifique-se de que está bem fechado.'
      },
      {
        ordem: 8,
        titulo: 'Teste o sistema',
        descricao: 'Ligue o ar e verifique se o fluxo melhorou.',
        dica: 'Deve haver diferença notável.'
      }
    ]
  },
  {
    id: '30',
    titulo: 'Verificação de Suspensão',
    descricao: 'Inspecione componentes da suspensão.',
    categoria: 'suspensao',
    dificuldade: 'medio',
    tempoEstimado: '1 hora',
    ferramentas: ['Macaco', 'Cavaletes', 'Alavanca', 'Lanterna'],
    materiais: ['Nenhum (apenas inspeção)'],
    imagem: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop',
    sintomas: ['Ruídos', 'Carro puxando', 'Desgaste irregular de pneus', 'Direção solta'],
    passos: [
      {
        ordem: 1,
        titulo: 'Levante o veículo',
        descricao: 'Use macaco e cavaletes com segurança.',
        dica: 'Trabalhe em uma roda por vez.'
      },
      {
        ordem: 2,
        titulo: 'Verifique os amortecedores',
        descricao: 'Procure por vazamentos de óleo.',
        dica: 'Amortecedor molhado indica vazamento.'
      },
      {
        ordem: 3,
        titulo: 'Teste os coxins',
        descricao: 'Verifique se os coxins estão rachados ou desgastados.',
        dica: 'Coxins ruins causam ruídos.'
      },
      {
        ordem: 4,
        titulo: 'Inspecione as molas',
        descricao: 'Procure por molas quebradas ou assentadas.',
        dica: 'Mola quebrada deixa o carro torto.'
      },
      {
        ordem: 5,
        titulo: 'Verifique as bandejas',
        descricao: 'Procure por trincas ou deformações.',
        dica: 'Use lanterna para melhor visualização.'
      },
      {
        ordem: 6,
        titulo: 'Teste as buchas',
        descricao: 'Use alavanca para verificar folga nas buchas.',
        dica: 'Folga excessiva indica desgaste.'
      },
      {
        ordem: 7,
        titulo: 'Verifique as bieletas',
        descricao: 'Movimente as bieletas procurando folga.',
        dica: 'Folga causa ruídos em lombadas.'
      },
      {
        ordem: 8,
        titulo: 'Inspecione os terminais de direção',
        descricao: 'Verifique folga nos terminais.',
        dica: 'Folga afeta a direção.'
      },
      {
        ordem: 9,
        titulo: 'Teste as barras estabilizadoras',
        descricao: 'Verifique buchas e fixações.',
        dica: 'Buchas gastas causam ruídos.'
      },
      {
        ordem: 10,
        titulo: 'Anote os problemas',
        descricao: 'Liste todos os componentes que precisam substituição.',
        dica: 'Priorize itens de segurança.'
      }
    ]
  },
  {
    id: '31',
    titulo: 'Troca de Fluido da Transmissão',
    descricao: 'Substitua o fluido da transmissão automática.',
    categoria: 'transmissao',
    dificuldade: 'medio',
    tempoEstimado: '1-2 horas',
    ferramentas: ['Chaves diversas', 'Bandeja coletora', 'Funil', 'Bomba de fluido'],
    materiais: ['Fluido ATF específico', 'Filtro (se aplicável)', 'Junta do cárter'],
    imagem: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop',
    sintomas: ['Trocas bruscas', 'Patinação', 'Fluido escuro', 'Ruídos na transmissão'],
    passos: [
      {
        ordem: 1,
        titulo: 'Verifique o tipo de fluido',
        descricao: 'Consulte o manual para o tipo correto de ATF.',
        dica: 'Usar fluido errado pode danificar a transmissão.'
      },
      {
        ordem: 2,
        titulo: 'Aqueça a transmissão',
        descricao: 'Dirija por 10-15 minutos para aquecer o fluido.',
        dica: 'Fluido quente drena melhor.'
      },
      {
        ordem: 3,
        titulo: 'Levante o veículo',
        descricao: 'Use macaco e cavaletes.',
        dica: 'Certifique-se de que está nivelado.'
      },
      {
        ordem: 4,
        titulo: 'Localize o bujão de drenagem',
        descricao: 'Encontre o bujão no cárter da transmissão.',
        dica: 'Alguns modelos não têm bujão - precisa remover o cárter.'
      },
      {
        ordem: 5,
        titulo: 'Drene o fluido',
        descricao: 'Remova o bujão e deixe drenar completamente.',
        dica: 'Cuidado - fluido está quente!'
      },
      {
        ordem: 6,
        titulo: 'Remova o cárter (se aplicável)',
        descricao: 'Solte os parafusos do cárter para acessar o filtro.',
        dica: 'Tenha bandeja grande - vai vazar fluido.'
      },
      {
        ordem: 7,
        titulo: 'Troque o filtro',
        descricao: 'Remova o filtro antigo e instale o novo.',
        dica: 'Nem todas as transmissões têm filtro substituível.'
      },
      {
        ordem: 8,
        titulo: 'Limpe e remonte o cárter',
        descricao: 'Limpe o cárter, instale junta nova e remonte.',
        dica: 'Aperte em cruz com torque correto.'
      },
      {
        ordem: 9,
        titulo: 'Adicione fluido novo',
        descricao: 'Adicione a quantidade especificada pelo fabricante.',
        dica: 'Use funil com filtro.'
      },
      {
        ordem: 10,
        titulo: 'Verifique o nível',
        descricao: 'Com motor ligado e transmissão aquecida, verifique o nível.',
        dica: 'Passe por todas as marchas antes de verificar.'
      }
    ]
  },
  {
    id: '32',
    titulo: 'Limpeza de Injetores a Diesel',
    descricao: 'Limpe injetores de motores diesel.',
    categoria: 'motor',
    dificuldade: 'dificil',
    tempoEstimado: '3-4 horas',
    ferramentas: ['Chaves diversas', 'Extrator de injetores', 'Kit de teste'],
    materiais: ['Líquido de limpeza', 'Juntas novas', 'Arruelas de cobre'],
    imagem: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    sintomas: ['Fumaça preta', 'Perda de potência', 'Consumo alto', 'Marcha lenta irregular'],
    passos: [
      {
        ordem: 1,
        titulo: 'Despressurize o sistema',
        descricao: 'Remova o fusível da bomba de alta pressão.',
        dica: 'Sistema diesel tem pressão muito alta!'
      },
      {
        ordem: 2,
        titulo: 'Limpe a área',
        descricao: 'Limpe ao redor dos injetores antes de remover.',
        dica: 'Evita entrada de sujeira no motor.'
      },
      {
        ordem: 3,
        titulo: 'Desconecte as linhas',
        descricao: 'Remova as linhas de alta pressão.',
        dica: 'Cuidado - pode ter diesel residual.'
      },
      {
        ordem: 4,
        titulo: 'Remova os injetores',
        descricao: 'Use extrator específico para remover os injetores.',
        dica: 'Não force - podem estar presos por carbono.'
      },
      {
        ordem: 5,
        titulo: 'Identifique cada injetor',
        descricao: 'Marque a posição de cada injetor.',
        dica: 'Alguns têm calibrações específicas.'
      },
      {
        ordem: 6,
        titulo: 'Limpe externamente',
        descricao: 'Limpe a parte externa com escova e solvente.',
        dica: 'Remova todo o carbono.'
      },
      {
        ordem: 7,
        titulo: 'Teste os injetores',
        descricao: 'Use equipamento de teste para verificar o padrão de pulverização.',
        dica: 'Serviço especializado é recomendado.'
      },
      {
        ordem: 8,
        titulo: 'Limpe os alojamentos',
        descricao: 'Limpe os alojamentos no cabeçote.',
        dica: 'Use raspador de carbono.'
      },
      {
        ordem: 9,
        titulo: 'Instale com arruelas novas',
        descricao: 'Sempre use arruelas de cobre novas.',
        dica: 'Arruelas velhas causam vazamento.'
      },
      {
        ordem: 10,
        titulo: 'Aperte com torque correto',
        descricao: 'Use torquímetro - torque é crítico.',
        dica: 'Siga especificações do fabricante.'
      },
      {
        ordem: 11,
        titulo: 'Sangre o sistema',
        descricao: 'Remova o ar do sistema de combustível.',
        dica: 'Essencial para funcionamento correto.'
      },
      {
        ordem: 12,
        titulo: 'Teste o motor',
        descricao: 'Ligue o motor e verifique vazamentos.',
        dica: 'Observe se a fumaça diminuiu.'
      }
    ]
  },
  {
    id: '33',
    titulo: 'Substituição de Catalisador',
    descricao: 'Troque o catalisador com defeito.',
    categoria: 'escapamento',
    dificuldade: 'medio',
    tempoEstimado: '2-3 horas',
    ferramentas: ['Chaves diversas', 'Macaco', 'Cavaletes', 'Spray desengripante', 'Serra (se necessário)'],
    materiais: ['Catalisador novo', 'Juntas', 'Parafusos novos'],
    imagem: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop',
    sintomas: ['Luz do motor acesa', 'Perda de potência', 'Ruído de chocalho', 'Cheiro de enxofre'],
    passos: [
      {
        ordem: 1,
        titulo: 'Levante o veículo',
        descricao: 'Use macaco e cavaletes com segurança.',
        dica: 'Trabalhe com motor frio.'
      },
      {
        ordem: 2,
        titulo: 'Localize o catalisador',
        descricao: 'Identifique o catalisador no sistema de escapamento.',
        dica: 'Geralmente próximo ao motor.'
      },
      {
        ordem: 3,
        titulo: 'Desconecte os sensores',
        descricao: 'Remova os sensores de oxigênio.',
        dica: 'Fotografe as posições.'
      },
      {
        ordem: 4,
        titulo: 'Aplique desengripante',
        descricao: 'Aplique spray nos parafusos e aguarde.',
        dica: 'Parafusos de escapamento costumam estar presos.'
      },
      {
        ordem: 5,
        titulo: 'Solte as conexões',
        descricao: 'Remova os parafusos das flanges.',
        dica: 'Se quebrarem, pode precisar cortar.'
      },
      {
        ordem: 6,
        titulo: 'Remova o catalisador',
        descricao: 'Retire o catalisador do sistema.',
        dica: 'Pode estar preso por corrosão.'
      },
      {
        ordem: 7,
        titulo: 'Limpe as superfícies',
        descricao: 'Limpe as flanges de conexão.',
        dica: 'Superfícies limpas garantem melhor vedação.'
      },
      {
        ordem: 8,
        titulo: 'Instale o catalisador novo',
        descricao: 'Posicione o catalisador novo com juntas novas.',
        dica: 'Certifique-se da direção correta.'
      },
      {
        ordem: 9,
        titulo: 'Aperte os parafusos',
        descricao: 'Aperte os parafusos em cruz.',
        dica: 'Não aperte demais - pode quebrar.'
      },
      {
        ordem: 10,
        titulo: 'Reconecte os sensores',
        descricao: 'Reinstale os sensores de oxigênio.',
        dica: 'Aplique pasta anti-gripante.'
      },
      {
        ordem: 11,
        titulo: 'Limpe os códigos',
        descricao: 'Use scanner para limpar códigos de erro.',
        dica: 'Ou desconecte a bateria por 15 minutos.'
      },
      {
        ordem: 12,
        titulo: 'Teste o veículo',
        descricao: 'Dirija e verifique se a luz do motor apagou.',
        dica: 'Pode levar alguns ciclos de direção.'
      }
    ]
  },
  {
    id: '34',
    titulo: 'Troca de Junta do Cabeçote',
    descricao: 'Substitua a junta do cabeçote queimada.',
    categoria: 'motor',
    dificuldade: 'dificil',
    tempoEstimado: '6-8 horas',
    ferramentas: ['Jogo completo de ferramentas', 'Torquímetro', 'Raspador', 'Régua de precisão'],
    materiais: ['Junta do cabeçote', 'Parafusos novos', 'Líquido de arrefecimento', 'Óleo de motor'],
    imagem: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    sintomas: ['Superaquecimento', 'Mistura de óleo e água', 'Fumaça branca', 'Perda de compressão'],
    passos: [
      {
        ordem: 1,
        titulo: 'Avaliação inicial',
        descricao: 'Confirme que é realmente a junta do cabeçote.',
        dica: 'Este é um serviço muito complexo - considere profissional.'
      },
      {
        ordem: 2,
        titulo: 'Drene os fluidos',
        descricao: 'Drene óleo e líquido de arrefecimento.',
        dica: 'Trabalhe com motor frio.'
      },
      {
        ordem: 3,
        titulo: 'Desconecte tudo',
        descricao: 'Remova todos os componentes que impedem acesso ao cabeçote.',
        dica: 'Fotografe cada etapa - são muitas conexões!'
      },
      {
        ordem: 4,
        titulo: 'Remova o cabeçote',
        descricao: 'Solte os parafusos em sequência específica e remova o cabeçote.',
        dica: 'Consulte manual para sequência correta.'
      },
      {
        ordem: 5,
        titulo: 'Inspecione o cabeçote',
        descricao: 'Verifique se o cabeçote está empenado.',
        dica: 'Use régua de precisão - pode precisar retificar.'
      },
      {
        ordem: 6,
        titulo: 'Limpe as superfícies',
        descricao: 'Remova toda a junta antiga com raspador.',
        dica: 'Superfícies devem ficar perfeitamente limpas.'
      },
      {
        ordem: 7,
        titulo: 'Instale a junta nova',
        descricao: 'Posicione a junta nova corretamente.',
        dica: 'Não use selante a menos que especificado.'
      },
      {
        ordem: 8,
        titulo: 'Recoloque o cabeçote',
        descricao: 'Posicione o cabeçote com cuidado.',
        dica: 'Não force - deve encaixar naturalmente.'
      },
      {
        ordem: 9,
        titulo: 'Aperte os parafusos',
        descricao: 'Aperte em sequência específica com torquímetro.',
        dica: 'Siga especificações exatas - crítico!'
      },
      {
        ordem: 10,
        titulo: 'Remonte tudo',
        descricao: 'Reinstale todos os componentes na ordem inversa.',
        dica: 'Use suas fotos como referência.'
      },
      {
        ordem: 11,
        titulo: 'Complete os fluidos',
        descricao: 'Adicione óleo novo e líquido de arrefecimento.',
        dica: 'Use fluidos novos - não reutilize.'
      },
      {
        ordem: 12,
        titulo: 'Teste e monitore',
        descricao: 'Ligue o motor e monitore temperatura e pressão.',
        dica: 'Observe por vazamentos nos primeiros dias.'
      }
    ]
  },
  {
    id: '35',
    titulo: 'Limpeza de DPF (Filtro de Partículas)',
    descricao: 'Limpe o filtro de partículas diesel.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '2-3 horas',
    ferramentas: ['Chaves diversas', 'Scanner OBD2', 'Macaco'],
    materiais: ['Aditivo limpador de DPF', 'Juntas novas'],
    imagem: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    sintomas: ['Luz do motor acesa', 'Perda de potência', 'Consumo alto', 'Modo de emergência'],
    passos: [
      {
        ordem: 1,
        titulo: 'Verifique o nível de entupimento',
        descricao: 'Use scanner para verificar o status do DPF.',
        dica: 'Acima de 80% precisa limpeza.'
      },
      {
        ordem: 2,
        titulo: 'Tente regeneração forçada',
        descricao: 'Use scanner para iniciar regeneração forçada.',
        dica: 'Funciona se entupimento não for severo.'
      },
      {
        ordem: 3,
        titulo: 'Adicione limpador químico',
        descricao: 'Adicione aditivo limpador no tanque de combustível.',
        dica: 'Siga instruções do produto.'
      },
      {
        ordem: 4,
        titulo: 'Dirija em alta rotação',
        descricao: 'Dirija por 30-40 minutos em alta rotação (rodovia).',
        dica: 'Isso ajuda na regeneração.'
      },
      {
        ordem: 5,
        titulo: 'Se não resolver, remova o DPF',
        descricao: 'Levante o veículo e localize o DPF.',
        dica: 'Geralmente no sistema de escapamento.'
      },
      {
        ordem: 6,
        titulo: 'Desconecte os sensores',
        descricao: 'Remova sensores de pressão e temperatura.',
        dica: 'Fotografe as posições.'
      },
      {
        ordem: 7,
        titulo: 'Remova o DPF',
        descricao: 'Solte as conexões e retire o filtro.',
        dica: 'Cuidado - pode estar muito sujo.'
      },
      {
        ordem: 8,
        titulo: 'Limpeza profissional',
        descricao: 'Leve para limpeza em ultrassom ou química.',
        dica: 'Limpeza caseira não é eficaz.'
      },
      {
        ordem: 9,
        titulo: 'Reinstale o DPF',
        descricao: 'Monte com juntas novas.',
        dica: 'Certifique-se de vedação perfeita.'
      },
      {
        ordem: 10,
        titulo: 'Limpe os códigos',
        descricao: 'Use scanner para limpar códigos e resetar contadores.',
        dica: 'Essencial para funcionamento correto.'
      }
    ]
  },
  {
    id: '36',
    titulo: 'Troca de Tensor da Correia',
    descricao: 'Substitua o tensor da correia auxiliar.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '1 hora',
    ferramentas: ['Chaves diversas', 'Chave de catraca', 'Diagrama de correia'],
    materiais: ['Tensor novo', 'Correia nova (recomendado)'],
    imagem: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    sintomas: ['Ruído de guincho', 'Correia solta', 'Bateria descarregando'],
    passos: [
      {
        ordem: 1,
        titulo: 'Fotografe o caminho da correia',
        descricao: 'Tire foto do percurso da correia.',
        dica: 'Ou consulte o diagrama no capô.'
      },
      {
        ordem: 2,
        titulo: 'Alivie a tensão',
        descricao: 'Use chave no tensor para aliviar a tensão.',
        dica: 'Gire no sentido que alivia a correia.'
      },
      {
        ordem: 3,
        titulo: 'Remova a correia',
        descricao: 'Com tensão aliviada, remova a correia.',
        dica: 'Inspecione a correia - troque se gasta.'
      },
      {
        ordem: 4,
        titulo: 'Remova o tensor antigo',
        descricao: 'Solte o parafuso central e remova o tensor.',
        dica: 'Observe a posição de montagem.'
      },
      {
        ordem: 5,
        titulo: 'Instale o tensor novo',
        descricao: 'Posicione o tensor novo e aperte o parafuso.',
        dica: 'Não aperte totalmente ainda.'
      },
      {
        ordem: 6,
        titulo: 'Instale a correia',
        descricao: 'Siga o diagrama para instalar a correia.',
        dica: 'Comece pela polia do virabrequim.'
      },
      {
        ordem: 7,
        titulo: 'Verifique o alinhamento',
        descricao: 'Certifique-se de que a correia está centralizada em todas as polias.',
        dica: 'Gire o motor manualmente para verificar.'
      },
      {
        ordem: 8,
        titulo: 'Aperte o tensor',
        descricao: 'Aperte o parafuso do tensor com torque correto.',
        dica: 'Consulte especificações.'
      },
      {
        ordem: 9,
        titulo: 'Teste o funcionamento',
        descricao: 'Ligue o motor e observe se há ruídos.',
        dica: 'Correia não deve guinchar.'
      }
    ]
  },
  {
    id: '37',
    titulo: 'Substituição de Bobina de Ignição',
    descricao: 'Troque bobina de ignição com defeito.',
    categoria: 'eletrica',
    dificuldade: 'facil',
    tempoEstimado: '30 minutos',
    ferramentas: ['Chaves diversas', 'Multímetro'],
    materiais: ['Bobina de ignição nova', 'Spray limpa contatos'],
    imagem: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop',
    sintomas: ['Falhas no motor', 'Luz do motor acesa', 'Perda de potência', 'Consumo alto'],
    passos: [
      {
        ordem: 1,
        titulo: 'Identifique a bobina com defeito',
        descricao: 'Use scanner para identificar qual cilindro está falhando.',
        dica: 'Ou troque uma por vez para testar.'
      },
      {
        ordem: 2,
        titulo: 'Desconecte a bateria',
        descricao: 'Remova o terminal negativo.',
        dica: 'Segurança ao trabalhar com sistema elétrico.'
      },
      {
        ordem: 3,
        titulo: 'Localize a bobina',
        descricao: 'Encontre a bobina no motor.',
        dica: 'Geralmente sobre as velas.'
      },
      {
        ordem: 4,
        titulo: 'Desconecte o conector',
        descricao: 'Remova o conector elétrico da bobina.',
        dica: 'Pressione a trava antes de puxar.'
      },
      {
        ordem: 5,
        titulo: 'Remova o parafuso',
        descricao: 'Solte o parafuso que prende a bobina.',
        dica: 'Guarde o parafuso em local seguro.'
      },
      {
        ordem: 6,
        titulo: 'Retire a bobina',
        descricao: 'Puxe a bobina para cima com cuidado.',
        dica: 'Pode estar presa por vedação.'
      },
      {
        ordem: 7,
        titulo: 'Limpe o alojamento',
        descricao: 'Limpe ao redor da vela.',
        dica: 'Evita entrada de sujeira.'
      },
      {
        ordem: 8,
        titulo: 'Instale a bobina nova',
        descricao: 'Encaixe a bobina nova no alojamento.',
        dica: 'Certifique-se de que está bem assentada.'
      },
      {
        ordem: 9,
        titulo: 'Aperte o parafuso',
        descricao: 'Aperte o parafuso de fixação.',
        dica: 'Não aperte demais.'
      },
      {
        ordem: 10,
        titulo: 'Reconecte e teste',
        descricao: 'Conecte o conector, reconecte a bateria e teste.',
        dica: 'Limpe códigos de erro antes de testar.'
      }
    ]
  },
  {
    id: '38',
    titulo: 'Limpeza de Válvulas de Admissão',
    descricao: 'Remova carbono das válvulas de admissão.',
    categoria: 'motor',
    dificuldade: 'dificil',
    tempoEstimado: '4-6 horas',
    ferramentas: ['Chaves diversas', 'Jateadora de noz', 'Aspirador', 'Endoscópio'],
    materiais: ['Nozes trituradas', 'Juntas novas', 'Spray limpa carburador'],
    imagem: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    sintomas: ['Perda de potência', 'Marcha lenta irregular', 'Consumo alto', 'Falhas na aceleração'],
    passos: [
      {
        ordem: 1,
        titulo: 'Confirme o problema',
        descricao: 'Use endoscópio para verificar acúmulo de carbono.',
        dica: 'Comum em motores com injeção direta.'
      },
      {
        ordem: 2,
        titulo: 'Remova o coletor de admissão',
        descricao: 'Desconecte e remova o coletor de admissão.',
        dica: 'Fotografe todas as conexões.'
      },
      {
        ordem: 3,
        titulo: 'Proteja os cilindros',
        descricao: 'Coloque panos nos dutos para evitar entrada de material.',
        dica: 'Essencial para não danificar o motor.'
      },
      {
        ordem: 4,
        titulo: 'Jateie as válvulas',
        descricao: 'Use jateadora com nozes trituradas para limpar.',
        dica: 'Trabalhe em uma válvula por vez.'
      },
      {
        ordem: 5,
        titulo: 'Aspire os resíduos',
        descricao: 'Aspire todo o material solto.',
        dica: 'Não deixe nada cair nos cilindros.'
      },
      {
        ordem: 6,
        titulo: 'Limpe com spray',
        descricao: 'Finalize com spray limpa carburador.',
        dica: 'Remove resíduos finos.'
      },
      {
        ordem: 7,
        titulo: 'Inspecione com endoscópio',
        descricao: 'Verifique se a limpeza foi eficaz.',
        dica: 'Repita se necessário.'
      },
      {
        ordem: 8,
        titulo: 'Limpe o coletor',
        descricao: 'Aproveite para limpar o coletor de admissão.',
        dica: 'Remova óleo e carbono acumulados.'
      },
      {
        ordem: 9,
        titulo: 'Remonte com juntas novas',
        descricao: 'Instale juntas novas e remonte o coletor.',
        dica: 'Aperte com torque correto.'
      },
      {
        ordem: 10,
        titulo: 'Teste o motor',
        descricao: 'Ligue o motor e verifique se melhorou.',
        dica: 'Diferença deve ser notável.'
      }
    ]
  },
  {
    id: '39',
    titulo: 'Troca de Coxim do Motor',
    descricao: 'Substitua coxins do motor desgastados.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '2-3 horas',
    ferramentas: ['Macaco hidráulico', 'Cavaletes', 'Chaves diversas', 'Calço de madeira'],
    materiais: ['Coxins novos', 'Parafusos novos'],
    imagem: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop',
    sintomas: ['Vibração excessiva', 'Ruídos ao acelerar', 'Trancos ao engatar marcha'],
    passos: [
      {
        ordem: 1,
        titulo: 'Identifique o coxim com defeito',
        descricao: 'Inspecione visualmente os coxins.',
        dica: 'Procure por rachaduras ou óleo vazando.'
      },
      {
        ordem: 2,
        titulo: 'Apoie o motor',
        descricao: 'Use macaco com calço de madeira para apoiar o motor.',
        dica: 'Posicione sob o cárter de óleo.'
      },
      {
        ordem: 3,
        titulo: 'Levante levemente o motor',
        descricao: 'Alivie o peso do coxim a ser trocado.',
        dica: 'Levante apenas o necessário.'
      },
      {
        ordem: 4,
        titulo: 'Remova os parafusos',
        descricao: 'Solte os parafusos que prendem o coxim.',
        dica: 'Pode ter parafusos em cima e embaixo.'
      },
      {
        ordem: 5,
        titulo: 'Retire o coxim antigo',
        descricao: 'Remova o coxim desgastado.',
        dica: 'Observe a posição de montagem.'
      },
      {
        ordem: 6,
        titulo: 'Limpe as superfícies',
        descricao: 'Limpe os pontos de fixação.',
        dica: 'Remove corrosão e sujeira.'
      },
      {
        ordem: 7,
        titulo: 'Instale o coxim novo',
        descricao: 'Posicione o coxim novo corretamente.',
        dica: 'Certifique-se da orientação correta.'
      },
      {
        ordem: 8,
        titulo: 'Aperte os parafusos',
        descricao: 'Aperte com torque especificado.',
        dica: 'Use parafusos novos se recomendado.'
      },
      {
        ordem: 9,
        titulo: 'Abaixe o motor',
        descricao: 'Remova o macaco lentamente.',
        dica: 'Deixe o peso do motor assentar no coxim.'
      },
      {
        ordem: 10,
        titulo: 'Teste o veículo',
        descricao: 'Dirija e verifique se as vibrações diminuíram.',
        dica: 'Pode levar alguns km para assentar.'
      }
    ]
  },
  {
    id: '40',
    titulo: 'Substituição de Bomba d\'Água',
    descricao: 'Troque a bomba d\'água com vazamento.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '2-3 horas',
    ferramentas: ['Chaves diversas', 'Bandeja coletora', 'Raspador'],
    materiais: ['Bomba d\'água nova', 'Junta', 'Líquido de arrefecimento', 'Correia dentada (se aplicável)'],
    imagem: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    sintomas: ['Vazamento de líquido', 'Superaquecimento', 'Ruído na bomba', 'Luz de temperatura acesa'],
    passos: [
      {
        ordem: 1,
        titulo: 'Motor frio obrigatório',
        descricao: 'Aguarde o motor esfriar completamente.',
        dica: 'Nunca trabalhe com motor quente.'
      },
      {
        ordem: 2,
        titulo: 'Drene o líquido',
        descricao: 'Abra o dreno do radiador e drene o líquido.',
        dica: 'Guarde o líquido se estiver limpo.'
      },
      {
        ordem: 3,
        titulo: 'Remova a correia',
        descricao: 'Remova a correia que aciona a bomba.',
        dica: 'Se for correia dentada, siga procedimento específico.'
      },
      {
        ordem: 4,
        titulo: 'Desconecte as mangueiras',
        descricao: 'Remova as mangueiras conectadas à bomba.',
        dica: 'Tenha bandeja pronta para líquido residual.'
      },
      {
        ordem: 5,
        titulo: 'Remova os parafusos',
        descricao: 'Solte os parafusos que prendem a bomba.',
        dica: 'Podem estar em posições difíceis.'
      },
      {
        ordem: 6,
        titulo: 'Retire a bomba antiga',
        descricao: 'Remova a bomba com cuidado.',
        dica: 'Pode estar presa por vedante.'
      },
      {
        ordem: 7,
        titulo: 'Limpe a superfície',
        descricao: 'Raspe toda a junta antiga.',
        dica: 'Superfície deve ficar perfeitamente limpa.'
      },
      {
        ordem: 8,
        titulo: 'Instale a bomba nova',
        descricao: 'Posicione a bomba nova com junta.',
        dica: 'Use vedante se especificado.'
      },
      {
        ordem: 9,
        titulo: 'Aperte os parafusos',
        descricao: 'Aperte em cruz com torque correto.',
        dica: 'Não aperte demais.'
      },
      {
        ordem: 10,
        titulo: 'Reconecte tudo',
        descricao: 'Reinstale mangueiras e correia.',
        dica: 'Verifique tensão da correia.'
      },
      {
        ordem: 11,
        titulo: 'Complete o líquido',
        descricao: 'Adicione líquido de arrefecimento novo.',
        dica: 'Sangre o sistema para remover ar.'
      },
      {
        ordem: 12,
        titulo: 'Teste e verifique',
        descricao: 'Ligue o motor e verifique vazamentos.',
        dica: 'Monitore temperatura nos primeiros dias.'
      }
    ]
  },
  {
    id: '41',
    titulo: 'Limpeza de Tanque de Combustível',
    descricao: 'Limpe o tanque de combustível contaminado.',
    categoria: 'motor',
    dificuldade: 'dificil',
    tempoEstimado: '4-6 horas',
    ferramentas: ['Chaves diversas', 'Macaco', 'Cavaletes', 'Mangueira'],
    materiais: ['Solvente de limpeza', 'Filtro de combustível novo', 'Juntas'],
    imagem: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop',
    sintomas: ['Motor falhando', 'Combustível contaminado', 'Ferrugem no tanque'],
    passos: [
      {
        ordem: 1,
        titulo: 'Esvazie o tanque',
        descricao: 'Remova o máximo de combustível possível.',
        dica: 'Use bomba manual ou sifão.'
      },
      {
        ordem: 2,
        titulo: 'Levante o veículo',
        descricao: 'Use macaco e cavaletes para acessar o tanque.',
        dica: 'Trabalhe em área ventilada.'
      },
      {
        ordem: 3,
        titulo: 'Desconecte as mangueiras',
        descricao: 'Remova mangueiras de combustível e respiro.',
        dica: 'Tenha panos prontos para vazamentos.'
      },
      {
        ordem: 4,
        titulo: 'Desconecte a bomba',
        descricao: 'Remova o conector elétrico da bomba.',
        dica: 'Fotografe as conexões.'
      },
      {
        ordem: 5,
        titulo: 'Solte as cintas',
        descricao: 'Remova as cintas que prendem o tanque.',
        dica: 'Use macaco para apoiar o tanque.'
      },
      {
        ordem: 6,
        titulo: 'Remova o tanque',
        descricao: 'Abaixe e retire o tanque do veículo.',
        dica: 'Tanque é pesado - peça ajuda.'
      },
      {
        ordem: 7,
        titulo: 'Drene completamente',
        descricao: 'Remova todo o combustível restante.',
        dica: 'Descarte adequadamente.'
      },
      {
        ordem: 8,
        titulo: 'Lave com solvente',
        descricao: 'Adicione solvente, agite e drene várias vezes.',
        dica: 'Continue até sair limpo.'
      },
      {
        ordem: 9,
        titulo: 'Seque completamente',
        descricao: 'Deixe o tanque secar ao ar livre.',
        dica: 'Pode usar ar comprimido.'
      },
      {
        ordem: 10,
        titulo: 'Inspecione internamente',
        descricao: 'Use lanterna para verificar se está limpo.',
        dica: 'Procure por ferrugem ou danos.'
      },
      {
        ordem: 11,
        titulo: 'Reinstale o tanque',
        descricao: 'Monte na ordem inversa com juntas novas.',
        dica: 'Aperte as cintas adequadamente.'
      },
      {
        ordem: 12,
        titulo: 'Troque o filtro',
        descricao: 'Instale filtro de combustível novo.',
        dica: 'Essencial após limpeza do tanque.'
      }
    ]
  },
  {
    id: '42',
    titulo: 'Troca de Pivô de Suspensão',
    descricao: 'Substitua pivô de suspensão com folga.',
    categoria: 'suspensao',
    dificuldade: 'dificil',
    tempoEstimado: '2-3 horas',
    ferramentas: ['Macaco', 'Cavaletes', 'Chaves diversas', 'Extrator de pivô', 'Prensa'],
    materiais: ['Pivô novo', 'Graxa', 'Parafusos novos'],
    imagem: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop',
    sintomas: ['Ruídos na suspensão', 'Folga na direção', 'Desgaste irregular de pneus'],
    passos: [
      {
        ordem: 1,
        titulo: 'Levante o veículo',
        descricao: 'Use macaco e cavaletes com segurança.',
        dica: 'Trabalhe em uma roda por vez.'
      },
      {
        ordem: 2,
        titulo: 'Remova a roda',
        descricao: 'Retire a roda para acessar a suspensão.',
        dica: 'Afrouxe as porcas antes de levantar.'
      },
      {
        ordem: 3,
        titulo: 'Desconecte o terminal de direção',
        descricao: 'Remova o terminal de direção da manga.',
        dica: 'Use extrator específico.'
      },
      {
        ordem: 4,
        titulo: 'Solte a pinça de freio',
        descricao: 'Remova a pinça e amarre para não forçar a mangueira.',
        dica: 'Não deixe pendurada.'
      },
      {
        ordem: 5,
        titulo: 'Remova o disco',
        descricao: 'Retire o disco de freio.',
        dica: 'Pode estar preso por corrosão.'
      },
      {
        ordem: 6,
        titulo: 'Solte a porca do pivô',
        descricao: 'Remova a porca central do pivô.',
        dica: 'Geralmente muito apertada.'
      },
      {
        ordem: 7,
        titulo: 'Desconecte a bandeja',
        descricao: 'Solte os parafusos que conectam o pivô à bandeja.',
        dica: 'Suporte a bandeja com macaco.'
      },
      {
        ordem: 8,
        titulo: 'Remova o pivô',
        descricao: 'Use extrator para remover o pivô da manga.',
        dica: 'Não force - use ferramenta adequada.'
      },
      {
        ordem: 9,
        titulo: 'Instale o pivô novo',
        descricao: 'Prense o pivô novo na manga.',
        dica: 'Certifique-se de que está alinhado.'
      },
      {
        ordem: 10,
        titulo: 'Remonte tudo',
        descricao: 'Reinstale na ordem inversa com torque correto.',
        dica: 'Use parafusos novos se recomendado.'
      },
      {
        ordem: 11,
        titulo: 'Faça alinhamento',
        descricao: 'Leve para fazer alinhamento.',
        dica: 'Essencial após trocar pivô.'
      }
    ]
  },
  {
    id: '43',
    titulo: 'Limpeza de Intercooler',
    descricao: 'Limpe o intercooler para melhor desempenho do turbo.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '2 horas',
    ferramentas: ['Chaves diversas', 'Mangueira', 'Escova'],
    materiais: ['Desengordurante', 'Água', 'Panos'],
    imagem: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    sintomas: ['Perda de potência', 'Fumaça preta', 'Turbo demorando para atuar'],
    passos: [
      {
        ordem: 1,
        titulo: 'Localize o intercooler',
        descricao: 'Encontre o intercooler (geralmente na frente do radiador).',
        dica: 'Consulte o manual se necessário.'
      },
      {
        ordem: 2,
        titulo: 'Desconecte as mangueiras',
        descricao: 'Remova as mangueiras de entrada e saída.',
        dica: 'Solte as abraçadeiras primeiro.'
      },
      {
        ordem: 3,
        titulo: 'Remova o intercooler',
        descricao: 'Solte os suportes e retire o intercooler.',
        dica: 'Pode ter óleo acumulado - cuidado.'
      },
      {
        ordem: 4,
        titulo: 'Inspecione internamente',
        descricao: 'Olhe dentro para verificar acúmulo de óleo.',
        dica: 'Óleo excessivo indica problema no turbo.'
      },
      {
        ordem: 5,
        titulo: 'Lave externamente',
        descricao: 'Use mangueira e desengordurante nas aletas.',
        dica: 'Jato de baixa pressão.'
      },
      {
        ordem: 6,
        titulo: 'Limpe internamente',
        descricao: 'Adicione desengordurante, agite e enxágue.',
        dica: 'Repita até sair água limpa.'
      },
      {
        ordem: 7,
        titulo: 'Seque completamente',
        descricao: 'Use ar comprimido para secar.',
        dica: 'Não deixe água dentro.'
      },
      {
        ordem: 8,
        titulo: 'Inspecione as aletas',
        descricao: 'Verifique se há aletas amassadas.',
        dica: 'Aletas danificadas reduzem eficiência.'
      },
      {
        ordem: 9,
        titulo: 'Reinstale o intercooler',
        descricao: 'Monte na posição original.',
        dica: 'Certifique-se de que está bem fixado.'
      },
      {
        ordem: 10,
        titulo: 'Reconecte as mangueiras',
        descricao: 'Instale as mangueiras com abraçadeiras novas.',
        dica: 'Aperte bem para evitar vazamentos.'
      },
      {
        ordem: 11,
        titulo: 'Teste o veículo',
        descricao: 'Dirija e verifique se melhorou a resposta.',
        dica: 'Turbo deve atuar mais rápido.'
      }
    ]
  },
  {
    id: '44',
    titulo: 'Troca de Termostato',
    descricao: 'Substitua o termostato com defeito.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '1-2 horas',
    ferramentas: ['Chaves diversas', 'Bandeja coletora', 'Raspador'],
    materiais: ['Termostato novo', 'Junta', 'Líquido de arrefecimento'],
    imagem: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    sintomas: ['Motor não aquece', 'Superaquecimento', 'Aquecimento lento', 'Temperatura instável'],
    passos: [
      {
        ordem: 1,
        titulo: 'Motor frio obrigatório',
        descricao: 'Aguarde o motor esfriar completamente.',
        dica: 'Nunca abra o sistema com motor quente.'
      },
      {
        ordem: 2,
        titulo: 'Drene parcialmente',
        descricao: 'Drene líquido até abaixo do nível do termostato.',
        dica: 'Não precisa drenar tudo.'
      },
      {
        ordem: 3,
        titulo: 'Localize o termostato',
        descricao: 'Encontre a carcaça do termostato.',
        dica: 'Geralmente onde a mangueira superior se conecta.'
      },
      {
        ordem: 4,
        titulo: 'Desconecte a mangueira',
        descricao: 'Remova a mangueira superior do radiador.',
        dica: 'Tenha bandeja pronta para líquido.'
      },
      {
        ordem: 5,
        titulo: 'Remova a carcaça',
        descricao: 'Solte os parafusos da carcaça do termostato.',
        dica: 'Fotografe a posição.'
      },
      {
        ordem: 6,
        titulo: 'Retire o termostato antigo',
        descricao: 'Remova o termostato e a junta velha.',
        dica: 'Observe a orientação do termostato.'
      },
      {
        ordem: 7,
        titulo: 'Limpe as superfícies',
        descricao: 'Raspe toda a junta antiga.',
        dica: 'Superfícies devem ficar limpas.'
      },
      {
        ordem: 8,
        titulo: 'Teste o termostato novo',
        descricao: 'Coloque em água quente para verificar se abre.',
        dica: 'Deve abrir na temperatura especificada.'
      },
      {
        ordem: 9,
        titulo: 'Instale o termostato novo',
        descricao: 'Posicione com a orientação correta.',
        dica: 'Geralmente a mola fica voltada para o motor.'
      },
      {
        ordem: 10,
        titulo: 'Monte com junta nova',
        descricao: 'Instale junta nova e remonte a carcaça.',
        dica: 'Aperte em cruz com torque correto.'
      },
      {
        ordem: 11,
        titulo: 'Reconecte a mangueira',
        descricao: 'Reinstale a mangueira superior.',
        dica: 'Aperte bem a abraçadeira.'
      },
      {
        ordem: 12,
        titulo: 'Complete e sangre',
        descricao: 'Complete o líquido e sangre o sistema.',
        dica: 'Remova todo o ar do sistema.'
      }
    ]
  },
  {
    id: '45',
    titulo: 'Substituição de Cabo de Acelerador',
    descricao: 'Troque cabo de acelerador esticado ou rompido.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '1-2 horas',
    ferramentas: ['Chaves diversas', 'Alicate', 'Lanterna'],
    materiais: ['Cabo de acelerador novo', 'Graxa'],
    imagem: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    sintomas: ['Acelerador pesado', 'Acelerador travando', 'Cabo rompido'],
    passos: [
      {
        ordem: 1,
        titulo: 'Acesse o pedal',
        descricao: 'Remova o painel inferior para acessar o pedal.',
        dica: 'Use lanterna para melhor visualização.'
      },
      {
        ordem: 2,
        titulo: 'Desconecte do pedal',
        descricao: 'Remova o cabo do pedal do acelerador.',
        dica: 'Observe como está conectado.'
      },
      {
        ordem: 3,
        titulo: 'Acesse o motor',
        descricao: 'Abra o capô e localize o corpo de borboleta.',
        dica: 'Siga o cabo do pedal até o motor.'
      },
      {
        ordem: 4,
        titulo: 'Solte o ajuste',
        descricao: 'Afrouxe a porca de ajuste do cabo.',
        dica: 'Anote a posição para referência.'
      },
      {
        ordem: 5,
        titulo: 'Desconecte do corpo de borboleta',
        descricao: 'Remova o cabo da borboleta.',
        dica: 'Pode ter trava ou clipe.'
      },
      {
        ordem: 6,
        titulo: 'Remova o cabo antigo',
        descricao: 'Puxe o cabo pela cabine.',
        dica: 'Observe o caminho do cabo.'
      },
      {
        ordem: 7,
        titulo: 'Instale o cabo novo',
        descricao: 'Passe o cabo novo pelo mesmo caminho.',
        dica: 'Lubrifique o cabo com graxa.'
      },
      {
        ordem: 8,
        titulo: 'Conecte no pedal',
        descricao: 'Fixe o cabo no pedal do acelerador.',
        dica: 'Certifique-se de que está bem preso.'
      },
      {
        ordem: 9,
        titulo: 'Conecte no corpo de borboleta',
        descricao: 'Conecte a outra ponta na borboleta.',
        dica: 'Deixe folga para ajuste.'
      },
      {
        ordem: 10,
        titulo: 'Ajuste o cabo',
        descricao: 'Ajuste até obter a folga correta.',
        dica: 'Folga típica: 1-2mm na borboleta.'
      },
      {
        ordem: 11,
        titulo: 'Teste o funcionamento',
        descricao: 'Pressione o pedal e verifique se a borboleta abre totalmente.',
        dica: 'Deve retornar suavemente ao soltar.'
      }
    ]
  },
  {
    id: '46',
    titulo: 'Limpeza de Sensor MAF',
    descricao: 'Limpe o sensor de fluxo de ar (MAF).',
    categoria: 'eletrica',
    dificuldade: 'facil',
    tempoEstimado: '20 minutos',
    ferramentas: ['Chave de fenda'],
    materiais: ['Spray limpa MAF específico'],
    imagem: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop',
    sintomas: ['Marcha lenta irregular', 'Perda de potência', 'Consumo alto', 'Luz do motor acesa'],
    passos: [
      {
        ordem: 1,
        titulo: 'Localize o sensor MAF',
        descricao: 'Encontre o sensor entre o filtro de ar e o corpo de borboleta.',
        dica: 'Geralmente na mangueira de admissão.'
      },
      {
        ordem: 2,
        titulo: 'Desconecte o conector',
        descricao: 'Remova o conector elétrico do sensor.',
        dica: 'Pressione a trava antes de puxar.'
      },
      {
        ordem: 3,
        titulo: 'Remova o sensor',
        descricao: 'Solte os parafusos e retire o sensor.',
        dica: 'Cuidado - o elemento interno é delicado!'
      },
      {
        ordem: 4,
        titulo: 'Inspecione o sensor',
        descricao: 'Observe o fio quente interno.',
        dica: 'Procure por sujeira ou óleo.'
      },
      {
        ordem: 5,
        titulo: 'Aplique o spray',
        descricao: 'Use APENAS spray específico para MAF.',
        dica: 'NUNCA use limpa carburador ou outros produtos!'
      },
      {
        ordem: 6,
        titulo: 'Deixe secar',
        descricao: 'Aguarde 10-15 minutos para secar completamente.',
        dica: 'Não sopre ar - pode danificar.'
      },
      {
        ordem: 7,
        titulo: 'Reinstale o sensor',
        descricao: 'Monte o sensor de volta.',
        dica: 'Certifique-se de que está bem fixado.'
      },
      {
        ordem: 8,
        titulo: 'Reconecte o conector',
        descricao: 'Conecte o conector elétrico.',
        dica: 'Deve fazer clique ao encaixar.'
      },
      {
        ordem: 9,
        titulo: 'Limpe os códigos',
        descricao: 'Use scanner para limpar códigos de erro.',
        dica: 'Ou desconecte a bateria por 15 minutos.'
      },
      {
        ordem: 10,
        titulo: 'Teste o veículo',
        descricao: 'Dirija e verifique se melhorou.',
        dica: 'Diferença deve ser notável.'
      }
    ]
  },
  {
    id: '47',
    titulo: 'Troca de Junta Homocinética',
    descricao: 'Substitua junta homocinética com defeito.',
    categoria: 'transmissao',
    dificuldade: 'dificil',
    tempoEstimado: '3-4 horas',
    ferramentas: ['Macaco', 'Cavaletes', 'Chaves diversas', 'Alicate de pressão', 'Martelo'],
    materiais: ['Kit de junta homocinética', 'Graxa específica', 'Abraçadeiras'],
    imagem: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop',
    sintomas: ['Estalo ao virar', 'Vibração', 'Graxa vazando', 'Ruído ao acelerar'],
    passos: [
      {
        ordem: 1,
        titulo: 'Levante o veículo',
        descricao: 'Use macaco e cavaletes com segurança.',
        dica: 'Trabalhe em uma roda por vez.'
      },
      {
        ordem: 2,
        titulo: 'Remova a roda',
        descricao: 'Retire a roda para acessar a junta.',
        dica: 'Afrouxe as porcas antes de levantar.'
      },
      {
        ordem: 3,
        titulo: 'Drene o óleo (se necessário)',
        descricao: 'Alguns modelos exigem drenar óleo da transmissão.',
        dica: 'Consulte o manual.'
      },
      {
        ordem: 4,
        titulo: 'Solte a porca da manga',
        descricao: 'Remova a porca central do cubo.',
        dica: 'Geralmente muito apertada - use chave de impacto.'
      },
      {
        ordem: 5,
        titulo: 'Desconecte a bandeja',
        descricao: 'Solte a bandeja inferior para dar espaço.',
        dica: 'Não precisa remover completamente.'
      },
      {
        ordem: 6,
        titulo: 'Remova o semi-eixo',
        descricao: 'Puxe o semi-eixo para fora da transmissão.',
        dica: 'Use alavanca se necessário.'
      },
      {
        ordem: 7,
        titulo: 'Remova as abraçadeiras',
        descricao: 'Corte as abraçadeiras da coifa.',
        dica: 'Use alicate de corte.'
      },
      {
        ordem: 8,
        titulo: 'Retire a junta antiga',
        descricao: 'Remova a junta homocinética do eixo.',
        dica: 'Pode precisar bater com martelo.'
      },
      {
        ordem: 9,
        titulo: 'Limpe o eixo',
        descricao: 'Limpe toda a graxa velha do eixo.',
        dica: 'Use solvente e pano.'
      },
      {
        ordem: 10,
        titulo: 'Instale a junta nova',
        descricao: 'Monte a junta nova com graxa específica.',
        dica: 'Use toda a graxa do kit.'
      },
      {
        ordem: 11,
        titulo: 'Instale a coifa nova',
        descricao: 'Posicione a coifa e aperte as abraçadeiras.',
        dica: 'Certifique-se de que está bem vedada.'
      },
      {
        ordem: 12,
        titulo: 'Remonte tudo',
        descricao: 'Reinstale o semi-eixo e todos os componentes.',
        dica: 'Aperte a porca do cubo com torque correto.'
      }
    ]
  },
  {
    id: '48',
    titulo: 'Verificação de Compressão do Motor',
    descricao: 'Teste a compressão dos cilindros.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '1 hora',
    ferramentas: ['Compressômetro', 'Chave de vela', 'Bateria auxiliar'],
    materiais: ['Nenhum'],
    imagem: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    sintomas: ['Perda de potência', 'Consumo de óleo', 'Fumaça azul', 'Dificuldade para ligar'],
    passos: [
      {
        ordem: 1,
        titulo: 'Aqueça o motor',
        descricao: 'Ligue o motor até atingir temperatura normal.',
        dica: 'Teste deve ser feito com motor quente.'
      },
      {
        ordem: 2,
        titulo: 'Desligue o motor',
        descricao: 'Desligue e aguarde alguns minutos.',
        dica: 'Deixe esfriar um pouco para segurança.'
      },
      {
        ordem: 3,
        titulo: 'Remova todas as velas',
        descricao: 'Retire todas as velas de ignição.',
        dica: 'Facilita a rotação do motor.'
      },
      {
        ordem: 4,
        titulo: 'Desconecte a ignição',
        descricao: 'Desconecte bobinas ou cabo da bobina.',
        dica: 'Evita centelha durante o teste.'
      },
      {
        ordem: 5,
        titulo: 'Instale o compressômetro',
        descricao: 'Rosqueie o compressômetro no primeiro cilindro.',
        dica: 'Certifique-se de que está bem apertado.'
      },
      {
        ordem: 6,
        titulo: 'Acione o motor de arranque',
        descricao: 'Gire o motor por 5-6 segundos.',
        dica: 'Mantenha o acelerador totalmente pressionado.'
      },
      {
        ordem: 7,
        titulo: 'Anote a leitura',
        descricao: 'Registre o valor máximo atingido.',
        dica: 'Valor típico: 120-180 psi.'
      },
      {
        ordem: 8,
        titulo: 'Repita para todos os cilindros',
        descricao: 'Faça o teste em todos os cilindros.',
        dica: 'Zere o compressômetro entre cada teste.'
      },
      {
        ordem: 9,
        titulo: 'Compare os valores',
        descricao: 'Variação entre cilindros não deve passar de 10%.',
        dica: 'Valores muito diferentes indicam problema.'
      },
      {
        ordem: 10,
        titulo: 'Teste com óleo (se necessário)',
        descricao: 'Se compressão baixa, adicione óleo e teste novamente.',
        dica: 'Se subir: anéis gastos. Se não: válvulas ou junta.'
      },
      {
        ordem: 11,
        titulo: 'Reinstale as velas',
        descricao: 'Recoloque todas as velas.',
        dica: 'Aperte com torque correto.'
      },
      {
        ordem: 12,
        titulo: 'Reconecte a ignição',
        descricao: 'Reconecte bobinas e teste o motor.',
        dica: 'Motor deve funcionar normalmente.'
      }
    ]
  },
  {
    id: '49',
    titulo: 'Troca de Retentor de Virabrequim',
    descricao: 'Substitua retentor de virabrequim vazando.',
    categoria: 'motor',
    dificuldade: 'dificil',
    tempoEstimado: '4-6 horas',
    ferramentas: ['Jogo de ferramentas', 'Macaco', 'Cavaletes', 'Extrator de retentor'],
    materiais: ['Retentor novo', 'Vedante', 'Óleo de motor'],
    imagem: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    sintomas: ['Vazamento de óleo na frente do motor', 'Poça de óleo no chão', 'Consumo de óleo'],
    passos: [
      {
        ordem: 1,
        titulo: 'Drene o óleo',
        descricao: 'Drene o óleo do motor.',
        dica: 'Aproveite para trocar o óleo.'
      },
      {
        ordem: 2,
        titulo: 'Levante o veículo',
        descricao: 'Use macaco e cavaletes.',
        dica: 'Acesso pode ser por baixo ou por cima.'
      },
      {
        ordem: 3,
        titulo: 'Remova a correia',
        descricao: 'Retire a correia do virabrequim.',
        dica: 'Fotografe o percurso.'
      },
      {
        ordem: 4,
        titulo: 'Remova a polia do virabrequim',
        descricao: 'Solte o parafuso central e remova a polia.',
        dica: 'Parafuso geralmente muito apertado.'
      },
      {
        ordem: 5,
        titulo: 'Remova a tampa frontal',
        descricao: 'Solte os parafusos da tampa frontal do motor.',
        dica: 'Pode ser necessário remover outros componentes.'
      },
      {
        ordem: 6,
        titulo: 'Acesse o retentor',
        descricao: 'Localize o retentor no virabrequim.',
        dica: 'Geralmente visível após remover a tampa.'
      },
      {
        ordem: 7,
        titulo: 'Remova o retentor antigo',
        descricao: 'Use extrator para remover o retentor.',
        dica: 'Cuidado para não danificar o virabrequim.'
      },
      {
        ordem: 8,
        titulo: 'Limpe a superfície',
        descricao: 'Limpe o alojamento do retentor.',
        dica: 'Remova resíduos de vedante antigo.'
      },
      {
        ordem: 9,
        titulo: 'Instale o retentor novo',
        descricao: 'Prense o retentor novo no lugar.',
        dica: 'Use ferramenta adequada - não force torto.'
      },
      {
        ordem: 10,
        titulo: 'Aplique vedante',
        descricao: 'Aplique vedante conforme especificação.',
        dica: 'Alguns retentores não usam vedante.'
      },
      {
        ordem: 11,
        titulo: 'Remonte tudo',
        descricao: 'Reinstale tampa, polia e correia.',
        dica: 'Aperte o parafuso da polia com torque correto.'
      },
      {
        ordem: 12,
        titulo: 'Complete o óleo e teste',
        descricao: 'Adicione óleo novo e ligue o motor.',
        dica: 'Monitore por vazamentos nos próximos dias.'
      }
    ]
  },
  {
    id: '50',
    titulo: 'Limpeza Completa do Sistema de Combustível',
    descricao: 'Limpeza profunda de todo o sistema de combustível.',
    categoria: 'motor',
    dificuldade: 'medio',
    tempoEstimado: '2-3 horas',
    ferramentas: ['Chaves diversas', 'Kit de limpeza'],
    materiais: ['Aditivo limpador', 'Filtro de combustível novo', 'Combustível de qualidade'],
    imagem: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop',
    sintomas: ['Falhas no motor', 'Perda de potência', 'Consumo alto', 'Dificuldade para ligar'],
    passos: [
      {
        ordem: 1,
        titulo: 'Adicione limpador no tanque',
        descricao: 'Adicione aditivo limpador de sistema no tanque.',
        dica: 'Use produto de qualidade.'
      },
      {
        ordem: 2,
        titulo: 'Complete com combustível premium',
        descricao: 'Abasteça com combustível de alta octanagem.',
        dica: 'Combustível melhor ajuda na limpeza.'
      },
      {
        ordem: 3,
        titulo: 'Dirija normalmente',
        descricao: 'Use o veículo normalmente até consumir o tanque.',
        dica: 'Varie as rotações - cidade e estrada.'
      },
      {
        ordem: 4,
        titulo: 'Troque o filtro de combustível',
        descricao: 'Instale filtro novo após usar o aditivo.',
        dica: 'Filtro vai reter as sujeiras removidas.'
      },
      {
        ordem: 5,
        titulo: 'Limpe o corpo de borboleta',
        descricao: 'Aproveite para limpar o corpo de borboleta.',
        dica: 'Melhora a resposta do acelerador.'
      },
      {
        ordem: 6,
        titulo: 'Verifique as velas',
        descricao: 'Inspecione e limpe ou troque as velas.',
        dica: 'Velas limpas melhoram a combustão.'
      },
      {
        ordem: 7,
        titulo: 'Limpe o sensor MAF',
        descricao: 'Limpe o sensor de fluxo de ar.',
        dica: 'Use spray específico para MAF.'
      },
      {
        ordem: 8,
        titulo: 'Verifique a pressão da bomba',
        descricao: 'Teste a pressão da bomba de combustível.',
        dica: 'Pressão baixa causa problemas.'
      },
      {
        ordem: 9,
        titulo: 'Repita o processo (se necessário)',
        descricao: 'Para sistemas muito sujos, repita após 1000 km.',
        dica: 'Limpeza gradual é mais segura.'
      },
      {
        ordem: 10,
        titulo: 'Mantenha combustível de qualidade',
        descricao: 'Continue usando combustível premium por mais alguns tanques.',
        dica: 'Previne novo acúmulo de sujeira.'
      }
    ]
  },
  {
    id: '51',
    titulo: 'Regulagem de Válvulas',
    descricao: 'Ajuste a folga das válvulas do motor.',
    categoria: 'motor',
    dificuldade: 'dificil',
    tempoEstimado: '3-4 horas',
    ferramentas: ['Jogo de calibres', 'Chaves diversas', 'Torquímetro'],
    materiais: ['Junta da tampa de válvulas', 'Vedante'],
    imagem: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    sintomas: ['Ruído de tique-taque', 'Perda de potência', 'Consumo alto'],
    passos: [
      {
        ordem: 1,
        titulo: 'Motor frio obrigatório',
        descricao: 'Aguarde o motor esfriar completamente.',
        dica: 'Folga deve ser medida com motor frio.'
      },
      {
        ordem: 2,
        titulo: 'Remova a tampa de válvulas',
        descricao: 'Solte os parafusos e retire a tampa.',
        dica: 'Cuidado com a junta.'
      },
      {
        ordem: 3,
        titulo: 'Gire o motor para PMS',
        descricao: 'Posicione o cilindro 1 no ponto morto superior.',
        dica: 'Use marcas de sincronismo.'
      },
      {
        ordem: 4,
        titulo: 'Verifique a folga',
        descricao: 'Use calibre para medir a folga entre came e tucho.',
        dica: 'Consulte manual para valores corretos.'
      },
      {
        ordem: 5,
        titulo: 'Ajuste se necessário',
        descricao: 'Solte a contraporca e ajuste o parafuso regulador.',
        dica: 'Calibre deve passar com leve resistência.'
      },
      {
        ordem: 6,
        titulo: 'Aperte a contraporca',
        descricao: 'Segure o parafuso e aperte a contraporca.',
        dica: 'Verifique a folga novamente após apertar.'
      },
      {
        ordem: 7,
        titulo: 'Repita para todas as válvulas',
        descricao: 'Gire o motor e ajuste todas as válvulas.',
        dica: 'Siga a ordem de ignição do motor.'
      },
      {
        ordem: 8,
        titulo: 'Limpe as superfícies',
        descricao: 'Limpe a tampa e o cabeçote.',
        dica: 'Remova resíduos de junta antiga.'
      },
      {
        ordem: 9,
        titulo: 'Instale junta nova',
        descricao: 'Posicione junta nova ou aplique vedante.',
        dica: 'Siga especificações do fabricante.'
      },
      {
        ordem: 10,
        titulo: 'Remonte a tampa',
        descricao: 'Aperte os parafusos em cruz com torque correto.',
        dica: 'Não aperte demais - pode deformar a tampa.'
      },
      {
        ordem: 11,
        titulo: 'Teste o motor',
        descricao: 'Ligue o motor e ouça se o ruído diminuiu.',
        dica: 'Pode levar alguns minutos para normalizar.'
      }
    ]
  },
  {
    id: '52',
    titulo: 'Troca de Cilindro Mestre de Freio',
    descricao: 'Substitua o cilindro mestre com vazamento.',
    categoria: 'reparo',
    dificuldade: 'medio',
    tempoEstimado: '2-3 horas',
    ferramentas: ['Chaves diversas', 'Chave de linha', 'Recipiente'],
    materiais: ['Cilindro mestre novo', 'Fluido de freio DOT 3/4'],
    imagem: 'https://images.unsplash.com/photo-1632823471565-1ecdf7610bc7?w=800&h=600&fit=crop',
    sintomas: ['Pedal de freio esponjoso', 'Vazamento de fluido', 'Pedal vai até o fundo'],
    passos: [
      {
        ordem: 1,
        titulo: 'Remova o fluido do reservatório',
        descricao: 'Use seringa para remover o fluido.',
        dica: 'Descarte adequadamente.'
      },
      {
        ordem: 2,
        titulo: 'Desconecte as linhas de freio',
        descricao: 'Use chave de linha para soltar as linhas.',
        dica: 'Tenha recipiente pronto para vazamentos.'
      },
      {
        ordem: 3,
        titulo: 'Desconecte do servo-freio',
        descricao: 'Remova os parafusos que prendem ao servo.',
        dica: 'Acesso pode ser pela cabine.'
      },
      {
        ordem: 4,
        titulo: 'Remova o cilindro antigo',
        descricao: 'Retire o cilindro mestre.',
        dica: 'Cuidado para não derramar fluido.'
      },
      {
        ordem: 5,
        titulo: 'Prepare o cilindro novo',
        descricao: 'Purgue o cilindro novo antes de instalar.',
        dica: 'Evita entrada de ar no sistema.'
      },
      {
        ordem: 6,
        titulo: 'Instale o cilindro novo',
        descricao: 'Posicione e aperte os parafusos.',
        dica: 'Não aperte demais.'
      },
      {
        ordem: 7,
        titulo: 'Conecte as linhas',
        descricao: 'Reconecte as linhas de freio.',
        dica: 'Aperte com torque correto.'
      },
      {
        ordem: 8,
        titulo: 'Complete o reservatório',
        descricao: 'Adicione fluido de freio novo.',
        dica: 'Use fluido da especificação correta.'
      },
      {
        ordem: 9,
        titulo: 'Sangre o sistema',
        descricao: 'Faça sangria completa do sistema de freios.',
        dica: 'Comece pela roda mais distante.'
      },
      {
        ordem: 10,
        titulo: 'Teste o pedal',
        descricao: 'Bombeie o pedal e verifique se está firme.',
        dica: 'Pedal deve ficar alto e firme.'
      },
      {
        ordem: 11,
        titulo: 'Verifique vazamentos',
        descricao: 'Inspecione todas as conexões.',
        dica: 'Não deve haver vazamentos.'
      },
      {
        ordem: 12,
        titulo: 'Teste em movimento',
        descricao: 'Faça teste em baixa velocidade.',
        dica: 'Freio deve responder normalmente.'
      }
    ]
  }
];

export const DIAGNOSTIC_SYMPTOMS: DiagnosticSymptom[] = [
  {
    id: 's1',
    sintoma: 'Carro não liga',
    categoria: 'eletrica',
    possiveisCausas: [
      'Bateria descarregada ou com defeito',
      'Alternador com problema',
      'Motor de arranque queimado',
      'Fusível queimado',
      'Problema no sistema de ignição'
    ],
    guiasRelacionados: ['3']
  },
  {
    id: 's2',
    sintoma: 'Ruído ao frear',
    categoria: 'freios',
    possiveisCausas: [
      'Pastilhas de freio gastas',
      'Disco de freio empenado',
      'Falta de lubrificação',
      'Pedras entre pastilha e disco'
    ],
    guiasRelacionados: ['2']
  },
  {
    id: 's3',
    sintoma: 'Motor superaquecendo',
    categoria: 'motor',
    possiveisCausas: [
      'Nível baixo de líquido de arrefecimento',
      'Radiador entupido',
      'Bomba d\'água com defeito',
      'Termostato travado',
      'Correia do ventilador frouxa'
    ],
    guiasRelacionados: ['11', '26', '40', '44']
  },
  {
    id: 's4',
    sintoma: 'Consumo alto de combustível',
    categoria: 'motor',
    possiveisCausas: [
      'Filtro de ar sujo',
      'Velas de ignição gastas',
      'Pneus descalibrados',
      'Sensor de oxigênio com defeito',
      'Bicos injetores sujos'
    ],
    guiasRelacionados: ['4', '6', '7', '13', '22', '50']
  },
  {
    id: 's5',
    sintoma: 'Vibração no volante',
    categoria: 'suspensao',
    possiveisCausas: [
      'Rodas desbalanceadas',
      'Pneus desgastados irregularmente',
      'Disco de freio empenado',
      'Suspensão desgastada',
      'Alinhamento incorreto'
    ],
    guiasRelacionados: ['4', '10']
  },
  {
    id: 's6',
    sintoma: 'Luz do painel acesa',
    categoria: 'eletrica',
    possiveisCausas: [
      'Problema detectado pelo sistema',
      'Sensor com defeito',
      'Necessidade de manutenção',
      'Falha no sistema eletrônico'
    ],
    guiasRelacionados: ['22', '33', '35', '37']
  },
  {
    id: 's7',
    sintoma: 'Falhas na aceleração',
    categoria: 'motor',
    possiveisCausas: [
      'Velas de ignição gastas',
      'Bobina de ignição com defeito',
      'Filtro de combustível entupido',
      'Bicos injetores sujos',
      'Sensor MAF sujo'
    ],
    guiasRelacionados: ['7', '9', '13', '37', '46']
  },
  {
    id: 's8',
    sintoma: 'Vazamento de óleo',
    categoria: 'motor',
    possiveisCausas: [
      'Retentor de virabrequim',
      'Junta do cabeçote',
      'Tampa de válvulas',
      'Cárter de óleo',
      'Filtro de óleo mal instalado'
    ],
    guiasRelacionados: ['1', '34', '49']
  },
  {
    id: 's9',
    sintoma: 'Ruídos na suspensão',
    categoria: 'suspensao',
    possiveisCausas: [
      'Amortecedores gastos',
      'Buchas desgastadas',
      'Bieletas com folga',
      'Pivô com defeito',
      'Molas quebradas'
    ],
    guiasRelacionados: ['14', '30', '42']
  },
  {
    id: 's10',
    sintoma: 'Marcha lenta irregular',
    categoria: 'motor',
    possiveisCausas: [
      'Corpo de borboleta sujo',
      'Sensor MAF sujo',
      'Válvula EGR entupida',
      'Velas de ignição gastas',
      'Filtro de ar sujo'
    ],
    guiasRelacionados: ['6', '7', '21', '24', '46']
  }
];
