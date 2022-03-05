#!/bin/bash -eu
if [ -z "${APIURL:-}" ]; then
    APIURL_JSON=undefined
else
    APIURL_JSON=$(printf '"%s"\n' "${APIURL}")
fi

cat <<EOF
window.REACT_APP_APIURL=${APIURL_JSON};
EOF