📚 Auto Link Rotator
Uma extensão para Chrome que automatiza a rotação entre múltiplos links em intervalos personalizáveis. Ideal para monitoramento, comparação de páginas ou apresentações.

🚀 Funcionalidades
✅ Lista customizável de URLs
✅ Intervalo ajustável (segundos)
✅ Abre links sequencialmente
✅ Armazenamento local (salva sua lista)
✅ Leve e rápido (sem dependências externas)

🛠️ Instalação
Opção 1: Baixar da Chrome Web Store
🔗 Disponível em breve... (em desenvolvimento)

Opção 2: Instalar Manualmente
Clone este repositório ou faça download dos arquivos:

bash
Copy
git clone https://github.com/seu-usuario/auto-link-rotator.git
Acesse chrome://extensions no Chrome.

Ative o "Modo Desenvolvedor" (canto superior direito).

Clique em "Carregar sem compactação" e selecione a pasta do projeto.

🖥️ Estrutura do Projeto
Copy
auto-link-rotator/  
├── icon.png              # Ícone da extensão  
├── manifest.json         # Configuração principal  
├── popup.html            # Interface do usuário  
├── popup.js              # Lógica de rotação  
└── README.md             # Este arquivo  
⚙️ Como Usar
Clique no ícone da extensão.

Cole suas URLs (1 por linha).

Defina o intervalo em segundos.

Clique em "Iniciar" para começar a rotação.

Demonstração (imagem ilustrativa)

📝 Personalização
Edite popup.js para:

Adicionar delay inicial:

javascript
Copy
setTimeout(() => { /*...*/ }, 5000);  
Repetir ciclo:

javascript
Copy
if (index >= urls.length) index = 0; // Reinicia  
🤝 Contribuição
Contribuições são bem-vindas! Siga estes passos:

Faça um fork do projeto.

Crie uma branch (git checkout -b feature/nova-funcionalidade).

Commit suas mudanças (git commit -m 'Adiciona X').

Push para a branch (git push origin feature/nova-funcionalidade).

Abra um Pull Request.

📜 Licença
MIT License - Consulte o arquivo LICENSE para detalhes.