import { images } from "@/data/images";

/**
 * News shown on the site until the club can publish from the app.
 * Only MatchCamp has its own article page. The other notes are short on purpose.
 */

export type NewsItem = {
  id: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  href?: string;
  image?: string;
  imageAlt?: string;
};

export const featuredStory: NewsItem = {
  id: "matchcamp",
  category: "Cup",
  date: "Lördag 11 april",
  title: "Inbjudan till MatchCamp i Tipshallen – helgen fylld med fartfyllda matcher",
  summary:
    "FC Växjö deltar i MatchCamp i Tipshallen. Det blir en intensiv dag med matcher i både 9v9 och 7v7. Föreningen är stolt över inbjudan från Öster IF.",
  href: "/nyheter/matchcamp-tipshallen",
  image: images.indoorMatch,
  imageAlt:
    "Inomhusfotboll på konstgräs under belysning, som illustrerar MatchCamp i Tipshallen",
};

export const newsNotes: NewsItem[] = [
  {
    id: "varsasong",
    category: "Ungdom",
    date: "2 dagar sedan",
    title: "Start för vårsäsongen på Arabyvallen – ny anmälan öppen",
    summary:
      "Vi välkomnar tjejer och killar till en ny säsong på Arabyvallen. Träningarna är öppna på lördagar och vardagskvällar.",
    href: "/bli-medlem",
    image: images.training,
    imageAlt: "Ungdomar tränar fotboll på en gräsplan i kvällsljus",
  },
  {
    id: "naringsliv",
    category: "Förening",
    date: "1 vecka sedan",
    title: "FC Växjö stärker samarbetet med det lokala näringslivet",
    summary:
      "Tillsammans med Sparbanken Eken, RF-SISU och Vidingehem skapar vi bättre träning och håller avgifterna låga för unga i Växjö.",
    href: "/bli-medlem#sponsra",
    image: images.meeting,
    imageAlt: "Ett möte i en klubblokal med taktiktavla",
  },
];

export const clubNotices: NewsItem[] = [
  {
    id: "konstgras",
    category: "Anläggning",
    date: "28 mars 2026",
    title: "Konstgräset på Arabyvallen redo för våren",
    summary:
      "Planunderhållet och borstningen är slutförd. Belysning och linjering har godkänts inför tävlingsmatcherna.",
  },
  {
    id: "utrustning",
    category: "Förening",
    date: "22 mars 2026",
    title: "Nya ledartröjor och träningsutrustning anländer",
    summary:
      "Tillsammans med lokala partners har nya matchbollar, västar och profilkläder levererats till kansliet.",
  },
  {
    id: "foraldratraff",
    category: "Ungdom",
    date: "15 mars 2026",
    title: "Framgångsrik föräldraträff inför säsongsstarten",
    summary:
      "God uppslutning i klubblokalen. Vi gick igenom matchrutiner, värdegrund och vårens matchkiosk.",
  },
];
