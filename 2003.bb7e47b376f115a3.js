"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[2003],{55618:(T,f,a)=>{a.d(f,{c:()=>g});var p=a(88692),A=a(71800),c=a(72533),_=a(18488),d=a(53074),t=a(20092),M=a(47766),m=a(64537);let C=(()=>{class l{static forRoot(){return{ngModule:l}}}return l.\u0275fac=function(b){return new(b||l)},l.\u0275mod=m.oAB({type:l}),l.\u0275inj=m.cJS({imports:[p.ez,t.u5,t.UX,c.JX]}),l})(),g=(()=>{class l{static forRoot(){return{ngModule:l,providers:[d.P,_.G]}}}return l.\u0275fac=function(b){return new(b||l)},l.\u0275mod=m.oAB({type:l}),l.\u0275inj=m.cJS({imports:[p.ez,A.zk.forRoot(),c.JX,p.ez,t.u5,t.UX,M.e,C.forRoot()]}),l})()},72003:(T,f,a)=>{a.r(f),a.d(f,{AttributeMasterModule:()=>k});var p=a(88692),A=a(46543),c=a(72533),_=a(12640),d=a(7976),t=a(64537),M=a(35732),m=a(67297),C=a(71180);let g=(()=>{class r{constructor(e,i,n){this.http=e,this.authService=i,this.state=n;const s=this.state.getGlobalSetting("apiUrl");s&&s.length>0&&(this.apiUrl=s)}getRequestOptions(){return new M.WM({"Content-type":"application/json",Authorization:this.authService.getAuth().token,"X-Requested-With":"XMLHttpRequest"})}saveDepartmentWiseCustomAttributes(e,i){return this.http.post(this.apiUrl+"/saveDepartmentWiseCustomAttributes",{mode:i,data:e})}getDepartmentWiseAttributesList(e){return this.http.get(this.apiUrl+`/getDepartmentWiseAttributesList?departmentName=${e}`)}getAttributeValuesList(e,i){return this.http.get(this.apiUrl+`/getAttributeValuesList?attribute=${e}&department=${i}`)}getCustomAttributesList(){return this.http.get(this.apiUrl+"/getCustomAttributesList")}loadCustomAttributesDetails(e){return this.http.get(this.apiUrl+`/loadCustomAttributesDetails?ID=${e}`)}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(M.eN),t.LFG(m.e),t.LFG(C.q))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac}),r})();var l=a(67311),v=a(14970),b=a(53074),u=a(20092),x=a(99515);function y(r,o){if(1&r&&(t.TgZ(0,"option",23),t._uU(1),t.qZA()),2&r){const e=o.$implicit;t.s9C("value",e.DepartmentName),t.xp6(1),t.Oqu(e.DepartmentName)}}function P(r,o){if(1&r&&(t.TgZ(0,"option",23),t._uU(1),t.qZA()),2&r){const e=o.$implicit;t.s9C("value",e.FIELDNAME),t.xp6(1),t.Oqu(e.FIELDNAME)}}function Z(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"div",11)(1,"label",12),t._uU(2,"Parent:"),t.qZA(),t.TgZ(3,"div",13)(4,"select",24),t.NdJ("ngModelChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.attributeMaster.ParentField=n)})("change",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.getAttributeParentList())}),t._UZ(5,"option",15),t.YNc(6,P,2,2,"option",16),t.qZA()()()}if(2&r){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.attributeMaster.ParentField)("disabled","VIEW"==e.mode),t.xp6(2),t.Q6J("ngForOf",e.parentList)}}function F(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"app-multi-input",25),t.NdJ("shipadress",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.getValues(n))}),t.qZA()}if(2&r){const e=t.oxw();t.Q6J("mode",e.mode)("ShippingArray",e.attributeListDetail)("resetform",e.onChildresetform)("height",16)("multiInputLabelName","Values")("ParentList",e.attributeParentlist)}}let U=(()=>{class r{constructor(e,i,n,s,h,W){this.attributeMasterService=e,this.alertService=i,this.loadingService=n,this.router=s,this.activeRoute=h,this.masterService=W,this.attributeMaster={},this.attributeListDetail={},this.parentList=[],this.locationNameList=[],this.locationWarehouseList=[],this.attributeParentlist=[],this.disableOnView=!1,this.mode="",this.onChildresetform=!1,this.attributeValueList=[],this.masterService.getDepartmentList().subscribe(B=>{this.masterService.departmentList=B,console.log("deparment list",this.masterService.departmentList)})}ngOnInit(){try{if(this.activeRoute.snapshot.params.returnUrl&&(this.returnUrl=this.activeRoute.snapshot.params.returnUrl),this.activeRoute.snapshot.params.ID){let e=this.activeRoute.snapshot.params.ID;this.loadingService.show("Getting Data ,please wait..."),this.attributeMasterService.loadCustomAttributesDetails(e).subscribe(i=>{console.log("data on view/edit",i),this.loadingService.hide(),"ok"==i.status?(this.attributeMaster.DataType=i.result.DataType,this.attributeMaster.Filter1=i.result.Filter1,this.attributeMaster.FieldName=i.result.FieldName,this.attributeMaster.EntityName=i.result.EntityName,this.attributeMaster.ID=i.result.ID,this.attributeMaster.IsList=i.result.IsList,this.attributeMaster.IsRequired=i.result.IsRequired,this.attributeMaster.AttributesList=i.result.AttributesList,this.attributeListDetail=i.result.AttributesList,this.attributeMaster.ParentField=i.result.ParentField,console.log("attribute master check",this.attributeMaster,this.attributeMaster.AttributesList,this.attributeListDetail),this.getParentList(),this.getAttributeParentList(),"EDIT"==this.activeRoute.snapshot.params.mode?(this.modeTitle="Edit Attribute",this.mode="EDIT"):"VIEW"==this.activeRoute.snapshot.params.mode&&(this.modeTitle="View Attribute",this.mode="VIEW")):(this.mode="",this.modeTitle="Edit- Error in Location Entry")},i=>{this.loadingService.hide(),this.mode="",this.modeTitle="Edit2 -Error in Loading data"})}else this.mode="NEW",this.modeTitle="Add Attribute";this.activeRoute.snapshot.params.mode&&"VIEW"==this.activeRoute.snapshot.params.mode&&(this.disableOnView=!0)}catch(e){this.alertService.info(e)}}onreset(){try{this.router.navigate(["./pages/masters/attribute-master"])}catch(e){alert(e)}}saveAttribute(){if(null!=this.attributeMaster.Filter1&&""!=this.attributeMaster.Filter1){if(this.loadingService.show("Saving Location Entry.Please Wait...."),"list"==this.attributeMaster.DataType?this.attributeMaster.IsList=1:(this.attributeMaster.IsList=0,this.attributeMaster.ParentField=null),this.attributeMaster.EntityName="Product",this.attributeMaster.IsRequired=0,"text"==this.attributeMaster.DataType){let e={};e.ATTRIBUTE=this.attributeListDetail.ATTRIBUTE,e.Parent=this.attributeListDetail.Parent;let i=Object.assign(e,{},this.attributeListDetail);this.attributeMaster.AttributesList=null==i.ATTRIBUTE&&null==i.Parent?[]:[i]}console.log("attribute master",this.attributeMaster,this.attributeMaster.AttributesList,this.attributeListDetail),this.attributeMasterService.saveDepartmentWiseCustomAttributes(this.attributeMaster,this.mode).subscribe(e=>{console.log("result on save",e),"ok"==e.status?(this.loadingService.hide(),this.alertService.success(e.result),setTimeout(()=>{this.onreset()},1500)):(this.loadingService.hide(),console.log("response for error",e),this.alertService.info(e.result.error))},e=>{this.loadingService.hide(),console.log("response for error 1",e),this.alertService.info(e.error)})}else this.alertService.info("Department field cannot be empty")}getValues(e){console.log("values ma k k aaucha",e),this.attributeMaster.AttributesList=e}getParentList(){this.attributeMasterService.getDepartmentWiseAttributesList(this.attributeMaster.Filter1).subscribe(e=>{this.parentList=e.result})}getAttributeParentList(){this.attributeMasterService.getAttributeValuesList(this.attributeMaster.ParentField,this.attributeMaster.Filter1).subscribe(e=>{this.attributeParentlist=e.result})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(g),t.Y36(l.c),t.Y36(v.V),t.Y36(d.F0),t.Y36(d.gz),t.Y36(b.P))},r.\u0275cmp=t.Xpm({type:r,selectors:[["attribute-master-form"]],decls:40,vars:11,consts:[[1,"sticky-top","row"],[1,"col-md-4"],[1,"col-md-8"],[1,"row","pull-right","mx-2"],["type","submit",1,"btn","btn-info",2,"font-size","12px",3,"disabled","click"],["type","button","routerLink","/pages/masters/attribute-master","title","Cancel",1,"btn","btn-info",2,"font-size","12px"],[1,"card"],[1,"card-header"],[1,"page-title"],[1,"card-body"],[1,"container"],[1,"form-group","row"],[1,"col-sm-3","form-control-label",2,"font-size","13px"],[1,"col-sm-7"],["id","type","name","type",2,"height","4vh","font-size","14px","width","100%",3,"ngModel","disabled","ngModelChange","change"],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","text","id","attributeName","autocomplete","off",1,"form-control",2,"height","4vh","font-size","14px",3,"ngModel","disabled","ngModelChange"],["id","type","name","type",2,"height","4vh","font-size","14px","width","100%",3,"ngModel","disabled","ngModelChange"],["value","text"],["value","list"],["class","form-group row",4,"ngIf"],[3,"mode","ShippingArray","resetform","height","multiInputLabelName","ParentList","shipadress",4,"ngIf"],[3,"value"],["id","Parents","name","parent",2,"height","4vh","font-size","14px","width","100%",3,"ngModel","disabled","ngModelChange","change"],[3,"mode","ShippingArray","resetform","height","multiInputLabelName","ParentList","shipadress"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Attribute "),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"form")(7,"button",4),t.NdJ("click",function(){return i.saveAttribute()}),t._uU(8,"Save"),t.qZA(),t.TgZ(9,"button",5),t._uU(10,"Back"),t.qZA()()()()(),t.TgZ(11,"div",6)(12,"div",7)(13,"h5",8),t._uU(14),t.qZA()(),t.TgZ(15,"div",9)(16,"div",10)(17,"div",11)(18,"label",12),t._uU(19,"Department Name:"),t.qZA(),t.TgZ(20,"div",13)(21,"select",14),t.NdJ("ngModelChange",function(s){return i.attributeMaster.Filter1=s})("change",function(){return i.getParentList()}),t._UZ(22,"option",15),t.YNc(23,y,2,2,"option",16),t.qZA()()(),t.TgZ(24,"div",11)(25,"label",12),t._uU(26,"Attribute Name:"),t.qZA(),t.TgZ(27,"div",13)(28,"input",17),t.NdJ("ngModelChange",function(s){return i.attributeMaster.FieldName=s}),t.qZA()()(),t.TgZ(29,"div",11)(30,"label",12),t._uU(31,"Type:"),t.qZA(),t.TgZ(32,"div",13)(33,"select",18),t.NdJ("ngModelChange",function(s){return i.attributeMaster.DataType=s}),t.TgZ(34,"option",19),t._uU(35,"Text"),t.qZA(),t.TgZ(36,"option",20),t._uU(37,"List"),t.qZA()()()(),t.YNc(38,Z,7,3,"div",21),t.YNc(39,F,1,6,"app-multi-input",22),t.qZA()()()),2&e&&(t.xp6(7),t.Q6J("disabled",i.disableOnView),t.xp6(7),t.Oqu(i.modeTitle),t.xp6(7),t.Q6J("ngModel",i.attributeMaster.Filter1)("disabled","VIEW"==i.mode),t.xp6(2),t.Q6J("ngForOf",i.masterService.departmentList),t.xp6(5),t.Q6J("ngModel",i.attributeMaster.FieldName)("disabled","VIEW"==i.mode),t.xp6(5),t.Q6J("ngModel",i.attributeMaster.DataType)("disabled","VIEW"==i.mode),t.xp6(5),t.Q6J("ngIf","list"==i.attributeMaster.DataType),t.xp6(1),t.Q6J("ngIf","list"==i.attributeMaster.DataType))},dependencies:[p.sg,p.O5,d.rH,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.On,u.F,x.L],styles:[".card[_ngcontent-%COMP%]{margin:2px 30px 0 300px!important;width:60%}.card-body[_ngcontent-%COMP%]{padding:10px 16px}  #labelname{margin-left:4px!important}  app-multi-input #inputMulti{margin-left:10px}"]}),r})();var L=a(40216);let D=(()=>{class r{transform(e,i){if(e)return i?e.filter(n=>{const s=i.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(n.FieldName?n.FieldName.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(s))return n}):e}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275pipe=t.Yjl({name:"searchData",type:r,pure:!1}),r})();const S=["fileUploadPopup"];function O(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td",24),t._uU(2),t.qZA(),t.TgZ(3,"td",25),t._uU(4),t.qZA(),t.TgZ(5,"td",26),t._uU(6),t.qZA(),t.TgZ(7,"td",27),t._uU(8),t.qZA(),t.TgZ(9,"td",28)(10,"a",29),t.NdJ("click",function(){const s=t.CHM(e).$implicit,h=t.oxw(2);return t.KtG(h.onView(s))}),t._uU(11,"View"),t.qZA(),t.TgZ(12,"a",29),t.NdJ("click",function(){const s=t.CHM(e).$implicit,h=t.oxw(2);return t.KtG(h.onEditClicked(s))}),t._uU(13,"Edit"),t.qZA()()()}if(2&r){const e=o.$implicit,i=o.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(e.FieldName),t.xp6(2),t.Oqu(e.Filter1),t.xp6(2),t.Oqu(e.DataType)}}const I=function(r,o,e){return{itemsPerPage:r,currentPage:o,totalItems:e}};function N(r,o){if(1&r&&(t.ynx(0),t.YNc(1,O,14,4,"tr",23),t.ALo(2,"paginate"),t.ALo(3,"searchData"),t.BQk()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.xi3(3,4,e.attributeDataList,e.filter),t.kEZ(7,I,e.itemsPerPage,e.currentPage,e.totalCount)))}}function w(r,o){1&r&&(t.ynx(0),t.TgZ(1,"tr")(2,"td",30)(3,"div",31),t._uU(4,"Attribute Information are unavailable."),t.qZA()()(),t.BQk())}function E(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"div",32)(1,"div",33)(2,"div",34)(3,"pagination-controls",35),t.NdJ("pageChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.attributePagination(n))}),t.qZA()()()()}if(2&r){const e=t.oxw();t.xp6(3),t.Q6J("directionLinks",e.directionLinks)}}const J=[{path:"",component:(()=>{class r{constructor(e,i,n,s){this.router=e,this.alertService=i,this.spinnerService=n,this.attributeMasterService=s,this.itemsPerPage=20,this.isLoader=!0,this.currentPage=1,this.directionLinks=!0,this.fileUploadPopupSettings=new L.s}handleKeyDownboardEvent(e){"F2"==e.code&&(e.preventDefault(),this.importAttibute())}ngOnInit(){this.getAttributeList(),this.fileUploadMethod()}addAttribute(){try{this.router.navigate(["./pages/masters/attribute-master/add-attribute",{mode:"NEW",returnUrl:this.router.url}])}catch(e){this.alertService.error(e)}}onView(e){try{this.router.navigate(["./pages/masters/attribute-master/add-attribute",{ID:e.ID,mode:"VIEW",returnUrl:this.router.url}])}catch(i){console.log(i),alert(i)}}attributePagination(e){this.isLoader=!0,this.currentPage=e;const i=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{i.isLoader=!1},500)}getAttributeList(){this.spinnerService.show("Loading data, please wait!"),this.attributeMasterService.getCustomAttributesList().subscribe(e=>{e&&(this.spinnerService.hide(),this.attributeDataList=e.result)},e=>{this.alertService.error(e.error)})}onEditClicked(e){try{this.router.navigate(["./pages/masters/attribute-master/add-attribute",{ID:e.ID,mode:"EDIT",returnUrl:this.router.url}])}catch(i){console.log(i),alert(i)}}fileUploadMethod(){this.fileUploadPopupSettings=Object.assign(new L.s,{title:"Attribute Upload",sampleFileUrl:"/downloadSampleExcelforMasterMigration?importName=Attribute Master",uploadEndpoints:"/importAttributeMasterExcel",allowMultiple:!1,acceptFormat:".xlsx",filename:"Attribute Upload Sample"})}importAttibute(){this.fileUploadPopup.show()}fileUploadSuccess(e){"ok"===e.status?(this.alertService.success(e.result),this.getAttributeList()):this.alertService.error(e.result)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(d.F0),t.Y36(l.c),t.Y36(v.V),t.Y36(g))},r.\u0275cmp=t.Xpm({type:r,selectors:[["attribute-master-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(S,5),2&e){let n;t.iGM(n=t.CRH())&&(i.fileUploadPopup=n.first)}},hostBindings:function(e,i){1&e&&t.NdJ("keydown",function(s){return i.handleKeyDownboardEvent(s)},!1,t.evT)},decls:41,vars:11,consts:[[1,"row","col-md-12"],[1,"col-md-4"],[1,"col-md-8"],["routerLink","/pages/dashboard",1,"btn","btn-info","pull-right",2,"font-size","12px"],[1,"btn","btn-info","pull-right",2,"font-size","12px",3,"click"],[1,"row",2,"align-items","center"],[1,"col-md-12","col-sm-8",2,"margin-top","0.5rem"],[1,"card",2,"margin","auto","width","63rem"],[1,"card-header"],[2,"width","25%"],["type","search","placeholder","Search...","autocomplete","off","name","filter",1,"form-control",2,"height","1.5rem","font-size","13px",3,"ngModel","ngModelChange"],[1,"card-body"],[1,"table","table-striped"],[2,"position","sticky","top","0","line-height","1.5rem"],["scope","col",2,"width","3%"],["scope","col",2,"width","20%"],["scope","col",2,"width","15%"],["scope","col",2,"width","11%"],["scope","col",2,"text-align","center","width","19%"],[4,"ngIf"],["class","card-footer","style","padding:5px",4,"ngIf"],[3,"popupsettings","onUploaded"],["fileUploadPopup",""],[4,"ngFor","ngForOf"],[2,"width","3%"],[2,"width","20%"],[2,"width","15%"],[2,"width","11%"],[2,"width","19%","text-align","center"],[1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px","color","white",3,"click"],["colspan","7"],[1,"font-weight-bold"],[1,"card-footer",2,"padding","5px"],[1,"pagination"],[2,"margin","auto"],[1,"my-pagination",3,"directionLinks","pageChange"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Attribute Master"),t.qZA()(),t.TgZ(4,"div",2)(5,"button",3),t._uU(6,"Back"),t.qZA(),t.TgZ(7,"button",4),t.NdJ("click",function(){return i.addAttribute()}),t._uU(8,"Add Attribute"),t.qZA(),t.TgZ(9,"button",4),t.NdJ("click",function(){return i.importAttibute()}),t._uU(10,"Import Attribute [F2]"),t.qZA()()(),t.TgZ(11,"div",5)(12,"div",6)(13,"div",7)(14,"div",8)(15,"span"),t._uU(16,"Attribute Lists"),t.qZA(),t.TgZ(17,"div",9)(18,"input",10),t.NdJ("ngModelChange",function(s){return i.filter=s}),t.qZA()()(),t.TgZ(19,"div",11)(20,"table",12)(21,"thead")(22,"tr",13)(23,"th",14),t._uU(24,"S.N"),t.qZA(),t.TgZ(25,"th",15),t._uU(26,"Attribute Name"),t.qZA(),t.TgZ(27,"th",16),t._uU(28,"Department Name"),t.qZA(),t.TgZ(29,"th",17),t._uU(30,"Type"),t.qZA(),t.TgZ(31,"th",18),t._uU(32,"Action"),t.qZA()()(),t.TgZ(33,"tbody"),t.YNc(34,N,4,11,"ng-container",19),t.YNc(35,w,5,0,"ng-container",19),t.ALo(36,"searchData"),t.qZA()(),t.YNc(37,E,4,1,"div",20),t.ALo(38,"searchData"),t.qZA()()()(),t.TgZ(39,"file-uploader-popup",21,22),t.NdJ("onUploaded",function(s){return i.fileUploadSuccess(s)}),t.qZA()),2&e&&(t.xp6(18),t.Q6J("ngModel",i.filter),t.xp6(16),t.Q6J("ngIf",i.attributeDataList&&i.attributeDataList.length>0),t.xp6(1),t.Q6J("ngIf",i.attributeDataList&&0===t.xi3(36,5,i.attributeDataList,i.filter).length),t.xp6(2),t.Q6J("ngIf",i.attributeDataList&&t.xi3(38,8,i.attributeDataList,i.filter).length>i.itemsPerPage),t.xp6(2),t.Q6J("popupsettings",i.fileUploadPopupSettings))},dependencies:[p.sg,p.O5,d.rH,u.Fj,u.JJ,u.On,c.LS,L.U,c._s,D],styles:[".card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-header[_ngcontent-%COMP%]:after{display:none}.card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:455px!important}.main-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:60px 0}.scroll-touch[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem!important}.sticky-top[_ngcontent-%COMP%]{margin-top:60px;height:100vh}tbody[_ngcontent-%COMP%]{display:block;height:59vh;overflow:auto}thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}th[_ngcontent-%COMP%]{font-size:15px}td[_ngcontent-%COMP%]{font-size:13px}.btn-sm[_ngcontent-%COMP%]{line-height:3px}.card-header[_ngcontent-%COMP%]{padding:10px 20px}.card-footer[_ngcontent-%COMP%]{height:6vh}.searchBy[_ngcontent-%COMP%]{font-size:13px;margin-left:16rem}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#17a2b8!important;border:transparent!important;border-radius:20px!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover{background:#74d4e2!important;border-radius:20px!important;border:transparent!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#c2c2c2;border-radius:20px!important}"]}),r})()},{path:"add-attribute",component:U}];let R=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[d.Bz.forChild(J),d.Bz]}),r})();var V=a(59629),q=a(55618),z=a(18488),Q=a(87584),Y=a(54536);let k=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({providers:[g,z.G,Q.p],imports:[p.ez,R,A.m,c.JX,_.Xd,V.Z,q.c,Y.Is]}),r})()}}]);