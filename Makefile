BACKEND_COMPOSE_FILE=docker-compose-backend.yml
BACKEND_TARGETS=be-start be-stop be-build be-drop be-restart

.PHONY: $(BACKEND_TARGETS)

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

be-restart: be-stop be-start
