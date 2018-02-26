## Laravel Star Wars Project
This a simple project to use the API from https://swapi.co with [**Laravel 5.4**](https://laravel.com/docs/5.4) and [**VueJs 2**](https://vuejs.org/v2/guide/).

 1. To get this project use the code below:
``` sh
    $ git clone git@github.com:AniltonMoraisJr/laravel-star-wars.git
``` 
 2. After clone the project you need to install the composer files.
``` sh
    $ composer install
```

 3. After install the composer´s files, configure your .env file. Some example below:


> APP_NAME=Laravel APP_ENV=local
> APP_KEY=base64:yvnyKtEgVU0I21xWzxhN9lFkLmAGCsBxcMDet4oNACc=
> APP_DEBUG=true 
> APP_LOG_LEVEL=debug 
> APP_URL=http://localhost
> 
> DB_CONNECTION=mysql 
> DB_HOST=127.0.0.1 
> DB_PORT=3306
> DB_DATABASE=laravel_star_wars 
> DB_USERNAME=root
> DB_PASSWORD=
> 
> BROADCAST_DRIVER=log 
> CACHE_DRIVER=file 
> SESSION_DRIVER=file
> QUEUE_DRIVER=sync
> 
> REDIS_HOST=127.0.0.1 
> REDIS_PASSWORD=null 
> REDIS_PORT=6379
> 
> MAIL_DRIVER=smtp 
> MAIL_HOST=smtp.mailtrap.io
> MAIL_PORT=2525
> MAIL_USERNAME=null 
> MAIL_PASSWORD=null 
> MAIL_ENCRYPTION=null
> 
> PUSHER_APP_ID= 
> PUSHER_APP_KEY= 
> PUSHER_APP_SECRET=

 4. With your .env configured, now you can migrate the tables
``` sh
    $ php artisan migrate
```

5. Now we need to install the node modules. For this you need have installed in your machine the [Node.js](https://nodejs.org/en/) and [NPM](https://docs.npmjs.com/getting-started/installing-node).
``` sh
    $ npm install
```
    
6. Finally, now you can start the project and view it in **localhost:8000**
``` sh
    $ php artisan serve
``` 