# GitHub SSH setup — CaptainsLog

This document distills the exact steps I performed to enable SSH pushes for the CaptainsLog repository, the commands I ran, and troubleshooting notes.

## Goal
Enable SSH authentication for `git@github.com:BrianHoltz/CaptainsLog.git`, switch the repository remote to SSH, and push the local `main` branch.

## What I did (summary)
1. Located an existing SSH key pair (~/.ssh/id_rsa and ~/.ssh/id_rsa.pub).
2. Fixed SSH key file permissions so OpenSSH will load the private key.
3. Added the private key to the ssh-agent and macOS keychain.
4. Copied the public key to the clipboard and had the user add it to GitHub.
5. Created/updated a minimal `~/.ssh/config` entry for github.com.
6. Verified SSH authentication to GitHub (ssh -T git@github.com).
7. Replaced the repo remote URL with the SSH URL and pushed `main` to origin.

## Commands I ran (representative)

# Inspect repo and remotes
```bash
cd /path/to/CaptainsLog
git status --porcelain -b
git remote -v
```

# Show and copy public key to clipboard
```bash
cat ~/.ssh/id_rsa.pub   # inspect
pbcopy < ~/.ssh/id_rsa.pub   # copy to clipboard (macOS)
open 'https://github.com/settings/ssh/new'   # open GitHub add-key page
```

# Fix permissions (important)
```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
```

# Add private key to ssh-agent and macOS keychain
```bash
# start agent if needed
eval "$(ssh-agent -s)"
# macOS option (modern OpenSSH)
ssh-add --apple-use-keychain ~/.ssh/id_rsa
# or fallback
ssh-add ~/.ssh/id_rsa
```

# Optional: add a simple ~/.ssh/config entry
```text
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```

# Test SSH authentication
```bash
ssh -T git@github.com   # should report: Hi BrianHoltz! You've successfully authenticated
```

# Switch repo remote to SSH and push
```bash
git remote set-url origin git@github.com:BrianHoltz/CaptainsLog.git
git add CaptainsLog.md
git commit -m "Add CaptainsLog"   # if not already committed
git push -u origin main
```

## Troubleshooting notes (encountered issues & resolutions)
- "Permissions ... are too open" for the private key: fixed with `chmod 600 ~/.ssh/id_rsa` and `chmod 700 ~/.ssh`.
- "The agent has no identities": add the key with `ssh-add` (enter passphrase once); using `--apple-use-keychain` stores passphrase in the macOS keychain.
- If Git prompts for username/password when remote is still HTTPS, switch the remote URL to the SSH form as shown above.
- If you prefer HTTPS for yourself or other collaborators, create a GitHub Personal Access Token (PAT) and configure macOS credential helper; PATs are required for HTTPS push auth.

## Notes & recommendations
- SSH is recommended for developer workflows on macOS because it avoids repeated PAT entry and integrates with the keychain.
- If you prefer a modern key type, generate an `ed25519` key:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/id_ed25519
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
pbcopy < ~/.ssh/id_ed25519.pub
# then add the pubkey to GitHub
```
- IntelliJ IDEA: ensure the IDE uses the system Git (Preferences → Version Control → Git) and enable VCS integration (VCS → Enable Version Control Integration → Git). For the classic Local Changes tab, disable the new/unified commit UI in Preferences → Version Control → Commit.

## Final state after my run
- SSH authentication to GitHub succeeded for `git@github.com` (user: BrianHoltz).
- Repository remote updated to `git@github.com:BrianHoltz/CaptainsLog.git`.
- The `main` branch was pushed and set to track `origin/main`.

If you want the document revised (shorter, more detailed commands, or steps for generating a new key), tell me how you'd like it edited and I will update `docs/GithubSetup.md` accordingly.

