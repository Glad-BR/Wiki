certbot certonly --webroot \
            -w ./static \
            -d wiki.scatterbox.dev \
            --non-interactive \
            --agree-tos \
            --email admin@scatterbox.dev \