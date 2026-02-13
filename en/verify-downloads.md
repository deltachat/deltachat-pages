---
title: Verify Downloads
lang: en
---

# Verify Downloads

## Android

For Android, you can verify the signing certificate on the APK matches one of the following SHA256 fingerprints:  

* For F-Droid downloads:  
  `{% include fingerprint-f-droid %}`

* Other APK downloads:  
  `{% include fingerprint-local %}`

To print the SHA256 fingerprints of the APK signing certificate you can use eg.  
`keytool -printcert -jarfile <APK-file>`

## Desktop

To verify the integrity and authenticity of Delta Chat Desktop downloads, follow these steps:

### Step 1: Download the Required Files

Download the release file and `signature.asc` from the download directory. The `signature.asc` file contains SHA512 checksums and is cryptographically signed.

### Step 2: Verify the Download

The signature.asc file is signed with the following key:

**Primary Key Fingerprint:**
`63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308`

**Public Key:** [deltachat_certificate.asc.txt](../assets/deltachat_certificate.asc.txt)
**Also available on:** [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu)

#### Using GPG:

```bash
# Import the public key from downloaded key
gpg --import deltachat_certificate.asc.txt

# OR via curl from website
curl https://delta.chat/assets/deltachat_certificate.asc.txt | gpg --import


# Verify signature and file integrity in one command
gpg --decrypt signature.asc | shasum -a 512 --ignore-missing -c -
```

--ignore-missing is only added to supress warnings for not downloaded files that have a checksum in the list

**Expected output:**
```
gpg: Good signature from "deltachat-signing@merlinux.eu" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
<filename>: OK
```

The warning is normal - the signature is valid, but GPG warns because you haven't explicitly trusted the key. **Important:** Verify the fingerprint matches the one shown above.

If you want to suppress this warning in the future (optional):
```bash
gpg --lsign-key deltachat-signing@merlinux.eu
```

#### If GPG is not available just check the filesums (less secure)

```bash
cat signature.asc | grep deltachat | shasum -a 512 --ignore-missing -c -
```
grep is needed to extract only the lines with checksums from signature.asc

#### Using rsop (alternative):

```bash
cat signature.asc | rsop inline-verify deltachat_certificate.asc.txt
```

### Complete Example

```bash
# Download the files
wget https://download.delta.chat/desktop/v2.35.0/deltachat-desktop_2.35.0_amd64.deb
wget https://download.delta.chat/desktop/v2.35.0/signature.asc

# Import key
gpg --import deltachat_certificate.asc.txt

# Verify signature and file integrity
gpg --decrypt signature.asc | shasum -a 512 -c -
```

### Public Key Block

```
-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEaDSKLBYJKwYBBAHaRw8BAQdAbpU7t0wU34c3csvF60TBF+8NoH+xxew6vpG4
zjHdSlrNHWRlbHRhY2hhdC1zaWduaW5nQG1lcmxpbnV4LmV1wo8EEBYIADcCGQEF
Amg0iiwCGwMICwkIBwoNDAsFFQoJCAsCFgIBJxYhBGPNH4FbpWBRg3aZnGJuJsgW
lRMIAAoJEGJuJsgWlRMIQPoBAMjOBiayYuO2Eukfk1nC05sAOWeuEHuPnFugagMN
4ZjQAQCTS+YU83ydgv38sK6P5DykrrOaJRpxCA8K4xeRAPwlAM44BGg0iiwSCisG
AQQBl1UBBQEBB0Au68F0n/3QcRDzr2C3NYba3kCow4HkT/KnQs0YatVGdgMBCAfC
eAQYFggAIAUCaDSKLAIbDBYhBGPNH4FbpWBRg3aZnGJuJsgWlRMIAAoJEGJuJsgW
lRMIMYAA/3DQ+rGyobJzQjLcXgG3ZZoUe/WqIFZi2kIvG1k4h9uaAP9IwEKD/BmE
nHM0/o16fERF1PNx1mqPhUsXYQmUFPmeCg==
=isjO
-----END PGP PUBLIC KEY BLOCK-----
```

Download: [deltachat_certificate.asc.txt](../assets/deltachat_certificate.asc.txt)
