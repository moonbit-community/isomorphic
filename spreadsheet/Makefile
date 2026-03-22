.PHONY: build-frontend build-backend build serve open clean

build-frontend:
	moon build --target js
	cp ../_build/js/debug/build/bobzhang/spreadsheet/frontend/frontend.js public/frontend.js

build-backend:
	moon build --target native

build: build-frontend build-backend

PORT ?= 4012
serve: build
	moon run backend --target native -- --port $(PORT)

open: build
	open public/index.html

clean:
	rm -f public/frontend.js spreadsheet.db
	moon clean
