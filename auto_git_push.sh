#!/bin/bash

# Your commit message
MESSAGE="commit - $(date '+%Y-%m-%d %H:%M:%S')"

# Run the git commands
git add .
git commit -m "$MESSAGE"
git push origin main
