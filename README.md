Este repositorio contiene una api de nest, que sirve para autenticar usuarios en diferentes frontends utilizando jwt y cookies.
Actualmente está configurado (Hard-codeado) para trabajar con una base de datos de mysql-
type: 'mysql',
      host: '192.168.66.61',
      port: 3306,
      username: 'user',
      password: 'root_password',
      database: 'yt_nest_auth',
Además, también tiene el cors para el puerto 4200 para su uso con Angular. El contenedor de mysql lo cree con docker con el comando
docker run --name nestauth -e MYSQL_ROOT_PASSWORD=root_password -e MYSQL_DATABASE=yt_nest_auth -e MYSQL_USER=user -e MYSQL_PASSWORD=root_password -p 3306:3306 -d mysql:latest
Y el host está asignado para funcionar con el contenedor creado dentro de wsl, después agregare .env, ya me quiero ir a doormir. 👍