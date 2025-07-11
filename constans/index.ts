export const headerLinks = [
  {
    label: "Home",
    route: "/",
    roles: ["user", "admin"], // semua user bisa lihat
  },
  {
    label: "Events",
    route: "#events",
    roles: ["user", "admin"], // semua user bisa lihat
  },
  {
    label: "Create Event",
    route: "/events/create",
    roles: ["admin"], // hanya admin
  },
  {
    label: "My Profile",
    route: "/profile",
    roles: ["user"], // semua user
  },
  {
    label: "Dashboard",
    route: "/profile",
    roles: ["admin"],// hanya admin
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
