// Menu Snippets - CrowdInvest
// Este arquivo gera os menus dinamicamente para evitar duplicacao

// Menu do Investidor
function renderInvestorMenu(activePage) {
  const menuItems = [
    { href: 'dashboard.html', icon: 'bi-speedometer2', label: 'Dashboard' },
    { href: 'ofertas.html', icon: 'bi-megaphone', label: 'Ofertas' },
    { href: 'meus-investimentos.html', icon: 'bi-wallet2', label: 'Meus Investimentos' },
    { href: 'carteira.html', icon: 'bi-cash-stack', label: 'Minha Carteira' },
    { href: 'extrato.html', icon: 'bi-list-ul', label: 'Extrato' },
    { href: 'documentos.html', icon: 'bi-folder', label: 'Documentos' },
    { href: 'configuracoes.html', icon: 'bi-gear', label: 'Configuracoes' },
    { href: '../login.html', icon: 'bi-box-arrow-left', label: 'Sair' }
  ];

  return generateMenu(menuItems, activePage, 'investidor');
}

// Menu do Parceiro
function renderPartnerMenu(activePage) {
  const menuItems = [
    { href: 'dashboard.html', icon: 'bi-speedometer2', label: 'Dashboard' },
    { href: 'minhas-ofertas.html', icon: 'bi-megaphone', label: 'Minhas Ofertas' },
    { href: 'clientes.html', icon: 'bi-people', label: 'Clientes' },
    { href: 'documentos.html', icon: 'bi-folder', label: 'Documentos' },
    { href: 'relatorios.html', icon: 'bi-bar-chart', label: 'Relatorios' },
    { href: 'configuracoes.html', icon: 'bi-gear', label: 'Configuracoes' },
    { href: '../parceiro-login.html', icon: 'bi-box-arrow-left', label: 'Sair' }
  ];

  return generateMenu(menuItems, activePage, 'parceiro');
}

// Menu do Admin
function renderAdminMenu(activePage) {
  const menuItems = [
    { href: 'dashboard.html', icon: 'bi-speedometer2', label: 'Dashboard' },
    { href: 'ofertas.html', icon: 'bi-megaphone', label: 'Ofertas' },
    { href: 'clientes.html', icon: 'bi-people', label: 'Clientes' },
    { href: 'kyc-fila.html', icon: 'bi-person-check', label: 'Validacao Cadastro' },
    { href: 'parceiros.html', icon: 'bi-building', label: 'Parceiros' },
    { href: 'relatorios.html', icon: 'bi-bar-chart', label: 'Relatorios' },
    { href: 'configuracoes.html', icon: 'bi-gear', label: 'Configuracoes' },
    { href: '../admin-login.html', icon: 'bi-box-arrow-left', label: 'Sair' }
  ];

  return generateMenu(menuItems, activePage, 'admin');
}

// Funcao generica para gerar menu HTML
function generateMenu(items, activePage, portal) {
  let html = '<ul class="sidebar-menu">';

  items.forEach(item => {
    const isActive = item.href === activePage ||
                     (activePage && item.href.includes(activePage.split('.')[0]));
    const activeClass = isActive ? ' class="active"' : '';

    html += `<li><a href="${item.href}"${activeClass}><i class="bi ${item.icon}"></i> ${item.label}</a></li>`;
  });

  html += '</ul>';
  return html;
}

// Funcao para renderizar sidebar completa
function renderSidebar(portal, activePage) {
  let sidebarClass = 'sidebar';
  let logoStyle = '';
  let badgeHtml = '';

  if (portal === 'parceiro') {
    sidebarClass = 'sidebar sidebar-green';
    logoStyle = ' style="color: white;"';
    badgeHtml = '<span class="badge" style="background: white; color: #059669; margin-left: 10px;">Parceiro</span>';
  } else if (portal === 'admin') {
    sidebarClass = 'sidebar sidebar-dark';
    logoStyle = ' style="color: white;"';
    badgeHtml = '<span class="badge badge-warning" style="margin-left: 10px;">Admin</span>';
  }

  let menuHtml = '';
  switch(portal) {
    case 'investidor':
      menuHtml = renderInvestorMenu(activePage);
      break;
    case 'parceiro':
      menuHtml = renderPartnerMenu(activePage);
      break;
    case 'admin':
      menuHtml = renderAdminMenu(activePage);
      break;
  }

  return `
    <aside class="${sidebarClass}">
      <div class="sidebar-logo">
        <a href="../../index.html" class="logo"${logoStyle}>CrowdInvest</a>
        ${badgeHtml}
      </div>
      ${menuHtml}
    </aside>
    <div class="mobile-overlay" onclick="closeMobileMenus()"></div>
  `;
}

// Auto-inicializacao
document.addEventListener('DOMContentLoaded', () => {
  const sidebarContainer = document.getElementById('sidebar-container');
  if (sidebarContainer) {
    const portal = sidebarContainer.dataset.portal;
    const activePage = sidebarContainer.dataset.active;
    sidebarContainer.innerHTML = renderSidebar(portal, activePage);
  }
});
