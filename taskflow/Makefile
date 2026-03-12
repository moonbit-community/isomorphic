.PHONY: build-frontend build-backend build serve clean

build-frontend:
	moon build --target js
	mkdir -p public
	cp _build/js/debug/build/frontend/frontend.js public/frontend.js

build-backend:
	moon build --target native

build: build-frontend build-backend

PORT ?= 4006
serve: build
	moon run backend --target native -- --port $(PORT)

clean:
	rm -f public/frontend.js taskflow.db
	moon clean
