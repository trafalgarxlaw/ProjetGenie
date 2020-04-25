FROM node:12.2.0

# Timezone variable
ENV TIMEZONE=America/Montreal
RUN ln -snf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime && echo ${TIMEZONE} > /etc/timezone

WORKDIR /app/angular

# Install requirements
COPY package.json ./
RUN npm install
RUN npm install -g @angular/cli

COPY . ./

# Start ng server
CMD ng serve --proxy-config proxy.conf.json --open --host 0.0.0.0 