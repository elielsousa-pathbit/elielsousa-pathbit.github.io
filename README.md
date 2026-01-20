# Wireframes HTML - Plataforma Crowdfunding RCVM 88/2022

## Como Usar

Abra o arquivo `index.html` em qualquer navegador para navegar pelos wireframes.
Todos os fluxos estao conectados e podem ser testados de ponta a ponta.

## Estrutura de Arquivos

```
Wireframes_HTML/
├── index.html                    # Landing Page
├── css/style.css                 # Estilos globais (responsivo)
├── js/app.js                     # JavaScript para interacoes
└── pages/
    ├── login.html                # Login Investidor
    ├── cadastro.html             # Cadastro Investidor
    ├── kyc-validacao.html        # KYC via Bureau de Dados
    ├── 2fa-escolher.html         # Escolher metodo 2FA
    ├── 2fa-codigo.html           # Digitar codigo 2FA
    ├── 2fa-config.html           # Configurar 2FA inicial
    ├── cadastro-sucesso.html     # Cadastro concluido
    ├── ofertas.html              # Lista de ofertas
    ├── oferta-detalhe.html       # Detalhe da oferta
    ├── investir.html             # Fluxo de investimento - Valor
    ├── investir-confirmar.html   # Confirmar investimento
    ├── investir-pix.html         # Pagamento via PIX
    ├── investir-sucesso.html     # Investimento confirmado
    ├── como-funciona.html        # Pagina institucional
    │
    ├── investidor/
    │   ├── dashboard.html        # Dashboard do investidor
    │   ├── meus-investimentos.html # Lista de investimentos
    │   └── configuracoes.html    # Configuracoes e 2FA
    │
    ├── admin-login.html          # Login Admin
    ├── admin-totp.html           # Codigo TOTP Admin
    ├── admin-setup-totp.html     # Configurar Authenticator
    ├── admin-setup-totp-verify.html # Verificar TOTP
    ├── admin-setup-totp-backup.html # Codigos de recuperacao
    ├── admin/
    │   ├── dashboard.html        # Dashboard Admin
    │   └── kyc-fila.html         # Fila KYC manual
    │
    ├── parceiro-login.html       # Login Parceiro
    ├── 2fa-escolher-parceiro.html # 2FA Parceiro
    ├── 2fa-codigo-parceiro.html  # Codigo 2FA Parceiro
    └── parceiro/
        ├── dashboard.html        # Dashboard Parceiro
        └── clientes.html     # Lista de clientes
```

## Fluxos de Navegacao

### 1. Investidor - Cadastro Completo
```
index.html → cadastro.html → kyc-validacao.html → 2fa-config.html → cadastro-sucesso.html
```

### 2. Investidor - Login com 2FA
```
login.html → 2fa-escolher.html → 2fa-codigo.html → investidor/dashboard.html
```

### 3. Fluxo de Investimento
```
ofertas.html → oferta-detalhe.html → investir.html → investir-confirmar.html → investir-pix.html → investir-sucesso.html
```

### 4. Admin - Login com TOTP
```
admin-login.html → admin-totp.html → admin/dashboard.html
```

### 5. Admin - Primeiro Acesso (Setup TOTP)
```
admin-login.html → admin-setup-totp.html → admin-setup-totp-verify.html → admin-setup-totp-backup.html → admin/dashboard.html
```

### 6. Parceiro/Emissor - Login com 2FA
```
parceiro-login.html → 2fa-escolher-parceiro.html → 2fa-codigo-parceiro.html → parceiro/dashboard.html
```

## Regras de Negocio Implementadas (RCVM 88/2022)

- **Apenas PF**: Somente pessoas fisicas podem investir
- **KYC automatico**: Validacao via Bureau de Dados (Serasa/SPC/Receita)
- **Limite anual**: R$ 20.000 por investidor
- **Oferta maxima**: R$ 15 milhoes
- **Prazo maximo**: 180 dias por oferta
- **Desistencia**: 5 dias uteis apos investimento
- **Pagamento**: Apenas PIX
- **Equity only**: Apenas participacao societaria

## Autenticacao 2FA

| Role | Metodo 2FA |
|------|-----------|
| Investidor | Email / SMS / WhatsApp |
| Parceiro | Email / SMS / WhatsApp |
| Admin | TOTP obrigatorio (Authenticator) |

## Dados Fake Pre-preenchidos

Os formularios ja vem preenchidos com dados fake para facilitar a navegacao:
- **Investidor**: Joao Carlos Silva, joao.silva@email.com
- **Admin**: admin@crowdinvest.com.br
- **Parceiro**: contato@techstart.com.br

## Responsividade

Os wireframes sao responsivos e funcionam em:
- Desktop (1200px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## Tecnologias

- HTML5 puro
- CSS3 (variaveis CSS, flexbox, grid)
- JavaScript vanilla (sem frameworks)
- Sem dependencias externas
