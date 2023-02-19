#!/bin/bash

# ══════════════ STYLES ═════════

NC='\033[0m'
RED='\033[0;31m'
WHITE='\033[1;37m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
LABEL_ERROR="\n\033[048;5;9m ❌ ERROR ${NC} "
LABEL_INFO="\n\033[0;38;5;227;48;5;38m 💡 INFO  ${NC} "


# ═══════════ VARIABLES ═════════

PRINT_PATHS=false
DOCS_PATH="../docs"
README_PATH="../README.md"
MIN_ALERT_LEVEL="suggestion"

# ═══════════ ARGUMENTS ═════════

while [ $# -gt 0 ]; do
  case "$1" in
    --path*|-p*)
      if [[ "$1" != *=* ]]; then shift; fi
      DOCS_PATH="${1#*=}"
      ;;
    --list|-l)
      PRINT_PATHS=true
      ;;
    --ci)
      MIN_ALERT_LEVEL="error"
      ;;
    --help|-h)
      echo -e "${GREEN}Available options:${NC}\n"
      echo -e "${YELLOW}--path${NC}       ${GREEN}Set Docs Folder Path"
      echo -e "${YELLOW}--list${NC}       ${GREEN}List Docs Files and terminate"
      echo -e "${YELLOW}--ci{NC}          ${GREEN}Stop on error"
      exit 0
      ;;
    *)
      echo -e "${LABEL_ERROR}Invalid argument\n"
      exit 1
      ;;
  esac
  shift
done

# ════════════ DOCS ═════════

# Find all .md in folder; no deept restriction
DOCS_PATH="${DOCS_PATH%/}"

DOCS=$(find $DOCS_PATH -type f -name "*.md")

#Include the Project's README 
DOCS="$DOCS $README_PATH"

if [ "$PRINT_PATHS" = true ]; then
  echo "::set-output name=LIST::[$DOCS]" | tr '\n' ' ' 
  exit 0
fi

# ═══════════ VALE ═════════

if ! vale --version >/dev/null 2>&1; then
  echo -e "${LABEL_ERROR}Vale is required. Aborting!"
  exit 1;
fi

if [ ! -d "./styles" ]; then
  vale sync
fi

vale $DOCS --minAlertLevel $MIN_ALERT_LEVEL

if [ $? -eq 1 ]; then
    echo -e "${LABEL_INFO}If the terms marked as ${RED}"error"${NC} are ${GREEN}correct and belong to this project${NC}, please add them to the vocabulary file: ${YELLOW}./styles/Vocab/Custom/accept.txt${NC} and run this check again.\n\nRead more here: ${GREEN}https://vale.sh/docs/topics/vocab/${NC}"
fi