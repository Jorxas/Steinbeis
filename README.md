# Steinbeis Beratungszentrum

Eine responsive Website für das Steinbeis Beratungszentrum im Bereich Bau- und Immobilienökonomie. Das Projekt stellt Leistungen und Fachgebiete übersichtlich vor und führt Besucherinnen und Besucher vom ersten Überblick zu den einzelnen Themen und Kontaktmöglichkeiten.

## Umsetzung

Die Seite besteht aus einem Hero-Bereich, Leistungsübersichten, Kennzahlen, Informationen zur Expertise, Zertifizierungen und detaillierteren Leistungsabschnitten. Die Navigation ist für Desktop und Mobilgeräte ausgelegt; auf kleineren Bildschirmen öffnet sie sich als Menü.

Technisch basiert das Projekt auf **Next.js 14**, **React 18**, **JavaScript (JSX)**, **Tailwind CSS** und **Lucide React**. Die Konfiguration erstellt einen statischen Export.

## Lokal starten

Voraussetzungen: Node.js 18 oder neuer und npm.

```bash
git clone https://github.com/Jorxas/Steinbeis.git
cd Steinbeis
npm install
npm run dev
```

Durch den in `next.config.mjs` voreingestellten Base Path ist die Seite lokal unter [http://localhost:3001/Steinbeis/](http://localhost:3001/Steinbeis/) erreichbar. Mit `npm run build` wird der statische Export erstellt. Für eine Bereitstellung unter einem anderen Pfad können `NEXT_PUBLIC_BASE_PATH` und `NEXT_PUBLIC_ASSET_PREFIX` gesetzt werden; die Standardkonfiguration ist auf `/Steinbeis` ausgelegt.

## Aufbau

- [`src/app/`](src/app/) — Seitenstruktur und Inhaltsabschnitte.
- [`src/components/`](src/components/) — Navigation, Footer und wiederverwendbare UI.
- [`public/`](public/) — Bilder und andere statische Dateien.

Der Fokus des Projekts liegt auf einer klaren Präsentation der Inhalte und einem Layout, das auf unterschiedlichen Bildschirmgrößen funktioniert.
