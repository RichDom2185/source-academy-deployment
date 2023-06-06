#!/bin/bash

set -euo pipefail

# Create, migrate, and seed database if it doesn't exist.
if [[ -z `psql -h "$PG_HOST" -U "$PG_USER" -lt | cut -d '|' -f 1 | grep -w "$PG_DATABASE"` ]]; then
    echo "Database $PG_DATABASE does not exist. Creating..."
    mix ecto.setup
else
    echo "Database $PG_DATABASE already exists. Skipping creation..."
fi

# Start the Phoenix server.
mix phx.server
