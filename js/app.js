// RCVM 88 - Crowdfunding Platform - Wireframe Navigation JS

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector('.nav');
  const overlay = document.querySelector('.mobile-overlay');
  nav?.classList.toggle('open');
  overlay?.classList.toggle('open');
}

// Sidebar toggle for mobile
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.mobile-overlay');
  const hamburger = document.querySelector('.hamburger-btn');

  sidebar?.classList.toggle('open');
  overlay?.classList.toggle('open');
  hamburger?.classList.toggle('open');

  // Prevent body scroll when menu is open
  if (sidebar?.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

// Close mobile menus
function closeMobileMenus() {
  document.querySelector('.nav')?.classList.remove('open');
  document.querySelector('.sidebar')?.classList.remove('open');
  document.querySelector('.mobile-overlay')?.classList.remove('open');
  document.querySelector('.hamburger-btn')?.classList.remove('open');
  document.body.style.overflow = '';
}

// Close sidebar when clicking on a menu item (mobile)
function setupMobileMenuClose() {
  const menuItems = document.querySelectorAll('.sidebar-menu a');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeMobileMenus();
      }
    });
  });
}

// Toggle switch
function toggleSwitch(el) {
  el.classList.toggle('active');
}

// OTP input handling
function setupOTPInputs() {
  const inputs = document.querySelectorAll('.otp-input');
  inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      if (e.target.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });
}

// Method selection
function selectMethod(el) {
  document.querySelectorAll('.method-option').forEach(opt => opt.classList.remove('selected'));
  el.classList.add('selected');
  el.querySelector('input').checked = true;
}

// Tab switching
function switchTab(el, tabId) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
  el.classList.add('active');
  document.getElementById(tabId).style.display = 'block';
}

// Profile Switcher (Emissor/Distribuidor)
function switchProfile(profile, btn) {
  // Update button states
  document.querySelectorAll('.sidebar-profile-switcher .switcher-btn, .profile-switcher .switcher-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Toggle content based on profile
  const emissorContent = document.querySelectorAll('.emissor-content, [data-profile="emissor"]');
  const distribuidorContent = document.querySelectorAll('.distribuidor-content, [data-profile="distribuidor"]');

  if (profile === 'emissor') {
    emissorContent.forEach(el => el.style.display = '');
    distribuidorContent.forEach(el => el.style.display = 'none');
    // Update menu items for emissor
    updateMenuForProfile('emissor');
  } else {
    emissorContent.forEach(el => el.style.display = 'none');
    distribuidorContent.forEach(el => el.style.display = '');
    // Update menu items for distribuidor
    updateMenuForProfile('distribuidor');
  }

  // Store preference
  localStorage.setItem('parceiro_profile', profile);
}

// Update menu items based on profile
function updateMenuForProfile(profile) {
  const menuItems = document.querySelectorAll('.sidebar-menu li');
  // Example: hide/show specific menu items based on profile
  // This can be customized based on which features are available for each profile
}

// Initialize profile on page load
function initProfile() {
  const savedProfile = localStorage.getItem('parceiro_profile') || 'emissor';
  const activeBtn = document.querySelector(`.sidebar-profile-switcher .switcher-btn[onclick*="${savedProfile}"]`);
  if (activeBtn) {
    switchProfile(savedProfile, activeBtn);
  }
}

// Simulate navigation with loading
function navigateTo(url, delay = 300) {
  document.body.style.opacity = '0.7';
  setTimeout(() => {
    window.location.href = url;
  }, delay);
}

// Format currency
function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

// Format CPF
function formatCPF(input) {
  let value = input.value.replace(/\D/g, '');
  if (value.length > 11) value = value.slice(0, 11);
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  input.value = value;
}

// Format phone
function formatPhone(input) {
  let value = input.value.replace(/\D/g, '');
  if (value.length > 11) value = value.slice(0, 11);
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');
  input.value = value;
}

// Simulate form submission
function submitForm(formId, redirectUrl) {
  const form = document.getElementById(formId);
  if (!form) return;

  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;

  btn.innerHTML = 'Processando...';
  btn.disabled = true;

  setTimeout(() => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }
  }, 1500);

  return false;
}

// Show modal
function showModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

// Hide modal
function hideModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Toggle dropdown
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const isVisible = dropdown.style.display === 'block';

  // Close all dropdowns first
  document.querySelectorAll('.dropdown-menu').forEach(d => d.style.display = 'none');

  // Toggle the clicked dropdown
  dropdown.style.display = isVisible ? 'none' : 'block';
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(d => d.style.display = 'none');
  }
});

// Countdown timer
function startCountdown(elementId, seconds, onComplete) {
  const el = document.getElementById(elementId);
  let remaining = seconds;

  const interval = setInterval(() => {
    remaining--;
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    el.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;

    if (remaining <= 0) {
      clearInterval(interval);
      if (onComplete) onComplete();
    }
  }, 1000);
}

