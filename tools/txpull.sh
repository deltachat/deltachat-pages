
# this script pulls all files from transifex and copies them to the correct local directories

# before you can use this script, you have to initialize Transifex in this folder:
# tx init --user=api --pass=<your api token>
# tx set --auto-remote https://www.transifex.com/projects/p/delta-chat-pages/

# common information about the Transifex CLI client can be found at:
# https://docs.transifex.com/client/


rm -r translations
tx pull -a -s   # -s fetches the source file, we do not copy it, but we need it for pushing back

cp_lang_file() {
	cp "translations/delta-chat-pages.$1md/$2.md" "../$2/$1.md"
}

cp_lang_files() {
	cp_lang_file $1 de
	# _lang_file $1 en   # we do not copy the source as the source cannot be modified at Trasifex
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

