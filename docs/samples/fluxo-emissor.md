# Fluxo de Onboarding de Emissor - Referência 

Mapeamento completo do fluxo de cadastro de operação da plataforma .

---

## Estrutura do Wizard

O fluxo é um wizard de múltiplas etapas com:
- Barra de progresso visual
- Botões "Voltar" e "Continuar" em cada etapa
- Validação em tempo real dos campos
- Análise automatizada por IA no final

---

## Etapas do Fluxo

### Etapa 1: Seleção de Setor
**Título**: "Qual o Setor?"

**Campos**:
- Radio buttons com opções:
  - Agronegócio
  - Infraestrutura
  - Imobiliário
  - Ativos Judiciais
  - Outros

---

### Etapa 2: Seleção de Segmento
**Título**: "Qual o segmento?"

**Campos**: Radio buttons (variam conforme o setor selecionado)

Para Agronegócio:
- Agricultura
- Pecuária
- Floresta

---

### Etapa 3: Detalhes do Negócio
**Título**: "Legal! Me conta."

**Campos**:
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Quantas fazendas fazem parte do negócio? | Radio (1-5 ou Acima de 5) | Sim |
| Qual a atividade da fazenda? | Checkboxes múltiplos | Sim |

Opções de atividade: Milho, Algodão, Cana de açúcar, Fruticultura, Soja, Trigo, Café

---

### Etapa 4: Localização
**Título**: "Certo! E onde fica a fazenda?"

**Campos**:
| Campo | Tipo | Obrigatório | Validação |
|-------|------|-------------|-----------|
| CEP | Input mascarado | Sim | Auto-preenche cidade/estado |

**Recursos visuais**: Mapa interativo do Brasil com estados

---

### Etapa 5: Dados da Fazenda
**Título**: "Maravilha! me conta sobre a fazenda."

**Campos**:
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Qual a área total da fazenda? | Número (hectares) | Sim |
| Qual o total de área cultivada? | Número (hectares) | Sim |
| Quantos % do terreno é próprio? | Percentual | Sim |
| Quantos % do terreno é arrendado? | Percentual | Sim |

---

### Etapa 6: Dados de Produção
**Título**: "Legal! Me conta um pouco sobre a produção."

**Campos**:
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Qual o total de sacas produzidas anualmente? | Número | Sim |
| Qual o preço de venda da saca? | Moeda (R$) | Sim |
| Qual o custo da produção? | Moeda (R$) | Sim |

---

### Etapa 7: Dados da Operação
**Título**: "Excelente! Agora vamos falar da Operação que você quer fazer com a gente"

**Campos**:
| Campo | Tipo | Obrigatório | Observação |
|-------|------|-------------|------------|
| Quanto quer captar? | Moeda (R$) | Sim | Mínimo varia por setor |

---

### Etapa 8: Utilização dos Recursos
**Título**: "Ainda sobre a operação."

**Campos**:
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Qual a utilização dos recursos? | Textarea | Sim |

---

### Etapa 9: Informações Adicionais
**Título**: "Legal, tem mais algum detalhe?"

**Campos**:
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Informações adicionais sobre a operação | Textarea | Não |

---

### Etapa 10: Dados da Empresa/Responsável
**Título**: "Excelente! Quem está por trás do projeto?"

**Campos**:
| Campo | Tipo | Obrigatório | Validação |
|-------|------|-------------|-----------|
| CNPJ que representa a Fazenda | Input mascarado | Não | Validação de dígitos |
| Razão Social da Empresa | Texto | Não | - |
| Nome do responsável pelo empreendimento | Texto | Sim | - |
| CPF do responsável pelo empreendimento | Input mascarado | Sim | Validação de dígitos |
| CNPJ da SPE | Input mascarado | Não | Apenas se houver SPE |

---

### Etapa 11: Demonstrações Contábeis
**Título**: "Entramos na fase de detalhamento, vamos começar?!"

**Campos**:
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Possui demonstrações contábeis auditadas? | Radio (Sim/Não) | Sim |

---

### Etapa 12: Dados Financeiros
**Título**: "Agora vamos falar sobre as finanças da empresa responsável pelo empreendimento."

**Campos** (todos com tooltips explicativos):
| Campo | Tipo | Obrigatório | Tooltip |
|-------|------|-------------|---------|
| Receita do último ano | Moeda (R$) | Sim | Total da entrada monetária no último exercício |
| Dívida Financeira | Moeda (R$) | Sim | Montante para quitar todas as dívidas |
| Lucro operacional (Ebit) | Moeda (R$) | Sim | Lucro antes de Juros e IR |
| Patrimônio Líquido | Moeda (R$) | Sim | Diferença entre ativo e passivo |
| Lucro Líquido | Moeda (R$) | Sim | Rendimento real da empresa |
| Ativo total | Moeda (R$) | Sim | Soma de todos os ativos |

---

### Etapa Final: Análise Automatizada
**Tela de processamento**:
- Mensagem: "Nosso algoritmo de análise de negócios está analisando as informações inseridas"
- Progress bar animado
- Texto: "Analisando Dados do empreendimento..."

**Resultado**:
- **Aprovado**: Segue para próximos passos de documentação
- **Reprovado**: Exibe motivo e opção de "Submeter outra operação"

---

## Critérios de Aprovação
- Valor mínimo de captação varia por setor (ex: R$ 1.000.000,00 para Agronegócio)
- Análise automatizada de viabilidade financeira

---

## Aplicação para CrowdInvest

Para adaptar este fluxo:

1. **Simplificar para nosso caso de uso**:
   - Focar em setores relevantes para RCVM 88
   - Adaptar campos conforme tipo de título (Equity, CRI, CRA, CR)

2. **Manter estrutura de wizard**:
   - Etapas progressivas com validação
   - Barra de progresso visual
   - Feedback em tempo real

3. **Dados obrigatórios para pré-cadastro**:
   - Dados do emissor (CNPJ, Razão Social)
   - Responsável legal (Nome, CPF)
   - Valor pretendido de captação
   - Utilização dos recursos
   - Dados financeiros básicos

4. **Diferenciais a implementar**:
   - Integração com consulta de CNPJ (Receita Federal)
   - Upload de documentos na própria jornada
   - Termos de aceite regulatórios (RCVM 88)
