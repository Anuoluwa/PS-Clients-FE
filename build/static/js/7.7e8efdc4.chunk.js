(this["webpackJsonpps-clients-fe"]=this["webpackJsonpps-clients-fe"]||[]).push([[7],{105:function(c,t,e){"use strict";e.r(t);var a=e(0),n=e(46),s=e(49),i=e(53),o=e(95),r=e(96),l=e(47),_=e(97),d=e(94),j=e.n(d),u=e(21),b=e(45),m=e(2),O=e(22),p=e(3),h=Object(u.b)((function(c){return{products:c.products}}),{loadProducts:b.a})((function(c){var t=Object(m.f)().id;Object(a.useEffect)((function(){c.loadProducts()}),[]);var e=c.products,n=e.products,d=e.isLoading,u=n.find((function(c){return(null===c||void 0===c?void 0:c._id)===t}));return console.log(u),d?Object(p.jsx)(O.a,{}):Object(p.jsx)("div",{className:j.a._,children:Object(p.jsxs)("div",{className:j.a.container,children:[Object(p.jsx)("div",{className:j.a.product_image,children:Object(p.jsx)("img",{src:null===u||void 0===u?void 0:u.productPhotoURL})}),Object(p.jsxs)("div",{className:j.a.product_info,children:[Object(p.jsxs)("div",{className:j.a.price_name,children:[Object(p.jsx)("h2",{children:null===u||void 0===u?void 0:u.productName}),Object(p.jsxs)("h2",{children:["\u20a6",null===u||void 0===u?void 0:u.costPerUnit]})]}),Object(p.jsxs)("div",{className:j.a.product_tags,children:[Object(p.jsxs)("p",{children:[Object(p.jsx)(o.a,{className:j.a.tag_icon})," ",null===u||void 0===u?void 0:u.category.category]}),Object(p.jsxs)("p",{children:[Object(p.jsx)(r.a,{className:j.a.tag_icon})," ",null===u||void 0===u?void 0:u.composition]}),Object(p.jsxs)("p",{children:[Object(p.jsx)(_.a,{className:j.a.tag_icon})," ",null===u||void 0===u?void 0:u.supplier.supplierName]})]}),Object(p.jsx)("div",{className:j.a.description,children:Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero minima voluptatem, praesentium, ipsam sunt perferendis assumenda enim error laborum obcaecati possimus. Maiores iste recusandae consequatur repudiandae. Ipsum, qui deserunt?"})}),Object(p.jsxs)("div",{className:j.a.btn_contianer,children:[Object(p.jsxs)(s.a,{className:j.a.order_btn,children:[Object(p.jsx)(i.c,{className:j.a.order_icon}),"Order"]}),Object(p.jsxs)(s.a,{className:j.a.contact_btn,children:[" ",Object(p.jsx)(l.b,{className:j.a.contact_icon})," Contact Supplier"]})]})]})]})})}));t.default=function(){return Object(p.jsx)(n.a,{children:Object(p.jsx)(h,{})})}},40:function(c,t,e){"use strict";e.r(t),e.d(t,"BASE_URL",(function(){return a}));var a="https://pharmaserv-ng.herokuapp.com/api/v1"},42:function(c,t,e){c.exports={_:"Footer____3_xeA",container:"Footer_container__1mpi0",first_content:"Footer_first_content__3GajB",social_icons:"Footer_social_icons__G9FY1",social_icon:"Footer_social_icon__PZa8h",second_content:"Footer_second_content__1kAh1",contact_info:"Footer_contact_info__1R3sw",contact_icon:"Footer_contact_icon__1t3HY",quick_links:"Footer_quick_links__if5Ns"}},43:function(c,t,e){c.exports={_:"Nav____3QuTQ",container:"Nav_container__1jiNU",logo:"Nav_logo__3FBDP",nav_menu:"Nav_nav_menu__3hmSy",menu_list:"Nav_menu_list__3p0UT",selected:"Nav_selected__3t3Pl"}},44:function(c,t,e){c.exports={_:"Layout____3SaKQ",main:"Layout_main__RpjmZ"}},45:function(c,t,e){"use strict";e.d(t,"a",(function(){return l}));var a=e(48).default,n=e(40).BASE_URL,s=e(9),i=s.LOADING_PRODUCTS_START,o=s.LOAD_PRODUCTS_SUCCESS,r=s.LOAD_PRODUCTS_FAIL,l=function(){return function(c){c({type:i});a.get("".concat(n,"/Products/all"),{headers:{"Content-Type":"application/json"}}).then((function(t){c({type:o,payload:t.data}),console.log(t.data)})).catch((function(t){c({type:r}),console.log(t.response.data)}))}}},46:function(c,t,e){"use strict";e(0);var a=e(50),n=e(16),s=e(42),i=e.n(s),o=e(3),r=function(){var c=(new Date).getFullYear();return Object(o.jsx)("div",{className:i.a._,children:Object(o.jsxs)("div",{className:i.a.container,children:[Object(o.jsxs)("div",{className:i.a.first_content,children:[Object(o.jsxs)("div",{className:i.a.social_icons,children:[Object(o.jsx)("p",{children:"Follow Us:"}),Object(o.jsx)(a.e,{className:i.a.social_icon}),Object(o.jsx)(a.b,{className:i.a.social_icon}),Object(o.jsx)(a.a,{className:i.a.social_icon})]}),Object(o.jsx)("div",{className:i.a.copyright,children:Object(o.jsxs)("p",{children:["\xa9 Copyright ",c," PharmaServe-ng"]})})]}),Object(o.jsxs)("div",{className:i.a.second_content,children:[Object(o.jsxs)("div",{className:i.a.contact_info,children:[Object(o.jsxs)("p",{children:[Object(o.jsx)(a.c,{className:i.a.contact_icon})," pharmserve@gmail.com"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)(a.d,{className:i.a.contact_icon})," 09072819212, 08123453446"]})]}),Object(o.jsxs)("div",{className:i.a.quick_links,children:[Object(o.jsx)(n.b,{to:"/catalogue",children:"Catalogue"}),Object(o.jsx)(n.b,{to:"/",children:"Register your pharmacy"}),Object(o.jsx)(n.b,{to:"/",children:"Privacy Policy"})]})]})]})})},l=e(43),_=e.n(l),d=function(){return Object(o.jsx)("div",{className:_.a._,children:Object(o.jsxs)("div",{className:_.a.container,children:[Object(o.jsx)("div",{className:_.a.logo,children:Object(o.jsx)(n.b,{to:"/",children:Object(o.jsx)("h2",{children:Object(o.jsx)("strong",{children:"PharmaServ"})})})}),Object(o.jsx)("div",{className:_.a.nav_menu,children:Object(o.jsxs)("ul",{className:_.a.menu_list,children:[Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/",activeClassName:_.a.selected,children:"Products"})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/catalogue",children:"Catalogue"})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/contact",children:"Contact"})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/cart",children:"Cart"})})]})})]})})},j=e(44),u=e.n(j);t.a=function(c){var t=c.children;return Object(o.jsxs)("div",{className:u.a._,children:[Object(o.jsx)("nav",{className:u.a.nav,children:Object(o.jsx)(d,{})}),Object(o.jsx)("main",{className:u.a.main,children:t}),Object(o.jsx)("footer",{className:u.a.footer,children:Object(o.jsx)(r,{})})]})}},49:function(c,t,e){"use strict";e.d(t,"a",(function(){return l}));var a=e(4),n=e(41),s=(e(0),e(52)),i=e.n(s),o=e(3),r=["children","className","isLoading"],l=function(c){var t=c.children,e=c.className,s=c.isLoading,l=Object(n.a)(c,r);return Object(o.jsx)("button",Object(a.a)(Object(a.a)({className:"".concat(i.a.primary_button," ").concat(e)},l),{},{children:s?"loading...":t}))}},52:function(c,t,e){c.exports={primary_button:"CustomButton_primary_button__2b9wN",normal_button:"CustomButton_normal_button__2XGOk"}},94:function(c,t,e){c.exports={_:"ProductDetails____3QjC9",container:"ProductDetails_container__2V7LJ",product_image:"ProductDetails_product_image__3scKM",product_info:"ProductDetails_product_info__3BNQT",price_name:"ProductDetails_price_name__2bMJN",product_tags:"ProductDetails_product_tags__3CXXH",tag_icon:"ProductDetails_tag_icon__1fCJ7",description:"ProductDetails_description__1RZQf",btn_contianer:"ProductDetails_btn_contianer__3ADL4",order_btn:"ProductDetails_order_btn__1LOPW",order_icon:"ProductDetails_order_icon__1TE8j",contact_btn:"ProductDetails_contact_btn__38-9X",contact_icon:"ProductDetails_contact_icon__2ff9p"}}}]);
//# sourceMappingURL=7.7e8efdc4.chunk.js.map