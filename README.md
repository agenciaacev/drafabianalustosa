# Dra. Fabiana Lustosa — Site institucional

Site da **Dra. Fabiana Lustosa**, endocrinologista em Fortaleza. Construído com
Next.js (App Router), TypeScript, Tailwind CSS e AOS.

## Tecnologias

- **Next.js 14** com App Router (esquema de rotas em `app/`)
- **TypeScript**
- **Tailwind CSS** (paleta e tipografia customizadas)
- **AOS** (Animate On Scroll) para revelações em scroll
- **next/image** para otimização automática das imagens

## Fontes

- Títulos: **IvyPresto Display** (Adobe Typekit, carregada no `globals.css`)
- Parágrafos: **Libre Franklin** (Google Fonts)

## Paleta

| Token | Hex |
|-------|-----|
| cream | `#fcefe1` |
| gold  | `#cab195` |
| taupe | `#8f857d` |
| ink   | `#2b2622` |

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento em http://localhost:3000
```

Para gerar a versão de produção:

```bash
npm run build
npm run start
```

## Estrutura

```
app/
  layout.tsx          # layout raiz, SEO, navbar, footer, schema JSON-LD
  page.tsx            # homepage (compõe as seções)
  globals.css         # fontes, tokens e estilos base
  sobre/page.tsx      # /sobre
  emagrecimento/page.tsx
  menopausa/page.tsx
  sitemap.ts | robots.ts
components/
  Navbar, Footer, Hero, CredentialsBar, Intro, Treatments,
  HowItWorks, ForWho, AboutPreview, Testimonials, Faq, Location,
  PageHero, CtaBanner, WhatsappFloat, Schema, AosProvider
lib/
  content.ts          # textos, tratamentos, depoimentos, FAQ, dados de contato
public/images/        # fotos otimizadas (paisagem usadas como background)
```

## Imagens

As fotos em **paisagem** (`hero`, `standing`, `sitting-wide`, `location`) são
usadas como background de seções. As fotos em **retrato** (`portrait-couch`,
`portrait-serious`) aparecem nos blocos "Sobre". Para trocar qualquer foto,
basta substituir o arquivo em `public/images/` mantendo o mesmo nome.

## Onde editar conteúdo

Quase todo o texto (tratamentos, depoimentos, FAQ, telefone, endereço) está
centralizado em `lib/content.ts`. Altere ali e o site inteiro acompanha.
