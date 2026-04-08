<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio

```
git clone https://github.com/JonathanLNB/nest-pokedex-devtalles.git
```

2. Tener Nest CLI instalado

```
# Con NPM
npm i -g @nestjs/cli

# Con Yarn
yarn add -g @nestjs/cli
```

3. Instalar dependencias

```
yarn install
```

4. Levantar base de datos

```
docker compose up -d
```

5. Clonar el archivo ```.env.template``` y renombrar la copia a ```.env```
6. Llenar las variables de entorno definidas en el ```.env```
7. Ejecutar la aplicación en dev

```
# Con Yarn
yarn start:dev

# Con NPM
npm run start:dev
```

8. Reconstruir la base de datos

```
GET
http://localhost:3000/api/v2/seed
```

## Stack usado

* MongoDB
* NestJS
