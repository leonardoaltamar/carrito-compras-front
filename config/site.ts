export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/admin/dashboard",
    },
    {
      label: "Categorias",
      href: "/admin/categorias",
    },
    {
      label: "Productos",
      href: "/admin/productos",
    },
    {
      label: "Carrito de compras",
      href: "/admin/carrito-compras",
    }
  ],
  navMenuItems: [    
    {
      label: "Logout",
      href: "/login",
    },
  ],
  links: {
    github: "https://github.com/leonardoaltamar",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://github.com/leonardoaltamar",
  },
};
