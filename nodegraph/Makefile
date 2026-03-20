.PHONY: build-frontend build-backend build serve clean

build-frontend:
	moon build --target js
	cp ../_build/js/debug/build/bobzhang/nodegraph/frontend/frontend.js public/frontend.js

build-backend:
	moon build --target native

build: build-frontend build-backend

PORT ?= 4008
serve: build
	moon run backend --target native -- --port $(PORT)

clean:
	rm -f public/frontend.js nodegraph.db
	moon clean
