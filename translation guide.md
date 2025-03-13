# Fordítási útmutató

## Technikai részletek

### Kulcs-érték párok

A nyelv fájloknak van egy kötött felépítése. Minden sorban egy kulcs és egy érték található:

```
"kulcs" = "érték";
```

A kulcsot NEM változtathatjuk, mert ez alapján találja meg a játék a szöveget. Az értékben lehetnek szövegen kívül ikonok és formázások. Lehetőleg ezeket se változtassuk. Ezek xml tag-ként vannak a szövegben, valahogy így:

```
// Angol
"this_key": "<b>Bold text</b> and a heart <heart/> icon";
// Magyar
"this_key": "<b>Vastag szöveg</b> és egy szív <heart/> ikon";
```

Hasonlóan előfordulhat más jelölés is a szövegekben, mint például a sortörés, ami így néz ki: `\n` hisz minden szövegnek egy sor jut. Ezeket hagyjuk bent a szövegekben és csak a körülötte lévő dolgokat fordítsuk le.

### Kihagyott szövegek

Nem kell mindent lefordítani! Amiket kihagyunk:

| Kategória          | Kulcs                             | Jegyzet                                                                     |
| ------------------ | --------------------------------- | --------------------------------------------------------------------------- |
| Aurora dalszövegek | `aurora_[zene]_[3-4 jegyű szám]`  | Talán később csinálhatunk olyat, hogy angol felirat alatt ott a magyar is   |
| Teljesítmények     | `achievement_[teljesítmény neve]` | Ezeket a Steam kezeli                                                       |
| Tulajdonnevek      | `name_[valami]`                   | Pl. helyek, lelkek, stb. Így könnyebben találnak segítséget az új játékosok |
| Resource csomagok  | `assetpack_name_[csomag]`         | Ez elronthatja a játék betöltését ha nem vigyázunk                          |

A Home-ot lefordíthatjuk Otthon-ra, az elég egyéttelmű. Talán később minden tulajdonnév is mehet, mert minden fordításban megvannak.

#### Credits

A credits részben főleg nevek vannak, kihagyjuk azokat, viszont van pár kulcs, amit fordítunk:

- "credit_realstart"
- "credit_thankbeta"
- "credit_thankyou"
- "credit_tgc" kulcs helyén a fordítók nevei lesznek

### Bizonytalan szövegek

Lehetnek szövegek amiről nehéz eldönteni, hogy mi az és hol van a játékban vagy bizonytalan, hogy hogyan érdemes fordítani. Néha a kulcs segít, de valamikor az sem elég. Ezeket hagyjuk a végére, megpróbálom én kideríteni, hogy hol lehetnek. Mindenki azt a szöveget fordítsa, amiről tudja, hogy hol van a játékban.

### Egyéb technikai részletek

- A fájlok nagyok, időbe telhet a megnyitásuk
- Az eredeti fájlokat NE szerkeszd vagy írd át. Ha mégis történik velük valami, szólj nekem, minden megvan GitHub-on.

## Nyelv és hangnem

### Kihagyott szavak

A [kihagyott szövegekhez](#kihagyott-szövegek) hasonlóan vannak kisebb egységek, amiket kihagyunk. Az egyértelműség, szleng és / vagy nehéz fordíthatóság miatt ezeket hagyjuk ki:

- orbit
- winged light
- wing buff
- *stb. amit még jónak láttok azokról szóljatok és felírom*

### Konzisztencia

Vannak szavak és kifejezések, amiket többféleképp is lehet fordítani, de annyira fontosak a játékban, hogy érdemes lenne figyelni, hogy ezek mindig ugyanúgy legyenek lefordítva.

| Angol         | Magyar                            |
| ------------- | --------------------------------- |
| Call          | Kiáltás / Hívás (ez változhat)    |
| Elder         | Ős                                |
| Quest         | Küldetés                          |
| Season        | Szezon                            |
| Shared Memory | Megosztott Emlék                  |
| Shared Space  | Megosztott Tér                    |
| Spirit        | Lélek (szellem talán jobb lenne?) |
| Temple        | Templom                           |

### Hangnem

A játékost tegezzük és kedvesen, barátságosan szólítsuk meg.

```
// Jó példák
✅ "accept_addfriend" = "Szeretnél ennek a játékosnak a barátja lenni?";
✅ "buddy_request_complete" = "Ez a játékos segíteni fog <1>lelkeket</1> találni neked";
// Rossz példa
❌ "accept_addfriend" = "Szeretné ezt a játékos fölvenni a barát listájára?";
```

### Magyarosítás

Hosszabb szövegek esetében főleg magyarosíthatjuk a szöveget és nem kell pontosan követnünk az angol változatot.

```
// Angol
"buddy_accept_confirm" = "This player needs help collecting spirits. Will you <1>guide</1> them?";
// Magyar
"buddy_accept_confirm" = "Ennek a játékosnak segítségre van szüksége lélek keresésben. <1>Segítesz</1> neki?";
```

### Gombok szövege

Vannak szövegek, amik gombok feliratai. Ezeket próbáljuk az eredeti szöveghez hasonlóan és tömören lefordítani.
