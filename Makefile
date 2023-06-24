BACKEND_COMPOSE_FILE=docker-compose-backend.yml
BACKEND_TARGETS=be-start be-stop be-build be-drop be-restart be-bash be-psql be-load-dump
DB_DUMP_FILE=./dump.sql

FRONTEND_DOCKERFILE=./Dockerfile.frontend
FRONTEND_TARGETS=fe-build fe-start

SICP_DOCKERFILE=./Dockerfile.sicp
SICP_TARGETS=sicp-build

.PHONY: $(BACKEND_TARGETS) $(FRONTEND_TARGETS) $(SICP_TARGETS)

$(BACKEND_TARGETS): export BACKEND_DB_NAME=sa-backend
$(BACKEND_TARGETS): export BACKEND_DB_HOST=host.docker.internal
$(BACKEND_TARGETS): export BACKEND_DB_USER=postgres

# Docker compose does not automatically rebuild images
# See https://github.com/docker/compose/issues/1487
be-start:
	@docker compose -f ${BACKEND_COMPOSE_FILE} up -d

be-stop:
	@docker compose -f ${BACKEND_COMPOSE_FILE} stop

be-build:
	@docker compose -f ${BACKEND_COMPOSE_FILE} build --no-cache

be-drop:
	@docker compose -f ${BACKEND_COMPOSE_FILE} down

be-bash:
	@docker compose -f ${BACKEND_COMPOSE_FILE} exec backend bash

be-psql:
	@docker compose -f ${BACKEND_COMPOSE_FILE} exec backend psql -U ${BACKEND_DB_USER} -h ${BACKEND_DB_HOST} ${BACKEND_DB_NAME}

be-load-dump:
	@docker compose -f ${BACKEND_COMPOSE_FILE} stop backend
	@docker compose -f ${BACKEND_COMPOSE_FILE} run --rm backend sh -c "mix do ecto.drop, ecto.create"
	@docker compose -f ${BACKEND_COMPOSE_FILE} cp ${DB_DUMP_FILE} backend:/tmp/dump.sql
	@docker compose -f ${BACKEND_COMPOSE_FILE} start backend
	@docker compose -f ${BACKEND_COMPOSE_FILE} exec backend sh -c "psql -U ${BACKEND_DB_USER} -h ${BACKEND_DB_HOST} ${BACKEND_DB_NAME} < /tmp/dump.sql"

be-restart: be-stop be-start

fe-build:
	@docker build -f ${FRONTEND_DOCKERFILE} --no-cache -t sa-frontend .

fe-start:
	@docker run -it --rm -p 80:3000 sa-frontend

sicp-build:
	@docker build -f ${SICP_DOCKERFILE} --no-cache -t sa-sicp .
