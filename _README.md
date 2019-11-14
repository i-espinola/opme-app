# Opme App

![Gestão OPME](https://gestaoopme.com.br/wp-content/uploads/2019/06/logo_gestao.png)

## Utilização da aplicação

**NOTA:** Para executar qualquer um dos comandos abaixo, é imprescindível ter o gerenciador de dependencia NPM instalado globalmente em seu computador, e nagevar para dentro do diretório root da aplicação para que todos os comandos possam ser executados com sucesso.

### Instalação local

Para fazer a instalação de todas as dependencias da aplicação em modo de desenvolvimento, execute a seguinte linha de comando no terminal

    npm install

**Nota**: Se após a intalação você receber informações de vulnerabilidades nas dependencias instaladas, execute o seguinte comando para corrigir eventuais vulnerabilidades

    npm audit fix && npm audit fix --force

### Modo desenvolvimento

Os arquivos do código fonte da aplicação estão contidos dentro do diretório `./src`.
Após concluir a instalação de todas as dependencias da aplicação, é possível executar o comando de desenvolvimento no terminal

    npm run dev

Depois de executar o comando acima, abra [http://localhost:3000](http://localhost:3000) para renderizar a aplicação no seu browser preferido.
A página será recarregada sempre que fizer edições no seu código fonte, você também verá quaisquer eventuais erros no código no seu console e no próprio browser.

### Modo build (Construção)

Este comando cria os arquivos de produção dentro do diretório `./build`. Os arquivos de produção são transpilados e minificados para obter uma melhor performance e otimização de trafego de dados ao acessar a aplicação. Para construir a aplicação em modo producão, execute o seguinte comando

    npm run build

**Nota**: Se você possui um servidor local capaz de executar aplicações web, e quiser buildar o projeto com o comando `npm run build`, não se esqueça de ajustar o caminho relativo no arquivo `./package.json` na propriedade `homepage:`

### Modo produção

Com esse comando será inicializado um servidor **_HTTP_** e executara os arquivos de **produção** no diretório `./build`, que por padrão, busca o arquivo `index.html`.

    npm run start

### Modo de testes

Para testar/validar todos os recursos da aplicação em questão em modo interativo, execute o seguinte comando no terminal

    npm run test

## Principais tecnologias integradas

- [x] JavaScript / **ES6**.
- [x] prop-types.
- [x] React.
- [x] Axios.
- [x] ESlint.
- [x] SCSS.
- [x] JSX.
- [x] NPM.

## Estrutura de arquivos fonte **/src**

## Estrutura de arquivos de produção **/build**
