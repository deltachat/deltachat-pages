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

create_po() {
	rm -r translations
	for sfile in ${sfiles[@]} 
	do
		mkdir -p "translations/delta-chat-pages.${sfile}po/"
		txt2po "../en/${sfile}.md" "translations/delta-chat-pages.${sfile}po/en.po"
	done 
}


tx_pull() {
	rm -r translations
	tx pull -a -s   # -a = fetch all translationss, -s = fetches source
}


update_translations() {
	for sfile in ${sfiles[@]}
	do
		for tlang in ${tlangs[@]}
		do
			po2txt -t "../en/${sfile}.md" "translations/delta-chat-pages.${sfile}po/${tlang}.po" "../${tlang}/${sfile}.md"
		done
	done	
}


if [ $1 == "create-po" ]; then
	create_po
elif [ $1 == "tx-pull" ]; then
	tx_pull
elif [ $1 == "update" ]; then
	update_translations	
else
	echo "usage ./t-dance [create-po|tx-pull|update]";	
fi

