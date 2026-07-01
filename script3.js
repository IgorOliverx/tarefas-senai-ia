// Script 3 — Busca em Tempo Real
// Implemente a funcionalidade descrita no README
// Comportamento esperado:
// - Ao digitar em #input-busca, os cards dentro de #grid-produtos são filtrados em tempo real
// - A busca compara o texto digitado com os atributos data-nome e data-descricao de cada card
// - A comparação deve ser case-insensitive e ignorar acentos (normalize + replace)
// - Cards que não correspondem à busca ficam ocultos (display: none ou classe hidden)
// - Se nenhum card corresponder, o elemento #msg-sem-resultado deve ficar visível
// - Ao limpar o campo, todos os cards voltam a aparecer
