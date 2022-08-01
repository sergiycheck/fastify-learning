# !/bin/sh

docker run --name some-postgres \
-e POSTGRES_PASSWORD=example \
-e POSTGRES_USER=postgres \
-e POSTGRES_DB=mydb \
-p 5435:5432 \
-d postgres