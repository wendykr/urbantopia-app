# Urbantopia
Praktický projekt kurzu [Základy Next.js](https://skillmea.cz/online-kurzy/nextjs-zaklady)

- [Zadání](#zadání)
- [Abstrakt](#abstrakt)
- [Rozsah a realizace](#rozsah-a-realizace)
- [Technologie](#technologie)

## Zadání
Cílem vývoje projektu bylo se zaměřit a ukázat si základy Next.js na praktickém příkladu.  
*Do finální verze přidala responsivitu a aplikace je připravena pro další rozšíření jako: TypeScript, validace formulářových polí, funkční tlačítko Search ve formuláři apod.*

## Abstrakt
Lektor zvolil aplikaci pro inzerci nemovitostí, která obsahuje **hlavní stránku** s výpisem všech položek.  
Po kliknutí na vybranou položku se dostane uživatel na stránku s **detailem položky**.  
Na stránce detailu položky je **formulář**, ze kterého se data odešlou do databáze Supabase.

## Rozsah a realizace
Stručný výčet funkcí z Next.js, které byly na projektu využity.
- **Static Site Generation (SSG)** - využití funkcí `getStaticProps` a `getStaticPaths` pro generování statických stránek během build procesu
- **Pages Router** - jednoduché routování pomocí složky `pages`bez nutnosti instalace knihovny React Router
- **Custom Errors** - vytvoření vlastní `404` stránky ve složce `pages`
- **Optimalizace obrázků pomocí `<Image>` komponenty**
- **`_app.js`** - úprava globální šablony aplikace pro zajištění jednotného zobrazení komponent `Header` a `Footer` na všech stránkách

## Technologie
- **Frontend** - React a Next.js  
- **Stylování** - Tailwind CSS a DaisyUI  
- **Data** - Supabase
