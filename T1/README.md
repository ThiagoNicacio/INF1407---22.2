# Relatório do T1

Thiago Nicácio - 1411188


# O Jogo

O jogo desenvolvido foi um quebra-cabeças. 

Ele tem um formato de matrix 4x4.

Ele possui um total de 12 tipos de peças, então nem sempre serão exibidas as mesmas peças no jogo. 


# Como Jogar

Para jogar basta acessar o seguinte link: https://gregarious-donut-7b3373.netlify.app

Nele você deverá efetuar login utilizando o formato de email em Priplanus: \usuário[domínio|domínio|...|domínio]. 

No menu do jogo você deve escolher um nível de dificuldade entre fácil, normal e difícil. 
- fácil: Sem restrições de tempo e jogadas.
- normal: Apenas com restrição de tempo de jogo, você tem 3 minutos para concluir.
- dificíl: Com restrição de tempo e jogadas. Você terá que concluir o jogo com apenas 20 jogadas dentro de 1 minuto. 

Após você clicar em começar na tela de menu, você será redirecionado para a tela do jogo, onde poderá iniciar o jogo ou sair do jogo, voltando para a tela de menu. 

Clicando em iniciar jogo, serão exibidas as peças "viradas para baixo" e você deverá clicar em uma peça de cada vez para ela ser "desvirada". 

A cada duas peças que você clica, é feito uma comparação para saber se são peças identicas. Caso sejam, elas permaneceram a serem exibidas com as imagens "viradas" para o jogador. Caso contrário elas irão voltar para a exibição original. 

Na parte superior as peças, são exibidos o tempo e a quantidade de jogadas que o jogador já efetuou. E na parte inferior é exibido um botão para parar o jogo, voltando assim ao estado inicial ao entrar na tela do jogo.

Ao concluir o jogo será exibido uma tela com os resultados, contendo o tempo de duração da partida e quantas jogadas que foram realizadas. Assim como as opções de iniciar o jogo novamente e voltar ao menu. 

Caso você perca o jogo, nos níveis normal e difícil, será exibido o motivo pelo qual você perdeu. Juntamente com as opções mencionadas acima em caso de vitória. 

# Requisitos de implementação atendidos

- Utilizar arquivos HTML somente para código HTML
- Código Javascript somente para código Javascript
- Criar uma pasta apenas para arquivos Javascript
- Criar uma pasta apenas para arquivos CSS
- Utilizar arquivos CSS apenas para código CSS
- Pedir identificação de usuário utilizando o formato de email em Priplanus
- Validação do email em expressão regular
- Ter no mínimo um array
- Ter no mínimo uma tomada de decisão
- Ter pelo menos um parâmetro configurável
- Manipular no mínimo dois objetos do tipo imagem com duas imagens diferentes em cada objeto

# Requisitos de implementação  não atendidos


# Erros encontrados

- Durante o jogo, caso o usuário clique em várias peças simultaneamente as vezes pode ocorrer um bug de comparação das peças. 
Não consegui corrigir o problema pois não é sempre que ele ocorre. 

