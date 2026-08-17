# ME Study — Guia de estudos ManageEngine

Site estático (HTML/CSS puro, sem build) com conteúdo de estudo sobre as soluções ManageEngine, começando pelo AD360.

## Estrutura

```
index.html              → portal com o catálogo de soluções
ad360/
  index.html             → visão geral + diagrama de topologia
  arquitetura.html        → modelo de integração e sincronização
  componentes.html        → os 7 componentes explicados
  instalacao.html         → modos de instalação, SSL, backup, updates
  permissoes.html         → permissões mínimas por componente
  requisitos.html         → hardware, SO e portas de rede
  glossario.html          → termos técnicos
assets/
  css/style.css
  js/main.js
```

Para adicionar uma nova solução (ex: ADManager Plus, PAM360...), crie uma pasta no mesmo padrão de `ad360/` e adicione o card correspondente em `index.html`.

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser público ou privado, desde que o plano permita Pages).
2. Envie todos os arquivos desta pasta para a raiz do repositório:
   ```bash
   git init
   git add .
   git commit -m "Site inicial: AD360"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages**.
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
5. Salve. Em cerca de 1 minuto o site estará em:
   `https://SEU-USUARIO.github.io/SEU-REPO/`

Qualquer novo `git push` para `main` atualiza o site automaticamente.

## Rodar localmente antes de publicar

Não é obrigatório, mas se quiser conferir localmente:
```bash
python3 -m http.server 8000
```
e abrir `http://localhost:8000` no navegador.
