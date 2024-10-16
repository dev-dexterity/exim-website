#!/bin/bash

# Stage all changes
git add .

# Commit with a timestamped message
git commit -m "Auto commit on $(date '+%Y-%m-%d %H:%M:%S')"

# Push changes to the remote repository
git push origin main
