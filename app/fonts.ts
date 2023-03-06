import { Inter, Noto_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800"],
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});
