set -e && pnpm build
VERSION="v$(pnpm pkg get version| tr -d \")"

cd build/

# Linux
mv brillante-linux brillante-$VERSION
mkdir brillante-linux-$VERSION
mv brillante-$VERSION brillante-linux-$VERSION

7z a brillante-linux-$VERSION.7z brillante-linux-$VERSION
sha256sum brillante-linux-$VERSION.7z > brillante-linux-$VERSION.7z.sha256

zip -r brillante-linux-$VERSION.zip brillante-linux-$VERSION
sha256sum brillante-linux-$VERSION.zip > brillante-linux-$VERSION.zip.sha256

rm -r brillante-linux-$VERSION

# Windows
mv brillante-win.exe brillante-$VERSION.exe
mkdir brillante-windows-$VERSION
mv brillante-$VERSION.exe brillante-windows-$VERSION

7z a brillante-windows-$VERSION.7z brillante-windows-$VERSION
sha256sum brillante-windows-$VERSION.7z > brillante-windows-$VERSION.7z.sha256

zip -r brillante-windows-$VERSION.zip brillante-windows-$VERSION
sha256sum brillante-windows-$VERSION.zip > brillante-windows-$VERSION.zip.sha256

rm -r brillante-windows-$VERSION
rm index.js

cd .. && [ -d dist ] && rm -r dist
mkdir -p dist && mv build/* dist && rmdir build
