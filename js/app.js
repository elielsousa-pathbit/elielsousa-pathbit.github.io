// RCVM 88 - Investimentos Alternativos Platform - Wireframe Navigation JS

// ============================================
// AUTH SYSTEM - Simulação de autenticação para wireframe
// ============================================
const Auth = {
  SESSION_KEY: 'crowdinvest_session',

  // Simula login - salva sessão
  login: function(userType) {
    const session = {
      isLoggedIn: true,
      userType: userType || 'investidor',
      timestamp: Date.now()
    };
    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
  },

  // Simula logout - limpa sessão
  logout: function() {
    sessionStorage.removeItem(this.SESSION_KEY);
  },

  // Verifica se está logado
  isLoggedIn: function() {
    const session = sessionStorage.getItem(this.SESSION_KEY);
    return session !== null;
  },

  // Retorna tipo de usuário
  getUserType: function() {
    const session = sessionStorage.getItem(this.SESSION_KEY);
    if (session) {
      return JSON.parse(session).userType;
    }
    return null;
  },

  // Verifica acesso e redireciona se não autorizado
  requireAuth: function(requiredType) {
    if (!this.isLoggedIn()) {
      // Determina página de login baseada no tipo requerido
      let loginPage = '../login.html';
      if (requiredType === 'parceiro') {
        loginPage = '../parceiro-login.html';
      } else if (requiredType === 'admin') {
        loginPage = '../admin-login.html';
      }
      window.location.href = loginPage;
      return false;
    }
    return true;
  }
};

