# IP Adress tracker

Rastreador de IPs públicos

## Visão Geral

Esse projeto é um rastreador de IPs onde o usuário coloca o IP e o projeto irá criar um mapa na exata localização do endereço de onde esta hospedado esse IP, para criação do projeto utilizei html, less para criar um layout responsivo, Jquery para consumir as APIs e para criação do mapa, e também o Grunt para dar build o projeto e criar uma versão mais leve, utilizei os plugins: htmlmin, imagemin e uglify para minificação dos arquivos, grunt-contrib-less para compilar e minificar o Less e grunt-string-replace para assim que o build for concluido ele trocar os links do css e do javascript para versão minificada

## APIs

[Leaflet](https://leafletjs.com/) para criação do mapa
[Geo Ipify](https://geo.ipify.org/) para emitir as informações do IP solicitado pelo usuário

## Instalação
```bash
npm install
npm run grunt
```

## Build
```bash
npm run build
```
