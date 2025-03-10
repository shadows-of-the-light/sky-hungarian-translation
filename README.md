# Sky Magyar fordítás

Magyar fordítás a Sky: Children of the Light játékhoz.

[Nézd meg a haladást itt](progress.md)

## Telepítés

1. Töltsd le a játékodhoz illő nyelv fájlt a `translations` mappából. A mappán belül minden mappának a neve egy szám, ami a játék build számát jelöli.
1. Steam-en jobb klikkelj a Sky-ra és nyomj rá a "Helyi fájlok böngészése" gombra.
1. Nyisd meg a `data/Strings/Base.lproj` mappát.
1. Másold be a letöltött fájlt a mappába és írd felül az eredetit.
1. Indítsd újra a játékot.

Ha valami probléma van, esetleg nem indul a játék ezek után akkor Steam-en nyomj a játék beállításain belül a "Helyi fájlok ellenőrzése" gombra.

## Közreműködés

### Mappa szerkezet

```yml
- translations
  - [build number]        # Játék verziója
    - Localizable.strings # Lefordított fájl
    - origianl.strings    # Eredeti fájl
- scripts                 # Segéd scriptek
- progress.md             # Jelenlegi haladásunk (generált)
- translation guide.md    # Fordítási útmutató
```

### Fordítás

[Fordítási útmutató](translation%20guide.md)

Ha szeretnél segíteni, írj nekem Discordon. Tudok adni jogokat és megmutathatom, hogy hogyan tudsz segíteni.

### Elírások

Ha látsz egy elírást, létrehozhatsz egy issue-t vagy PR-t a typo címkével GitHub-on vagy írhatsz nekem Discordon.
