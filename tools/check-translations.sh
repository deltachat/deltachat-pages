echo potential errors, if any:

# a space between link text and link is a typical error
grep --include='*.md' --exclude='releases.md' -r "\\] [(]" .
