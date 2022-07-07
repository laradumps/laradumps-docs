#!/bin/bash
                  #╔═════════════════════╗#
                  #║   LaraDumps Doc     ║#
                  #╚═════════════════════╝#

# ══════════════ STYLES ═════════

NC='\033[0m'
WHITE='\033[1;37m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
LABEL_ERROR="\n\033[048;5;9m ERROR ${NC} "

#Ascii Logo enconded in Base64
LOGO=$(echo -n "ICAgICAgICAgX18gICAgICAgICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICB8ICBfXyBcICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgfCB8ICAgICBfXyBfIF8gX18gX18gX3wgfCAgfCB8XyAgIF8gXyBfXyBfX18gIF8gX18gIF9fXyAKICAgICAgICB8IHwgICAgLyBfYCB8ICdfXy8gX2AgfCB8ICB8IHwgfCB8IHwgJ18gYCBfIFx8ICdfIFwvIF9ffAogICAgICAgIHwgfF9fX3wgKF98IHwgfCB8IChffCB8IHxfX3wgfCB8X3wgfCB8IHwgfCB8IHwgfF8pIFxfXyBcCiAgICAgICAgfF9fX19fX1xfXyxffF98ICBcX18sX3xfX19fXy8gXF9fLF98X3wgfF98IHxffCAuX18vfF9fXy8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHwgICAgICAgIAogICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2xhcmFkdW1wcy9sYXJhZHVtcHMgICAgIHxffCAgICA=" | base64 --decode)

# ══════════════ FUNCTIONS ═════════

checkNpm () {
  if ! npm --version >/dev/null 2>&1; then
    echo -e "${LABEL_ERROR}${GREEN}Npm${NC} is required! Visit: https://nodejs.org/en/"
    exit 1;
  fi
}

checkDocsify() {
  if ! docsify --version >/dev/null 2>&1; then
    echo -e "${GREEN}docsify-cli${NC} is required! Would you like to install it? ${GREEN}[y/N]${NC}?"
    read ANSWER

    if [ "$ANSWER" != "${ANSWER#[Yy]}" ]; then 
          npm i docsify-cli -g
      else
        echo -e "${LABEL_ERROR}aborting installation!"
        exit 1;
    fi
  fi 
}

# ══════════════ SCRIPT ═════════

echo -e "${YELLOW}${LOGO}${NC}\n"

checkNpm
checkDocsify

echo -e "🙏 Thank you for contributing!"

docsify serve docs