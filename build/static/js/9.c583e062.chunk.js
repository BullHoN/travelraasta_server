(this.webpackJsonphome_page=this.webpackJsonphome_page||[]).push([[9],{37:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return n}))},39:function(e,a,t){"use strict";var n=t(37),l=t(33),i=t(34),r=t(36),o=t(35),u=t(0),s=t.n(u),c=t(40),d=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={phoneNo:"",name:"",email:"",specialRequest:""},e.handleChange=function(a){e.setState(Object(n.a)({},a.target.id,a.target.value))},e.submitDetails=function(){(""==e.state.email||Object(c.validateEmail)(e.state.email))&&Object(c.validPhoneNo)(e.state.phoneNo)&&Object(c.validUserName)(e.state.name)&&(""==e.state.specialRequest||Object(c.validateSpecialRequest)(e.state.specialRequest))&&e.props.sendData(e.state)},e}return Object(i.a)(t,[{key:"render",value:function(){var e=null==this.props.showSpecialRequest||"none";return s.a.createElement("div",{className:"modal",id:"user-info"},s.a.createElement("div",{className:"modal-content center"},s.a.createElement("h6",null,"In Order To Provide You Best Deal Our Team Manually Search All Over Internet For You"),s.a.createElement("div",{className:"input-field"},s.a.createElement("i",{className:"material-icons prefix"},"account_circle"),s.a.createElement("input",{onChange:this.handleChange,id:"name",placeholder:"Name",type:"text",className:"validate"})),s.a.createElement("div",{className:"input-field"},s.a.createElement("i",{className:"material-icons prefix"},"email"),s.a.createElement("input",{onChange:this.handleChange,id:"email",placeholder:"Email (Optional)",type:"text",className:"validate"})),s.a.createElement("div",{className:"input-field"},s.a.createElement("i",{className:"material-icons prefix"},"phone"),s.a.createElement("input",{onChange:this.handleChange,id:"phoneNo",placeholder:"Phone No (+91 9818040401)",type:"tel",className:"validate"})),s.a.createElement("div",{className:"input-field",style:{display:e}},s.a.createElement("i",{className:"material-icons prefix"},"mode_edit"),s.a.createElement("textarea",{onChange:this.handleChange,id:"specialRequest",placeholder:"Any Special Request ( Optional )",className:"materialize-textarea"})),s.a.createElement("h6",null,"Fill In Your Details And Our Team Will Reach To You"),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{onClick:this.submitDetails,className:"btn blue waves-effect waves-light"},"Submit"))))}}]),t}(u.Component);a.a=d},40:function(e,a){e.exports.validateEmail=function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||(alert("Invalid Email"),!1)},e.exports.validPhoneNo=function(e){return!!e.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{10})$/)||(alert("Invalid PhoneNo"),!1)},e.exports.validUserName=function(e){return!!e.toLowerCase().match(/^[a-zA-Z ]{2,30}$/)||(alert("Invalid Username"),!1)},e.exports.validateSpecialRequest=function(e){return!!e.match(/^[a-z0-9_-]{0,50}$/)||(alert("Invalid Special Request"),!1)}},41:function(e,a,t){"use strict";a.a=[{id:1,name:"Australia",type:"international",label:"Australia",value:1},{id:2,name:"Bali",type:"international",label:"Bali",value:2},{id:3,name:"Dubai",type:"international",label:"Dubai",value:3},{id:4,name:"Europe",type:"international",label:"Europe",value:4},{id:5,name:"Hong Kong",type:"international",label:"Hong Kong",value:5},{id:6,name:"Malaysia",type:"international",label:"Malaysia",value:6},{id:7,name:"Maldives",type:"international",label:"Maldives",value:7},{id:8,name:"Mauritius",type:"international",label:"Mauritius",value:8},{id:9,name:"New Zealand",type:"international",label:"New Zealand",value:9},{id:10,name:"Seychelles",type:"international",label:"Seychelles",value:10},{id:11,name:"Singapore",type:"international",label:"Singapore",value:11},{id:12,name:"South Africa",type:"international",label:"South Africa",value:12},{id:13,name:"Sri Lanka",type:"international",label:"Sri Lanka",value:13},{id:14,name:"Switzerland",type:"international",label:"Switzerland",value:14},{id:15,name:"Thailand",type:"international",label:"Thailand",value:15},{id:16,name:"Turkey",type:"international",label:"Turkey",value:16},{id:17,name:"Singapore + Bali",type:"international",label:"Singapore + Bali",value:17},{id:18,name:"Singapore + Malaysia",type:"international",label:"Singapore + Malaysia",value:18},{id:19,name:"Others international",type:"international",label:"Others international",value:19},{id:20,name:"Bhutan",type:"international",label:"Bhutan",value:20},{id:21,name:"Africa",type:"international",label:"Africa",value:21},{id:22,name:"Egypt",type:"international",label:"Egypt",value:22},{id:23,name:"Cambodia",type:"international",label:"Cambodia",value:23},{id:24,name:"Vietnam",type:"international",label:"Vietnam",value:24},{id:25,name:"Nepal",type:"international",label:"Nepal",value:25},{id:26,name:"CIS Countries ",type:"international",label:"CIS Countries ",value:26},{id:27,name:"Iceland",type:"international",label:"Iceland",value:27},{id:28,name:"Kenya",type:"international",label:"Kenya",value:28},{id:29,name:"Azerbaijan",type:"international",label:"Azerbaijan",value:29},{id:30,name:"Andaman",type:"india",label:"Andaman",value:30},{id:31,name:"Char Dham",type:"india",label:"Char Dham",value:31},{id:32,name:"Goa",type:"india",label:"Goa",value:32},{id:33,name:"Golden Triangle",type:"india",label:"Golden Triangle",value:33},{id:34,name:"Kerala",type:"india",label:"Kerala",value:34},{id:35,name:"Ladakh",type:"india",label:"Ladakh",value:35},{id:36,name:"North East",type:"india",label:"North East",value:36},{id:37,name:"Himachal",type:"india",label:"Himachal",value:37},{id:38,name:"Kashmir",type:"india",label:"Kashmir",value:38},{id:39,name:"Rajasthan",type:"india",label:"Rajasthan",value:39},{id:40,name:"Sikkim - Darjeeling",type:"india",label:"Sikkim - Darjeeling",value:40},{id:41,name:"Bangalore",type:"india",label:"Bangalore",value:41},{id:42,name:"Chennai",type:"india",label:"Chennai",value:42},{id:43,name:"Hyderabad",type:"india",label:"Hyderabad",value:43},{id:44,name:"Lucknow",type:"india",label:"Lucknow",value:44},{id:45,name:"Mumbai",type:"india",label:"Mumbai",value:45},{id:46,name:"New Delhi",type:"india",label:"New Delhi",value:46},{id:47,name:"Pune",type:"india",label:"Pune",value:47},{id:48,name:"Others",type:"india",label:"Others",value:48},{id:49,name:"Gujarat",type:"india",label:"Gujarat",value:49},{id:50,name:"Uttarakhand",type:"india",label:"Uttarakhand",value:50},{id:51,name:"Uttar Pradesh",type:"india",label:"Uttar Pradesh",value:51},{id:52,name:"West Bengal",type:"india",label:"West Bengal",value:52},{id:53,name:"Bihar",type:"india",label:"Bihar",value:53},{id:54,name:"Punjab",type:"india",label:"Punjab",value:54},{id:55,name:"Tamil Nadu",type:"india",label:"Tamil Nadu",value:55},{id:56,name:"Karnataka",type:"india",label:"Karnataka",value:56},{id:57,name:"Odisha",type:"india",label:"Odisha",value:57},{id:58,name:"Maharashtra",type:"india",label:"Maharashtra",value:58},{id:59,name:"UAE",type:"international",label:"UAE",value:59},{id:60,name:"China",type:"international",label:"China",value:60},{id:61,name:"Japan",type:"international",label:"Japan",value:61},{id:62,name:"Canada",type:"international",label:"Canada",value:62},{id:63,name:"Israel",type:"international",label:"Israel",value:63},{id:64,name:"USA",type:"international",label:"USA",value:64},{id:65,name:"Russia",type:"international",label:"Russia",value:65},{id:66,name:"Myanmar",type:"international",label:"Myanmar",value:66},{id:67,name:"Jordan",type:"international",label:"Jordan",value:67},{id:68,name:"Uzbekistan",type:"international",label:"Uzbekistan",value:68}]},76:function(e,a,t){"use strict";t.r(a);var n=t(33),l=t(34),i=t(36),r=t(35),o=t(0),u=t.n(o),s=t(9),c=t(39),d=t(42),m=t.n(d),p=t(41),v={};p.a.forEach((function(e){v[e.label]=null}));var h=function(e){Object(i.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),r=0;r<l;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={destination:"",hireInDate:null,hireOutDate:null,guide:"",typeOfTourist:""},e.handleGuideType=function(a){e.setState({guide:a.target.options[a.target.selectedIndex].value})},e.handleGroupType=function(a){e.setState({typeOfTourist:a.target.options[a.target.selectedIndex].value})},e.submitHotelData=function(){""!=e.state.destination&&""!=e.state.guide&&""!=e.state.typeOfTourist?e.state.hireInDate&&e.state.hireOutDate?e.userDetailsModel.open():alert("Please Fill Dates"):alert("Please Fill All Details")},e.sendAllDataToServer=function(a){e.userDetailsModel.close(),m.a.post("".concat("/","services/"),{userData:a,data:e.state,serviceType:"Guide"}).then((function(e){alert("Thanks For Choosing Us we will contact you")})).catch((function(e){console.log(e)}))},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(window.screen.availWidth>750){var a=document.querySelector(".guide-caro"),t=s.Carousel.init(a,{fullWidth:!0,duration:400});setInterval((function(){t.next()}),6e3)}var n=document.querySelector(".fromCity");s.Autocomplete.init(n,{data:v,limit:4,onAutocomplete:function(a){e.setState({destination:a})}});var l=document.querySelector(".checkInDate");s.Datepicker.init(l,{defaultDate:new Date,minDate:new Date,onSelect:function(a){e.setState({hireInDate:a})}});var i=document.querySelector(".checkOutDate");s.Datepicker.init(i,{defaultDate:new Date,minDate:new Date,onSelect:function(a){e.setState({hireOutDate:a})}});var r=document.querySelectorAll(".event-type");s.FormSelect.init(r,{});var o=document.getElementById("user-info");this.userDetailsModel=s.Modal.init(o,{});var u=document.querySelectorAll(".learn-modal");s.Modal.init(u,{})}},{key:"render",value:function(){return u.a.createElement("div",{id:"booking-activity"},u.a.createElement("div",{className:"carousel carousel-silder default-caro booking-caro guide-caro"},u.a.createElement("a",{className:"carousel-item",href:"#one!"},u.a.createElement("div",{className:"caro-item",id:"caro-1"})),u.a.createElement("a",{className:"carousel-item",href:"#two!"},u.a.createElement("div",{className:"caro-item",id:"caro-2"})),u.a.createElement("a",{className:"carousel-item",href:"#three!"},u.a.createElement("div",{className:"caro-item",id:"caro-3"}))),u.a.createElement("div",{id:"flight-model",className:"container"},u.a.createElement("div",{id:"flight-model-content"},u.a.createElement("div",{id:"flight-iconBox"},u.a.createElement("i",{className:"material-icons"},"explore"),u.a.createElement("span",null,"GUIDE")),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col s12 m9"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"input-field col s12 m4"},u.a.createElement("i",{className:"material-icons prefix"},"location_on"),u.a.createElement("input",{type:"text",id:"form-city-input",className:"autocomplete fromCity",placeholder:"Location"})),u.a.createElement("div",{className:"input-field col s12 m4"},u.a.createElement("i",{className:"material-icons prefix"},"date_range"),u.a.createElement("input",{type:"text",className:"datepicker checkInDate",placeholder:"Hire In Date"})),u.a.createElement("div",{className:"input-field col s12 m4"},u.a.createElement("i",{className:"material-icons prefix"},"date_range"),u.a.createElement("input",{type:"text",className:"datepicker checkOutDate",placeholder:"Hire Out Date"}))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"input-field col s12 m4"},u.a.createElement("select",{defaultValue:"Default",className:"event-type",onChange:this.handleGuideType},u.a.createElement("option",{value:"Default",disabled:!0},"Guide Type"),u.a.createElement("option",{value:"Tour Coordinator"},"Tour Coordinator"),u.a.createElement("option",{value:"Tour Guide"},"Tour Guide"),u.a.createElement("option",{value:"Sightseeing Guide"},"Sightseeing Guide"),u.a.createElement("option",{value:"Tour Guide"},"Tour Guide"),u.a.createElement("option",{value:"Tour Manager"},"Tour Manager")),u.a.createElement("a",{href:"#learn-more",className:"modal-trigger"},"Learn About Tour Guides"),u.a.createElement("div",{id:"learn-more",className:"modal learn-modal"},u.a.createElement("div",{className:"modal-content"},u.a.createElement("h6",null,"Types Of Guide"),u.a.createElement("h5",null,"Tour Coordinator"),u.a.createElement("p",null,"Hospitality Professionals Expert at Managing the Group Event/Tour"),u.a.createElement("h5",null,"Tour Guide"),u.a.createElement("p",null,"Tour Guide Accomplish with the group/individual thoughtout the travel duration serving proper guidence for right information and ensure safety of Tourist"),u.a.createElement("h5",null,"Sightseeing Guide"),u.a.createElement("p",null,"Expert Person who knows a particlar Region/Destination/Monument/Pilgrim or sight locally more than enough to story the fact behind exsistence"),u.a.createElement("h5",null,"Tour Leader"),u.a.createElement("p",null,"(A Travel Expert who manages to faciliate all the needful services to a group of tourist travelling to a destination, he acts as a tour escort who accompanies a group and ensures proper flow of travel purpose"),u.a.createElement("h5",null,"Tour Manager"),u.a.createElement("p",null,"A Manager Personal Engaged in Touring and Handling a Team Professionally and  perfect in all situations")))),u.a.createElement("div",{className:"input-field col s12 m4"},u.a.createElement("select",{defaultValue:"Default",className:"event-type",onChange:this.handleGroupType},u.a.createElement("option",{value:"Default",disabled:!0},"Type of Tourist"),u.a.createElement("option",{value:"Tour Coordinator"},"Group (9+)"),u.a.createElement("option",{value:"Tour Guide"},"Individual (0-9)"))))),u.a.createElement("div",{className:"col s12 m2 offset-m1"},u.a.createElement("button",{onClick:this.submitHotelData,className:"waves-effect waves-light btn blue",id:"search"},"Search"))))),u.a.createElement(c.a,{sendData:this.sendAllDataToServer}))}}]),t}(o.Component);a.default=h}}]);
//# sourceMappingURL=9.c583e062.chunk.js.map