// Verifica autenticação no carregamento da página (para páginas protegidas)
function checkAuthOnLoad(requiredType) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      Auth.requireAuth(requiredType);
    });
  } else {
    Auth.requireAuth(requiredType);
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector('.nav');
  const overlay = document.querySelector('.mobile-overlay');

  if (nav) {
    nav.classList.toggle('mobile-open');
    overlay?.classList.toggle('active');
    // Prevent body scroll when menu is open
    if (nav.classList.contains('mobile-open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
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
  document.querySelector('.nav')?.classList.remove('mobile-open');
  document.querySelector('.sidebar')?.classList.remove('open');
  document.querySelector('.mobile-overlay')?.classList.remove('open', 'active');
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

// Profile Switcher (Emissor/Distribuidor/Originador)
function switchProfile(profile, btn) {
  // Update button states
  document.querySelectorAll('.sidebar-profile-switcher .switcher-btn, .profile-switcher .switcher-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Toggle content based on profile
  const emissorContent = document.querySelectorAll('.emissor-content, [data-profile="emissor"]');
  const distribuidorContent = document.querySelectorAll('.distribuidor-content, [data-profile="distribuidor"]');
  const originadorContent = document.querySelectorAll('.originador-content, [data-profile="originador"]');

  // Hide all first
  emissorContent.forEach(el => el.style.display = 'none');
  distribuidorContent.forEach(el => el.style.display = 'none');
  originadorContent.forEach(el => el.style.display = 'none');

  // Show selected profile content
  if (profile === 'emissor') {
    emissorContent.forEach(el => el.style.display = '');
    updateMenuForProfile('emissor');
  } else if (profile === 'distribuidor') {
    distribuidorContent.forEach(el => el.style.display = '');
    updateMenuForProfile('distribuidor');
  } else if (profile === 'originador') {
    originadorContent.forEach(el => el.style.display = '');
    updateMenuForProfile('originador');
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
      // Detecta tipo de área e faz login se navegando para área protegida
      if (redirectUrl.includes('investidor/')) {
        Auth.login('investidor');
      } else if (redirectUrl.includes('parceiro/')) {
        Auth.login('parceiro');
      } else if (redirectUrl.includes('admin/')) {
        Auth.login('admin');
      }
      window.location.href = redirectUrl;
    } else {
      btn.textContent = originalText;
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
// LOADING OVERLAY - Sistema de Loading/Splash
// --------------------------------------------
const LoadingOverlay = {
  element: null,

  create: function() {
    if (this.element) return;

    this.element = document.createElement('div');
    this.element.className = 'loading-overlay';
    this.element.id = 'loadingOverlay';

    // Criar elementos usando DOM API para evitar XSS
    var iconDiv = document.createElement('div');
    iconDiv.className = 'loading-profile-icon';
    iconDiv.id = 'loadingIcon';
    var icon = document.createElement('i');
    icon.className = 'bi bi-arrow-repeat';
    iconDiv.appendChild(icon);

    var spinner = document.createElement('div');
    spinner.className = 'loading-spinner';

    var textDiv = document.createElement('div');
    textDiv.className = 'loading-text';
    textDiv.id = 'loadingText';
    textDiv.textContent = 'Carregando...';

    var subtextDiv = document.createElement('div');
    subtextDiv.className = 'loading-subtext';
    subtextDiv.id = 'loadingSubtext';
    subtextDiv.textContent = 'Aguarde um momento';

    this.element.appendChild(iconDiv);
    this.element.appendChild(spinner);
    this.element.appendChild(textDiv);
    this.element.appendChild(subtextDiv);

    document.body.appendChild(this.element);
  },

  show: function(text, subtext, iconClass, profileType) {
    this.create();
    var textEl = document.getElementById('loadingText');
    var subtextEl = document.getElementById('loadingSubtext');
    var iconEl = document.getElementById('loadingIcon');

    if (textEl) textEl.textContent = text || 'Carregando...';
    if (subtextEl) subtextEl.textContent = subtext || 'Aguarde um momento';

    if (iconEl) {
      iconEl.className = 'loading-profile-icon';
      if (profileType) {
        iconEl.classList.add(profileType);
        var iconInner = iconEl.querySelector('i');
        if (iconInner) {
          // Mapeia o ícone correto para cada perfil
          var profileIcons = {
            emissor: 'bi bi-broadcast',
            distribuidor: 'bi bi-diagram-3',
            originador: 'bi bi-lightning-charge'
          };
          iconInner.className = profileIcons[profileType] || 'bi bi-arrow-repeat';
        }
      }
    }

    this.element.classList.add('active');
  },

  hide: function() {
    if (this.element) {
      this.element.classList.remove('active');
    }
  }
};

// --------------------------------------------
// PARCEIRO - Sistema de Perfil Emissor/Distribuidor/Originador
// --------------------------------------------
const ParceiroProfile = {
  current: null,

  // Configurações de cada perfil
  profiles: {
    emissor: { name: 'Emissor', icon: 'bi-broadcast', color: '#059669' },
    distribuidor: { name: 'Distribuidor', icon: 'bi-diagram-3', color: '#7c3aed' },
    originador: { name: 'Originador', icon: 'bi-lightning-charge', color: '#0891b2' }
  },

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
    var self = this;
    var newProfile = this.selectedProfile;
    var isChanging = newProfile !== this.current;

    // Fecha o modal primeiro
    hideModal('selecionarPerfilModal');

    // Se está trocando de perfil, mostra loading e redireciona para dashboard
    if (isChanging) {
      var profileConfig = this.profiles[newProfile] || this.profiles.emissor;
      LoadingOverlay.show(
        'Alternando para ' + profileConfig.name,
        'Redirecionando para o dashboard...',
        null,
        newProfile
      );

      // Salva o novo perfil
      localStorage.setItem('parceiro_profile', newProfile);

      // Redireciona para o dashboard após o loading
      setTimeout(function() {
        window.location.href = 'dashboard.html';
      }, 1000);
    } else {
      // Não está trocando, apenas fecha o modal
      hideModal('selecionarPerfilModal');
    }
  },

  updateCard: function() {
    var profileConfig = this.profiles[this.current] || this.profiles.emissor;
    var icon = document.getElementById('profileIcon');
    var name = document.getElementById('profileName');
    var tag = document.getElementById('profileTag');

    if (icon) {
      icon.className = 'profile-mode-icon ' + this.current;
      var iconEl = icon.querySelector('i');
      if (iconEl) iconEl.className = 'bi ' + profileConfig.icon;
    }
    if (name) name.textContent = profileConfig.name;
    if (tag) {
      tag.className = 'profile-mode-tag ' + this.current;
      // Clear and rebuild tag content safely
      while (tag.firstChild) tag.removeChild(tag.firstChild);
      var tagIcon = document.createElement('i');
      tagIcon.className = 'bi ' + profileConfig.icon;
      tag.appendChild(tagIcon);
      tag.appendChild(document.createTextNode(' ' + profileConfig.name));
    }
  },

  applyProfile: function(profile) {
    // Hide all profile contents
    document.querySelectorAll('.emissor-content').forEach(function(el) { el.style.display = 'none'; });
    document.querySelectorAll('.distribuidor-content').forEach(function(el) { el.style.display = 'none'; });
    document.querySelectorAll('.originador-content').forEach(function(el) { el.style.display = 'none'; });

    // Show selected profile content
    var contentClass = '.' + profile + '-content';
    document.querySelectorAll(contentClass).forEach(function(el) { el.style.display = ''; });

    // Alterna textos do menu
    document.querySelectorAll('.menu-text-emissor').forEach(function(el) { el.style.display = profile === 'emissor' ? '' : 'none'; });
    document.querySelectorAll('.menu-text-distribuidor').forEach(function(el) { el.style.display = profile === 'distribuidor' ? '' : 'none'; });
    document.querySelectorAll('.menu-text-originador').forEach(function(el) { el.style.display = profile === 'originador' ? '' : 'none'; });

    // Esconde itens especificos quando originador esta ativo
    document.querySelectorAll('.hide-on-originador').forEach(function(el) {
      el.style.display = profile === 'originador' ? 'none' : '';
    });

    // IMPORTANTE: Mantemos sempre o tema verde (theme-parceiro)
    // Apenas o conteúdo e a tag do perfil mudam, não a cor do portal
    document.body.classList.add('theme-parceiro');
    document.body.classList.remove('theme-originador');
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
// SISTEMA DE MODAIS PADRONIZADO
// --------------------------------------------
var Modals = {
  // Configurações de tipos de modal
  types: {
    success: { icon: 'bi bi-check-circle-fill', color: '#16a34a', bg: '#dcfce7' },
    error: { icon: 'bi bi-x-circle-fill', color: '#dc2626', bg: '#fee2e2' },
    warning: { icon: 'bi bi-exclamation-triangle-fill', color: '#d97706', bg: '#fef3c7' },
    info: { icon: 'bi bi-info-circle-fill', color: '#2563eb', bg: '#dbeafe' },
    question: { icon: 'bi bi-question-circle-fill', color: '#7c3aed', bg: '#f3e8ff' },
    pdf: { icon: 'bi bi-file-earmark-pdf-fill', color: '#dc3545', bg: '#fee2e2' },
    excel: { icon: 'bi bi-file-earmark-excel-fill', color: '#217346', bg: '#dcfce7' },
    csv: { icon: 'bi bi-filetype-csv', color: '#6c757d', bg: '#f3f4f6' },
    loading: { icon: 'bi bi-arrow-repeat', color: '#059669', bg: '#dcfce7' }
  },

  // Elemento do modal global
  element: null,

  // Cria o elemento do modal se não existir
  create: function() {
    if (this.element) return;

    var overlay = document.createElement('div');
    overlay.id = 'globalModal';
    overlay.className = 'modal-overlay';
    overlay.style.display = 'none';

    var modal = document.createElement('div');
    modal.className = 'modal text-center';
    modal.style.maxWidth = '420px';

    var content = document.createElement('div');
    content.style.padding = '30px';
    content.id = 'globalModalContent';

    modal.appendChild(content);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    this.element = overlay;
  },

  // Mostra um modal de alerta simples
  alert: function(type, title, message, callback) {
    this.create();
    var config = this.types[type] || this.types.info;
    var content = document.getElementById('globalModalContent');

    // Limpa conteúdo anterior
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }

    // Ícone
    var iconWrapper = document.createElement('div');
    iconWrapper.style.cssText = 'width: 70px; height: 70px; background: ' + config.bg + '; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;';
    var icon = document.createElement('i');
    icon.className = config.icon;
    icon.style.cssText = 'font-size: 2rem; color: ' + config.color + ';';
    iconWrapper.appendChild(icon);
    content.appendChild(iconWrapper);

    // Título
    var titleEl = document.createElement('h3');
    titleEl.style.margin = '0 0 10px';
    titleEl.textContent = title;
    content.appendChild(titleEl);

    // Mensagem
    var msgEl = document.createElement('p');
    msgEl.className = 'text-muted';
    msgEl.style.margin = '0 0 20px';
    msgEl.textContent = message;
    content.appendChild(msgEl);

    // Botão OK
    var btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'OK';
    var self = this;
    btn.onclick = function() {
      self.hide();
      if (callback) callback();
    };
    content.appendChild(btn);

    this.element.style.display = 'flex';
  },

  // Modal de confirmação com Cancel e Confirm
  confirm: function(title, message, onConfirm, onCancel) {
    this.create();
    var config = this.types.question;
    var content = document.getElementById('globalModalContent');

    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }

    // Ícone
    var iconWrapper = document.createElement('div');
    iconWrapper.style.cssText = 'width: 70px; height: 70px; background: ' + config.bg + '; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;';
    var icon = document.createElement('i');
    icon.className = config.icon;
    icon.style.cssText = 'font-size: 2rem; color: ' + config.color + ';';
    iconWrapper.appendChild(icon);
    content.appendChild(iconWrapper);

    // Título
    var titleEl = document.createElement('h3');
    titleEl.style.margin = '0 0 10px';
    titleEl.textContent = title;
    content.appendChild(titleEl);

    // Mensagem
    var msgEl = document.createElement('p');
    msgEl.className = 'text-muted';
    msgEl.style.margin = '0 0 20px';
    msgEl.textContent = message;
    content.appendChild(msgEl);

    // Botões
    var btnWrapper = document.createElement('div');
    btnWrapper.className = 'flex gap-10';
    btnWrapper.style.justifyContent = 'center';

    var btnCancel = document.createElement('button');
    btnCancel.className = 'btn btn-outline';
    btnCancel.textContent = 'Cancelar';
    var self = this;
    btnCancel.onclick = function() {
      self.hide();
      if (onCancel) onCancel();
    };

    var btnConfirm = document.createElement('button');
    btnConfirm.className = 'btn btn-primary';
    btnConfirm.textContent = 'Confirmar';
    btnConfirm.onclick = function() {
      self.hide();
      if (onConfirm) onConfirm();
    };

    btnWrapper.appendChild(btnCancel);
    btnWrapper.appendChild(btnConfirm);
    content.appendChild(btnWrapper);

    this.element.style.display = 'flex';
  },

  // Atalhos para tipos comuns
  success: function(title, message, callback) {
    this.alert('success', title, message, callback);
  },

  error: function(title, message, callback) {
    this.alert('error', title, message, callback);
  },

  warning: function(title, message, callback) {
    this.alert('warning', title, message, callback);
  },

  info: function(title, message, callback) {
    this.alert('info', title, message, callback);
  },

  // Modal de exportação
  export: function(type, filename) {
    var titles = {
      pdf: 'Gerando PDF',
      excel: 'Gerando Excel',
      csv: 'Gerando CSV'
    };
    var messages = {
      pdf: 'Seu relatorio PDF esta sendo preparado para download.',
      excel: 'Seu relatorio Excel (.xlsx) esta sendo preparado para download.',
      csv: 'Seu relatorio CSV esta sendo preparado para download.'
    };
    this.alert(type, titles[type] || 'Exportando', messages[type] || 'Seu arquivo esta sendo preparado.');
  },

  // Modal de visualização
  view: function(docName) {
    this.create();
    var config = { icon: 'bi bi-eye-fill', color: '#2563eb', bg: '#dbeafe' };
    var content = document.getElementById('globalModalContent');

    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }

    // Ícone
    var iconWrapper = document.createElement('div');
    iconWrapper.style.cssText = 'width: 70px; height: 70px; background: ' + config.bg + '; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;';
    var icon = document.createElement('i');
    icon.className = config.icon;
    icon.style.cssText = 'font-size: 2rem; color: ' + config.color + ';';
    iconWrapper.appendChild(icon);
    content.appendChild(iconWrapper);

    // Título
    var titleEl = document.createElement('h3');
    titleEl.style.margin = '0 0 10px';
    titleEl.textContent = 'Carregando Documento';
    content.appendChild(titleEl);

    // Mensagem
    var msgEl = document.createElement('p');
    msgEl.className = 'text-muted';
    msgEl.style.margin = '0 0 20px';
    msgEl.textContent = 'O documento esta sendo carregado para visualizacao.';
    content.appendChild(msgEl);

    // Botão OK
    var btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'OK';
    var self = this;
    btn.onclick = function() {
      self.hide();
    };
    content.appendChild(btn);

    this.element.style.display = 'flex';
  },

  // Modal de loading
  loading: function(message) {
    this.create();
    var content = document.getElementById('globalModalContent');

    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }

    // Spinner
    var spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    spinner.style.cssText = 'margin: 0 auto 20px;';
    content.appendChild(spinner);

    // Mensagem
    var msgEl = document.createElement('p');
    msgEl.className = 'text-muted';
    msgEl.textContent = message || 'Carregando...';
    content.appendChild(msgEl);

    this.element.style.display = 'flex';
  },

  // Esconde o modal
  hide: function() {
    if (this.element) {
      this.element.style.display = 'none';
    }
  },

  // Alias para hide (usado em loading)
  hideLoading: function() {
    this.hide();
  }
};

// Funções de atalho globais para compatibilidade
function modalSuccess(title, message, callback) { Modals.success(title, message, callback); }
function modalError(title, message, callback) { Modals.error(title, message, callback); }
function modalWarning(title, message, callback) { Modals.warning(title, message, callback); }
function modalInfo(title, message, callback) { Modals.info(title, message, callback); }
function modalConfirm(title, message, onConfirm, onCancel) { Modals.confirm(title, message, onConfirm, onCancel); }
function modalExport(type) { Modals.export(type); }
function modalLoading(message) { Modals.loading(message); }
function modalHide() { Modals.hide(); }

// --------------------------------------------
// INICIALIZAÇÃO AUTOMÁTICA
// --------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  // Inicializa o sistema de perfil do parceiro se estiver na área do parceiro ou originador
  var isParceiro = document.body.classList.contains('theme-parceiro');
  var isOriginador = document.body.classList.contains('theme-originador');
  if ((isParceiro || isOriginador) && document.getElementById('profileModeCard')) {
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
