/**
 * ==============================================
 * RCVM 88 - ICON SYSTEM
 * Padrão de ícones para toda a plataforma
 * Biblioteca: Bootstrap Icons (bi-)
 * ==============================================
 */

const ICONS = {
  // ==============================================
  // AÇÕES PRINCIPAIS
  // ==============================================
  actions: {
    save: 'bi-check',               // Salvar/Confirmar
    edit: 'bi-pencil',              // Editar
    delete: 'bi-trash',             // Excluir
    view: 'bi-eye',                 // Visualizar
    hide: 'bi-eye-slash',           // Ocultar
    download: 'bi-download',        // Download
    upload: 'bi-upload',            // Upload
    share: 'bi-share',              // Compartilhar
    copy: 'bi-clipboard',           // Copiar
    print: 'bi-printer',            // Imprimir
    refresh: 'bi-arrow-clockwise',  // Atualizar
    cancel: 'bi-x-lg',              // Cancelar
    close: 'bi-x',                  // Fechar
    back: 'bi-arrow-left',          // Voltar
    forward: 'bi-arrow-right',      // Avançar
    search: 'bi-search',            // Buscar
    filter: 'bi-funnel',            // Filtrar
    sort: 'bi-sort-down',           // Ordenar
    add: 'bi-plus-lg',              // Adicionar
    remove: 'bi-dash-lg',           // Remover
    expand: 'bi-chevron-down',      // Expandir
    collapse: 'bi-chevron-up',      // Recolher
    menu: 'bi-list',                // Menu hamburger
    more: 'bi-three-dots-vertical', // Mais opções
  },

  // ==============================================
  // STATUS E FEEDBACK
  // ==============================================
  status: {
    success: 'bi-check-circle-fill',          // Sucesso
    successOutline: 'bi-check-circle',        // Sucesso (outline)
    error: 'bi-x-circle-fill',                // Erro
    errorOutline: 'bi-x-circle',              // Erro (outline)
    warning: 'bi-exclamation-triangle-fill',  // Aviso
    warningOutline: 'bi-exclamation-triangle',// Aviso (outline)
    info: 'bi-info-circle-fill',              // Informação
    infoOutline: 'bi-info-circle',            // Informação (outline)
    pending: 'bi-clock',                      // Pendente
    loading: 'bi-arrow-repeat',               // Carregando
    verified: 'bi-patch-check-fill',          // Verificado
    locked: 'bi-lock-fill',                   // Bloqueado
    unlocked: 'bi-unlock-fill',               // Desbloqueado
  },

  // ==============================================
  // NAVEGAÇÃO (SIDEBAR/MENU)
  // ==============================================
  navigation: {
    dashboard: 'bi-speedometer2',     // Dashboard
    offers: 'bi-megaphone',           // Ofertas
    orders: 'bi-clock-history',       // Ordens/Pedidos
    wallet: 'bi-wallet2',             // Carteira
    documents: 'bi-folder',           // Documentos
    reports: 'bi-bar-chart',          // Relatórios
    settings: 'bi-gear',              // Configurações
    profile: 'bi-person-circle',      // Perfil
    logout: 'bi-box-arrow-left',      // Sair
    notifications: 'bi-bell',         // Notificações
    help: 'bi-question-circle',       // Ajuda
    home: 'bi-house',                 // Home
    users: 'bi-people',               // Usuários
    companies: 'bi-building',         // Empresas
    analytics: 'bi-graph-up',         // Analytics
    calendar: 'bi-calendar3',         // Calendário
  },

  // ==============================================
  // FINANÇAS E INVESTIMENTOS
  // ==============================================
  finance: {
    money: 'bi-currency-dollar',      // Dinheiro
    deposit: 'bi-box-arrow-in-down',  // Depósito
    withdraw: 'bi-box-arrow-up',      // Saque
    transfer: 'bi-arrow-left-right',  // Transferência
    investment: 'bi-graph-up-arrow',  // Investimento
    dividend: 'bi-coin',              // Dividendo
    chart: 'bi-bar-chart-line',       // Gráfico
    growth: 'bi-arrow-up-right',      // Crescimento
    decline: 'bi-arrow-down-right',   // Queda
    percent: 'bi-percent',            // Porcentagem
    calculator: 'bi-calculator',      // Calculadora
    receipt: 'bi-receipt',            // Recibo
    bank: 'bi-bank',                  // Banco
    creditCard: 'bi-credit-card',     // Cartão
    pix: 'bi-qr-code',                // PIX
  },

  // ==============================================
  // DOCUMENTOS E ARQUIVOS
  // ==============================================
  documents: {
    file: 'bi-file-text',             // Arquivo
    filePdf: 'bi-file-earmark-pdf',   // PDF
    fileImage: 'bi-file-earmark-image',// Imagem
    fileExcel: 'bi-file-earmark-excel',// Excel
    folder: 'bi-folder',              // Pasta
    folderOpen: 'bi-folder2-open',    // Pasta aberta
    attachment: 'bi-paperclip',       // Anexo
    contract: 'bi-file-earmark-text', // Contrato
    certificate: 'bi-award',          // Certificado
    signature: 'bi-pen',              // Assinatura
  },

  // ==============================================
  // COMUNICAÇÃO
  // ==============================================
  communication: {
    email: 'bi-envelope',             // Email
    phone: 'bi-telephone',            // Telefone
    chat: 'bi-chat-dots',             // Chat
    message: 'bi-chat-left-text',     // Mensagem
    send: 'bi-send',                  // Enviar
    support: 'bi-headset',            // Suporte
    whatsapp: 'bi-whatsapp',          // WhatsApp
  },

  // ==============================================
  // TIPOS DE OFERTA
  // ==============================================
  offerTypes: {
    equity: 'bi-building',            // Equity
    cri: 'bi-houses',                 // CRI
    cra: 'bi-tree',                   // CRA
    cr: 'bi-bank2',                   // CR
    debenture: 'bi-file-earmark-bar-graph', // Debênture
  },

  // ==============================================
  // INTERFACE/UI
  // ==============================================
  ui: {
    sun: 'bi-sun',                    // Modo claro
    moon: 'bi-moon',                  // Modo escuro
    grid: 'bi-grid',                  // Visualização grid
    list: 'bi-list-ul',               // Visualização lista
    table: 'bi-table',                // Tabela
    fullscreen: 'bi-fullscreen',      // Tela cheia
    exitFullscreen: 'bi-fullscreen-exit', // Sair tela cheia
    zoomIn: 'bi-zoom-in',             // Zoom in
    zoomOut: 'bi-zoom-out',           // Zoom out
    link: 'bi-link-45deg',            // Link
    externalLink: 'bi-box-arrow-up-right', // Link externo
    drag: 'bi-grip-vertical',         // Arrastar
  },

  // ==============================================
  // SEGURANÇA
  // ==============================================
  security: {
    shield: 'bi-shield-check',        // Segurança
    key: 'bi-key',                    // Chave
    lock: 'bi-lock',                  // Cadeado
    unlock: 'bi-unlock',              // Desbloqueado
    fingerprint: 'bi-fingerprint',    // Biometria
    twoFactor: 'bi-phone',            // 2FA
    password: 'bi-asterisk',          // Senha
  },

  // ==============================================
  // SOCIAL
  // ==============================================
  social: {
    instagram: 'bi-instagram',
    linkedin: 'bi-linkedin',
    facebook: 'bi-facebook',
    twitter: 'bi-twitter-x',
    youtube: 'bi-youtube',
  },
};

