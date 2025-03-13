# Sky Magyar fordítás

Magyar fordítás a Sky: Children of the Light játékhoz.

[Nézd meg a haladást itt](progress.md)

## Telepítés

> **Figyelem!** A fordítások csak a PC-s verzióhoz készültek. Technikailag más platformon is működnének, de a telepítés módja máshol sokkal bonyolultabb és kockázatosabb.

1. Itt a repo-ban nyisd meg a `translations` majd azon belül a legfrissebb build mappáját (legnagyobb szám). Nyisd meg, majd a jobb felül található kis gombbal töltsd le a játékodhoz illő nyelv fájlt (`Localizable.strings`).
1. Steam-en jobb klikkelj a Sky-ra és nyomj rá a *"Helyi fájlok böngészése"* gombra.
1. A játék fájljai között nyisd meg a `data/Strings/Base.lproj` mappát.
1. Másold be a letöltött nyelv fájlt a mappába és írd felül az eredetit. (Opcionálisan csinálhatsz biztonsági mentést az eredetiről.)
1. Indítsd el / újra a játékot.

Ha valami probléma van, esetleg nem indul a játék ezek után, akkor Steam-en nyomj a játék beállításain belül a *"Helyi fájlok ellenőrzése"* gombra.

## Közreműködés

Ha szeretnél segíteni a fordításban, a következőkre lesz szükséged:

- GitHub fiók
- PC vagy laptop
- Git kliens ([GitHub Desktop-ot ajánlom](https://github.com/apps/desktop), de a [parancssoros verzió](https://git-scm.com/) vagy a [VSCode-ba](https://code.visualstudio.com/) épített git is jó)
- Szövegszerkesztő ([VSCode](https://code.visualstudio.com/), Notepad++, egyszerű jegyzettömb, stb.)

### Fordítás menete

1. Kérj hozzáférést tőlem a projekthez és indíts egy új ágat vagy csak nyomj rá a [Fork](https://github.com/shadows-of-the-light/sky-hungarian-translation/fork) gombra a projekt GitHub oldalán.
1. Klónozd le a fork-ot vagy saját ágad a gépedre és ellenőrizd, hogy a projekt legfrissebb verziójával dolgozol.
1. Nyisd meg a gépeden a választott szövegszerkesztőddel a legutolsó nyelv fájlt a `translations` mappában.
1. Fordíts, javíts elírásokat, stb. a fájlban.
1. Ha kész vagy egy részlettel, commitold a változásokat és pushold fel a GitHub-ra.
1. Indíts egy Pull Requestet a fő repo-ba, hogy átnézhessük együtt a változásokat.
1. Ha valami nem okés, akkor itt még lehet javítani, ha minden rendben, akkor összefésüljük a változásokat a fő ágba.

### Mappa szerkezet

```yml
- translations            # Fordítások
  - [build number]        # Játék verziója
    - Localizable.strings # Lefordított fájl
    - origianl.strings    # Eredeti fájl
- scripts                 # Segéd scriptek
- progress.md             # Jelenlegi haladásunk (generált)
- translation guide.md    # Fordítási útmutató
```

## Hogyan és mit fordítsunk?

[Fordítási útmutató](translation%20guide.md)
