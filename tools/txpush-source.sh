
# this script copies the source files from `en/` to the transifex server.

# transifex adds new/modified paragraphs to the source files then.
# to get these information back, call `txpull-translations.sh` just after pushing.

# CAVE: you can but you normally should't push the translated files by calling
# `tx push -t` after script execution. pushing translated files is
# dangerous as thex will be easily out of sync with the source files; eg. when
# edited locally or via PR. transifex uses nothing by the index when translated files are
# pushed.
# The only case where pushing sources might be useful is when doing minor typo corrections
# in the source files: txpull - edit source file - txpush.

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

