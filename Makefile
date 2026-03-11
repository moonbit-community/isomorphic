.PHONY: build-frontend build-backend build serve clean

build-frontend:
	moon build --target js
	cp _build/js/debug/build/frontend/frontend.js public/frontend.js

build-backend:
	moon build --target native

build: build-frontend build-backend

serve: build
	moon run backend --target native

clean:
	rm -f public/frontend.js todos.db
	moon clean