/**
 * Retorna a classe CSS do ícone
 * @param {string} category - Categoria do ícone (ex: 'actions', 'status')
 * @param {string} name - Nome do ícone (ex: 'save', 'success')
 * @returns {string} Classe CSS completa (ex: 'bi bi-check')
 */
function getIcon(category, name) {
  if (ICONS[category] && ICONS[category][name]) {
    return `bi ${ICONS[category][name]}`;
  }
  console.warn(`Icon not found: ${category}.${name}`);
  return 'bi bi-question-circle';
}

/**
 * Retorna o elemento HTML do ícone
 * @param {string} category - Categoria do ícone
 * @param {string} name - Nome do ícone
 * @param {string} [extraClass] - Classes CSS adicionais
 * @returns {string} HTML do elemento <i>
 */
function getIconHtml(category, name, extraClass = '') {
  const iconClass = getIcon(category, name);
  return `<i class="${iconClass} ${extraClass}"></i>`;
}

/**
 * Aplica ícone padrão a elementos com data-icon
 * Uso: <i data-icon="actions.save"></i>
 */
function applyDataIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const [category, name] = el.dataset.icon.split('.');
    const iconClass = getIcon(category, name);
    el.className = iconClass + (el.className ? ' ' + el.className : '');
  });
}

// Exporta para uso global
if (typeof window !== 'undefined') {
  window.ICONS = ICONS;
  window.getIcon = getIcon;
  window.getIconHtml = getIconHtml;
  window.applyDataIcons = applyDataIcons;
}

// Aplica ícones automaticamente quando DOM carrega
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', applyDataIcons);
}
