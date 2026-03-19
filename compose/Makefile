.PHONY: build serve open clean

build:
	moon build --target js
	cp ../_build/js/debug/build/bobzhang/compose-demo/frontend/frontend.js public/frontend.js

serve: build
	cd public && python3 -m http.server 4011

open: build
	open public/index.html

clean:
	rm -f public/frontend.js
	moon clean
