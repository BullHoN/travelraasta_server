(this.webpackJsonphome_page=this.webpackJsonphome_page||[]).push([[9],{38:function(e,a,t){"use strict";var l=t(40),n=t(33),i=t(34),s=t(36),r=t(35),c=t(0),o=t.n(c),d=t(39),m=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={phoneNo:"",name:"",email:"",specialRequest:""},e.handleChange=function(a){e.setState(Object(l.a)({},a.target.id,a.target.value))},e.submitDetails=function(){(""==e.state.email||Object(d.validateEmail)(e.state.email))&&Object(d.validPhoneNo)(e.state.phoneNo)&&Object(d.validUserName)(e.state.name)&&(""==e.state.specialRequest||Object(d.validateSpecialRequest)(e.state.specialRequest))&&e.props.sendData(e.state)},e}return Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"modal",id:"user-info"},o.a.createElement("div",{className:"modal-content center"},o.a.createElement("h6",null,"In Order To Provide You Best Deal Our Team Manually Search All Over Internet For You"),o.a.createElement("div",{className:"input-field"},o.a.createElement("i",{className:"material-icons prefix"},"account_circle"),o.a.createElement("input",{onChange:this.handleChange,id:"name",placeholder:"Name",type:"text",className:"validate"})),o.a.createElement("div",{className:"input-field"},o.a.createElement("i",{className:"material-icons prefix"},"email"),o.a.createElement("input",{onChange:this.handleChange,id:"email",placeholder:"Email (Optional)",type:"text",className:"validate"})),o.a.createElement("div",{className:"input-field"},o.a.createElement("i",{className:"material-icons prefix"},"phone"),o.a.createElement("input",{onChange:this.handleChange,id:"phoneNo",placeholder:"Phone No (+91 9818040401)",type:"tel",className:"validate"})),o.a.createElement("div",{className:"input-field"},o.a.createElement("i",{className:"material-icons prefix"},"mode_edit"),o.a.createElement("textarea",{onChange:this.handleChange,id:"specialRequest",placeholder:"Any Special Request ( Optional )",className:"materialize-textarea"})),o.a.createElement("h6",null,"Fill In Your Details And Our Team Will Reach To You"),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{onClick:this.submitDetails,className:"btn blue waves-effect waves-light"},"Submit"))))}}]),t}(c.Component);a.a=m},39:function(e,a){e.exports.validateEmail=function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||(alert("Invalid Email"),!1)},e.exports.validPhoneNo=function(e){return!!e.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{10})$/)||(alert("Invalid PhoneNo"),!1)},e.exports.validUserName=function(e){return!!e.toLowerCase().match(/^[a-zA-Z ]{2,30}$/)||(alert("Invalid Username"),!1)},e.exports.validateSpecialRequest=function(e){return!!e.match(/^[a-z0-9_-]{0,50}$/)||(alert("Invalid Special Request"),!1)}},41:function(e,a,t){"use strict";a.a=[{id:1,name:"Australia",type:"international",label:"Australia",value:1},{id:2,name:"Bali",type:"international",label:"Bali",value:2},{id:3,name:"Dubai",type:"international",label:"Dubai",value:3},{id:4,name:"Europe",type:"international",label:"Europe",value:4},{id:5,name:"Hong Kong",type:"international",label:"Hong Kong",value:5},{id:6,name:"Malaysia",type:"international",label:"Malaysia",value:6},{id:7,name:"Maldives",type:"international",label:"Maldives",value:7},{id:8,name:"Mauritius",type:"international",label:"Mauritius",value:8},{id:9,name:"New Zealand",type:"international",label:"New Zealand",value:9},{id:10,name:"Seychelles",type:"international",label:"Seychelles",value:10},{id:11,name:"Singapore",type:"international",label:"Singapore",value:11},{id:12,name:"South Africa",type:"international",label:"South Africa",value:12},{id:13,name:"Sri Lanka",type:"international",label:"Sri Lanka",value:13},{id:14,name:"Switzerland",type:"international",label:"Switzerland",value:14},{id:15,name:"Thailand",type:"international",label:"Thailand",value:15},{id:16,name:"Turkey",type:"international",label:"Turkey",value:16},{id:17,name:"Singapore + Bali",type:"international",label:"Singapore + Bali",value:17},{id:18,name:"Singapore + Malaysia",type:"international",label:"Singapore + Malaysia",value:18},{id:19,name:"Others international",type:"international",label:"Others international",value:19},{id:20,name:"Bhutan",type:"international",label:"Bhutan",value:20},{id:21,name:"Africa",type:"international",label:"Africa",value:21},{id:22,name:"Egypt",type:"international",label:"Egypt",value:22},{id:23,name:"Cambodia",type:"international",label:"Cambodia",value:23},{id:24,name:"Vietnam",type:"international",label:"Vietnam",value:24},{id:25,name:"Nepal",type:"international",label:"Nepal",value:25},{id:26,name:"CIS Countries ",type:"international",label:"CIS Countries ",value:26},{id:27,name:"Iceland",type:"international",label:"Iceland",value:27},{id:28,name:"Kenya",type:"international",label:"Kenya",value:28},{id:29,name:"Azerbaijan",type:"international",label:"Azerbaijan",value:29},{id:30,name:"Andaman",type:"india",label:"Andaman",value:30},{id:31,name:"Char Dham",type:"india",label:"Char Dham",value:31},{id:32,name:"Goa",type:"india",label:"Goa",value:32},{id:33,name:"Golden Triangle",type:"india",label:"Golden Triangle",value:33},{id:34,name:"Kerala",type:"india",label:"Kerala",value:34},{id:35,name:"Ladakh",type:"india",label:"Ladakh",value:35},{id:36,name:"North East",type:"india",label:"North East",value:36},{id:37,name:"Himachal",type:"india",label:"Himachal",value:37},{id:38,name:"Kashmir",type:"india",label:"Kashmir",value:38},{id:39,name:"Rajasthan",type:"india",label:"Rajasthan",value:39},{id:40,name:"Sikkim - Darjeeling",type:"india",label:"Sikkim - Darjeeling",value:40},{id:41,name:"Bangalore",type:"india",label:"Bangalore",value:41},{id:42,name:"Chennai",type:"india",label:"Chennai",value:42},{id:43,name:"Hyderabad",type:"india",label:"Hyderabad",value:43},{id:44,name:"Lucknow",type:"india",label:"Lucknow",value:44},{id:45,name:"Mumbai",type:"india",label:"Mumbai",value:45},{id:46,name:"New Delhi",type:"india",label:"New Delhi",value:46},{id:47,name:"Pune",type:"india",label:"Pune",value:47},{id:48,name:"Others",type:"india",label:"Others",value:48},{id:49,name:"Gujarat",type:"india",label:"Gujarat",value:49},{id:50,name:"Uttarakhand",type:"india",label:"Uttarakhand",value:50},{id:51,name:"Uttar Pradesh",type:"india",label:"Uttar Pradesh",value:51},{id:52,name:"West Bengal",type:"india",label:"West Bengal",value:52},{id:53,name:"Bihar",type:"india",label:"Bihar",value:53},{id:54,name:"Punjab",type:"india",label:"Punjab",value:54},{id:55,name:"Tamil Nadu",type:"india",label:"Tamil Nadu",value:55},{id:56,name:"Karnataka",type:"india",label:"Karnataka",value:56},{id:57,name:"Odisha",type:"india",label:"Odisha",value:57},{id:58,name:"Maharashtra",type:"india",label:"Maharashtra",value:58},{id:59,name:"UAE",type:"international",label:"UAE",value:59},{id:60,name:"China",type:"international",label:"China",value:60},{id:61,name:"Japan",type:"international",label:"Japan",value:61},{id:62,name:"Canada",type:"international",label:"Canada",value:62},{id:63,name:"Israel",type:"international",label:"Israel",value:63},{id:64,name:"USA",type:"international",label:"USA",value:64},{id:65,name:"Russia",type:"international",label:"Russia",value:65},{id:66,name:"Myanmar",type:"international",label:"Myanmar",value:66},{id:67,name:"Jordan",type:"international",label:"Jordan",value:67},{id:68,name:"Uzbekistan",type:"international",label:"Uzbekistan",value:68}]},84:function(e,a,t){"use strict";t.r(a);var l=t(33),n=t(34),i=t(36),s=t(35),r=t(0),c=t.n(r),o=t(9),d=t(40),m=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=a.call.apply(a,[this].concat(i))).state={adults:1,childs:0,infants:0,travelType:"Seater"},e.handleFlightClassClick=function(a){e.setState({travelType:a.target.id})},e.getCheckedVal=function(a){return e.state.travelType===a},e.handleFlightClassChange=function(e){},e.handlePassengersAddition=function(a){var t=a.target.id,l=50;"infants"===t&&(l=30),"childs"===t&&(l=20),e.setState(Object(d.a)({},t,e.state[t]+1<l?e.state[t]+1:e.state[t]))},e.handlePassengersSubtraction=function(a){var t=a.target.id;e.setState(Object(d.a)({},t,e.state[t]-1<1?e.state[t]:e.state[t]-1))},e.submitTheFlightInfo=function(){e.props.getInfo(e.state)},e}return Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"pass-info",className:"dropdown-content z-depth-2"},c.a.createElement("div",{id:"pass-wrapper"},c.a.createElement("div",{id:"passengers"},c.a.createElement("h6",null,"Passengers"),c.a.createElement("div",{id:"passengers-list"},c.a.createElement("h6",null,"Adult (+12 yrs)"),c.a.createElement("div",{className:"val"},c.a.createElement("button",{className:"btn blue",id:"adults",onClick:this.handlePassengersSubtraction},"-"),c.a.createElement("span",null,this.state.adults),c.a.createElement("button",{className:"btn blue",id:"adults",onClick:this.handlePassengersAddition},"+"))),c.a.createElement("div",{id:"passengers-list"},c.a.createElement("h6",null,"Child (2-12 yrs)"),c.a.createElement("div",{className:"val"},c.a.createElement("button",{className:"btn blue",id:"childs",onClick:this.handlePassengersSubtraction},"-"),c.a.createElement("span",null,this.state.childs),c.a.createElement("button",{className:"btn blue",id:"childs",onClick:this.handlePassengersAddition},"+"))),c.a.createElement("div",{id:"passengers-list"},c.a.createElement("h6",null,"Infant (0-2 yrs)"),c.a.createElement("div",{className:"val"},c.a.createElement("button",{className:"btn blue",id:"infants",onClick:this.handlePassengersSubtraction},"-"),c.a.createElement("span",null,this.state.infants),c.a.createElement("button",{className:"btn blue",id:"infants",onClick:this.handlePassengersAddition},"+")))),c.a.createElement("div",{id:"flight-class-info"},c.a.createElement("h6",null,"Bus class"),c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("input",{id:"Seater",className:"with-gap valign-center",checked:this.getCheckedVal("Seater"),onClick:this.handleFlightClassClick,onChange:this.handleFlightClassChange,type:"radio"}),c.a.createElement("span",null,"Seater")),c.a.createElement("label",null,c.a.createElement("input",{id:"Semi Sleeper",className:"with-gap valign-center",checked:this.getCheckedVal("Semi Sleeper"),onClick:this.handleFlightClassClick,onChange:this.handleFlightClassChange,type:"radio"}),c.a.createElement("span",null,"Semi Sleeper")),c.a.createElement("label",null,c.a.createElement("input",{id:"Sleeper",className:"with-gap valign-center",checked:this.getCheckedVal("Sleeper"),onClick:this.handleFlightClassClick,onChange:this.handleFlightClassChange,type:"radio"}),c.a.createElement("span",null,"Sleeper"))),c.a.createElement("button",{className:"btn blue waves-effect",id:"apply",onClick:this.submitTheFlightInfo},"Apply"))))}}]),t}(r.Component),u=t(38),p=t(42),h=t.n(p),v=t(41),b={};v.a.forEach((function(e){b[e.label]=null}));var y=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=a.call.apply(a,[this].concat(i))).state={fromCity:"",toCity:"",date:null,busClass:"",busAndPassInfo:{adults:1,childs:0,infants:0,travelType:"Seater"}},e.handleClassChange=function(a){e.setState({busClass:a.target.options[a.target.selectedIndex].value})},e.getBusAndPassInfo=function(a){e.setState({busAndPassInfo:a}),e.flightDropdown.close()},e.submitHotelData=function(){""!=e.state.fromCity&&""!=e.state.toCity&&""!=e.state.busClass?e.state.date?e.userDetailsModel.open():alert("Please Fill Date"):alert("Please Fill In Details")},e.sendAllDataToServer=function(a){e.userDetailsModel.close(),h.a.post("".concat("/","services/"),{userData:a,data:e.state,serviceType:"Bus"}).then((function(e){alert("Thanks For Choosing Us we will contact you")})).catch((function(e){console.log(e)}))},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(window.screen.availWidth>750){var a=document.querySelector(".bus-caro"),t=o.Carousel.init(a,{fullWidth:!0,duration:400});setInterval((function(){t.next()}),6e3)}var l=document.querySelector(".fromCity");o.Autocomplete.init(l,{data:b,limit:4,onAutocomplete:function(a){e.setState({fromCity:a})}});var n=document.querySelector(".toCity");o.Autocomplete.init(n,{data:b,limit:4,onAutocomplete:function(a){e.setState({toCity:a})}});var i=document.querySelector(".checkInDate");o.Datepicker.init(i,{defaultDate:new Date,minDate:new Date,onSelect:function(a){e.setState({date:a})}});var s=document.querySelector(".hotel-type");o.FormSelect.init(s,{});var r=document.getElementById("flight-info");this.flightDropdown=o.Dropdown.init(r,{coverTrigger:!1,constrainWidth:!1,closeOnClick:!1});var c=document.getElementById("user-info");this.userDetailsModel=o.Modal.init(c,{})}},{key:"render",value:function(){var e=this.state.busAndPassInfo,a=e.adults+e.childs+e.infants;return c.a.createElement("div",{id:"booking-activity"},c.a.createElement("div",{className:"carousel carousel-silder default-caro booking-caro bus-caro"},c.a.createElement("a",{className:"carousel-item",href:"#one!"},c.a.createElement("div",{className:"caro-item",id:"caro-1"})),c.a.createElement("a",{className:"carousel-item",href:"#two!"},c.a.createElement("div",{className:"caro-item",id:"caro-2"})),c.a.createElement("a",{className:"carousel-item",href:"#three!"},c.a.createElement("div",{className:"caro-item",id:"caro-3"}))),c.a.createElement("div",{id:"flight-model",className:"container"},c.a.createElement("div",{id:"flight-model-content"},c.a.createElement("div",{id:"flight-iconBox"},c.a.createElement("i",{className:"material-icons"},"departure_board"),c.a.createElement("span",null,"BUS")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m9"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12 m4"},c.a.createElement("i",{className:"material-icons prefix"},"location_on"),c.a.createElement("input",{type:"text",id:"form-city-input",className:"autocomplete fromCity",placeholder:"From"})),c.a.createElement("div",{className:"input-field col s12 m4"},c.a.createElement("i",{className:"material-icons prefix"},"location_on"),c.a.createElement("input",{type:"text",id:"form-city-input",className:"autocomplete toCity",placeholder:"To"})),c.a.createElement("div",{className:"input-field col s12 m4"},c.a.createElement("i",{className:"material-icons prefix"},"date_range"),c.a.createElement("input",{type:"text",className:"datepicker checkInDate",placeholder:"Date"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12 m4"},c.a.createElement("select",{defaultValue:"Default",className:"hotel-type",onChange:this.handleClassChange},c.a.createElement("option",{value:"Default",disabled:!0},"Choose Class"),c.a.createElement("option",{value:"AC"},"AC"),c.a.createElement("option",{value:"Non AC"},"Non AC"),c.a.createElement("option",{value:"All"},"All"))),c.a.createElement("div",{id:"flight-info",className:"col s12 m4 dropdown-trigger","data-target":"pass-info"},c.a.createElement("span",null,a," Travellers, ",e.travelType),c.a.createElement("i",{className:"material-icons"},"person")),c.a.createElement(m,{getInfo:this.getBusAndPassInfo}))),c.a.createElement("div",{className:"col s12 m2 offset-m1"},c.a.createElement("button",{onClick:this.submitHotelData,className:"waves-effect waves-light btn blue",id:"search"},"Search"))))),c.a.createElement(u.a,{sendData:this.sendAllDataToServer}))}}]),t}(r.Component);a.default=y}}]);
//# sourceMappingURL=9.54a591d9.chunk.js.map