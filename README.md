# Book My Ticking
## A ticket booking and creating application 

A simple ticket createing and buying and selling highly scalable web application following 
microservices architecture

## Features

- Personal accouns 
- Create ticketes for selling 
- Buy tickets through stripe  
- Auto expiration of tickets 



## Tech

- [NextJS] - A React based development framework for server-side rendering and generating static   websites.

- [Nodejs] - a server-side platform built on Google Chrome's JavaScript Engine
- [TypeScript] - TypeScript is a strict syntactical superset of JavaScript and adds optional       static typing to the language which developed and maintained by Microsoft 

- [Express] - fast node.js network app framework

- [Jest] -  a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.

- [Supertest] - a library for testing Node. js HTTP servers.

- [Bootstrap 5] -a free and open-source collection of CSS and JavaScript/jQuery      code used for creating dynamic layout websites and web applications

- [Stripe] - an online payment processing and credit card processing platform for businesses.

- [Skaffold] - a command line tool that saves developers time by automating most of the development workflow from source to deployment 

- [Docker] - is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers
 
- [Kubernetes] - is a portable, extensible, open-source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation.

- [@teronpackages/common] -  npm package specifically created for this project. Includes common middleware, error handleing classes, stream events  and types.

- [Ngress-nginx] - is an Ingress controller for Kubernetes using NGINX as a reverse proxy and load balancer

- [Github actions] - is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline.

- [NATS Streaming Server] - an extremely performant, lightweight reliable streaming platform built on NATS.




## Testing

#### Client 
```sh
cd client
npm run test
```
#### auth
```sh
cd auth
npm run test
```
#### expiration
```sh
cd expiration
npm run test
```
#### orders 
```sh
cd orders
npm run test
```
#### payments 
```sh
cd payments 
npm run test
```
#### tickets 
```sh
cd tickets
npm run test
```
#### run
```sh
skaffold dev
```


## Docker

The application is very easy to install and deploy in a Docker container.
After installing docker enable Kubernetes.

```sh
cd <dirname>
docker build -t <youruser>/<dirname> .
```

This will create the <dirname> image and pull in the necessary dependencies.
We are using latest version since we are not mentioning any version

Once done, we can use skaffold dev which will automatically handle updates and build 
## Important Notes 

-   #### Please write ticking.dev in hosts file 
    ### for windows
    ```sh
    C:\Windows\System32\drivers\etc
    ```
    ### for mac
    ```sh
    sudo nano /etc/hosts
    ```
    
    ### for mac
    ```sh
    /etc/hosts
    ```

-   #### Add the following secrets using in kubernetes 
    ```bash
    kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=stripe_api_key 
    ```
    ```sh
    kubectl create secret generic jwt-secret --from-literal=JWT_KEY=jwt_secret 
    ```
    
-   #### In the client dir go to api/buil-client.js change as give below 
    ### from
    ```javascript
     // We are on the server

    return axios.create({
      baseURL:
        'www.bookmyticket.ml',
      headers: req.headers,
    });
    ```
    ### to
    ```javascript
     // We are on the server

    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
    ```
    
## Installation

This application requires [Node.js](https://nodejs.org/) v15+ to run.

Install the dependencies and devDependencies and start the server.

#### Client 
```sh
cd client
npm i
```
#### auth
```sh
cd auth
npm i
```
#### expiration
```sh
cd expiration
npm i
```
#### orders 
```sh
cd orders
npm i
```
#### payments 
```sh
cd payments 
npm i
```
#### tickets 
```sh
cd tickets
npm i
```

#### run
```sh
skaffold dev
```

#### for runing individually
```sh
cd < dirname >
npm run start 
```


## License

MIT

**Free Software, 💗 !**

  
