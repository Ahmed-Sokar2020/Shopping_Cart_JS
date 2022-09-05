// import translation from './translation.js';

const translation = {
  en: {
    shoppingCart: "Shopping Cart",
    login: "Login",
    signUp: "Sign Up",
    userName: "Type Your Username",
    Password: "Type Your Password",
    Email: "Type Your Email",
    userLogin: "User Login",
    userRegister: "User Register",
    haveAccount: "Have Account?",
    notHaveAccount: "Not Have Account?",
    english: "En",
    arabic: "Ar",
    favorites: "Favorites",
    myProducts: "My Products",
    viewAllProducts: "View All Products",
    logOut: "Log Out",
    filterBySize:"Filter By Size",
    selectSize: "Select Size",
    all: "All",
    small: "Small",
    meduim: "Meduim",
    larg: "Larg",
    addToCart:"Add To Cart",
    newItem: "New Item",
    Mobile: "Mobile",
    Labtop: "Laptop HP Zbook",
    Cam: "Cam",
    Toy: "Toy",
    Perfume: "Perfume",
    perfume: "French Perfume with High Quality",
    PlayStation: "Play Station",
    productSize: "Size:" ,
    size: "small" ,
    size: "meduim" ,
    size: "larg" ,
    Lorem_ipsum_dolor_sit_amet: "Lorem ipsum dolor sit amet",
    quantity: "Quantity:",
    delete: "Delete",
    searchByName: "Search By Name",
    editProfile: "Edit Profile",
    productsNumber: "Products Number:",
    edit: "Edit",
    delete: "Delete",
    createProduct: "Create Product",
    name: "Name...",
    placeholder1: "Description...",
    search: "Search By Name...",
    editProduct: "Edit Product",
    noproducts: "There is No Products!!",
    noFavoriteProducts: "There is No Favorite Products!!",
    noProductsInCart: "There is No Products in Your Cart!!",
    Ahmed: "Ahmed",
    developer: "Programmer "
  },
  ar: {
    shoppingCart: "عربه التسوق",
    login: "الدخول",
    signUp: "تسجيل الدخول",
    userName: "اسمك...",
    Password: "الباسوورد...",
    Email: "الإيميل...",
    userLogin: "الدخول للمستخدم",
    userRegister: "تسجيل الدخول للمستخدم",
    haveAccount: "لديك حساب؟",
    notHaveAccount: "ليس لديك حساب؟",
    english: "En",
    arabic: "Ar",
    favorites: "المفضلات",
    myProducts: "منتجاتى",
    viewAllProducts: "عرض كل المنتجات",
    logOut: "تسجيل الخروج",
    filterBySize: "فلتره بالحجم",
    all: "الكل",
    small: "صغير",
    meduim: "متوسط",
    larg: "كبير",
    addToCart: "اضف الى العربه",
    Mobile:" موبايل سامسونج",
    Labtop: "لابتوبHP Zbook",
    Cam: "كاميرا",
    Toy: "دراجه اطفال",
    Perfume: "برفان",
    perfume: "برفان فرنسى ذو جوده عاليه ",
    newItem: "منتج جديد",
    PlayStation: "بلاى استيشن5",
    productSize: "الحجم :" ,
    selectSize: "اختر الحجم",
    size: "صغير" ,
    size: "متوسط" ,
    size: "كبير" ,
    Lorem_ipsum_dolor_sit_amet: "منتج ذو جوده عاليه",
    quantity: "الكميه :",
    delete: "مسح",
    searchByName: "بحث بالإسم",
    edit: "تعديل",
    delete: "مسح",
    editProfile: "تعديل الحساب",
    productsNumber: "عدد المنتجات :",
    createProduct: "انشاء منتج",
    name: "الاسم...",
    placeholder1: "الوصف...",
    search: "بحث بالاسم...",
    editProduct: "تعديل المنتج",
    noproducts: "لا يوجد اى منتجات",
    noFavoriteProducts: "لا يوجد اى منتجات مفضله",
    noProductsInCart: "لا توجد منتجات فى هذه العربه",
    Ahmed: "احمد",
    developer: "مطور برمجيات"
  }
};


// Variables
let en = document.getElementById("en-lang");
let ar = document.getElementById("ar-lang");

// Events
en.addEventListener("click", (e) => {
  setLanguage(e.target.value);
});

ar.addEventListener("click", (e) => {
  setLanguage(e.target.value);
});


// Translation The Content
function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((ele) => {
    const translationKey = ele.getAttribute("data-i18n");
    ele.textContent = translation[lang][translationKey] ;
    ele.placeholder = translation[lang][translationKey] ;
  });

  // To Set Direction(dir attribute) to rtl/ltr in html Tag Determined on Language(ar/en)
  document.dir = lang === "ar" ? "rtl" : "ltr";
  // To set Language in localStorage
  localStorage.setItem("lang", lang);
}


// To Get the Last Language that User Selected it Before Refreshing the Page
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("lang"));
})

