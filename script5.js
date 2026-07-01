// Script 5 — Consulta de CEP
// Implemente a funcionalidade descrita no README
// Comportamento esperado:
// - Enquanto o usuário digita em #input-cep, o valor é formatado automaticamente como 00000-000
// - Clicar em #btn-buscar ou pressionar Enter dispara a consulta à API ViaCEP
// - Antes de chamar a API, valide se o CEP tem exatamente 8 dígitos numéricos
// - Durante a requisição, #resultado-cep exibe "Carregando..."
// - Se encontrado, exibe logradouro, bairro, cidade e UF dentro de #resultado-cep
// - Se o CEP não existir ou a requisição falhar, exibe uma mensagem de erro clara em #resultado-cep
// - API utilizada: https://viacep.com.br/ws/{cep}/json/
