existem duas requições que você pode fazer uma para pegar as informações de todos cavaleiros, essa irá retornar um array com varios objetos, cada objeto irá conter as informações dos cavaleiros, a outra é pra pegar informçãoes de um cavaleiro especifico, irá retornar um objeto

abaixo é a requisição feita sem parâmetros, nesse caso irá retornar as informações de todos cavaleiros

http://localhost:7777/cavaleiros


ja este abaixo nós passamos um parametro, o que vamos passar é o nome do cavaleiro que desejamos pegar as informçãoes, ficará assim

http://localhost:7777/cavaleiros/Mu_de_Áries


//Images, como pegar as imagens?

para pegar as imagens basta você fazer uma requisição em 

http://localhost:7777/files/

e passar o nome do campo image do cavaleiro que você deseja pegar a foto, veja abaixo

http://localhost:7777/files/{cavaleiro.image}



