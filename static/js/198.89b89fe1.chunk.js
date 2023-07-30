"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[198],{42693:(e,s,t)=>{t.d(s,{Z:()=>l});var n=t(51411),a=t(92379),i=t(72791),o=t(80184);const l=e=>((0,i.useEffect)((()=>{var s;null===(s=e.loadContentDispatch)||void 0===s||s.call(e)}),[]),(0,o.jsx)("div",{className:"ContentDisplay row center-xs",children:(0,o.jsx)("div",{className:(e.fullWidth?"col-md-12":"col-md-10 col-xs-11")+" contentdisplay-content-parent",children:(0,o.jsx)(n.Zb,{className:"contentdisplay-content",elevation:a.u.THREE,children:e.display})})}))},34165:(e,s,t)=>{t.d(s,{g:()=>l});var n=t(59118),a=(t(72791),t(17862)),i=t(80184);const o=e=>{let{onClick:s}=e;return(0,i.jsx)(a.Z,{label:"Return to Academy",icon:n.d.ARROW_RIGHT,onClick:s,options:{iconOnRight:!0}})},l=e=>e.questionProgress[0]===e.questionProgress[1]?(0,i.jsx)(o,{onClick:e.onClickReturn},"return_to_academy"):(0,i.jsx)(a.Z,{label:"Next",icon:n.d.ARROW_RIGHT,onClick:e.onClickNext,options:{iconOnRight:!0}})},68206:(e,s,t)=>{t.d(s,{f:()=>o});var n=t(59118),a=(t(72791),t(17862)),i=t(80184);const o=e=>e.questionProgress[0]<=1?null:(0,i.jsx)(a.Z,{label:"Previous",icon:n.d.ARROW_LEFT,onClick:e.onClick})},63309:(e,s,t)=>{t.d(s,{M:()=>i});t(72791);var n=t(17862),a=t(80184);const i=e=>{let{questionProgress:s}=e;return(0,a.jsx)(n.Z,{label:`Question ${s[0]} of ${s[1]}  `,isDisabled:!0})}},71697:(e,s,t)=>{t.d(s,{A:()=>o});var n=t(59118),a=(t(72791),t(17862)),i=t(80184);const o=e=>{let{onClick:s}=e;return(0,i.jsx)(a.Z,{label:"Reset",icon:n.d.REPEAT,onClick:s})}},1799:(e,s,t)=>{t.d(s,{t:()=>l});var n=t(50698),a=t(59118),i=(t(72791),t(17862)),o=t(80184);const l=e=>{const s=e.hasUnsavedChanges?{intent:n.S.WARNING,minimal:!1}:{};return(0,o.jsx)(i.Z,{label:"Save",icon:a.d.FLOPPY_DISK,onClick:e.onClickSave,options:s})}},86373:(e,s,t)=>{t.d(s,{Z:()=>d});var n=t(37305),a=t(51411),i=t(81694),o=t.n(i),l=t(72791),r=t(80184);const c=()=>{const e=(0,l.useRef)(null);(0,l.useEffect)((()=>{window.ToneMatrix&&window.ToneMatrix.initialise_matrix(e.current)}),[]);return(0,r.jsxs)("div",{className:"sa-tone-matrix",children:[(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:o()("controls","col-xs-12",n.Pyr,n.ZoI),children:[(0,r.jsx)(a.zx,{id:"clear-matrix",onClick:()=>{window.ToneMatrix.clear_matrix()},children:"Clear"}),(0,r.jsx)(a.zx,{id:"randomise-matrix",onClick:()=>{window.ToneMatrix.randomise_matrix()},children:"Randomise"})]})}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-xs-12",ref:e})})]})},d=l.memo(c,(()=>!0))},62725:(e,s,t)=>{t.d(s,{Dh:()=>o,IU:()=>i,gS:()=>l,lu:()=>r});var n=t(72426),a=t.n(n);const i=e=>{const s=a()(e),t=a()();return s.isBefore(t)},o=e=>a()(e).format("Do MMMM, HH:mm"),l=e=>a()(e).format("MMMM Do YYYY, HH:mm"),r=e=>a()(e).format("MMMM Do YYYY")},10198:(e,s,t)=>{t.r(s),t.d(s,{Component:()=>_e,default:()=>$e});var n=t(72791),a=t(57689),i=t(90362),o=t(12538),l=t(76796),r=t(42693),c=t(51411),d=t(92379),m=t(50698),u=t(37305),p=t(59118),h=t(28644),x=t(11087),g=t(77539),v=t(5602),b=t(17862),E=t(74106),j=t(9631),y=t(62725),C=t(83971);const N=e=>e.charAt(0).toUpperCase()+e.slice(1),A=()=>{const e=localStorage.getItem("MissionEditingAssessmentSA");return e?JSON.parse(e):null},T=e=>{localStorage.setItem("MissionEditingAssessmentSA",JSON.stringify(e))},S=e=>{localStorage.setItem("MissionEditingOverviewSA",JSON.stringify(e))},R=e=>{const s=f(e);return[I(e,s[1]),s[0]]},I=(e,s)=>{const t=e.CONTENT.TASK[0],n=t.$;return{type:N(n.kind),isManuallyGraded:!0,closeAt:n.duedate,coverImage:n.coverimage,id:-1,maxXp:s,number:n.number||"",openAt:n.startdate,title:n.title,reading:t.READING?t.READING[0]:"",shortSummary:t.WEBSUMMARY?t.WEBSUMMARY[0]:"",status:l.PF.attempting,story:n.story,xp:0,gradingStatus:"none"}},f=e=>{const s=e.CONTENT.TASK[0],t=s.$,n=O(s);return[{type:N(t.kind),id:-1,globalDeployment:P(s.DEPLOYMENT),graderDeployment:P(s.GRADERDEPLOYMENT),longSummary:s.TEXT[0],missionPDF:"google.com",questions:n[0],title:t.title},n[1]]},P=e=>{if(void 0===e)return(0,l.hj)();{const s=e[0],t=s.IMPORT||s.EXTERNAL,n=t?t[0].$.name:"NONE",a=t&&t[0].SYMBOL||[],i=s.GLOBAL?s.GLOBAL.map((e=>{return[e.IDENTIFIER[0],(s=e.VALUE[0],Function('"use strict";return ('+s+")")()),e.VALUE[0]];var s})):[];return{chapter:parseInt(s.$.interpreter,10),external:{name:n,symbols:a},globals:i}}},O=e=>{let s=0;const t=[];return e.PROBLEMS[0].PROBLEM.forEach(((e,n)=>{const a=e.$.maxxp?parseInt(e.$.maxxp,10):0,i={answer:null,content:e.TEXT[0],id:n,library:P(e.DEPLOYMENT),graderLibrary:P(e.GRADERDEPLOYMENT),type:e.$.type,xp:0,maxXp:a};s+=a,"programming"===i.type&&t.push(D(e,i)),"mcq"===i.type&&t.push(w(e,i))})),[t,s]},w=(e,s)=>{const t=[],n=e.SNIPPET?e.SNIPPET[0].SOLUTION:void 0;let a=0;return e.CHOICE.forEach(((e,s)=>{t.push({content:e.TEXT[0],hint:null}),a="true"===e.$.correct?s:a})),{...s,type:"mcq",answer:n?parseInt(n[0],10):0,choices:t,solution:a}},D=(e,s)=>{const t=e.SNIPPET[0].TESTCASES,n=t&&t[0].PUBLIC||[],a=t&&t[0].PRIVATE||[],i=e.SNIPPET[0].PREPEND,o=e.SNIPPET[0].POSTPEND,l=e.SNIPPET[0].SOLUTION,r={...s,autogradingResults:[],prepend:i?i[0].trim():"",solutionTemplate:e.SNIPPET[0].TEMPLATE[0].trim(),postpend:o?o[0].trim():"",testcases:n.map((e=>L(e))),testcasesPrivate:a.map((e=>L(e))),answer:l?l[0].trim():"",type:"programming"};return e.SNIPPET[0].GRADER&&(r.graderTemplate=e.SNIPPET[0].GRADER[0]),r},L=e=>({type:l.Be.public,answer:e.$.answer,score:parseInt(e.$.score,10),program:e._}),k=(e,s)=>{const t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(s)),t.setAttribute("download",e),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},M=e=>{const s={$:{interpreter:e.chapter.toString()},EXTERNAL:{$:{name:e.external.name}}};return 0!==e.external.symbols.length&&(s.EXTERNAL.SYMBOL=e.external.symbols),0!==e.globals.length&&(s.GLOBAL=e.globals.map((e=>({IDENTIFIER:e[0],VALUE:e[2]})))),s},q=(e,s)=>{const t={},n={coverimage:s.coverImage,duedate:s.closeAt,kind:s.type.toLowerCase(),number:s.number||"",startdate:s.openAt,story:s.story,title:s.title};return t.$=n,s.reading&&""!==s.reading&&(t.READING=s.reading),t.WEBSUMMARY=s.shortSummary,t.TEXT=e.longSummary,t.PROBLEMS={PROBLEM:[]},t.DEPLOYMENT=M(e.globalDeployment),-1!==e.graderDeployment.chapter&&(t.GRADERDEPLOYMENT=M(e.graderDeployment)),e.questions.forEach((e=>{const s={$:{type:e.type},SNIPPET:{SOLUTION:e.answer},TEXT:e.content,CHOICE:[]};if(-1!==e.library.chapter&&(s.$.DEPLOYMENT=M(e.library)),-1!==e.graderLibrary.chapter&&(s.$.GRADERDEPLOYMENT=M(e.graderLibrary)),e.maxXp&&(s.$.maxxp=e.maxXp),"programming"===e.type){e.graderTemplate&&(s.SNIPPET.GRADER=e.graderTemplate);const t={...s.SNIPPET,TEMPLATE:e.solutionTemplate,PREPEND:e.prepend,POSTPEND:e.postpend,TESTCASES:""};if(e.testcases.length||e.testcasesPrivate.length){if(t.TESTCASES={},e.testcases.length){const s=e.testcases.map((e=>({$:{answer:e.answer,score:e.score},_:e.program})));t.TESTCASES.PUBLIC=s}if(e.testcasesPrivate&&e.testcasesPrivate.length){const s=e.testcasesPrivate.map((e=>({$:{answer:e.answer,score:e.score},_:e.program})));t.TESTCASES.PRIVATE=s}}s.SNIPPET=t}"mcq"===e.type&&e.choices.forEach(((t,n)=>{s.CHOICE.push({$:{correct:e.solution===n?"true":"false"},TEXT:t.content})})),t.PROBLEMS.PROBLEM.push(s)})),t};var B=t(80184);const U=e=>{const[s,t]=(0,n.useState)(""),[a,i]=(0,n.useState)(""),[o,l]=(0,n.useState)(!1),r=s=>n=>{const o={...e.overview,[s]:a};t(""),i(""),S(o),e.updateEditingOverview(o)},h=e=>{i(e.target.value)},N=n=>a=>{s!==n&&(t(n),i(e.overview[n]))},A=()=>{l(!o)},T=e=>{(()=>{const e=localStorage.getItem("MissionEditingAssessmentSA"),s=localStorage.getItem("MissionEditingOverviewSA");if(e&&s){const t=JSON.parse(e),n=JSON.parse(s),a=n.fileName||n.title,i=new C.Builder,o={CONTENT:{$:{"xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance"},TASK:q(t,n)}};let l=i.buildObject(o);l=l.replace(/(&#xD;)+/g,""),k(a+".xml",l)}})()},R=e=>(0,B.jsx)(g.Z,{autoFocus:!0,className:"editing-textarea",onChange:h,onBlur:r(e),value:a}),I=(e,t)=>(0,B.jsxs)("div",{className:"row listing-title",children:[(0,B.jsx)(c.xv,{ellipsize:!0,className:"col-xs-10",children:(0,B.jsx)(c.H4,{onClick:N("title"),children:"title"===s?R("title"):V(t)})}),(0,B.jsx)("div",{className:"col-xs-2",children:f(e)})]}),f=e=>(0,B.jsx)(c.zx,{icon:p.d.EXPORT,intent:m.S.DANGER,minimal:!0,onClick:T,children:"Save as XML"}),P=(s,t)=>{const n={...e.overview,category:s};S(n),e.updateEditingOverview(n)},O=function(s){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e,s)=>{};return(0,B.jsx)(Z,{className:u.IRm,items:e.assessmentTypes,onItemSelect:t,itemRenderer:H,filterable:!1,children:(0,B.jsx)(c.zx,{className:u.IRm,text:s,rightIcon:p.d.DOUBLE_CARET_VERTICAL})})};return(0,B.jsxs)("div",{children:[(0,B.jsx)(c.Vq,{canOutsideClickClose:!1,className:"assessment-reset",icon:p.d.WRENCH,isCloseButtonShown:!0,isOpen:o,onClose:A,title:"Other options",children:(0,B.jsxs)("div",{className:u.TmF,children:[(0,B.jsx)(c.H3,{children:"Assessment Type"}),O(e.overview.type,P),(0,B.jsx)(c.H3,{children:"Number"}),(0,B.jsx)("div",{onClick:N("number"),children:"number"===s?R("number"):V(e.overview.number||"")}),(0,B.jsx)(c.H3,{children:"Story"}),(0,B.jsx)("div",{onClick:N("story"),children:"story"===s?R("story"):V(e.overview.story||"")}),(0,B.jsx)("br",{}),(0,B.jsx)(c.H3,{children:"Filename"}),(0,B.jsx)("div",{onClick:N("fileName"),children:"fileName"===s?R("fileName"):V(e.overview.fileName||"")})]})}),(w=e.overview,(0,B.jsx)("div",{children:(0,B.jsxs)(c.Zb,{className:"row listing",elevation:d.u.ONE,children:[(0,B.jsx)("div",{className:"col-xs-3 listing-picture",onClick:N("coverImage"),children:"coverImage"===s?R("coverImage"):(0,B.jsx)("img",{alt:"Assessment cover",className:`cover-image-${w.status}`,src:w.coverImage?w.coverImage:v})}),(0,B.jsxs)("div",{className:"col-xs-9 listing-text",children:[I(w,w.title),(0,B.jsx)("div",{className:"row listing-xp",children:(0,B.jsxs)(c.H6,{children:[" ",`Max XP: ${w.maxXp}`," "]})}),(0,B.jsx)("div",{className:"row listing-description",onClick:N("shortSummary"),children:"shortSummary"===s?R("shortSummary"):(0,B.jsx)(E.Z,{content:V(w.shortSummary)})}),(0,B.jsxs)("div",{className:"listing-controls",children:[(0,B.jsxs)(c.xv,{className:"listing-due-date",children:[(0,B.jsx)(c.JO,{className:"listing-due-icon",iconSize:12,icon:p.d.TIME}),(0,B.jsx)("div",{className:"date-container",children:"Opens at:\xa0"}),(0,B.jsx)("div",{className:"date-container",onClick:N("openAt"),children:"openAt"===s?R("openAt"):`${(0,y.Dh)(w.openAt)}`}),(0,B.jsx)("div",{className:"date-container",children:"\xa0\xa0Due:\xa0"}),(0,B.jsx)("div",{className:"date-container",onClick:N("closeAt"),children:"closeAt"===s?R("closeAt"):`${(0,y.Dh)(w.closeAt)}`})]}),(0,B.jsx)(c.zx,{icon:p.d.WRENCH,minimal:!0,onClick:A,children:"Other Options"}),(0,B.jsx)(x.OL,{to:`${e.listingPath}/${w.id.toString()}/${j.Z.defaultQuestionId}`,children:(0,B.jsx)(b.Z,{label:"Edit mission",icon:p.d.EDIT})})]})]})]})}))]});var w},V=e=>e.match("^(\n| )*$")?"Enter Value Here (If Applicable)":e,Z=h.P.ofType(),H=(e,s)=>{let{handleClick:t,modifiers:n,query:a}=s;return(0,B.jsx)(c.sN,{active:!1,onClick:t,text:e},e)};var G=t(81694),_=t.n(G),$=t(42543),F=t(78687),W=t(71594),X=t(89360),Y=t(27156),z=t(34165),Q=t(68206),J=t(63309),K=t(71697),ee=t(50472),se=t(1799),te=t(95785);const ne=e=>{let{toggleEditMode:s,editingMode:t}=e;const n="question"===t?"Global":"Question Specific";return(0,B.jsx)(te.u,{content:"Switch to "+n+" Editing Mode",children:(0,B.jsx)(b.Z,{label:n+" Editing Mode",icon:p.d.REFRESH,onClick:s})})},ae=(e,s)=>{for(const t of e)s=s[t];return s},ie=(e,s,t)=>{let n=0;for(n=0;n<e.length-1;n++)t=t[e[n]];t[e[n]]=s},oe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t=>{let n;return t="string"===typeof t?parseInt(t,10):t,n=null!==e&&t<e?e:null!==s&&t>s?s:t,n}},le=e=>{const s=e.isNumber||!1,[t,a]=(0,n.useState)(!1),[i]=(0,n.useState)(s),[o,l]=(0,n.useState)(""),[r]=(0,n.useState)(e.useRawValue||s),c=s=>{let t;i?(t=parseInt(o,10),isNaN(t)&&(t=ae(e.path,e.assessment))):t=o;const n=ae(e.path,e.assessment);if(e.processResults&&(t=e.processResults(t)),t!==n){const s=e.assessment;ie(e.path,t,s),e.updateAssessment(s)}a(!1)},d=e=>{l(e.target.value)};let m;if(t)m=(0,B.jsx)(g.Z,{autoFocus:!0,className:"editing-textarea",onChange:d,onBlur:c,value:o});else{const s="Please enter value (if applicable)";let t=ae(e.path,e.assessment);e.isNumber||(t=t||"",t=t.match(/^\s*$/)?s:t),m=r?t:(0,B.jsx)(E.Z,{content:t})}return(0,B.jsx)("div",{onClick:s=>{if(!t){const s=ae(e.path,e.assessment)||"";a(!0),l("string"===typeof s?s:s.toString())}},children:m})},re=le,ce=e=>{const s=s=>()=>{s.push((0,l.hi)()),e.updateAssessment(e.assessment)},t=(s,t)=>{const n=ae(s,e.assessment),a=n[t];return(0,B.jsx)("div",{children:(0,B.jsx)(c.Zb,{className:"row listing",elevation:d.u.ONE,children:(0,B.jsxs)("div",{className:"col-xs-9 listing-text",children:[(0,B.jsx)("div",{className:"row listing-program",children:(0,B.jsxs)(c.H6,{children:["Test Program:",(0,B.jsx)(re,{assessment:e.assessment,path:s.concat([t,"program"]),useRawValue:!0,updateAssessment:e.updateAssessment})]})}),(0,B.jsx)("div",{className:"row listing-expected",children:(0,B.jsxs)(c.H6,{children:["Score:",(0,B.jsx)(re,{assessment:e.assessment,isNumber:!0,path:s.concat([t,"score"]),updateAssessment:e.updateAssessment})]})}),(0,B.jsx)("div",{className:"row listing-expected",children:(0,B.jsxs)(c.H6,{children:["Expected Answer:",(0,B.jsx)(re,{assessment:e.assessment,path:s.concat([t,"answer"]),useRawValue:!0,updateAssessment:e.updateAssessment})]})}),(0,B.jsx)("div",{className:"listing-controls",children:(0,B.jsxs)("div",{children:[(0,B.jsx)(b.Z,{label:"Test",icon:p.d.PLAY,onClick:()=>e.handleTestcaseEval(a)}),(0,B.jsx)(b.Z,{label:"Delete",icon:p.d.DELETE,onClick:()=>((s,t)=>{s.splice(t,1),e.updateAssessment(e.assessment)})(n,t)})]})})]})})})},n=e.assessment.questions[e.questionId],a=["questions",e.questionId,"testcases"],i=n.testcases.map(((e,s)=>(0,B.jsx)("div",{children:t(a,s)},s))),o=["questions",e.questionId,"testcasesPrivate"],r=n.testcasesPrivate.map(((e,s)=>(0,B.jsx)("div",{children:t(o,s)},s)));return(0,B.jsxs)("div",{children:["Public Testcases",i,(0,B.jsx)(b.Z,{label:"New public testcase",icon:p.d.PLUS,onClick:s(n.testcases)}),(0,B.jsx)("br",{}),(0,B.jsx)("br",{}),"Private Testcases",r,(0,B.jsx)(b.Z,{label:"New private testcase",icon:p.d.PLUS,onClick:s(n.testcasesPrivate)})]})};var de=t(95134),me=t(32881);const ue=e=>"string"===typeof e?e.replace(/\s+/g,""):e,pe=e=>Function('"use strict";return ('+e+")")(),he=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$.Variant.DEFAULT,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(e,s)=>{};return(0,B.jsx)(xe,{className:u.IRm,items:de.Vf,onItemSelect:t,itemRenderer:ge,filterable:!1,children:(0,B.jsx)(c.zx,{className:u.IRm,text:(0,de.w$)(e,s),rightIcon:p.d.DOUBLE_CARET_VERTICAL})})},xe=h.P.ofType(),ge=(e,s)=>{let{handleClick:t,modifiers:n,query:a}=s;return(0,B.jsx)(c.sN,{active:!1,onClick:t,text:e.displayName},e.displayName)},ve=Array.from(me.a.entries()).map(((e,s)=>({name:e[0],key:s,symbols:e[1]}))),be=(e,s)=>(0,B.jsx)(Ee,{className:u.IRm,items:ve,onItemSelect:s,itemRenderer:je,filterable:!1,children:(0,B.jsx)(c.zx,{className:u.IRm,text:e,rightIcon:p.d.DOUBLE_CARET_VERTICAL})}),Ee=h.P.ofType(),je=(e,s)=>{let{handleClick:t,modifiers:n,query:a}=s;return(0,B.jsx)(c.sN,{active:!1,onClick:t,text:e.name},e.key)},ye=e=>{const s=()=>{const s=e.pathToLibrary,i=ae(s,e.assessment),l=i.external.symbols.map(((e,n)=>(0,B.jsxs)("tr",{children:[(0,B.jsx)("td",{children:t(s.concat(["external","symbols",n]))}),(0,B.jsx)("td",{style:{width:"100px"},children:(0,B.jsx)(b.Z,{label:"Delete",icon:p.d.MINUS,onClick:o(n)})})]},n))),x=i.globals.map(((e,n)=>(0,B.jsxs)("tr",{children:[(0,B.jsx)("td",{style:{width:"170px"},children:t(s.concat(["globals",n,0]))}),(0,B.jsx)("td",{children:a(n)}),(0,B.jsx)("td",{style:{width:"90px"},children:(0,B.jsx)(b.Z,{label:"Delete",icon:p.d.MINUS,onClick:d(n)})})]},n))),g=(0,B.jsx)(b.Z,{label:"Use this Library",icon:p.d.REFRESH,onClick:()=>e.handleRefreshLibrary(i)}),v=(0,B.jsxs)(n.Fragment,{children:["External Library:",(0,B.jsx)("br",{}),be(i.external.name,h),(0,B.jsx)(c.iz,{}),(0,B.jsx)("div",{children:"Symbols:"}),(0,B.jsx)("br",{}),(0,B.jsx)("table",{style:{width:"100%"},children:(0,B.jsx)("tbody",{children:l})}),(0,B.jsx)(b.Z,{label:"New Symbol",icon:p.d.PLUS,onClick:r})]}),E=(0,B.jsxs)(n.Fragment,{children:[(0,B.jsx)("div",{children:"Globals:"}),(0,B.jsx)("br",{}),(0,B.jsx)("table",{style:{width:"100%",borderSpacing:"5px"},children:(0,B.jsx)("tbody",{children:x})}),(0,B.jsx)(b.Z,{label:"New Global",icon:p.d.PLUS,onClick:m})]});return(0,B.jsxs)("div",{children:[(0,B.jsx)(c.iz,{}),g,(0,B.jsx)(c.iz,{}),"Interpreter:",(0,B.jsx)("br",{}),he(i.chapter,i.variant,u),(0,B.jsx)(c.iz,{}),v,(0,B.jsx)(c.iz,{}),E]})},t=s=>(0,B.jsx)(re,{assessment:e.assessment,path:s,processResults:ue,updateAssessment:e.updateAssessment,useRawValue:!0}),a=s=>{const t=e.pathToLibrary.concat(["globals",s,2]);return(0,B.jsx)(re,{assessment:e.assessment,path:t,updateAssessment:i(s),useRawValue:!0})},i=s=>t=>{const n=ae(e.pathToLibrary,e.assessment).globals[s];try{n[1]=pe(n[2]),e.updateAssessment(t)}catch(a){n[2]='"Invalid Expression"'}},o=s=>()=>{const t=e.assessment;ae(e.pathToLibrary,t).external.symbols.splice(s,1),e.updateAssessment(t)},r=()=>{const s=e.assessment;ae(e.pathToLibrary,s).external.symbols.push("new_symbol"),e.updateAssessment(s)},d=s=>()=>{const t=e.assessment;ae(e.pathToLibrary,t).globals.splice(s,1),e.updateAssessment(t)},m=()=>{const s=e.assessment;ae(e.pathToLibrary,s).globals.push(["new_global",null,"null"]),e.updateAssessment(s)},u=(s,t)=>{const n=e.assessment;ae(e.pathToLibrary,n).chapter=s.chapter,e.updateAssessment(n)},h=(s,t)=>{const n=e.assessment,a=ae(e.pathToLibrary,n);a.external.name=s.name,a.external.symbols=JSON.parse(JSON.stringify(me.a.get(s.name))),e.updateAssessment(n)},x=()=>{const s=e.assessment;if(g()){let t=ae(e.pathToCopy||["globalDeployment"],s);-1===t.chapter&&(t=s.globalDeployment),t=JSON.parse(JSON.stringify(t)),ie(e.pathToLibrary,t,s)}else ie(e.pathToLibrary,(0,l.hj)(),s);e.updateAssessment(s)},g=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.pathToLibrary;return-1===ae(s.concat(["chapter"]),e.assessment)};return e.isOptionalDeployment?(0,B.jsxs)("div",{children:[(0,B.jsx)(c.rs,{checked:!g(),label:"Enable "+e.label+" Deployment",onChange:x}),g()?null:s()]}):(0,B.jsxs)("div",{children:[e.label+" Deployment",(0,B.jsx)("br",{}),s()]})},Ce=e=>{return(0,B.jsxs)("div",{children:["Max Xp:",(s=e.path.concat(["maxXp"]),(0,B.jsx)(re,{assessment:e.assessment,isNumber:!0,path:s,processResults:oe(0),updateAssessment:e.updateAssessment}))]});var s},Ne=e=>JSON.parse(JSON.stringify(e)),Ae=e=>{const s=(0,a.s0)(),[t,i]=(0,n.useState)(!1),[o,r]=(0,n.useState)((()=>{})),d=s=>(0,B.jsxs)("div",{children:[(0,B.jsx)(b.Z,{label:"Clone",icon:p.d.DOCUMENT,onClick:v(x((()=>Ne(e.assessment.questions[s])),s))}),(0,B.jsx)(b.Z,{label:"Delete",icon:p.d.REMOVE,onClick:v(g(s))}),(0,B.jsx)(b.Z,{label:"Shift Up",icon:p.d.CARET_UP,onClick:v(h(-1,s)),isDisabled:0===s}),(0,B.jsx)(b.Z,{label:"Shift Down",icon:p.d.CARET_DOWN,onClick:v(h(1,s)),isDisabled:s>=e.assessment.questions.length-1}),(0,B.jsx)("br",{}),(0,B.jsx)(b.Z,{label:"Insert Programming Question",icon:p.d.FONT,onClick:v(x(l.Sx,s))}),(0,B.jsx)(b.Z,{label:"Insert MCQ Question",icon:p.d.CONFIRM,onClick:v(x(l.XX,s))})]}),h=(t,n)=>()=>{const a=e.assessment,i=n+t;if(i>=0&&i<a.questions.length){const t=a.questions[n],o=a.questions;o[n]=o[i],o[i]=t,a.questions=o,e.updateAssessment(a),s("/mission-control/-1/"+i.toString())}},x=(t,n)=>()=>{const a=e.assessment;n+=1;const i=a.questions;i.splice(n,0,t()),a.questions=i,e.updateAssessment(a),s("/mission-control/-1/"+n.toString())},g=s=>()=>{const t=e.assessment;let n=t.questions;n.length>1&&(n=n.slice(0,s).concat(n.slice(s+1))),t.questions=n,e.updateAssessment(t)},v=s=>()=>{e.hasUnsavedChanges?(i(!0),r(s)):s()},j=(0,B.jsxs)(c.Vq,{className:"assessment-reset",icon:p.d.ERROR,isCloseButtonShown:!0,isOpen:t,title:"Confirmation: Save unsaved changes?",children:[(0,B.jsx)("div",{className:u.TmF,children:(0,B.jsx)(E.Z,{content:"Are you sure you want to save over your unsaved changes?"})}),(0,B.jsx)("div",{className:u.Alt,children:(0,B.jsxs)(c.hE,{children:[(0,B.jsx)(b.Z,{label:"Cancel",onClick:()=>i(!1),options:{minimal:!1}}),(0,B.jsx)(b.Z,{label:"Confirm",onClick:()=>{o(),i(!1)},options:{minimal:!1,intent:m.S.DANGER}})]})})]});return(0,B.jsxs)("div",{children:[j,e.assessment.questions.map(((e,s)=>(0,B.jsxs)("div",{children:["Question ",s+1,(0,B.jsx)("br",{}),(0,B.jsx)(c.zx,{className:"mcq-option col-xs-12",minimal:!0,children:(0,B.jsx)(E.Z,{content:e.content.length>200?e.content.substring(0,300)+"...":e.content})}),d(s),(0,B.jsx)("br",{}),(0,B.jsx)("br",{})]},s)))]})},Te=e=>{const s=function(s){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0];return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?(0,B.jsx)(re,{assessment:e.assessment,isNumber:!0,path:s,processResults:oe(t[0],t[1]),updateAssessment:e.updateAssessment}):(0,B.jsx)(re,{assessment:e.assessment,path:s,updateAssessment:e.updateAssessment})},{questionId:t}=e,n=e.assessment.questions[t],a=n.choices.map(((e,n)=>(0,B.jsxs)("div",{className:"mcq-option col-xs-12",children:["Option ",n,":",s(["questions",t,"choices",n,"content"]),(0,B.jsx)("br",{}),"Hint:",s(["questions",t,"choices",n,"hint"])]},n))),i=(0,B.jsx)(b.Z,{label:"Delete Option",icon:p.d.REMOVE,onClick:()=>{const{assessment:s,questionId:t}=e,n=s.questions[t],a=n.choices.slice(0,n.choices.length-1);n.choices=a,s.questions[t]=n,e.updateAssessment(s)}});return(0,B.jsx)("div",{className:"MCQChooser row",children:(0,B.jsx)(c.Zb,{className:"mcq-content-parent col-xs-12 middle-xs",children:(0,B.jsxs)("div",{className:"row mcq-options-parent between-xs",children:[a,"Solution:",s(["questions",t,"solution"],!0,[0,n.choices.length]),(0,B.jsx)("br",{}),(0,B.jsx)(b.Z,{label:"Add Option",icon:p.d.CONFIRM,onClick:()=>{const{assessment:s,questionId:t}=e,n=s.questions[t],a=n.choices.concat([{content:"A",hint:null}]);n.choices=a,s.questions[t]=n,e.updateAssessment(s)}}),n.choices.length>0?i:void 0]})})})};var Se=t(38399);const Re=h.P.ofType(),Ie=[{label:"Prepend",icon:p.d.CHEVRON_UP,id:"prepend"},{label:"Postpend",icon:p.d.CHEVRON_DOWN,id:"postpend"},{label:"Solution Template",icon:p.d.MANUAL,id:"solutionTemplate"},{label:"Suggested Answer",icon:p.d.TICK,id:"answer"}],fe=e=>{const[s,t]=(0,n.useState)(Ie[0]),[a,i]=(0,n.useState)(""),[o,l]=(0,n.useState)(!1),r=s=>{const t=o?a:ae(s,e.assessment);return(0,B.jsx)("div",{onClick:d(s),onBlur:m(s),children:(0,B.jsx)(Se.ZP,{className:"react-ace",editorProps:{$blockScrolling:1/0},fontSize:14,highlightActiveLine:!1,mode:"javascript",onChange:i,theme:"source",value:t,width:"100%"})})},d=s=>t=>{o||(i(ae(s,e.assessment)),l(!0))},m=t=>n=>{if(o){if(ae(t,e.assessment)!==a){const s=e.assessment;ie(t,a,s),e.updateAssessment(s)}if("prepend"===s.id){const s=a;e.handleUpdateWorkspace({programPrependValue:s})}else if("postpend"===s.id){const s=a;e.handleUpdateWorkspace({programPostpendValue:s})}i(""),l(!1)}},h=s=>()=>{const t=e.assessment;ie(s,e.editorValue,t),e.updateAssessment(t)},x=s=>()=>{const t=ae(s,e.assessment);e.handleEditorValueChange(t)};return(()=>{const n=["questions",e.questionId].concat(s.id),a=(0,B.jsx)(b.Z,{label:"Copy from Editor",icon:p.d.IMPORT,onClick:h(n)}),i=(0,B.jsx)(b.Z,{label:"Copy to Editor",icon:p.d.EXPORT,onClick:x(n)}),o=(0,B.jsxs)("div",{children:[a,i,(0,B.jsx)(c.iz,{}),r(n)]}),l=(e,s)=>{let{handleClick:t}=s;return(0,B.jsx)(c.sN,{active:!1,onClick:t,text:e.label,icon:e.icon},e.id)};return(0,B.jsx)("div",{className:"side-content",children:(0,B.jsxs)(c.Zb,{children:[(d=s,m=t,(0,B.jsx)(Re,{className:u.IRm,items:Ie,itemRenderer:l,onItemSelect:m,filterable:!1,children:(0,B.jsx)(c.zx,{className:u.IRm,text:d.label,icon:p.d.EDIT,rightIcon:p.d.DOUBLE_CARET_VERTICAL})})),(0,B.jsx)(c.iz,{}),(0,B.jsx)("div",{className:"side-content-text",children:o})]})});var d,m})()};var Pe=t(29860),Oe=t(86373),we=t(39215),De=t(40239),Le=t(89702);const ke="assessment";function Me(e){const s={};return e.filter((e=>!s.hasOwnProperty(e)&&(s[e]=!0)))}const qe=e=>{var s,t,o;const[r,d]=(0,n.useState)(A()),[h,x]=(0,n.useState)("question"),[g,v]=(0,n.useState)(!1),[j,y]=(0,n.useState)(!1),[C,N]=(0,n.useState)(0),R=(0,a.s0)(),{isFolderModeEnabled:I,activeEditorTabIndex:f,editorTabs:P,isRunning:O,output:w,replValue:D,sideContentHeight:L,currentAssessment:k,currentQuestion:M}=(0,i.ix)((e=>e.workspaces[ke]));(0,n.useEffect)((()=>{r&&(Se(),N(Be()))}),[]),(0,n.useEffect)((()=>function(){if(void 0===r)return;const e=-1,s=je();k===e&&M===s||(Se(),xe(e,s),he(!1),g&&(d(A()),v(!1)),Ne())}()));const q=(0,F.I0)(),{handleBrowseHistoryDown:U,handleBrowseHistoryUp:V,handleClearContext:Z,handleDeclarationNavigate:H,handleEditorEval:G,handleEditorValueChange:te,handleEditorUpdateBreakpoints:ae,handleReplEval:ie,handleReplOutputClear:oe,handleReplValueChange:re,handleResetWorkspace:de,handleUpdateWorkspace:me,handleSubmitAnswer:ue,handleSideContentHeightChange:pe,handleUpdateHasUnsavedChanges:he,handleUpdateCurrentAssessmentId:xe,handlePromptAutocomplete:ge,setActiveEditorTabIndex:ve,removeEditorTabByIndex:be}=(0,n.useMemo)((()=>({handleBrowseHistoryDown:()=>q((0,Le.browseReplHistoryDown)(ke)),handleBrowseHistoryUp:()=>q((0,Le.browseReplHistoryUp)(ke)),handleClearContext:(e,s)=>q((0,Le.beginClearContext)(ke,e,s)),handleDeclarationNavigate:e=>q((0,Le.navigateToDeclaration)(ke,e)),handleEditorEval:()=>q((0,Le.evalEditor)(ke)),handleEditorValueChange:(e,s)=>q((0,Le.updateEditorValue)(ke,e,s)),handleEditorUpdateBreakpoints:(e,s)=>q((0,Le.setEditorBreakpoint)(ke,e,s)),handleReplEval:()=>q((0,Le.evalRepl)(ke)),handleReplOutputClear:()=>q((0,Le.clearReplOutput)(ke)),handleReplValueChange:e=>q((0,Le.updateReplValue)(e,ke)),handleResetWorkspace:e=>q((0,Le.resetWorkspace)(ke,e)),handleUpdateWorkspace:e=>q((0,Le.updateWorkspace)(ke,e)),handleSubmitAnswer:(e,s)=>q((0,W.submitAnswer)(e,s)),handleSideContentHeightChange:e=>q((0,Le.changeSideContentHeight)(e,ke)),handleUpdateHasUnsavedChanges:e=>q((0,Le.updateHasUnsavedChanges)(ke,e)),handleUpdateCurrentAssessmentId:(e,s)=>q((0,Le.updateCurrentAssessmentId)(e,s)),handlePromptAutocomplete:(e,s,t)=>q((0,Le.promptAutocomplete)(ke,e,s,t)),setActiveEditorTabIndex:e=>q((0,Le.updateActiveEditorTabIndex)(ke,e)),removeEditorTabByIndex:e=>q((0,Le.removeEditorTab)(ke,e))})),[q]),Ee=(0,n.useCallback)((e=>te(0,e)),[te]);if(null===r||0===r.questions.length)return(0,B.jsx)(c.tR,{className:_()("WorkspaceParent",u.Pyr),description:"Getting mission ready...",icon:(0,B.jsx)(c.$j,{size:c.Ey.LARGE})});const je=()=>{let s=e.questionId;return s<0?s=0:s>=r.questions.length&&(s=r.questions.length-1),s};const Ne=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;const s=r.questions[je()];if(e||(e=-1===s.library.chapter?r.globalDeployment:s.library),e&&e.globals.length>0){const s=e.globals.map((e=>e[0])),t=e.external.symbols.concat(s);e={...e,external:{name:e.external.name,symbols:Me(t)}}}Z(e,!0)},Se=()=>{const e=r.questions[je()];let s,t="",n="";e.type===l.LD.programming?(s=e.editorValue?e.editorValue:e.solutionTemplate,t=e.prepend,n=e.postpend):s="//If you see this, this is a bug. Please report bug.",de({editorTabs:[{value:s,highlightedLines:[],breakpoints:[]}],programPrependValue:t,programPostpendValue:n}),te(0,s)},Re=e=>{me({editorTestcases:[e]}),q((0,Le.evalTestcase)(ke,0))},Ie=()=>{r.questions[je()].editorValue=P[0].value,d(r),v(!1),T(r),qe()},qe=()=>{const s=Be(),t=s-C;if(0!==t){const n=e.assessmentOverview;0!==t&&(n.maxXp=s),N(s),e.updateAssessmentOverview(n),S(n)}},Be=()=>{let e=0;const s=r.questions;for(const t of s)e+=t.maxXp;return e},Ue=e=>{d(e),v(!0)},Ve=e=>{d(e),Ne(),Ie(),Se()},Ze=()=>{x("question"===h?"global":"question")};const He=je(),Ge=r.questions[He],_e={controlBarProps:(e=>{const s="/mission-control",t=s+`/${r.id.toString()}`,n=[e+1,r.questions.length],a=(0,B.jsx)(z.g,{onClickNext:()=>R(t+`/${(e+1).toString()}`),onClickReturn:()=>R(s),questionProgress:n},"next_question"),i=(0,B.jsx)(Q.f,{onClick:()=>R(t+`/${(e-1).toString()}`),questionProgress:n},"previous_question"),o=(0,B.jsx)(J.M,{questionProgress:n},"question_view"),l=(0,B.jsx)(K.A,{onClick:()=>{y((()=>g))}},"reset_template");return{editorButtons:[(0,B.jsx)(ee.h,{isEntrypointFileDefined:null!==f,handleEditorEval:G},"run"),(0,B.jsx)(se.t,{hasUnsavedChanges:g,onClickSave:Ie},"save"),l],flowButtons:[i,o,a],editingWorkspaceButtons:[(0,B.jsx)(ne,{editingMode:h,toggleEditMode:Ze},"toggle_edit_mode")]}})(He),editorContainerProps:Ge.type===l.LD.programming?{editorVariant:"normal",isFolderModeEnabled:I,activeEditorTabIndex:f,setActiveEditorTabIndex:ve,removeEditorTabByIndex:be,editorTabs:P.map(Pe.F).map(((e,s)=>0!==s?e:{...e,editorValue:e.editorValue||Ge.editorValue||Ge.solutionTemplate})),editorSessionId:"",handleDeclarationNavigate:H,handleEditorEval:G,handleEditorValueChange:te,handleEditorUpdateBreakpoints:ae,handleUpdateHasUnsavedChanges:he,handlePromptAutocomplete:ge,isEditorAutorun:!1}:void 0,handleSideContentHeightChange:pe,hasUnsavedChanges:g,mcqProps:{mcq:Ge,handleMCQSubmit:e=>ue(r.questions[He].id,e)},sideBarProps:{tabs:[]},sideContentHeight:L,sideContentProps:((e,s)=>{const t=r;let n;if("question"===h){const a=t.questions[e.questionId].type,i="mcq"===a?(0,B.jsx)(Te,{assessment:t,questionId:s,updateAssessment:Ue}):(0,B.jsx)(fe,{assessment:t,questionId:s,updateAssessment:Ue,editorValue:P[0].value,handleEditorValueChange:Ee,handleUpdateWorkspace:me});n=[{label:`Question ${s+1}`,iconName:p.d.NINJA,body:(0,B.jsx)(le,{assessment:t,path:["questions",s,"content"],updateAssessment:Ue}),id:we.B.editorQuestionOverview},{label:"Question Template",iconName:p.d.DOCUMENT,body:i,id:we.B.editorQuestionTemplate},{label:"Manage Local Deployment",iconName:p.d.HOME,body:(0,B.jsx)(ye,{assessment:t,label:"Question Specific",handleRefreshLibrary:Ne,pathToLibrary:["questions",s,"library"],updateAssessment:Ue,isOptionalDeployment:!0}),id:we.B.editorLocalDeployment},{label:"Manage Local Grader Deployment",iconName:p.d.CONFIRM,body:(0,B.jsx)(ye,{assessment:t,label:"Question Specific Grader",handleRefreshLibrary:Ne,pathToLibrary:["questions",s,"graderLibrary"],pathToCopy:["questions",s,"library"],updateAssessment:Ue,isOptionalDeployment:!0}),id:we.B.editorLocalGraderDeployment},{label:"Grading",iconName:p.d.TICK,body:(0,B.jsx)(Ce,{assessment:t,path:["questions",s],updateAssessment:Ue}),id:we.B.editorGrading}],"programming"===a&&n.push({label:"Autograder",iconName:p.d.AIRPLANE,body:(0,B.jsx)(ce,{assessment:t,questionId:s,handleTestcaseEval:Re,updateAssessment:Ue}),id:we.B.editorAutograder});t.globalDeployment.external.symbols.includes("get_matrix")&&n.push({label:"Tone Matrix",iconName:p.d.GRID_VIEW,body:(0,B.jsx)(Oe.Z,{}),id:we.B.toneMatrix})}else n=[{label:`${t.type} Briefing`,iconName:p.d.BRIEFCASE,body:(0,B.jsx)(le,{assessment:t,path:["longSummary"],updateAssessment:Ue}),id:we.B.editorBriefing},{label:"Manage Question",iconName:p.d.WRENCH,body:(0,B.jsx)(Ae,{assessment:t,hasUnsavedChanges:g,questionId:s,updateAssessment:Ve}),id:we.B.editorManageQuestion},{label:"Manage Global Deployment",iconName:p.d.GLOBE,body:(0,B.jsx)(ye,{assessment:t,label:"Global",handleRefreshLibrary:Ne,pathToLibrary:["globalDeployment"],updateAssessment:Ue,isOptionalDeployment:!1}),id:we.B.editorGlobalDeployment},{label:"Manage Global Grader Deployment",iconName:p.d.CONFIRM,body:(0,B.jsx)(ye,{assessment:t,label:"Global Grader",handleRefreshLibrary:Ne,pathToLibrary:["graderDeployment"],updateAssessment:Ue,isOptionalDeployment:!0}),id:we.B.editorGlobalGraderDeployment}];return{tabs:{beforeDynamicTabs:n,afterDynamicTabs:[]}}})(e,He),replProps:{handleBrowseHistoryDown:U,handleBrowseHistoryUp:V,handleReplEval:ie,handleReplValueChange:re,output:w,replValue:D,sourceChapter:(null===Ge||void 0===Ge||null===(s=Ge.library)||void 0===s?void 0:s.chapter)||$.Chapter.SOURCE_4,sourceVariant:$.Variant.DEFAULT,externalLibrary:(null===Ge||void 0===Ge||null===(t=Ge.library)||void 0===t||null===(o=t.external)||void 0===o?void 0:o.name)||"NONE",replButtons:function(){const e=(0,B.jsx)(X._,{handleReplOutputClear:oe},"clear_repl");return[(0,B.jsx)(Y.e,{handleReplEval:ie,isRunning:O},"eval_repl"),e]}()}};return(0,B.jsxs)("div",{className:_()("WorkspaceParent",u.Pyr),children:[(0,B.jsxs)(c.Vq,{className:"assessment-reset",icon:p.d.ERROR,isCloseButtonShown:!0,isOpen:j,title:"Confirmation: Reset editor?",children:[(0,B.jsx)("div",{className:u.TmF,children:(0,B.jsx)(E.Z,{content:"Are you sure you want to reset to your last save?"})}),(0,B.jsx)("div",{className:u.Alt,children:(0,B.jsxs)(c.hE,{children:[(0,B.jsx)(b.Z,{label:"Cancel",onClick:()=>y(!1),options:{minimal:!1}}),(0,B.jsx)(b.Z,{label:"Confirm",onClick:()=>{const e=A();d(e),v(!1),y(!1),N(Be()),Ne(),Se()},options:{minimal:!1,intent:m.S.DANGER}})]})})]}),(0,B.jsx)(De.Z,{..._e})]})};var Be=t(59050);const Ue=function(e){const[s,t]=n.useState("Import XML");let a;return n.useEffect((()=>{const s=A();s&&e.newAssessment(s)}),[e.newAssessment]),(0,B.jsxs)("div",{children:[(0,B.jsx)("div",{children:"Please ensure that the xml uploaded is trustable."}),(0,B.jsx)("div",{children:(0,B.jsx)(c.S2,{text:s,inputProps:{accept:".xml"},onChange:s=>{const n=s.target.files;var i;s.target.files&&(a=new FileReader,a.onloadend=(i=n[0],s=>{if(!a)return;const n=a.result;n&&(0,C.parseString)(n,((s,n)=>{console.dir(i);try{const s=R(n);s[0].fileName=i.name.slice(0,-4),S(s[0]),e.updateEditingOverview(s[0]),T(s[1]),e.newAssessment(s[1]),t("Success!")}catch(s){console.log(s),t("Invalid XML!")}}))}),a.readAsText(n[0]))}})}),(0,B.jsx)("div",{children:(0,B.jsx)(b.Z,{label:"Make New Mission",icon:p.d.NEW_OBJECT,onClick:()=>{S((0,l.sV)()),e.updateEditingOverview((0,l.sV)()),T((0,l.dY)()),e.newAssessment((0,l.dY)())}})})]})},Ve=(0,F.$j)(((e,s)=>s),(e=>(0,Be.DE)({newAssessment:W.updateAssessment},e)))(Ue);var Ze=t(90713);const He=()=>{},Ge=()=>{var e,s;const{assessmentConfigurations:t}=(0,i.ix)((e=>e.session)),c=(null===t||void 0===t?void 0:t.map((e=>e.type)))||[],[d,m]=(0,n.useState)((()=>{const e=localStorage.getItem("MissionEditingOverviewSA");return e?JSON.parse(e):null})()),u=(0,a.UO)();if(u.assessmentId&&(null===(e=u.assessmentId)||void 0===e||!e.match(o.CJ))||u.questionId&&(null===(s=u.questionId)||void 0===s||!s.match(o.CJ)))return(0,B.jsx)(a.Fg,{to:"/mission-control"});const p=(0,Ze.GA)(u.assessmentId),h=(0,Ze.GA)(u.questionId)||j.Z.defaultQuestionId;if(-1===p&&d){const e=d,s={assessmentId:p,questionId:h,assessmentOverview:e,updateAssessmentOverview:m,notAttempted:e.status===l.PF.not_attempted,closeDate:e.closeAt};return(0,B.jsx)("div",{className:"Academy",children:(0,B.jsx)(qe,{...s})})}const x=(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Ve,{updateEditingOverview:m}),d&&(0,B.jsx)(U,{overview:d,updateEditingOverview:m,listingPath:"/mission-control",assessmentTypes:c})]});return(0,B.jsx)("div",{className:"Assessment Academy",children:(0,B.jsx)(r.Z,{display:x,loadContentDispatch:He})})},_e=Ge;_e.displayName="MissionControl";const $e=Ge},5602:(e,s,t)=>{e.exports=t.p+"static/media/default_cover_image.e2be07249bb127696687.jpg"}}]);
//# sourceMappingURL=198.89b89fe1.chunk.js.map