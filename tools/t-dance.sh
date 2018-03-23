#!/bin/bash


# before you can use this script the first time, you have to initialize Transifex in this folder:
# $ tx init --user=api --pass=<your api token>
#
# to create the hidden `.tx` folder, use:
# $ tx set --auto-remote https://www.transifex.com/projects/p/delta-chat-pages/

# common information about the Transifex CLI client can be found at:
# https://docs.transifex.com/client/


sfiles=(blog contribute download features help imprint index)
tlangs=(de es fr it pt ru sq)  # do not add `en` to this list


tx_pull() {
	rm -r translations
	tx pull -a   # -a = fetch all translationss, -s = fetches source
}


update_markdown_files() {
	for sfile in ${sfiles[@]}
	do
		for tlang in ${tlangs[@]}
		do
			po2txt --progress=none --template="../en/${sfile}.md" "translations/delta-chat-pages.${sfile}po/${tlang}.po" "../${tlang}/${sfile}.md"
		done
	done	
}


reset_markdown_files() {
	for tlang in ${tlangs[@]}
	do
		git checkout "../${tlang}/"
	done
}


tx_push_sources() {
	for sfile in ${sfiles[@]}
	do
		txt2po --progress=none "../en/${sfile}.md" "translations/delta-chat-pages.${sfile}po/en.po"
	done
	tx push -s
}


if [ $1 == "tx-pull" ]; then
	tx_pull
elif [ $1 == "md-update" ]; then
	update_markdown_files	
elif [ $1 == "md-reset" ]; then
	reset_markdown_files
elif [ $1 == "tx-push-sources" ]; then
	tx_push_sources
else
	echo "usage: ./t-dance {tx-pull|md-update|md-reset|tx-push-sources}";
	echo "to push a single language: tx push -t -l <lang>"
fi

