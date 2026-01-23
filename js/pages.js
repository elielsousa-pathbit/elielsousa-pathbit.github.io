/* ================================================
   CrowdInvest - PAGES JavaScript
   Scripts especificos de paginas
   Migrados de tags <script> inline
================================================ */

// ============================================
// HEADER SCROLL EFFECT
// Usado em: como-funciona.html, taxas-custos.html, index.html
// ============================================
function initHeaderScrollEffect() {
  var header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ============================================
// DEPOSITO PAGE FUNCTIONS
// pages/investidor/deposito.html
// ============================================
function setValor(value) {
  var input = document.getElementById('valorDeposito');
  if (input) {
    input.value = formatMoneyValue(value);
    updateDepositoResumo(value);
  }
}

function formatMoneyValue(value) {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

function updateDepositoResumo(value) {
  var saldoAtual = 2350;
  var novoSaldo = saldoAtual + value;

  var novoSaldoEl = document.querySelector('.resumo-novo-saldo');
  if (novoSaldoEl) {
    novoSaldoEl.textContent = 'R$ ' + formatMoneyValue(novoSaldo);
  }
}

function selectMethod(el, method) {
  document.querySelectorAll('.method-option').forEach(function(opt) {
    opt.classList.remove('selected');
  });
  el.classList.add('selected');

  var radio = el.querySelector('input[type="radio"]');
  if (radio) radio.checked = true;

  var btn = document.querySelector('#depositoForm .btn-primary');
  if (btn) {
    var icons = {
      pix: 'bi-qr-code',
      ted: 'bi-bank',
      boleto: 'bi-upc-scan'
    };
    var texts = {
      pix: 'Gerar PIX',
      ted: 'Ver Dados Bancarios',
      boleto: 'Gerar Boleto'
    };
    // Clear and rebuild button content safely
    while (btn.firstChild) {
      btn.removeChild(btn.firstChild);
    }
    var icon = document.createElement('i');
    icon.className = 'bi ' + icons[method];
    btn.appendChild(icon);
    btn.appendChild(document.createTextNode(' ' + texts[method]));
  }
}

function gerarDeposito() {
  var metodo = document.querySelector('input[name="metodo"]:checked');
  if (metodo && metodo.value === 'pix') {
    window.location.href = 'deposito-pix.html';
  } else {
    Modals.info('Em Breve', 'Este metodo de pagamento estara disponivel em breve.');
  }
}

// ============================================
// MODERACAO TAB SWITCHING
// pages/admin/moderacao.html
// ============================================
function switchModeracaoTab(tabId, btn) {
  document.querySelectorAll('.moderacao-tab').forEach(function(tab) {
    tab.classList.remove('active');
  });
  btn.classList.add('active');

  document.querySelectorAll('.moderacao-content').forEach(function(content) {
    content.style.display = 'none';
  });

  var targetContent = document.getElementById('content-' + tabId);
  if (targetContent) {
    targetContent.style.display = 'block';
  }
}

// ============================================
// RELATORIO FUNCTIONS
// pages/parceiro/relatorio-*.html
// ============================================
function filtrarRelatorio() {
  Modals.loading('Aplicando filtros...');
  setTimeout(function() {
    Modals.hide();
    Modals.success('Filtros Aplicados', 'Os dados foram atualizados com sucesso.');
  }, 800);
}

function exportarRelatorio(tipo) {
  Modals.export(tipo);
  setTimeout(function() {
    Modals.hide();
  }, 2000);
}

// ============================================
// COMUNICADOS FUNCTIONS
// pages/parceiro/comunicados.html
// ============================================
function editarComunicado(id) {
  Modals.info('Editar Comunicado', 'Abrindo editor para o comunicado #' + id);
}

function enviarComunicado(id) {
  Modals.confirm('Confirmar Envio', 'Deseja enviar este comunicado para revisao?', function() {
    Modals.success('Enviado!', 'O comunicado foi enviado para aprovacao da plataforma.');
  });
}

function excluirComunicado(id) {
  Modals.confirm('Excluir Comunicado', 'Tem certeza que deseja excluir este rascunho?', function() {
    Modals.success('Excluido!', 'O comunicado foi removido com sucesso.');
  });
}

// ============================================
// OFERTA DETAIL TABS
// pages/investidor/oferta-detalhe.html
// ============================================
function switchOfertaTab(tabId, btn) {
  document.querySelectorAll('.oferta-tabs .tab').forEach(function(tab) {
    tab.classList.remove('active');
  });
  btn.classList.add('active');

  document.querySelectorAll('.oferta-tab-content').forEach(function(content) {
    content.style.display = 'none';
  });

  var targetContent = document.getElementById(tabId);
  if (targetContent) {
    targetContent.style.display = 'block';
  }
}

// ============================================
// INVESTIMENTO FUNCTIONS
// pages/investidor/investir.html
// ============================================
function setInvestimentoValor(value) {
  var input = document.getElementById('valorInvestimento');
  if (input) {
    input.value = formatMoneyValue(value);
    calcularParticipacao(value);
  }
}

function calcularParticipacao(value) {
  var participacao = (value / 500000) * 15;
  var participacaoEl = document.querySelector('.participacao-valor');
  if (participacaoEl) {
    participacaoEl.textContent = participacao.toFixed(2) + '%';
  }
}

// ============================================
// DOCUMENTO FUNCTIONS
// pages/investidor/documentos.html, pages/parceiro/documentos.html
// ============================================
function visualizarDocumento(nome) {
  Modals.view(nome);
}

function baixarDocumento(nome) {
  Modals.info('Baixando', 'O documento "' + nome + '" sera baixado em instantes.');
}

// ============================================
// SAQUE FUNCTIONS
// pages/investidor/saque.html
// ============================================
function setValorSaque(value) {
  var input = document.getElementById('valorSaque');
  if (input) {
    input.value = formatMoneyValue(value);
  }
}

function solicitarSaque() {
  var valor = document.getElementById('valorSaque');
  if (valor && parseFloat(valor.value.replace(/\./g, '').replace(',', '.')) > 0) {
    Modals.confirm('Confirmar Saque', 'Deseja solicitar o saque de R$ ' + valor.value + '?', function() {
      window.location.href = 'saque-confirmacao.html';
    });
  } else {
    Modals.error('Valor Invalido', 'Por favor, informe um valor valido para o saque.');
  }
}

// ============================================
// KYC VALIDATION FUNCTIONS
// pages/admin/kyc-fila.html
// ============================================
function aprovarKYC(id, nome) {
  Modals.confirm('Aprovar Cadastro', 'Confirma a aprovacao do cadastro de ' + nome + '?', function() {
    Modals.success('Aprovado!', 'O cadastro foi aprovado com sucesso.');
  });
}

function reprovarKYC(id, nome) {
  Modals.confirm('Reprovar Cadastro', 'Confirma a reprovacao do cadastro de ' + nome + '?', function() {
    Modals.warning('Reprovado', 'O cadastro foi reprovado. O usuario sera notificado.');
  });
}

function solicitarDocumentos(id, nome) {
  Modals.info('Solicitar Documentos', 'Uma notificacao sera enviada para ' + nome + ' solicitando documentos adicionais.');
}

// ============================================
// ADMIN OFERTA ANALYSIS
// pages/admin/oferta-analise.html
// ============================================
function aprovarOferta() {
  Modals.confirm('Aprovar Oferta', 'Deseja aprovar esta oferta para publicacao?', function() {
    Modals.success('Oferta Aprovada', 'A oferta foi aprovada e sera publicada na plataforma.');
  });
}

function devolverOferta() {
  Modals.confirm('Devolver para Ajustes', 'Deseja devolver esta oferta para ajustes?', function() {
    showModal('ajustesModal');
  });
}

function recusarOferta() {
  Modals.confirm('Recusar Oferta', 'Tem certeza que deseja recusar esta oferta?', function() {
    Modals.warning('Oferta Recusada', 'A oferta foi recusada. O parceiro sera notificado.');
  });
}

// ============================================
// DESISTENCIA FUNCTIONS
// pages/investidor/desistencia.html
// ============================================
function confirmarDesistencia() {
  var motivo = document.getElementById('motivoDesistencia');
  if (motivo && motivo.value) {
    Modals.confirm('Confirmar Desistencia', 'Tem certeza que deseja desistir deste investimento?', function() {
      window.location.href = 'desistencia-confirmacao.html';
    });
  } else {
    Modals.error('Selecione um Motivo', 'Por favor, selecione o motivo da desistencia.');
  }
}

// ============================================
// IMPOSTO DE RENDA FUNCTIONS
// pages/investidor/imposto-renda.html, pages/parceiro/imposto-renda.html
// ============================================
function baixarInforme(ano) {
  Modals.loading('Gerando informe...');
  setTimeout(function() {
    Modals.hide();
    Modals.success('Download Iniciado', 'O informe de rendimentos de ' + ano + ' esta sendo baixado.');
  }, 1500);
}

// ============================================
// CONFIGURACOES FUNCTIONS
// pages/*/configuracoes.html
// ============================================
function salvarConfiguracoes() {
  Modals.loading('Salvando...');
  setTimeout(function() {
    Modals.hide();
    Modals.success('Salvo!', 'Suas configuracoes foram atualizadas com sucesso.');
  }, 1000);
}

function alterarSenha() {
  showModal('alterarSenhaModal');
}

function confirmarAlteracaoSenha() {
  var senhaAtual = document.getElementById('senhaAtual');
  var novaSenha = document.getElementById('novaSenha');
  var confirmarSenha = document.getElementById('confirmarSenha');

  if (!senhaAtual || !novaSenha || !confirmarSenha) return;

  if (novaSenha.value !== confirmarSenha.value) {
    Modals.error('Senhas Diferentes', 'A nova senha e a confirmacao nao conferem.');
    return;
  }

  if (novaSenha.value.length < 8) {
    Modals.error('Senha Fraca', 'A senha deve ter no minimo 8 caracteres.');
    return;
  }

  hideModal('alterarSenhaModal');
  Modals.success('Senha Alterada', 'Sua senha foi alterada com sucesso.');
}

// ============================================
// NOVA OFERTA WIZARD FUNCTIONS
// pages/parceiro/nova-oferta*.html
// ============================================
function proximoStep(current) {
  var stepLinks = {
    1: 'nova-oferta-step2.html',
    2: 'nova-oferta-step3.html',
    3: 'nova-oferta-step4.html',
    4: null
  };

  if (stepLinks[current]) {
    Modals.loading('Salvando...');
    setTimeout(function() {
      window.location.href = stepLinks[current];
    }, 500);
  }
}

function voltarStep(current) {
  var stepLinks = {
    2: 'nova-oferta.html',
    3: 'nova-oferta-step2.html',
    4: 'nova-oferta-step3.html'
  };

  if (stepLinks[current]) {
    window.location.href = stepLinks[current];
  }
}

function enviarOfertaParaAnalise() {
  Modals.confirm('Enviar para Analise', 'Deseja enviar esta oferta para analise da plataforma?', function() {
    Modals.success('Enviada!', 'Sua oferta foi enviada para analise. Voce sera notificado sobre o resultado.');
    setTimeout(function() {
      window.location.href = 'minha-oferta.html';
    }, 2000);
  });
}

// ============================================
// CLIENTES ADMIN FUNCTIONS
// pages/admin/clientes.html
// ============================================
function verDetalheCliente(id) {
  window.location.href = 'cliente-detalhe.html?id=' + id;
}

function bloquearCliente(id, nome) {
  Modals.confirm('Bloquear Cliente', 'Deseja bloquear o acesso de ' + nome + '?', function() {
    Modals.warning('Bloqueado', 'O cliente foi bloqueado e nao podera mais acessar a plataforma.');
  });
}

// ============================================
// COPY TO CLIPBOARD
// General utility
// ============================================
function copiarParaClipboard(texto, mensagem) {
  navigator.clipboard.writeText(texto).then(function() {
    Modals.success('Copiado!', mensagem || 'Texto copiado para a area de transferencia.');
  }).catch(function() {
    Modals.error('Erro', 'Nao foi possivel copiar o texto.');
  });
}

// ============================================
// AUTO INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  initHeaderScrollEffect();

  document.querySelectorAll('[data-action]').forEach(function(el) {
    el.addEventListener('click', function() {
      var action = this.getAttribute('data-action');
      var value = this.getAttribute('data-value');

      switch(action) {
        case 'export-pdf':
          Modals.export('pdf');
          break;
        case 'export-excel':
          Modals.export('excel');
          break;
        case 'export-csv':
          Modals.export('csv');
          break;
        case 'view':
          Modals.view(value);
          break;
      }
    });
  });
});
