(this["webpackJsonpps-clients-fe"]=this["webpackJsonpps-clients-fe"]||[]).push([[4],{104:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(47),i=c(69),s=c.n(i),r=c(3),o=function(){return Object(r.jsx)("div",{className:s.a._,children:Object(r.jsxs)("div",{className:s.a.container,children:[Object(r.jsx)("div",{className:s.a.hero_one,children:Object(r.jsxs)("div",{className:s.a.hero_text,children:[Object(r.jsx)("p",{children:"Welcome to PharmaServe \ud83d\udc4b"}),Object(r.jsxs)("h1",{className:s.a.title,children:["GET YOUR ",Object(r.jsx)("span",{children:"DRUGS"})]}),Object(r.jsx)("div",{className:s.a.mini_details,children:Object(r.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste repellat natus, sit amet consectetur adipisicing"})}),Object(r.jsxs)("div",{className:s.a.link_container,children:[Object(r.jsx)("p",{children:"View All"}),Object(r.jsx)(n.a,{className:s.a.icon_right})]})]})}),Object(r.jsx)("div",{className:s.a.hero_two,children:Object(r.jsxs)("div",{className:s.a.hero_two_content,children:[Object(r.jsx)("div",{className:s.a.featured_drug,children:Object(r.jsx)("small",{children:"Featured"})}),Object(r.jsxs)("div",{className:s.a.featured_details,children:[Object(r.jsx)("h2",{children:"Ibuprofen"}),Object(r.jsx)("h2",{children:"\u20a62,500"})]})]})}),Object(r.jsx)("div",{className:s.a.hero_three,children:Object(r.jsxs)("div",{className:s.a.hero_three_content,children:[Object(r.jsx)("div",{className:s.a.featured_drug,children:Object(r.jsx)("small",{children:"Featured"})}),Object(r.jsxs)("div",{className:s.a.featured_details,children:[Object(r.jsx)("h2",{children:"Capsule"}),Object(r.jsx)("h2",{children:"\u20a61,500"})]})]})})]})})},_=c(46),l=c(4),d=c(90),j=c(21),u=c(48).default,h=c(40).BASE_URL,b=c(9),m=b.LOADING_CATEGORY_START,x=b.LOAD_CATEGORY_SUCCESS,O=b.LOAD_CATEGORY_FAIL,p=c(88),v=c.n(p),g=function(e){var t=Object.assign({},e);return Object(r.jsx)("li",{className:v.a.list_item,children:null===t||void 0===t?void 0:t.category})},N=c(89),f=c.n(N),P=Object(j.b)((function(e){return{categories:e.categories}}),{loadCategories:function(){return function(e){e({type:m}),u.get("".concat(h,"/categories")).then((function(t){e({type:x,payload:t.data})})).catch((function(t){e({type:O}),console.log(t.response.data)}))}}})((function(e){Object(a.useEffect)((function(){e.loadCategories()}),[]);var t=e.categories,c=t.categories,n=t.isLoading;return console.log(c),Object(r.jsx)("div",{className:f.a._,children:Object(r.jsx)("div",{className:f.a.container,children:Object(r.jsxs)("div",{className:f.a.content,children:[Object(r.jsxs)("div",{className:f.a.filter_title,children:[Object(r.jsx)(d.a,{className:f.a.filter_icon}),Object(r.jsx)("h3",{children:"Category Filter"})]}),Object(r.jsx)("div",{className:f.a.filter_list,children:Object(r.jsx)("ul",{children:n?Object(r.jsx)("p",{children:"Loading..."}):c.map((function(e){return Object(r.jsx)(g,Object(l.a)({},e),null===e||void 0===e?void 0:e.id)}))})})]})})})})),y=c(45),S=c(60),C=c(22),L=c(54),F=c(49),H=c(91),A=c.n(H),I=function(){return Object(r.jsx)("div",{className:A.a._,children:Object(r.jsxs)("div",{className:A.a.container,children:[Object(r.jsx)("div",{className:A.a.display_text,children:Object(r.jsx)("p",{children:"Displaying Page 1 of 20"})}),Object(r.jsxs)("div",{className:A.a.page_btn_container,children:[Object(r.jsxs)(F.a,{className:A.a.direction_btn,children:[" ",Object(r.jsx)(L.a,{})," "]}),Object(r.jsx)(F.a,{className:"".concat(A.a.num_btn," ").concat(A.a.active_btn),children:"1"}),Object(r.jsx)(F.a,{className:A.a.num_btn,children:"2"}),Object(r.jsx)(F.a,{className:A.a.num_btn,children:"3"}),Object(r.jsx)(F.a,{className:A.a.num_btn,children:"4"}),Object(r.jsx)(F.a,{className:A.a.num_btn,children:"5"}),Object(r.jsx)(F.a,{className:A.a.direction_btn,children:Object(r.jsx)(L.b,{})})]})]})})},R=c(50),E=c(41),w=c(58),U=c(92),k=c.n(U),G=c(2),T=["productName","costPerUnit","productPhotoURL","history"],D=Object(G.g)((function(e){var t=e.productName,c=e.costPerUnit,a=e.productPhotoURL,n=e.history,i=Object(E.a)(e,T);return Object(r.jsxs)("div",{className:k.a.card_item,onClick:function(){return n.push("/product/".concat(null===i||void 0===i?void 0:i._id))},children:[Object(r.jsx)("div",{className:k.a.drug_image,children:Object(r.jsx)("img",{src:a||w.a,alt:t})}),Object(r.jsxs)("div",{className:k.a.details,children:[Object(r.jsxs)("div",{className:k.a.text,children:[Object(r.jsx)("h3",{children:t}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dicta..."})]}),Object(r.jsxs)("div",{className:k.a.price_order,children:[Object(r.jsxs)("h3",{children:["\u20a6",c]}),Object(r.jsxs)(F.a,{className:k.a.order_button,children:[Object(r.jsx)(L.c,{className:k.a.order_icon})," Order"]})]})]})]})})),B=c(93),Q=c.n(B),Y=Object(j.b)((function(e){return{products:e.products}}),{loadProducts:y.a})((function(e){Object(a.useEffect)((function(){e.loadProducts()}),[]);var t=e.products,c=t.products,n=t.isLoading;console.log(c);var i=null===c||void 0===c?void 0:c.length;return n?Object(r.jsx)("div",{children:Object(r.jsx)(C.a,{})}):Object(r.jsx)("div",{className:Q.a._,children:Object(r.jsx)("div",{className:Q.a.container,children:Object(r.jsxs)("div",{className:Q.a.content,children:[Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(R.a,{total_products:i})}),Object(r.jsx)("div",{className:Q.a.cards_container,children:0==(null===c||void 0===c?void 0:c.length)?Object(r.jsx)(S.a,{message:"No Product Found"}):c.map((function(e){return Object(r.jsx)(D,Object(l.a)({},e),null===e||void 0===e?void 0:e._id)}))}),Object(r.jsx)("div",{className:Q.a.pagination_container,children:Object(r.jsx)(I,{})})]})})})})),q=c(94),J=c.n(q),Z=function(){return Object(r.jsxs)("div",{className:J.a._,children:[Object(r.jsx)("div",{className:J.a.category_section,children:Object(r.jsx)(P,{})}),Object(r.jsx)("div",{className:J.a.product_showcase,children:Object(r.jsx)(Y,{})})]})};t.default=function(){return Object(r.jsxs)(_.a,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(Z,{})]})}},40:function(e,t,c){"use strict";c.r(t),c.d(t,"BASE_URL",(function(){return a}));var a="https://pharmaserv-ng.herokuapp.com/api/v1"},42:function(e,t,c){e.exports={_:"Footer____3_xeA",container:"Footer_container__1mpi0",first_content:"Footer_first_content__3GajB",social_icons:"Footer_social_icons__G9FY1",social_icon:"Footer_social_icon__PZa8h",second_content:"Footer_second_content__1kAh1",contact_info:"Footer_contact_info__1R3sw",contact_icon:"Footer_contact_icon__1t3HY",quick_links:"Footer_quick_links__if5Ns"}},43:function(e,t,c){e.exports={_:"Nav____3QuTQ",container:"Nav_container__1jiNU",logo:"Nav_logo__3FBDP",hamburger_menu:"Nav_hamburger_menu__3g5ZX",toggle:"Nav_toggle__2ytbT",nav_menu:"Nav_nav_menu__3hmSy",menu_list:"Nav_menu_list__3p0UT",selected:"Nav_selected__3t3Pl"}},44:function(e,t,c){e.exports={_:"Layout____3SaKQ",main:"Layout_main__RpjmZ"}},45:function(e,t,c){"use strict";c.d(t,"a",(function(){return _}));var a=c(48).default,n=c(40).BASE_URL,i=c(9),s=i.LOADING_PRODUCTS_START,r=i.LOAD_PRODUCTS_SUCCESS,o=i.LOAD_PRODUCTS_FAIL,_=function(){return function(e){e({type:s});a.get("".concat(n,"/Products/all"),{headers:{"Content-Type":"application/json"}}).then((function(t){e({type:r,payload:t.data}),console.log(t.data)})).catch((function(t){e({type:o}),console.log(t.response.data)}))}}},46:function(e,t,c){"use strict";var a=c(0),n=c(51),i=c(16),s=c(42),r=c.n(s),o=c(3),_=function(){var e=(new Date).getFullYear();return Object(o.jsx)("div",{className:r.a._,children:Object(o.jsxs)("div",{className:r.a.container,children:[Object(o.jsxs)("div",{className:r.a.first_content,children:[Object(o.jsxs)("div",{className:r.a.social_icons,children:[Object(o.jsx)("p",{children:"Follow Us:"}),Object(o.jsx)(n.e,{className:r.a.social_icon}),Object(o.jsx)(n.b,{className:r.a.social_icon}),Object(o.jsx)(n.a,{className:r.a.social_icon})]}),Object(o.jsx)("div",{className:r.a.copyright,children:Object(o.jsxs)("p",{children:["\xa9 Copyright ",e," PharmaServe-ng"]})})]}),Object(o.jsxs)("div",{className:r.a.second_content,children:[Object(o.jsxs)("div",{className:r.a.contact_info,children:[Object(o.jsxs)("p",{children:[Object(o.jsx)(n.c,{className:r.a.contact_icon})," pharmserve@gmail.com"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)(n.d,{className:r.a.contact_icon})," 09072819212, 08123453446"]})]}),Object(o.jsxs)("div",{className:r.a.quick_links,children:[Object(o.jsx)("p",{children:Object(o.jsx)(i.b,{to:"/catalogue",children:"Catalogue"})}),Object(o.jsx)("p",{children:Object(o.jsx)(i.b,{to:"/",children:"Register your pharmacy"})}),Object(o.jsx)("p",{children:Object(o.jsx)(i.b,{to:"/",children:"Privacy Policy"})})]})]})]})})},l=c(59),d=c(43),j=c.n(d),u=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(o.jsx)("div",{className:j.a._,children:Object(o.jsxs)("div",{className:j.a.container,children:[Object(o.jsx)("div",{className:j.a.logo,children:Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("h2",{children:Object(o.jsx)("strong",{children:"PharmaServ"})})})}),Object(o.jsxs)("div",{className:"".concat(c?j.a.hamburger_menu+" "+j.a.toggle:j.a.hamburger_menu),onClick:function(){n(!c)},children:[Object(o.jsx)("span",{}),Object(o.jsx)("span",{}),Object(o.jsx)("span",{})]}),Object(o.jsx)("div",{className:"".concat(c?j.a.nav_menu+" "+j.a.toggle:j.a.nav_menu),children:Object(o.jsxs)("ul",{className:j.a.menu_list,children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{exact:!0,to:"/",activeClassName:j.a.selected,children:"Products"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/catalogue",activeClassName:j.a.selected,children:"Catalogue"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/contact",activeClassName:j.a.selected,children:"Contact"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/cart",activeClassName:j.a.selected,children:"Cart"})})]})})]})})},h=c(44),b=c.n(h);t.a=function(e){var t=e.children;return Object(o.jsxs)("div",{className:b.a._,children:[Object(o.jsx)("nav",{className:b.a.nav,children:Object(o.jsx)(u,{})}),Object(o.jsx)("main",{className:b.a.main,children:t}),Object(o.jsx)("footer",{className:b.a.footer,children:Object(o.jsx)(_,{})})]})}},49:function(e,t,c){"use strict";c.d(t,"a",(function(){return _}));var a=c(4),n=c(41),i=(c(0),c(53)),s=c.n(i),r=c(3),o=["children","className","isLoading"],_=function(e){var t=e.children,c=e.className,i=e.isLoading,_=Object(n.a)(e,o);return Object(r.jsx)("button",Object(a.a)(Object(a.a)({className:"".concat(s.a.primary_button," ").concat(c)},_),{},{children:i?"loading...":t}))}},50:function(e,t,c){"use strict";c(0);var a=c(55),n=c.n(a),i=c(4),s=c(41),r=c(56),o=c.n(r),_=c(3),l=["handleChange","className","icon","type","placeholder"],d=function(e){var t=e.handleChange,c=e.className,a=e.icon,n=e.type,r=e.placeholder,d=Object(s.a)(e,l);return Object(_.jsxs)("div",{className:o.a.form_group,children:[Object(_.jsx)("div",{className:o.a.input_label,children:Object(_.jsx)("input",Object(i.a)({className:"".concat(o.a.input," ").concat(c),onChange:t,type:n,placeholder:r},d))}),a&&Object(_.jsx)("div",{className:o.a.input_icon,children:Object(_.jsx)("img",{src:a,alt:"icon"})})]})},j=c(47),u=function(e){var t=e.title,c=e.searchQuery,a=e.handleSearch;return Object(_.jsxs)("div",{className:n.a._,children:[Object(_.jsx)(d,{className:n.a.search_input,value:c,type:"text",handleChange:a,placeholder:"Search ".concat(t)}),Object(_.jsx)("div",{className:n.a.search_icon,children:Object(_.jsx)(j.c,{})})]})},h=c(57),b=c.n(h);t.a=function(e){var t=e.total_products;return Object(_.jsxs)("div",{className:b.a.header,children:[Object(_.jsxs)("div",{className:b.a.header_title,children:[Object(_.jsx)("h2",{children:"All Products"}),Object(_.jsxs)("small",{children:[t||"--"," Products Found"]})]}),Object(_.jsx)("div",{className:b.a.search_input,children:Object(_.jsx)(u,{title:"Products"})})]})}},52:function(e,t,c){e.exports={_:"EmptyState____3vk3e",container:"EmptyState_container__3w6QJ",illustration:"EmptyState_illustration__3cI_D",text:"EmptyState_text__1GHEQ"}},53:function(e,t,c){e.exports={primary_button:"CustomButton_primary_button__2b9wN",normal_button:"CustomButton_normal_button__2XGOk"}},55:function(e,t,c){e.exports={_:"SearchComponent____eILr1",search_input:"SearchComponent_search_input__2Ppdb",search_icon:"SearchComponent_search_icon__1_xnh"}},56:function(e,t,c){e.exports={form_group:"FormInput_form_group__x0MGK",input_label:"FormInput_input_label__38GbM",input:"FormInput_input__1uoVP",input_icon:"FormInput_input_icon__9VR5g",_:"FormInput____3ma_w",textarea:"FormInput_textarea__3X7PH"}},57:function(e,t,c){e.exports={header:"ProductHeader_header__281qE",header_title:"ProductHeader_header_title__1eNA8",search_input:"ProductHeader_search_input__nBiAP"}},58:function(e,t,c){"use strict";t.a=c.p+"static/media/product_placeholder.6c3ce80f.jpg"},60:function(e,t,c){"use strict";c(0);var a=c(52),n=c.n(a),i=c.p+"static/media/empty_illustration.daf1e9b9.svg",s=c(3);t.a=function(e){var t=e.message;return Object(s.jsx)("div",{className:n.a._,children:Object(s.jsxs)("div",{className:n.a.container,children:[Object(s.jsx)("div",{className:n.a.illustration,children:Object(s.jsx)("img",{src:i,alt:"illustration empty state"})}),Object(s.jsx)("div",{className:n.a.text,children:Object(s.jsx)("p",{children:t})})]})})}},69:function(e,t,c){e.exports={_:"HeroSection____30Shf",container:"HeroSection_container__UuTFy",hero_one:"HeroSection_hero_one__gnHuH",hero_text:"HeroSection_hero_text__2Yny5",title:"HeroSection_title__M02Jx",link_container:"HeroSection_link_container__2EGQG",icon_right:"HeroSection_icon_right__1W0XP",hero_two:"HeroSection_hero_two__1dib2",hero_two_content:"HeroSection_hero_two_content__bHXwI",featured_drug:"HeroSection_featured_drug__KxRPc",featured_details:"HeroSection_featured_details__muqZa",hero_three:"HeroSection_hero_three__1jbqU",hero_three_content:"HeroSection_hero_three_content__3a-Bj"}},88:function(e,t,c){e.exports={list_item:"CategoryItem_list_item__2uHSy"}},89:function(e,t,c){e.exports={_:"CategorySection____1vAIl",container:"CategorySection_container__11deS",content:"CategorySection_content__1ODbY",filter_title:"CategorySection_filter_title__1fCi_",filter_icon:"CategorySection_filter_icon__1wS2j",filter_list:"CategorySection_filter_list__1HllZ"}},91:function(e,t,c){e.exports={_:"Pagination____1CiqC",container:"Pagination_container__21sil",display_text:"Pagination_display_text__2A6A_",page_btn_container:"Pagination_page_btn_container__1zTN8",num_btn:"Pagination_num_btn__2unRh",active_btn:"Pagination_active_btn__M6EGW",direction_btn:"Pagination_direction_btn__2kz19"}},92:function(e,t,c){e.exports={card_item:"ProductItem_card_item__29fgV",drug_image:"ProductItem_drug_image__2xRJQ",details:"ProductItem_details__1ZeCF",text:"ProductItem_text__2s4La",price_order:"ProductItem_price_order__39uoy",order_button:"ProductItem_order_button__23Jtr",order_icon:"ProductItem_order_icon__fCmko"}},93:function(e,t,c){e.exports={_:"ProductList____KFOA9",container:"ProductList_container__HwRgK",content:"ProductList_content__Qeeg1",cards_container:"ProductList_cards_container__-ryGB",card_item:"ProductList_card_item__136Nf",drug_image:"ProductList_drug_image__2wEyc",details:"ProductList_details__1SWUZ",text:"ProductList_text__HeJf2",price_order:"ProductList_price_order__j3Gql",order_button:"ProductList_order_button__3xVTH",order_icon:"ProductList_order_icon__3PmE2",pagination_container:"ProductList_pagination_container__h4uI4"}},94:function(e,t,c){e.exports={_:"ProductSection____3Lb37"}}}]);
//# sourceMappingURL=4.0a9f1cca.chunk.js.map