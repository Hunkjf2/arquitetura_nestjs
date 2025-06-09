import { Test, TestingModule } from '@nestjs/testing';
import { IPrismaListarPerfilRepository } from '../../repository/listar/IPrismaListarPerfilRepository';
import { PaginacaoDTO, PaginacaoResponseDTO } from 'src/dto/global/PaginacaoResponseDTO';
import { ListarPerfilService } from './listarPerfil.service';
import { PerfilListDTO } from 'src/dto/perfil/perfilList.dto';

describe('ListarPerfilService', () => {
  let service: ListarPerfilService; // Declaração do serviço que será testado
  let repository: jest.Mocked<IPrismaListarPerfilRepository>; // Mock do repositório usado pelo serviço

  beforeEach(async () => {
    // Mock do repositório com métodos mockados usando jest.fn()
    const mockRepository: Partial<IPrismaListarPerfilRepository> = {
      listAllPagination: jest.fn(), // Simula o método listAllPagination
      listAll: jest.fn(), // Simula o método listAll
      findOne: jest.fn(), // Simula o método findOne
    };

    // Cria um módulo de teste para configurar as dependências do serviço
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListarPerfilService, // Registra o serviço
        { provide: IPrismaListarPerfilRepository, useValue: mockRepository }, // Substitui o repositório real pelo mock
      ],
    }).compile();

    // Instancia o serviço e o mock do repositório
    service = module.get<ListarPerfilService>(ListarPerfilService);
    repository = module.get(IPrismaListarPerfilRepository) as jest.Mocked<IPrismaListarPerfilRepository>;
  });

  // Testa se o serviço e o repositório foram definidos corretamente
  it('deve ser definido', () => {
    expect(service).toBeDefined(); // Verifica se o serviço foi instanciado
    expect(repository).toBeDefined(); // Verifica se o mock do repositório foi instanciado
  });

  // Testa o método findAllPerfilPaginate com uma lista paginada de perfis
  it('deve retornar perfis paginados com recursos', async () => {
    const mockQuery: PaginacaoDTO = { page: '1', pageSize: '10', search: '' }; // Mock dos parâmetros de paginação
    const mockResponse: PaginacaoResponseDTO = {
      data: [
        {
          id: 1,
          descricao: 'Perfil 1',
          perfilRecurso: [
            {
              recurso: { id: 1, descricao: 'Recurso 1', role: 'admin' },
            },
            {
              recurso: { id: 2, descricao: 'Recurso 2', role: 'user' },
            },
          ],
        },
      ],
      total: 1,
    };
    repository.listAllPagination.mockResolvedValue(mockResponse); // Define o retorno mockado para listAllPagination

    const result = await service.findAllPerfilPaginate(mockQuery); // Chama o método do serviço

    expect(result).toEqual(mockResponse); // Verifica se o retorno é igual ao mock
    expect(repository.listAllPagination).toHaveBeenCalledTimes(1); // Verifica se o método foi chamado uma vez
    expect(repository.listAllPagination).toHaveBeenCalledWith(mockQuery); // Verifica se o método foi chamado com os parâmetros corretos
  });

  // Testa o método findAllPerfil para listar todos os perfis
  it('deve retornar todos os perfis com recursos', async () => {
    const mockResponse: PerfilListDTO[] = [
      {
        id: 1,
        descricao: 'Perfil 1',
        perfilRecurso: [
          { recurso: { id: 1, descricao: 'Recurso 1', role: 'admin' } },
          { recurso: { id: 2, descricao: 'Recurso 2', role: 'user' } },
        ],
      },
      {
        id: 2,
        descricao: 'Perfil 2',
        perfilRecurso: [
          { recurso: { id: 3, descricao: 'Recurso 3', role: 'editor' } },
        ],
      },
    ];
    repository.listAll.mockResolvedValue(mockResponse); // Define o retorno mockado para listAll

    const result = await service.findAllPerfil(); // Chama o método do serviço

    expect(result).toEqual(mockResponse); // Verifica se o retorno é igual ao mock
    expect(repository.listAll).toHaveBeenCalledTimes(1); // Verifica se o método foi chamado uma vez
  });

  // Testa o método findOnePerfil para buscar um perfil pelo ID
  it('deve retornar um perfil com recursos pelo ID', async () => {
    const mockId = 1; // Mock do ID do perfil
    const mockResponse: PerfilListDTO = {
      id: mockId,
      descricao: 'Perfil 1',
      perfilRecurso: [
        { recurso: { id: 1, descricao: 'Recurso 1', role: 'admin' } },
        { recurso: { id: 2, descricao: 'Recurso 2', role: 'user' } },
      ],
    };
    repository.findOne.mockResolvedValue(mockResponse); // Define o retorno mockado para findOne

    const result = await service.findOnePerfil(mockId); // Chama o método do serviço

    expect(result).toEqual(mockResponse); // Verifica se o retorno é igual ao mock
    expect(repository.findOne).toHaveBeenCalledTimes(1); // Verifica se o método foi chamado uma vez
    expect(repository.findOne).toHaveBeenCalledWith(mockId); // Verifica se o método foi chamado com o ID correto
  });

  // Testa o método findOnePerfil para um caso em que o perfil não é encontrado
  it('deve retornar null quando não encontrar um perfil pelo ID', async () => {
    const mockId = 999; // Mock de um ID inexistente
    repository.findOne.mockResolvedValue(null); // Define o retorno mockado para findOne como null

    const result = await service.findOnePerfil(mockId); // Chama o método do serviço

    expect(result).toBeNull(); // Verifica se o retorno é null
    expect(repository.findOne).toHaveBeenCalledTimes(1); // Verifica se o método foi chamado uma vez
    expect(repository.findOne).toHaveBeenCalledWith(mockId); // Verifica se o método foi chamado com o ID correto
  });
});
