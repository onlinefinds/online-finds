# Online Finds

Eine einfache, statische Affiliate-Produktseite. Kein Build-Tool nötig – nur HTML, CSS und JavaScript.

## Dateien

- `index.html` – Seitenstruktur (Header, Suche, Kategorien, Footer)
- `style.css` – gesamtes Design
- `products.js` – **hier trägst du deine Produkte und Affiliate-Links ein**
- `script.js` – Logik für Suche, Filter und Anzeige

## Auf GitHub veröffentlichen (GitHub Pages)

1. Erstelle ein neues Repository auf GitHub, z.B. `online-finds`.
2. Lade diese vier Dateien (`index.html`, `style.css`, `products.js`, `script.js`) ins Repository hoch (per Weboberfläche "Add file → Upload files" oder per `git push`).
3. Gehe im Repository zu **Settings → Pages**.
4. Wähle bei "Branch" den Branch `main` und den Ordner `/ (root)`, dann "Save".
5. Nach ein paar Minuten ist die Seite unter `https://DEIN-BENUTZERNAME.github.io/online-finds/` erreichbar.

## Produkte anpassen

Öffne `products.js` und bearbeite die Liste. Für jedes Produkt:

```js
{
  id: 9,
  title: "Produktname",
  category: "tech",              // muss zu einer der Kategorien in index.html passen
  image: "https://...",          // Produktbild-URL
  price: 49.90,
  oldPrice: 69.90,                // optional, für Streichpreis. Sonst: null
  rating: 4.5,                    // 0–5
  reviews: 120,
  featured: false,                // true = zeigt den "Fund des Tages"-Stempel
  affiliateUrl: "https://www.amazon.de/dp/XXXX?tag=DEIN-TAG"
}
```

## Wichtig: Rechtliches

- Der Disclosure-Hinweis oben auf der Seite ("Diese Seite enthält Affiliate-Links…") sollte **nicht entfernt** werden – bei den meisten Partnerprogrammen (z.B. Amazon PartnerNet) ist eine solche Kennzeichnung Pflicht.
- Prüfe die genauen Anforderungen deines jeweiligen Partnerprogramms (z.B. Pflicht-Wortlaut, Impressum, Widerrufsrecht bei Vertrieb in der Schweiz/EU).
- Alle Buttons verlinken mit `rel="nofollow sponsored"`, wie es Suchmaschinen für Affiliate-Links empfehlen.

## Kategorien anpassen

Kategorien sind aktuell: `haushalt`, `tech`, `outdoor`, `kueche`, `beauty`. Neue Kategorie hinzufügen:
1. Neuen Button im `<nav class="category-strip">` in `index.html` ergänzen (mit passendem `data-cat`-Wert).
2. Bei den Produkten in `products.js` die gleiche Kategorie-Bezeichnung verwenden.
