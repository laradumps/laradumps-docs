#!/bin/bash
                  #╔═════════════════════╗#
                  #║   LaraDumps Doc     ║#
                  #╚═════════════════════╝#

# ══════════════ STYLES ═════════

NC='\033[0m'
GREEN='\033[0;32m'
LABEL_ERROR="\n\033[048;5;9m ERROR ${NC} "

#Ascii Logo enconded in Base64
LOGO=$(echo -n "XDAzM1sxOzMzbSAgICAgICAgIF9fICAgICAgICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgfCAgX18gXCAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgIHwgfCAgICAgX18gXyBfIF9fIF9fIF98IHwgIHwgfF8gICBfIF8gX18gX19fICBfIF9fICBfX18gCiAgICAgICAgfCB8ICAgIC8gX2AgfCAnX18vIF9gIHwgfCAgfCB8IHwgfCB8ICdfIGAgXyBcfCAnXyBcLyBfX3wKICAgICAgICB8IHxfX198IChffCB8IHwgfCAoX3wgfCB8X198IHwgfF98IHwgfCB8IHwgfCB8IHxfKSBcX18gXAogICAgICAgIHxfX19fX19cX18sX3xffCAgXF9fLF98X19fX18vIFxfXyxffF98IHxffCB8X3wgLl9fL3xfX18vCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB8ICAgICAgICAKICAgICAgICAgIGh0dHBzOi8vbGFyYWR1bXBzLmRldiAgICAgICAgICAgICAgICAgICAgICB8X3wgICAgXDAzM1swbQ==" | base64 --decode)

# ══════════════ FUNCTIONS ═════════

checkNpm () {
  if ! npm --version >/dev/null 2>&1; then
    echo -e "${LABEL_ERROR}${GREEN}Npm${NC} is required! Visit: https://nodejs.org/en/"
    exit 1;
  fi
}

# ══════════════ SCRIPT ═════════

echo -e "${LOGO}\n"

echo -e "🙏 Thank you for contributing!\n"

checkNpm

npm install

npm run docs:dev
