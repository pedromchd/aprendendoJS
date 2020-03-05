# Template

Um _template_ é um modelo para novos projetos, para não iniciar do zero e ter pelo menos uma estrutura onde se apoiar.

Antes de começar a desenvolver com este _template_ é necessário ter instalado o [Node.js](https://nodejs.org/en/download/), [Git](https://git-scm.com/download/win)  e o [Visual Studio Code](https://code.visualstudio.com/).

Usando o Linux, é necessário baixar os pacotes `.deb` nos sites (clicar nos _links_ acima) e prosseguir a instalação. O Git pode ser instalado com o comando `sudo apt-get install git`.

Usando Windows, eu sugiro usar o Chocolatey, que é um gerenciador de pacotes para Windows. Para instalá-lo, cole a seguinte instrução em um Prompt de Comando como Administrador:

```plain
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

Feito isso, em um novo Prompt de Comando e também como Administrador execute o seguinte comando para instalar Node.js, Git e VSCode de uma só vez:

```plain
choco install nodejs-lts git vscode -y
```

Caso a instalação falhe, tente baixar e instalar todos separadamente. Se a instalação continuar falhando, provavelmente teu SO está instável e pode precisar ser reinstalado (formatar). Nessas condições, e no geral, considere instalar um Linux (Ubuntu, Mint, Elementary) como segundo sistema (dual-boot) para trabalho e deixe o Windows apenas para a diversão.

**Importante: sem essas ferramentas não é possível realizar as atividades da disciplina!!**

Tendo essas ferramentas instaladas faça os seguintes procedimentos:

## Extensões recomendadas do Visual Studio Code

- Atom Keymap (ou Sublime Text Keymap)
- Auto Close Tag
- Better Comments
- Bracket Pair Colorizer
- EditorConfig for VS Code
- ESLint
- HTML CSS Support
- HTML Snippets
- IntelliSense for CSS class names
- Live Server
- Material Theme
- Path Intellisense
- Quokka
- REST Client
- TODO Highlight

Referência: <https://code.visualstudio.com/docs/editor/extension-gallery>

## Configurações do Visual Studio Code

As configurações que uso no Visual Studio Code estão no arquivo `./.vscode/settings.json`, sintam-se a vontade para usá-las total ou parcialmente no seu vscode. Eu recomendo pelo menos o `wrap` e as _exclusions_ que melhoram a performance nos projetos Node.js.

## Node.js

A partir da linha de comando, execute `npm install`, isso vai gerar o diretório `node_modules`, que **nunca deve ser copiado para pendrives ou transferido por e-mail**, já que só depende do arquivo `package.json` para gerar novamente com o comando citado.

## Rodando

Para _rodar_ o projeto execute o comando `npm start` a partir do terminal. O comando abre o _browser_ padrão, mas podes abrir o projeto em qualquer _browser_ com a URL `http://127.0.0.1:8080`.

Ou usando a extensão `live-server` do Visual Studio Code, através do comando (`CTRL + SHIFT + P`) _Open with Live Server_.

Alternativamente ainda podes usar a extensão Web Server do Chrome em <https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb>.
