{
  description = "Jekyll website template";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        formatter = pkgs.nixpkgs-fmt;
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.ruby
            pkgs.jekyll
            pkgs.rubyPackages.jekyll-sitemap
          ];
        };

        packages.default = pkgs.stdenv.mkDerivation {
          name = "deltachat-pages";
          src = ./.;
          buildInputs = [
            pkgs.ruby
            pkgs.jekyll
            pkgs.rubyPackages.jekyll-sitemap
          ];
          buildPhase = ''
            jekyll build
          '';
          installPhase = ''cp -r _site $out'';
        };
      });
}
