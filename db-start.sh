#!/bin/bash
# for single node setup
# sh ./db-setup/single-db.sh

# for multi node setup
sh ./db-setup/node1.sh &
sh ./db-setup/node2.sh &
sh ./db-setup/node3.sh &
# cockroach init --host=localhost:26257 --insecure