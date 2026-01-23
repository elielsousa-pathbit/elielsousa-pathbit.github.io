# RCVM 88 - Guia de Componentes

Documentação dos componentes padronizados do Design System da plataforma CrowdInvest.

## Estrutura de Arquivos CSS

```
css/
├── variables.css        # Variáveis globais (cores, espaçamentos, sombras)
├── components.css       # Componentes reutilizáveis
├── style.css           # Estilos base
├── pages.css           # Estilos específicos de páginas
├── responsive.css      # Media queries
├── theme-investidor.css   # Tema azul (Portal Investidor)
├── theme-parceiro.css     # Tema verde (Portal Parceiro)
└── theme-admin.css        # Tema slate (Portal Admin)
```

---

## Temas

O sistema possui 3 temas, aplicados via classe no elemento raiz:

| Tema | Classe | Cor Principal | Uso |
|------|--------|---------------|-----|
| Investidor | `.theme-investidor` | Azul (#1e40af) | Portal do Investidor |
| Parceiro | `.theme-parceiro` | Verde (#047857) | Portal do Parceiro |
| Admin | `.theme-admin` | Slate (#0f172a) | Portal Administrativo |

### Exemplo de uso:
```html
<body class="theme-investidor">
  <!-- Conteúdo do portal -->
</body>
```

---

## Variáveis CSS

### Cores Primárias
```css
--primary: #1e40af;        /* Cor principal */
--primary-dark: #1e3a8a;   /* Versão escura */
--primary-light: #3b82f6;  /* Versão clara */
--primary-gradient: linear-gradient(135deg, #1e40af 0%, #0f172a 100%);
```

### Cores de Status
```css
--success: #059669;
--warning: #d97706;
--danger: #dc2626;
--info: #0284c7;
```

### Cores por Tipo de Oferta
```css
--gradient-equity: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
--gradient-cri: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
--gradient-cra: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
--gradient-cr: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);

--color-equity: #7c3aed;
--color-cri: #0891b2;
--color-cra: #22c55e;
--color-cr: #8b5cf6;
```

### Espaçamentos
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
```

### Border Radius
```css
--radius-sm: 8px;
--radius: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
```

---

## Componentes

### Offer Card

Card de oferta com 4 variações.

#### Variações

| Classe | Descrição | Uso |
|--------|-----------|-----|
| `.offer-card--vertical` | Layout vertical, altura mínima 480px | Portal Investidor (grid 3 colunas) |
| `.offer-card--horizontal` | Layout horizontal (imagem + conteúdo) | Portal Parceiro (oferta ativa) |
| `.offer-card--compact` | Versão compacta | Portal Parceiro (ofertas concluídas) |
| `.offer-card--archived` | Versão para ofertas encerradas | Site público |

#### Estrutura HTML
```html
<div class="offer-card offer-card--vertical">
  <div class="offer-card-header" style="background: var(--gradient-equity);">
    <span class="badge-offer-type badge-offer-type--equity offer-card-type">Equity</span>
    <span class="badge badge-warning offer-card-days">5 dias</span>
    LOGO
  </div>
  <div class="offer-card-body">
    <h3 class="offer-card-title">Nome da Empresa</h3>
    <p class="offer-card-sector"><i class="bi bi-building"></i> Setor</p>
    <p class="offer-card-description">Descrição curta da oferta...</p>

    <div class="offer-card-stats">
      <div class="offer-card-stat">
        <div class="offer-card-stat-value">15%</div>
        <div class="offer-card-stat-label">Taxa</div>
      </div>
      <div class="offer-card-stat">
        <div class="offer-card-stat-value">24 meses</div>
        <div class="offer-card-stat-label">Prazo</div>
      </div>
    </div>

    <div class="offer-card-progress">
      <div class="offer-card-progress-info">
        <span>R$ 500.000</span>
        <span>50%</span>
      </div>
      <div class="offer-card-progress-bar">
        <div class="offer-card-progress-fill" style="width: 50%;"></div>
      </div>
    </div>

    <a href="#" class="offer-card-btn">
      Ver Oferta <i class="bi bi-arrow-right"></i>
    </a>
  </div>
</div>
```

---

### Badges de Tipo de Oferta

```html
<span class="badge-offer-type badge-offer-type--equity">Equity</span>
<span class="badge-offer-type badge-offer-type--cri">CRI</span>
<span class="badge-offer-type badge-offer-type--cra">CRA</span>
<span class="badge-offer-type badge-offer-type--cr">CR</span>
```

---

### Badges de Status

```html
<span class="badge-status badge-status--success">Ativo</span>
<span class="badge-status badge-status--warning">Pendente</span>
<span class="badge-status badge-status--danger">Cancelado</span>
<span class="badge-status badge-status--info">Informação</span>
<span class="badge-status badge-status--pending">Aguardando</span>
<span class="badge-status badge-status--completed">Concluído</span>
```

---

### Modal

Sistema de modal com tamanhos padronizados.

#### Tamanhos
| Classe | Largura Máxima |
|--------|----------------|
| `.modal--sm` | 400px |
| `.modal--md` | 550px |
| `.modal--lg` | 700px |
| `.modal--xl` | 900px |

#### Estrutura HTML
```html
<div class="modal-overlay" onclick="closeModal()">
  <div class="modal modal--md" onclick="event.stopPropagation()">
    <div class="modal-header">
      <h3 class="modal-title">Título do Modal</h3>
      <button class="modal-close" onclick="closeModal()">
        <i class="bi bi-x"></i>
      </button>
    </div>
    <div class="modal-body">
      <!-- Conteúdo -->
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary">Confirmar</button>
    </div>
  </div>
</div>
```

---

### Timeline

Componente de histórico/eventos.

```html
<div class="timeline">
  <div class="timeline-item timeline-item--success">
    <div class="timeline-content">
      <div class="timeline-title">Pagamento confirmado</div>
      <div class="timeline-description">PIX recebido com sucesso</div>
      <div class="timeline-date">Hoje, 14:30</div>
    </div>
  </div>
  <div class="timeline-item timeline-item--info">
    <div class="timeline-content">
      <div class="timeline-title">Reserva realizada</div>
      <div class="timeline-description">Investimento de R$ 5.000</div>
      <div class="timeline-date">Ontem, 10:15</div>
    </div>
  </div>
</div>
```

#### Classes de status
- `.timeline-item--success` - Verde
- `.timeline-item--warning` - Amarelo
- `.timeline-item--info` - Azul
- `.timeline-item--danger` - Vermelho

---

### Profile Switcher

Alternador de perfil (usado no Portal Parceiro).

```html
<div class="profile-switcher">
  <button class="profile-switcher-btn active">
    <i class="bi bi-building"></i> Empresa
  </button>
  <button class="profile-switcher-btn">
    <i class="bi bi-person"></i> Investidor
  </button>
</div>
```

#### Variação para Sidebar
```html
<div class="profile-switcher profile-switcher--sidebar">
  <!-- mesma estrutura -->
</div>
```

---

### Activity Card

Card de atividade recente (usado no Admin).

```html
<div class="activity-card">
  <div class="activity-card-icon activity-card-icon--success">
    <i class="bi bi-check-circle"></i>
  </div>
  <div class="activity-card-content">
    <div class="activity-card-title">Nova oferta aprovada</div>
    <div class="activity-card-description">TechStartup XYZ - Equity</div>
  </div>
  <div class="activity-card-time">Há 5 min</div>
</div>
```

---

### Stat Card / KPI Card

Card de estatísticas.

```html
<div class="stat-card stat-card--success">
  <div class="stat-card-label">Total Captado</div>
  <div class="stat-card-value">R$ 2.5M</div>
  <div class="stat-card-change stat-card-change--positive">
    <i class="bi bi-arrow-up"></i> +12.5%
  </div>
</div>
```

#### Variações de cor
- `.stat-card--success`
- `.stat-card--warning`
- `.stat-card--danger`
- `.stat-card--info`

---

### Empty State

Estado vazio para listas/tabelas.

```html
<div class="empty-state">
  <div class="empty-state-icon">
    <i class="bi bi-inbox"></i>
  </div>
  <h3 class="empty-state-title">Nenhum item encontrado</h3>
  <p class="empty-state-description">
    Não há resultados para sua busca. Tente ajustar os filtros.
  </p>
  <div class="empty-state-action">
    <button class="btn btn-primary">Limpar filtros</button>
  </div>
</div>
```

---

### Loading States

```html
<!-- Spinner -->
<div class="loading-spinner"></div>

<!-- Skeleton -->
<div class="loading-skeleton" style="height: 20px; width: 200px;"></div>
```

---

## Sistema de Ícones

O projeto usa **Bootstrap Icons**. O arquivo `js/icons.js` centraliza as definições.

### Categorias disponíveis:
- `actions` - Ações (save, edit, delete, view, etc.)
- `status` - Status (success, error, warning, info, etc.)
- `navigation` - Navegação (dashboard, offers, wallet, etc.)
- `finance` - Finanças (money, deposit, withdraw, etc.)
- `documents` - Documentos (file, folder, attachment, etc.)
- `communication` - Comunicação (email, chat, phone, etc.)
- `offerTypes` - Tipos de oferta (equity, cri, cra, cr)
- `ui` - Interface (sun, moon, grid, list, etc.)
- `security` - Segurança (shield, lock, key, etc.)
- `social` - Redes sociais

### Uso via JavaScript
```javascript
// Obter classe do ícone
const iconClass = getIcon('actions', 'save'); // 'bi bi-check'

// Obter HTML do ícone
const iconHtml = getIconHtml('status', 'success'); // '<i class="bi bi-check-circle-fill"></i>'
```

### Uso via data attribute
```html
<i data-icon="actions.save"></i>
<!-- Será convertido para: <i class="bi bi-check"></i> -->
```

### Principais ícones de ação
| Ação | Ícone | Classe |
|------|-------|--------|
| Salvar/Confirmar | check | `bi-check` |
| Editar | pencil | `bi-pencil` |
| Excluir | trash | `bi-trash` |
| Visualizar | eye | `bi-eye` |
| Download | download | `bi-download` |
| Cancelar | x-lg | `bi-x-lg` |
| Voltar | arrow-left | `bi-arrow-left` |
| Adicionar | plus-lg | `bi-plus-lg` |

---

## Responsividade

O sistema é **desktop-first** com breakpoints:

| Breakpoint | Largura | Uso |
|------------|---------|-----|
| Desktop | > 1024px | Layout completo |
| Tablet | 768px - 1024px | Sidebar colapsável |
| Mobile | < 768px | Layout empilhado |

---

## Boas Práticas

1. **Use variáveis CSS** - Nunca hardcode cores ou espaçamentos
2. **Use componentes existentes** - Antes de criar, verifique se já existe
3. **Mantenha consistência** - Use as mesmas classes em todos os portais
4. **Siga a nomenclatura BEM** - `.componente`, `.componente-elemento`, `.componente--variacao`
5. **Documente novos componentes** - Atualize este arquivo ao criar novos componentes
