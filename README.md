# Anotações privadas — ME Study

Esta pasta é **só sua**. Ela fica fora do repositório público do GitHub Pages — nunca deve ser commitada junto do site.

## Estrutura

```
private-notes/
  README.md
  .gitignore
  ad360/
    anotacoes-ad360.md
    screenshots/
  admanager-plus/
    anotacoes-admanager-plus.md
    screenshots/
  adaudit-plus/
    anotacoes-adaudit-plus.md
    screenshots/
  pam360/
    anotacoes-pam360.md
    screenshots/
```

Cada `anotacoes-*.md` tem uma seção por página do site público correspondente, na mesma ordem da árvore de navegação — assim fica fácil estudar acompanhando o site e completando o arquivo em paralelo.

## Como usar

1. Enquanto estuda uma página do site, abra a tela real correspondente no seu ambiente (ou no ambiente de teste/homelab).
2. Tire o print e salve dentro da pasta `screenshots/` do produto certo, com um nome descritivo (ex: `licenciamento-01.png`).
3. No `.md`, descomente a linha de imagem daquela seção e ajuste o nome do arquivo:
   ```markdown
   ![Tela de License](./screenshots/licenciamento-01.png)
   ```
4. Escreva suas próprias anotações no campo "Minhas anotações" — o que te chamou atenção, o que é diferente do que o site descreve, dúvidas pra revisar depois.

## Por que isso fica de fora do site público

O site público (`me-study`) é hospedado no GitHub Pages e é visível pra qualquer pessoa. A interface do ManageEngine — telas, ícones, cores da marca, layout — é propriedade intelectual deles. Print real do produto é apropriado pra uso **privado** (suas anotações, seu aprendizado), mas não pode ser publicado. Por isso os dois materiais ficam propositalmente separados:

- **Site público** → wireframes esquemáticos, sem a identidade visual real
- **Esta pasta** → prints reais, só pra você, nunca commitada

## Se você usa Git para versionar essa pasta também

Se quiser controlar versão dessa pasta separadamente (recomendado, para não perder o histórico), inicialize um repositório **local e privado** aqui dentro — nunca no mesmo remoto do site público:

```bash
cd private-notes
git init
git add .
git commit -m "Anotações iniciais"
```

Não adicione um `remote` a menos que seja um repositório GitHub marcado como **Private**. O `.gitignore` incluído já impede que os prints sejam versionados por engano caso você reaproveite essa pasta dentro do repositório do site — mas o mais seguro continua sendo mantê-la completamente separada, como está agora.
