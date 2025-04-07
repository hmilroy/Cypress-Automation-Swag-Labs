#!/bin/bash

cd /Users/milroyperera/Personal/Cypress_Automation_Swag_Labs

# File to store how many times this script has run
COUNT_FILE="run_count.txt"
HEARTBEAT_FILE="heartbeat.txt"

# Create count file if it doesn't exist
if [ ! -f "$COUNT_FILE" ]; then
  echo 0 > "$COUNT_FILE"
fi

# Read current run count
COUNT=$(cat "$COUNT_FILE")

# Exit if run count reached 14
if [ "$COUNT" -ge 14 ]; then
  echo "Max run count reached. Exiting."
  exit 0
fi

# ✏️ Make an auto change to ensure something to commit
echo "Last run: $(date '+%Y-%m-%d %H:%M:%S')" > "$HEARTBEAT_FILE"

# 🧠 Git automation
MESSAGE="Auto commit - $(date '+%Y-%m-%d %H:%M:%S')"
git add .
git commit -m "$MESSAGE"
git push origin main

# 🔢 Update the run count
COUNT=$((COUNT + 1))
echo "$COUNT" > "$COUNT_FILE"
