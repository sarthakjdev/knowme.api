FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

RUN unlink /var/log/nginx/access.log
RUN unlink /var/log/nginx/error.log

EXPOSE 80 