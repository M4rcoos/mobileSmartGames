TAREFAS CONCLUIDAS APLICATIVO MOBILE

[x] Listagem de todos os produtos

[x] Detalhes dos produtos

[x] Visualização da localização do jogo no mapa

[x] Compra do jogo

[x] Leitura do QRCode pela câmera do app

ANTES DE TUDO!
VAMOS PRECISAR ESCUTAR UMA PORTA NO SERVIDOR PARA NOSSA APLICAÇÃO MOBILE RECONHECER NOSSA API LOCAL

PARA ISSO:
Entre no site Ngrok baixe o app e faça o login!

Baixar o ngrock: https://ngrok.com/download

APÓS DESCOMPACTAR O APP, ELE IRA ABRIR UM TERMINAL AONDE VC FARA UMA CONFIGURAÇÃO BASICA PARA ELE DISPONIBILIZAR UMA URL LOCAL PRA USAR NO NOSSO APP!

Rodar o comando para autenticação: `ngrok config add-authtoken 2eTJaSv2jtOxZK7gWB1iMvIBycE_3c1WKL42usaRyoU9UrzWB` (PARA FAZER O LOGIN, TALVEZ NÃO PRECISE DESSE HASH GRANDE JUNTO, MAIS FAÇA O LOGIN NO APP)

Rodar o comando para expor a porta da api:`ngrok.exe http 3000`

Após vc fazer isso voce podera rodar o nosso App para testar localmente!(ATENTEM-SE, POIS APÓS ESSE ULTIMO PASSO ELE IRA GERAR A SUA URL LOCAL PARA CONFIGURAR NO APP POR GENTILEZA)

Entre em src/services/api e mude a url atual, para a url que o ngrok está disponibilizando para voce!


PRONTO AGORA VAMOS PARA O APP!

`O APP FOI TESTADO EM UM CELULAR ANDROID PODENDO HAVER DIFERENÇA DE DESING AO ENTRAR NO IPHONE OU IOS`

CLONE O REPOSITÓRIO

EXECUTE O COMANDO `Npm install` 

depois execute o comando `npx expo start -c`

Abra seu emulador ou seu aplicativo no celular: EXPO GO (Recomendo)

OBS: Mandei um video para o Rh iniciando o App pelo celular de forma simples.

Escaneie o qr code fornecido no terminal da aplicação se for abrir com expo,

Caso opte pelo emulador, (Inicie seu emulador e após iniciar, vai no terminal e aperte a tecla A 

SEJA FELIZ!