// Simulate PIX copy
function copyPixCode(code) {
  navigator.clipboard?.writeText(code).then(() => {
    // Try to show modal if available, otherwise fallback
    const modal = document.getElementById('codigoCopiadoModal');
    if (modal) {
      showModal('codigoCopiadoModal');
    } else {
      console.log('Codigo PIX copiado: ' + code);
    }
  }).catch(() => {
    console.log('Codigo: ' + code);
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  setupOTPInputs();
  setupMobileMenuClose();

  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.style.display = 'none';
      }
    });
  });

  // Mobile overlay click
  document.querySelector('.mobile-overlay')?.addEventListener('click', closeMobileMenus);

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenus();
      // Also close any open modals
      document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.style.display = 'none';
      });
    }
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMobileMenus();
    }
  });
});

// ============================================
// COMPONENTES REUTILIZÁVEIS - SISTEMA PADRONIZADO
// ============================================

// --------------------------------------------
// PARCEIRO - Sistema de Perfil Emissor/Distribuidor
// --------------------------------------------
const ParceiroProfile = {
  current: null,

  init: function() {
    this.current = localStorage.getItem('parceiro_profile') || 'emissor';
    this.selectedProfile = this.current;
    this.applyProfile(this.current);
    this.updateCard();
  },

  openModal: function() {
    this.selectedProfile = this.current;
    document.querySelectorAll('.profile-option').forEach(function(opt) { opt.classList.remove('active'); });
    var optionEl = document.getElementById('option' + this.current.charAt(0).toUpperCase() + this.current.slice(1));
    if (optionEl) optionEl.classList.add('active');
    showModal('selecionarPerfilModal');
  },

  selectOption: function(profile) {
    this.selectedProfile = profile;
    document.querySelectorAll('.profile-option').forEach(function(opt) { opt.classList.remove('active'); });
    var optionEl = document.getElementById('option' + profile.charAt(0).toUpperCase() + profile.slice(1));
    if (optionEl) optionEl.classList.add('active');
  },

  confirm: function() {
    this.current = this.selectedProfile;
    localStorage.setItem('parceiro_profile', this.current);
    this.updateCard();
    this.applyProfile(this.current);
    hideModal('selecionarPerfilModal');
  },

  updateCard: function() {
    var isEmissor = this.current === 'emissor';
    var icon = document.getElementById('profileIcon');
    var name = document.getElementById('profileName');
    var tag = document.getElementById('profileTag');

    if (icon) {
      icon.className = 'profile-mode-icon ' + this.current;
      var iconEl = icon.querySelector('i');
      if (iconEl) iconEl.className = 'bi bi-' + (isEmissor ? 'broadcast' : 'diagram-3');
    }
    if (name) name.textContent = isEmissor ? 'Emissor' : 'Distribuidor';
    if (tag) {
      tag.className = 'profile-mode-tag ' + this.current;
      tag.textContent = isEmissor ? 'Emissor' : 'Distribuidor';
    }
  },

  applyProfile: function(profile) {
    var isEmissor = profile === 'emissor';

    // Alterna conteúdo específico de cada perfil
    document.querySelectorAll('.emissor-content').forEach(function(el) { el.style.display = isEmissor ? '' : 'none'; });
    document.querySelectorAll('.distribuidor-content').forEach(function(el) { el.style.display = isEmissor ? 'none' : ''; });

    // Alterna textos do menu
    document.querySelectorAll('.menu-text-emissor').forEach(function(el) { el.style.display = isEmissor ? '' : 'none'; });
    document.querySelectorAll('.menu-text-distribuidor').forEach(function(el) { el.style.display = isEmissor ? 'none' : ''; });
  },

  selectedProfile: 'emissor'
};

// Funções de compatibilidade para páginas existentes
function selectProfileOption(profile) {
  ParceiroProfile.selectOption(profile);
}

function confirmarPerfil() {
  ParceiroProfile.confirm();
}

