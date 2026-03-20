.PHONY: build-frontend build-backend build serve serve-backend clean

build-frontend:
	moon build --target js
	cp ../_build/js/debug/build/bobzhang/nodegraph/frontend/frontend.js public/frontend.js

build-backend:
	moon build --target native

build: build-frontend build-backend

PORT ?= 4008
serve: build
	@echo "Starting API server on port 4009..."
	@moon run backend --target native -- --port 4009 &
	@sleep 2
	@echo "Starting frontend on http://localhost:$(PORT)"
	@cd public && python3 -m http.server $(PORT)

clean:
	rm -f public/frontend.js nodegraph.db
	moon clean
