// ---------------------------------------------------------------
// 1. THE MENU
// ---------------------------------------------------------------

// TS: These three objects share a structure - declare an interface (call it
//     MenuItem) that describes it, and annotate each declaration with it.
//     Note that 'nutrition' is a nested object, so it needs a nested type. *done*
export type Course = "starter" | "main" | "dessert";
export interface MenuItem {
    id: number,
    name: string,
    course: Course,
    price: number,
    nutrition: {
        calories: number,
        allergens: string[],
    },
    discountPercent?: number,
    availableFrom?: Date
}

export const soup: MenuItem = {
  id: 1,
  name: "Roast Tomato Soup",
  course: "starter",
  price: 5.5,
  nutrition: {
    calories: 180,
    allergens: ["celery"],
  },
};

export const risotto: MenuItem = {
  id: 2,
  name: "Mushroom Risotto",
  // TS: 'course' should only ever be one of three values. Declare a *literal
  //     (union) type* called Course - "starter" | "main" | "dessert" - and use
  //     it as the property's type instead of string. One of the objects below
  //     will then fail to compile. Good.
  course: "main",
  price: 14.0,
  nutrition: {
    calories: 620,
    allergens: ["milk"],
  },
  availableFrom: new Date(2024, 5, 1),
  discountPercent: 10   
};

export const brownie: MenuItem = {
  id: 3,
  name: "Chocolate Brownie",
  course: "desert",
  price: 6.0,
  nutrition: {
    calories: 450,
    allergens: ["milk", "eggs", "gluten"],
  },
};

// TS: Not every item is on offer, and only some are seasonal. Add two
//     *optional properties* to MenuItem - discountPercent (number) and
//     availableFrom (Date) - and set them on one or two items here. The
//     existing objects that lack them must still compile.
const menu = [soup, risotto, brownie];

// TS: A combo is a named bundle of menu items sold at a fixed price. Declare a
//     second interface for it (ComboDeal: id, name, items, price).
const lunchCombo: ComboDeal = {
  id: 101,
  name: "Soup & Sweet",
  items: [soup, brownie],
  price: 10.0,
};
export interface ComboDeal {
  id: number,
  name: string,
  items: MenuItem[],
  price: number
}

// TS: An order line is *either* a MenuItem or a ComboDeal. Declare a *type
//     alias* for that union (e.g. OrderLine) and use it for the array below.

const currentOrder = [risotto, lunchCombo, soup];

export type OrderLine = MenuItem | ComboDeal;
