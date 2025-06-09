export default new class QueryUsuario {
    select() {
        return {
            id: true,
            nome: true,
            email: true,
            login: true,
            perfils: {
                select: {
                    id: true,
                    descricao: true,
                },
            },
        }
    }
}