# Relatório do T2

- Thiago Nicácio - 1411188
- Lucca Buffara - 1521018


# T2 INF1407 Prog. Web

Para esse segundo trabalho foi desenvolvido um blog de notícias onde cada usuário pode criar, editar e deletar suas notícias. Além de conseguir visualizar todas as notícias que já foram publicadas por outros usuários.

Realizamos a publicação do nosso site na plataforma heroku, e você pode acessar pelo seguinte link: https://still-refuge-01907.herokuapp.com/

# Como utilizar o site

Ao acessar o site você terá a opção de criar uma nova conta, ou de realizar o login caso você já possua uma conta. 
Após realizar o login, você será direcionado para home onde você terá acesso a todas as notícias que já foram publicadas, e poderá criar novas notícias. 
No menu superior do site existe um menu de navegação onde você consegue vizualizar apenas as suas notícias, criar uma nova notícia, vizualizar a home e realizar o logout do site. 


# O que foi desenvolvido?

Foram criadas views e templates para realizar o cadastro e login de usuário no site. Assim, apenas usuários autenticados conseguem visualizar e/ou editar suas notícias. Foram também implementados mecanismos de permissão para que usuários não autorizados não consigam realizar certas tarefas. 

Foi também desenvolvido um CRUD para poder administrar as notícias criadas. Cada notícia criada contém os campos: user, title, message, created_at, updated_at e todas as views e templates para administrar essas notícias foram implementadas.

Para a contagem e exibição de notícias totais no site foi criada uma requisição AJAX que realiza uma requisição GET no endpoint `newsCount`. Esse endpoint conta todas as notícias do site e retorna um JSON como sua resposta.

