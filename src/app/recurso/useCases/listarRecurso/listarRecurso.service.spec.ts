import { Test, TestingModule } from '@nestjs/testing';
import { IPrismaListarRecursoRepository } from '../../repository/listar/IPrismaListarRecursoRepository';
import { RecursoDTO } from '../../../../dto/recursos/recurso.dto';
import { ListarRecursoService } from './listarRecurso.service';

describe('ListarRecursoService', () => {
  // Instância do serviço que será testado
  let service: ListarRecursoService;

  // Mock do repositório que simula as dependências do serviço
  let repository: jest.Mocked<IPrismaListarRecursoRepository>;

  // Configuração inicial dos testes
  beforeEach(async () => {
    // Criação de um mock do repositório, substituindo o método `listAll` por uma função mockada
    const mockRepository: Partial<IPrismaListarRecursoRepository> = {
      listAll: jest.fn(),
    };

    // Criação de um módulo de teste usando `TestingModule` do NestJS
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListarRecursoService, // Registra o serviço no módulo
        { provide: IPrismaListarRecursoRepository, useValue: mockRepository }, // Substitui o repositório real pelo mock
      ],
    }).compile();

    // Obtenção das instâncias configuradas para o teste
    service = module.get<ListarRecursoService>(ListarRecursoService);
    repository = module.get(IPrismaListarRecursoRepository) as jest.Mocked<IPrismaListarRecursoRepository>;
  });

  // Teste para verificar se o serviço e o repositório foram definidos corretamente
  it('deve ser definido', () => {
    expect(service).toBeDefined(); // Verifica se o serviço foi instanciado
    expect(repository).toBeDefined(); // Verifica se o mock do repositório foi configurado
  });

  // Teste para verificar se o serviço retorna uma lista de recursos
  it('deve retornar uma lista de recursos', async () => {
    // Mock de dados retornados pelo repositório
    const mockRecursoList: RecursoDTO[] = [
      { id: 1 },
      { id: 2 },
    ];

    // Define o comportamento do mock para o método `listAll`
    repository.listAll.mockResolvedValue(mockRecursoList);

    // Chamada do método do serviço
    const result = await service.findAllRecurso();

    // Verificações do teste
    expect(result).toEqual(mockRecursoList); // Verifica se o retorno do serviço é igual ao mock
    expect(repository.listAll).toHaveBeenCalledTimes(1); // Verifica se o método `listAll` foi chamado uma vez
  });

  // Teste para verificar o comportamento do serviço quando não há recursos
  it('deve retornar uma lista vazia se não houver recursos', async () => {
    // Define o comportamento do mock para retornar uma lista vazia
    repository.listAll.mockResolvedValue([]);

    // Chamada do método do serviço
    const result = await service.findAllRecurso();

    // Verificações do teste
    expect(result).toEqual([]); // Verifica se o serviço retorna uma lista vazia
    expect(repository.listAll).toHaveBeenCalledTimes(1); // Verifica se o método `listAll` foi chamado uma vez
  });
});
