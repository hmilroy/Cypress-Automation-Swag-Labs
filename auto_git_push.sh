#!/bin/bash
# Go to your Git project folder
cd /Users/milroyperera/Personal/Cypress_Automation_Swag_Labs

# Your commit message
MESSAGE="commit - $(date '+%Y-%m-%d %H:%M:%S')"

# Run the git commands
git add .
git commit -m "$MESSAGE"
git push origin main
