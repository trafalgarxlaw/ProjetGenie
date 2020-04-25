FROM ubuntu:18.04

# Timezone variable
ENV TIMEZONE=America/Montreal
RUN ln -snf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime && echo ${TIMEZONE} > /etc/timezone

# Remove all interaction
ARG DEBIAN_FRONTEND=noninteractive

# Python arg variables
ARG PYTHON_VERSION=3.8.1
ARG PYTHON_EXECUTOR=python3.8

RUN apt update -qq

# Dependencies
RUN apt install -y build-essential wget checkinstall libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev \
                    libgdbm-dev libc6-dev libbz2-dev libffi-dev zlib1g-dev \
                    python-pip python-dev python3-pip
WORKDIR /tmp

# Install python correct version
RUN wget https://www.python.org/ftp/python/${PYTHON_VERSION}/Python-${PYTHON_VERSION}.tgz
RUN tar xzf Python-${PYTHON_VERSION}.tgz

WORKDIR /tmp/Python-${PYTHON_VERSION}
RUN ./configure --enable-optimizations
RUN make altinstall

# Output current version
RUN ${PYTHON_EXECUTOR} --version

# Install flask
WORKDIR /app/flask
RUN pip install --upgrade pip
COPY ./requirements.txt ./requirements.txt
RUN pip3.8 install -r requirements.txt

# Copy all files
COPY . /app/flask


# Start the app
ENTRYPOINT [ "python3.8" ]
CMD [ "app.py" ]
