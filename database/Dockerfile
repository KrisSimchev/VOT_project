FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=my-secret-pw
ENV MYSQL_DATABASE=mydatabase
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=mypass

COPY setup.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
