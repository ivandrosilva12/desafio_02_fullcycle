FROM node:15

# Define a workdir dentro da imagem
WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.7.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Copia ficheiros desta para a workdir
COPY . .

RUN npm install

# Comando para execucao da app
#CMD [ "node", "index.js" ]

# Porta para acesso via containers ou host
EXPOSE 3000
