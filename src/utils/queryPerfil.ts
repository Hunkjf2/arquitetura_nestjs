export default new class QueryPerfil {
    select() {
        return  {
            id: true,
            descricao: true,
            perfilRecurso: {
              select: {
                recurso: {
                  select: {
                    id: true,
                    descricao: true,
                    role: true,
                  },
                },
              },
            },
        }
    }
}