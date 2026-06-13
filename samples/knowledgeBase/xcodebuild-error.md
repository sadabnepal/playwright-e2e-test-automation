# Fix: `xcodebuild` Requires Xcode Error

## Error

```
sudo xcodebuild -license accept
Password:
xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance
```

## Cause

`xcode-select` is pointing to the lightweight Command Line Tools instead of the full Xcode app. This typically happens after a CLT-only install or a Xcode update.

---

## Fix

### Step 1 — Confirm Xcode is Installed

Open **Finder → Applications** and confirm `Xcode.app` is present. If not, install it from the [Mac App Store](https://apps.apple.com/app/xcode/id497799835) first.

### Step 2 — Switch the Active Developer Directory

```bash
sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer
```

> **Note:** If Xcode is installed under a different name (e.g. `Xcode-16.app`), adjust the path accordingly:
> ```bash
> sudo xcode-select -switch /Applications/Xcode-16.app/Contents/Developer
> ```

### Step 3 — Accept the License

```bash
sudo xcodebuild -license accept
```

### Step 4 — Verify

```bash
xcode-select -p
# Expected output: /Applications/Xcode.app/Contents/Developer
```