// --------------------------------------------
// PAGINAÇÃO - Componente Padronizado
// --------------------------------------------
function createPagination(currentPage, totalPages, totalItems, itemsPerPage) {
  var startItem = (currentPage - 1) * itemsPerPage + 1;
  var endItem = Math.min(currentPage * itemsPerPage, totalItems);

  var wrapper = document.createElement('div');
  wrapper.className = 'pagination-wrapper';

  var info = document.createElement('span');
  info.className = 'pagination-info';
  info.textContent = 'Mostrando ' + startItem + '-' + endItem + ' de ' + totalItems;

  var nav = document.createElement('nav');
  nav.className = 'pagination';

  // Botão anterior
  var prevBtn = document.createElement('button');
  prevBtn.className = 'page-item' + (currentPage === 1 ? ' disabled' : '');
  prevBtn.disabled = currentPage === 1;
  var prevIcon = document.createElement('i');
  prevIcon.className = 'bi bi-chevron-left';
  prevBtn.appendChild(prevIcon);
  nav.appendChild(prevBtn);

  // Números (máximo 5 visíveis)
  var maxVisible = 5;
  var startPage = Math.max(1, currentPage - 2);
  var endPage = Math.min(totalPages, startPage + maxVisible - 1);

  for (var i = startPage; i <= endPage; i++) {
    var pageBtn = document.createElement('button');
    pageBtn.className = 'page-item' + (i === currentPage ? ' active' : '');
    pageBtn.textContent = i;
    nav.appendChild(pageBtn);
  }

  // Botão próximo
  var nextBtn = document.createElement('button');
  nextBtn.className = 'page-item' + (currentPage === totalPages ? ' disabled' : '');
  nextBtn.disabled = currentPage === totalPages;
  var nextIcon = document.createElement('i');
  nextIcon.className = 'bi bi-chevron-right';
  nextBtn.appendChild(nextIcon);
  nav.appendChild(nextBtn);

  wrapper.appendChild(info);
  wrapper.appendChild(nav);

  return wrapper;
}

// --------------------------------------------
// MODAL DE CONFIRMAÇÃO - Reutilizável
// --------------------------------------------
function showConfirmModal(icon, iconColor, title, message) {
  var modal = document.getElementById('confirmModalGlobal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'confirmModalGlobal';
    modal.className = 'modal-overlay';
    modal.style.display = 'none';

    var modalContent = document.createElement('div');
    modalContent.className = 'modal text-center';
    modalContent.style.maxWidth = '400px';

    var innerDiv = document.createElement('div');
    innerDiv.style.padding = '30px';

    var iconEl = document.createElement('i');
    iconEl.id = 'confirmModalIcon';
    iconEl.style.fontSize = '3rem';
    innerDiv.appendChild(iconEl);

    var titleEl = document.createElement('h3');
    titleEl.id = 'confirmModalTitle';
    titleEl.style.margin = '15px 0';
    innerDiv.appendChild(titleEl);

    var msgEl = document.createElement('p');
    msgEl.id = 'confirmModalMessage';
    msgEl.className = 'text-muted';
    innerDiv.appendChild(msgEl);

    var btn = document.createElement('button');
    btn.className = 'btn btn-primary mt-20';
    btn.textContent = 'OK';
    btn.onclick = function() { modal.style.display = 'none'; };
    innerDiv.appendChild(btn);

    modalContent.appendChild(innerDiv);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  }

  document.getElementById('confirmModalIcon').className = icon;
  document.getElementById('confirmModalIcon').style.color = iconColor;
  document.getElementById('confirmModalTitle').textContent = title;
  document.getElementById('confirmModalMessage').textContent = message;
  modal.style.display = 'flex';
}

// --------------------------------------------
// INICIALIZAÇÃO AUTOMÁTICA
// --------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  // Inicializa o sistema de perfil do parceiro se estiver na área do parceiro
  if (document.body.classList.contains('theme-parceiro') && document.getElementById('profileModeCard')) {
    ParceiroProfile.init();
  }
});

// Fake data for wireframes
const FAKE_DATA = {
  user: {
    name: 'Joao Silva',
    email: 'joao.silva@email.com',
    cpf: '123.456.789-00',
    phone: '(11) 99999-8888',
    investedTotal: 15000,
    availableLimit: 5000
  },
  offers: [
    {
      id: 1,
      name: 'TechStart Inovacao',
      company: 'TechStart LTDA',
      sector: 'Tecnologia',
      target: 500000,
      raised: 375000,
      investors: 127,
      minInvestment: 1000,
      daysLeft: 23,
      equity: 15
    },
    {
      id: 2,
      name: 'EcoFood Organicos',
      company: 'EcoFood SA',
      sector: 'Alimentacao',
      target: 300000,
      raised: 180000,
      investors: 89,
      minInvestment: 500,
      daysLeft: 45,
      equity: 10
    },
    {
      id: 3,
      name: 'HealthTech Solutions',
      company: 'HealthTech LTDA',
      sector: 'Saude',
      target: 750000,
      raised: 562500,
      investors: 203,
      minInvestment: 2000,
      daysLeft: 12,
      equity: 20
    }
  ],
  investments: [
    {
      id: 1,
      offer: 'TechStart Inovacao',
      date: '15/01/2026',
      amount: 5000,
      status: 'Confirmado',
      equity: 1.5
    },
    {
      id: 2,
      offer: 'EcoFood Organicos',
      date: '10/01/2026',
      amount: 3000,
      status: 'Em desistencia',
      equity: 1.0,
      withdrawUntil: '15/01/2026'
    },
    {
      id: 3,
      offer: 'HealthTech Solutions',
      date: '05/01/2026',
      amount: 7000,
      status: 'Confirmado',
      equity: 1.87
    }
  ]
};
