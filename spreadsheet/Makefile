.PHONY: build-frontend build-backend build serve open clean

build-frontend:
	moon build --target js
	cp ../_build/js/debug/build/bobzhang/spreadsheet/frontend/frontend.js public/frontend.js

build-backend:
	moon build --target native

build: build-frontend build-backend

serve: build
	../_build/native/debug/build/bobzhang/spreadsheet/backend/backend.exe

open: build
	open public/index.html

clean:
	rm -f public/frontend.js spreadsheet.db
	moon clean
