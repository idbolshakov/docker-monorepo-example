Docker monorepo example
======================

Usage
-----

1. make sure your system have installed project dependencies:
* `docker`
* `docker-compose`
2. run from current dir: `./scripts/develop [SCOPE] [COMMAND] [PORT=3000] [NODE_VERSION=12]`
* `[SCOPE]` - list of current scopes you can see in `scopes/`
* `[COMMAND]` - list of current commands you can see in `scripts/entrypoints`

### Example
```
# run app-a on 3000 port and node:12 docker image
./scripts/develop app-a run

# run app-b on 3001 port and node:6 docker image
./scripts/develop app-b run 3001 6

# reinstall dependencies on app-a
./scripts/develop app-a reinstall-deps

# build app-b
./scripts/develop app-b build
```
