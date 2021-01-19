echo potential errors, if any:

# a space between link text and link is a typical error
grep --include='*.md' -r "\\] [(]" .
