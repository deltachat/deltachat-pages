#!/bin/bash

# The privacy policy is not on Transifex: every language serves the
# English text verbatim, with only the `lang:` frontmatter telling the
# copies apart.  Run this after editing en/privacy.md.

set -e

cd "$(dirname "$0")/.."

src="en/privacy.md"

if [ "$(grep -c '^lang: en$' $src)" != "1" ]; then
	echo "ERROR: $src has no unique 'lang: en' frontmatter line"
	exit 1
fi

for tlang in $(ls _data/lang/ | sed 's/\.ya\?ml$//'); do
	if [ "$tlang" = "en" ]; then continue; fi
	sed "s/^lang: en\$/lang: $tlang/" $src > "$tlang/privacy.md"
	echo "wrote $tlang/privacy.md"
done
