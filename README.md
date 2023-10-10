# Projeto Mobile - Satisfying.you

## Descrição geral do projeto

A pesquisa de satisfação é essencial para entender como os clientes de uma corporação se sentem em relação à empresa. Por meio dos dados coletados, a empresa pode realizar melhorias em seu processo, pessoas e/ou produtos/serviços.

Nesse sentido, é proposto nesta disciplina o desenvolvimento de uma aplicação para dispositivos móveis compatível com Android/iOS para realizar pesquisas com clientes/usuários de uma corporação.

Os requisitos gerais do projeto são:

1. Gestão de usuários: cadastro e autenticação de usuários, e recuperação de senha;
2. Gestão de pesquisas: cada usuário poderá gerenciar diferentes pesquisas de produtos/serviços;
3. Coleta da satisfação do usuário;
4. Produção de relatórios gráficos por pesquisa.

### Parte 1

A primeira parte do projeto visa o desenvolvimento da interface gráfica do projeto utilizando a biblioteca React-Native sem considerar a autenticação de usuários e persistência de dados. Contudo, é obrigatório seguir as cores, os ícones, o fluxo de navegação, fontes, esquema de layout do protótipo disponível em Figma (clique aqui).

Os critérios avaliativos da parte 1 e suas respectivas pontuações estão listados abaixo:

### Critérios

1. Elaboração de todas as interfaces do aplicativo seguindo o layout e cores do protótipo, incluindo:

   1. Login
   2. Criar conta
   3. Recuperar senha
   4. Home
   5. Nova pesquisa
   6. Modificar pesquisa
   7. Ações de pesquisa
   8. Coleta de satisfação
   9. Agradecimentos

2. Checagem de campos nas seguintes telas:
   1. Login - verificação de e-mail válido
   2. NovaConta - verificação de senhas iguais e e-mail
   3. RecuperarSenha - verificação de email válido
   4. NovaPesquisa - verificação de todos os campos preenchidos

3. Criação do componente Card da pesquisa: contendo nome da pesquisa, data da pesquisa e a imagem da pesquisa. Os dados exibidos neste componente devem ser passados por meio de atributos do componente.

4. Implementação da barra lateral de navegação (DrawerNavigator)

5. Implementação da navegação utilizando Stack Navigator	

6. Exibição de caixa de diálogo (pop up) para confirmar exclusão de uma vacina.

7. Implementação da interface de relatório de uma pesquisa contendo um gráfico de Pizza, contendo legenda. Utilize dados fictícios.

8. Timer de 3 segundos para realizar a transição automática da tela AgradecimentoParticipacao para a tela Coleta.

### Parte 2

A segunda parte do projeto visa implementar a autenticação, persistência e recuperação de dados das pesquisas, captura e armazenamento de arquivos de imagens utilizando câmera ou galeria de fotos, centralização de dados usando Redux, e uso de geolocalização. 

Os critérios avaliativos da parte 2 e suas respectivas pontuações estão listados abaixo:

### Critérios

1. Gestão de usuários da aplicação:
   1. Cadastro de usuário usando o módulo Firebase Authentication;
   2. Autenticação de usuário usando o módulo Firebase Authentication;
   3. Redefinição de senha usando o módulo Firebase Authentication.

2. Gerenciamento de dados de pesquisas usando o módulo Firebase Firestore:
   1. Cadastro de nova pesquisa;
   2. Modificação de pesquisa;
   3. Exclusão de pesquisa;
   4. Recuperação de dados de uma pesquisa.

3. Armazenamento do arquivo da imagem de pesquisa cadastrada usando o módulo Firebase Storage. Em casos de alteração da imagem de uma pesquisa, é necessário excluir o arquivo anterior.

4. Captura de imagem utilizando câmera ou galeria de imagens.

5. Uso do REDUX ou useContext para manter estado(s) global(is)

6. Apresentação do relatório usando o gráfico de pizza utilizando biblioteca para geração de gráficos com suporte ao React-Native

---

<!-- #### **Avaliação final do projeto - x.x** -->

_* Esperando avaliação_