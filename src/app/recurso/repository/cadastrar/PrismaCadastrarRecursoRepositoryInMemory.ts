import { RecursoDTO } from 'src/dto/recursos/recurso.dto';
import { IPrismaCadastrarRecursoRepository } from './IPrismaCadastrarRecursoRepository';

export class PrismaCadastrarRecursoRepository implements IPrismaCadastrarRecursoRepository {

    recursos:any[] = [];

    async create(data: RecursoDTO): Promise<any> { 
        this.recursos.push(data)
        return data 
    }

}