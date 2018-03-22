
# after pulling with txpull, this script pushes all local files back to transifex.
# this is esp. useful as you can modifiy the english source strings in between - without breaking all translations afterwards.

read -p "Push all translation files to Transifex? This will OVERWRITE all changes on Transifex since the last txpull!"

cp_lang_file() {
	cp "../$2/$1.md" "translations/delta-chat-pages.$1md/$2.md"
}

cp_lang_files() {
	cp_lang_file $1 de
	cp_lang_file $1 en     # also copy back the source, this is the only way to update the english strings
	cp_lang_file $1 es
	cp_lang_file $1 fr
	cp_lang_file $1 it
	cp_lang_file $1 pt
	cp_lang_file $1 ru
	cp_lang_file $1 sq
}

cp_lang_files blog
cp_lang_files contribute
cp_lang_files download
cp_lang_files features
cp_lang_files help
cp_lang_files imprint
cp_lang_files index

tx push -s    # -s: push source, -t: push translations, -f: ignore timestamps; see https://docs.transifex.com/client/push

