import{c4 as Si,c5 as Ci,a4 as me,c6 as j,c7 as wi,cE as ei,r as o,j as e,B as d,F as b,I as y,b7 as Oi,m as ce,bv as he,bu as w,a as ii,cF as ti,a6 as li,a7 as Ai,aE as ge,cG as si,cH as O,cI as ai,cJ as Q,E as T,c0 as ni,C as Wi,R as Li,d as Mi,h as Ui,i as Gi}from"./index-D8SWrkkL.js";import{B as Hi}from"./BreadCrumb-DEupYY98.js";import{L as Vi}from"./Label-Czdql46d.js";import{B as U,T as p}from"./Badge-ddLcYUed.js";import{S as Ae,a as J}from"./StatCard-CmekQi8H.js";import{D as je}from"./Table-DjMTh3na.js";import{P as $i}from"./Pagination-DfXqKkWt.js";import{T as be}from"./Tabs-Ds7gXzb7.js";import{S as V}from"./Switch-nlfSNZDC.js";import{S as k}from"./StatusToggle-Dk1M4AmC.js";import{P as Ki}from"./PhotoUpload-Ds5e500I.js";import{U as ri}from"./UIDatePicker-CjOZvXGY.js";import{P as We}from"./ProvinceMultiSelect-D_AVwe9P.js";import{E as qi}from"./EmployeePicker-CzvDpT4Z.js";import{M as F,b as re,a as R}from"./Modal-BSRRnERC.js";import{A as pe}from"./AlertDialog-6SItw02W.js";import{D as oi,f as Xi,a as Yi,P as ki,F as Ni,b as Zi,n as Qi}from"./DetailPopover-DWG2TMTh.js";import{S as Ji}from"./Spinner-BGQ7YePB.js";import{S as ee}from"./Skeleton-BcakMCY4.js";import"./bodyScrollLock-GiXtmoed.js";var et=["className","cssModule","tag"];function Ve(){return Ve=Object.assign?Object.assign.bind():function(i){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(i[a]=t[a])}return i},Ve.apply(this,arguments)}function it(i,l){if(i==null)return{};var t=tt(i,l),a,s;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);for(s=0;s<n.length;s++)a=n[s],!(l.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(i,a)&&(t[a]=i[a])}return t}function tt(i,l){if(i==null)return{};var t={},a=Object.keys(i),s,n;for(n=0;n<a.length;n++)s=a[n],!(l.indexOf(s)>=0)&&(t[s]=i[s]);return t}var lt={className:j.string,cssModule:j.object,tag:wi};function Ti(i){var l=i.className,t=i.cssModule,a=i.tag,s=a===void 0?"div":a,n=it(i,et),r=Si(Ci(l,"card-header"),t);return me.createElement(s,Ve({},n,{className:r}))}Ti.propTypes=lt;function $e(i){"@babel/helpers - typeof";return $e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},$e(i)}var st=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"];function Ke(){return Ke=Object.assign?Object.assign.bind():function(i){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(i[a]=t[a])}return i},Ke.apply(this,arguments)}function at(i,l){if(i==null)return{};var t=nt(i,l),a,s;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);for(s=0;s<n.length;s++)a=n[s],!(l.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(i,a)&&(t[a]=i[a])}return t}function nt(i,l){if(i==null)return{};var t={},a=Object.keys(i),s,n;for(n=0;n<a.length;n++)s=a[n],!(l.indexOf(s)>=0)&&(t[s]=i[s]);return t}function rt(i,l){if(!(i instanceof l))throw new TypeError("Cannot call a class as a function")}function ot(i,l){for(var t=0;t<l.length;t++){var a=l[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}function dt(i,l,t){return l&&ot(i.prototype,l),Object.defineProperty(i,"prototype",{writable:!1}),i}function ct(i,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(l&&l.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),l&&qe(i,l)}function qe(i,l){return qe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,s){return a.__proto__=s,a},qe(i,l)}function pt(i){var l=xt();return function(){var a=Be(i),s;if(l){var n=Be(this).constructor;s=Reflect.construct(a,arguments,n)}else s=a.apply(this,arguments);return ut(this,s)}}function ut(i,l){if(l&&($e(l)==="object"||typeof l=="function"))return l;if(l!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xe(i)}function Xe(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function xt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Be(i){return Be=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Be(i)}var vt={children:j.node,type:j.string,size:j.oneOfType([j.number,j.string]),bsSize:j.string,valid:j.bool,invalid:j.bool,tag:wi,innerRef:j.oneOfType([j.object,j.func,j.string]),plaintext:j.bool,addon:j.bool,className:j.string,cssModule:j.object},zi=(function(i){ct(t,i);var l=pt(t);function t(a){var s;return rt(this,t),s=l.call(this,a),s.getRef=s.getRef.bind(Xe(s)),s.focus=s.focus.bind(Xe(s)),s}return dt(t,[{key:"getRef",value:function(s){this.props.innerRef&&this.props.innerRef(s),this.ref=s}},{key:"focus",value:function(){this.ref&&this.ref.focus()}},{key:"render",value:function(){var s=this.props,n=s.className,r=s.cssModule,c=s.type,u=c===void 0?"text":c,x=s.bsSize,g=s.valid,I=s.invalid,v=s.tag,m=s.addon,P=s.plaintext,D=s.innerRef,S=at(s,st),G=["switch","radio","checkbox"].indexOf(u)>-1,Ee=/\D/g,oe=u==="textarea",B=u==="select",Re=u==="range",E=v||(B||oe?u:"input"),C="form-control";P?(C="".concat(C,"-plaintext"),E=v||"input"):Re?C="form-range":B?C="form-select":G&&(m?C=null:C="form-check-input"),S.size&&Ee.test(S.size)&&(ei(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`),x=S.size,delete S.size);var fe=Si(Ci(n,I&&"is-invalid",g&&"is-valid",x?B?"form-select-".concat(x):"form-control-".concat(x):!1,C),r);return(E==="input"||v&&typeof v=="function")&&(S.type=u==="switch"?"checkbox":u),S.children&&!(P||u==="select"||typeof E!="string"||E==="select")&&(ei('Input with a type of "'.concat(u,'" cannot have children. Please use "value"/"defaultValue" instead.')),delete S.children),me.createElement(E,Ke({},S,{ref:D,className:fe,"aria-invalid":I}))}}]),t})(me.Component);zi.propTypes=vt;const ht=({title:i,code:l,language:t="tsx"})=>{const[a,s]=o.useState(!1),[n,r]=o.useState(!1),c=()=>{l&&navigator.clipboard.writeText(l.trim()).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return e.jsxs(me.Fragment,{children:[e.jsxs(Ti,{className:"align-items-center d-flex",children:[e.jsx("h4",{className:"card-title mb-0 flex-grow-1",children:i}),l&&e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("div",{className:"form-check form-switch form-switch-right form-switch-md",children:[e.jsx(Vi,{className:"form-label text-muted",children:"Show Code"}),e.jsx(zi,{className:"form-check-input code-switcher",type:"checkbox",checked:a,onChange:u=>s(u.target.checked)})]})})]}),l&&a&&e.jsxs("div",{style:{background:"#1e2937",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 16px",borderBottom:"1px solid rgba(255,255,255,0.08)"},children:[e.jsx("span",{style:{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.35)",letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"inherit"},children:t}),e.jsxs("button",{type:"button",onClick:c,style:{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 10px",background:n?"rgba(107,148,115,0.3)":"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:4,fontSize:11,fontWeight:700,color:n?"#4ade80":"rgba(255,255,255,0.6)",cursor:"pointer"},children:[e.jsx("i",{className:n?"ri-check-line":"ri-clipboard-line"}),n?"คัดลอกแล้ว!":"Copy"]})]}),e.jsx("pre",{style:{margin:0,padding:"16px 20px",overflowX:"auto",fontFamily:'"Roboto Mono", "Courier New", monospace',fontSize:12,lineHeight:1.7,color:"#e2e8f0",whiteSpace:"pre",background:"transparent"},children:e.jsx("code",{style:{fontFamily:"inherit",background:"none",color:"inherit",padding:0,fontSize:"inherit"},children:l.trim()})})]})]})},mt=`import Button from '@/components/common/Button';

{/* ─── Sizes ─────────────────────────────────────── */}
<Button variant="primary" size="sm"  leftIcon="ri-add-line">เพิ่ม sm</Button>
<Button variant="primary"            leftIcon="ri-add-line">เพิ่ม md</Button>
<Button variant="primary" size="lg"  leftIcon="ri-add-line">เพิ่ม lg</Button>
<Button variant="primary" size="xl"  leftIcon="ri-login-box-line">เข้าสู่ระบบ xl</Button>

{/* ─── Variants ───────────────────────────────────── */}
<Button variant="primary"      leftIcon="ri-save-3-line">บันทึก</Button>
<Button variant="outline"      leftIcon="ri-search-line">ค้นหา</Button>
<Button variant="ghost"        leftIcon="ri-refresh-line">รีเฟรช</Button>
<Button variant="info"         leftIcon="ri-eye-line">ดูรายละเอียด</Button>
<Button variant="info-outline" leftIcon="ri-eye-line">ดูรายละเอียด</Button>
<Button variant="edit"         leftIcon="ri-pencil-line">แก้ไข</Button>
<Button variant="edit-outline" leftIcon="ri-pencil-line">แก้ไข</Button>
<Button variant="danger"       leftIcon="ri-delete-bin-line">ลบ</Button>
<Button variant="soft-danger"  leftIcon="ri-close-line">ยกเลิก</Button>

{/* ─── Icon Only ──────────────────────────────────── */}
<Button variant="primary"      size="icon" leftIcon="ri-save-3-line"      aria-label="บันทึก" />
<Button variant="outline"      size="icon" leftIcon="ri-search-line"      aria-label="ค้นหา" />
<Button variant="ghost"        size="icon" leftIcon="ri-refresh-line"     aria-label="รีเฟรช" />
<Button variant="info"         size="icon" leftIcon="ri-eye-line"         aria-label="ดูรายละเอียด" />
<Button variant="info-outline" size="icon" leftIcon="ri-eye-line"         aria-label="ดูรายละเอียด" />
<Button variant="edit"         size="icon" leftIcon="ri-pencil-line"      aria-label="แก้ไข" />
<Button variant="edit-outline" size="icon" leftIcon="ri-pencil-line"      aria-label="แก้ไข" />
<Button variant="danger"       size="icon" leftIcon="ri-delete-bin-line"  aria-label="ลบ" />
<Button variant="soft-danger"  size="icon" leftIcon="ri-close-line"       aria-label="ยกเลิก" />

{/* ─── States ─────────────────────────────────────── */}
<Button variant="primary"     disabled leftIcon="ri-save-3-line">ปิดใช้งาน</Button>
<Button variant="outline"     disabled leftIcon="ri-search-line">ปิดใช้งาน</Button>
<Button variant="danger"      disabled leftIcon="ri-delete-bin-line">ปิดใช้งาน</Button>
<Button variant="primary"     loading>กำลังบันทึก...</Button>
<Button variant="soft-danger" loading>กำลังดำเนินการ...</Button>`,ye={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},Se={display:"flex",flexWrap:"wrap",gap:"var(--space-2)",alignItems:"center"},di=[{variant:"primary",label:"บันทึก",icon:"ri-save-3-line"},{variant:"outline",label:"ค้นหา",icon:"ri-search-line"},{variant:"ghost",label:"รีเฟรช",icon:"ri-refresh-line"},{variant:"info",label:"ดูรายละเอียด",icon:"ri-eye-line"},{variant:"info-outline",label:"ดูรายละเอียด",icon:"ri-eye-line"},{variant:"edit",label:"แก้ไข",icon:"ri-pencil-line"},{variant:"edit-outline",label:"แก้ไข",icon:"ri-pencil-line"},{variant:"danger",label:"ลบ",icon:"ri-delete-bin-line"},{variant:"soft-danger",label:"ยกเลิก",icon:"ri-close-line"}],ft=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:ye,children:"Sizes — sm / md / lg / xl"}),e.jsxs("div",{style:Se,children:[e.jsx(d,{variant:"primary",size:"sm",leftIcon:"ri-add-line",children:"เพิ่ม sm"}),e.jsx(d,{variant:"primary",leftIcon:"ri-add-line",children:"เพิ่ม md"}),e.jsx(d,{variant:"primary",size:"lg",leftIcon:"ri-add-line",children:"เพิ่ม lg"}),e.jsx(d,{variant:"primary",size:"xl",leftIcon:"ri-login-box-line",children:"เข้าสู่ระบบ xl"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:ye,children:"Variants — ทุกสี"}),e.jsx("div",{style:Se,children:di.map(({variant:i,label:l,icon:t})=>e.jsx(d,{variant:i,leftIcon:t,children:l},i))})]}),e.jsxs("div",{children:[e.jsx("div",{style:ye,children:"Icon Only — ทุกสี"}),e.jsx("div",{style:Se,children:di.map(({variant:i,icon:l,label:t})=>e.jsx(d,{variant:i,size:"icon",leftIcon:l,"aria-label":t},i))})]}),e.jsxs("div",{children:[e.jsx("div",{style:ye,children:"States — disabled / loading"}),e.jsxs("div",{style:Se,children:[e.jsx(d,{variant:"primary",disabled:!0,leftIcon:"ri-save-3-line",children:"ปิดใช้งาน"}),e.jsx(d,{variant:"outline",disabled:!0,leftIcon:"ri-search-line",children:"ปิดใช้งาน"}),e.jsx(d,{variant:"danger",disabled:!0,leftIcon:"ri-delete-bin-line",children:"ปิดใช้งาน"}),e.jsx(d,{variant:"primary",loading:!0,children:"กำลังบันทึก..."}),e.jsx(d,{variant:"soft-danger",loading:!0,children:"กำลังดำเนินการ..."})]})]})]}),gt=`import Badge, { Tag } from '@/components/common/Badge';

{/* ── Badge — สถานะ (pill + dot) ──────────────────────────────── */}
{/* variant: success | warning | error | info | neutral            */}
{/* outline: พื้นขาว + ขอบสี   size: 'sm' (11px สำหรับตาราง)      */}

{/* Filled + dot */}
<Badge variant="success">เข้าร่วม</Badge>
<Badge variant="warning">ฉบับร่าง</Badge>
<Badge variant="error">ปิด</Badge>
<Badge variant="info">PPE</Badge>
<Badge variant="neutral">ไม่มีข้อมูล</Badge>

{/* --sm density สำหรับตาราง (แถวไม่เบี้ยว) */}
<Badge variant="success" size="sm">เข้าร่วม</Badge>
<Badge variant="neutral" size="sm">ไม่มีข้อมูล</Badge>

{/* Outline */}
<Badge variant="warning" outline showDot={false}>TPE</Badge>
<Badge variant="info"    outline showDot={false}>PPE</Badge>
<Badge variant="success" outline showDot={false}>ผ่าน</Badge>
<Badge variant="error"   outline showDot={false}>หมดอายุ</Badge>

{/* ── Tag — ป้ายหมวด (radius-sm ไม่ใช่ pill · วางหลายอันได้) ───── */}
{/* Tag ไม่มี dot by default                                        */}

{/* Tag + icon */}
<Tag variant="info"    icon="ri-car-line">ยานยนต์</Tag>
<Tag variant="warning" icon="ri-user-line">บุคคล</Tag>
<Tag variant="success" icon="ri-checkbox-circle-line">ผ่านแล้ว</Tag>

{/* Tag ไม่มี icon */}
<Tag variant="neutral">ทั่วไป</Tag>
<Tag variant="error">เร่งด่วน</Tag>
<Tag variant="success">ผ่าน</Tag>
<Tag variant="info">ยานยนต์</Tag>

{/* Tag --sm วางหลายอัน */}
<Tag variant="neutral" size="sm">ทั่วไป</Tag>
<Tag variant="info"    size="sm">PPE</Tag>
<Tag variant="success" size="sm">ผ่าน</Tag>

{/* Tag — premium / featured / special (สีจัดกลุ่ม ไม่มีนัยเชิงประเมินผล — Tag เท่านั้น) */}
<Tag variant="premium">พรีเมียม</Tag>
<Tag variant="featured">แนะนำ</Tag>
<Tag variant="special">พิเศษ</Tag>

{/* Tag — group-1..6 (จัดกลุ่ม/หมวดหมู่ เช่น กองงาน 1-6 — mapping ตายตัว ห้ามเลือกสีเอง) */}
<Tag variant="group-1">กองงาน 1</Tag>
<Tag variant="group-2">กองงาน 2</Tag>
<Tag variant="group-3">กองงาน 3</Tag>
<Tag variant="group-4">กองงาน 4</Tag>
<Tag variant="group-5">กองงาน 5</Tag>
<Tag variant="group-6">กองงาน 6</Tag>`,A={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},W={display:"flex",gap:"var(--space-3)",flexWrap:"wrap",alignItems:"center"},ci=[{variant:"success",label:"เข้าร่วม"},{variant:"warning",label:"ฉบับร่าง"},{variant:"error",label:"ปิด"},{variant:"info",label:"PPE"},{variant:"neutral",label:"ไม่มีข้อมูล"}],jt=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:A,children:"Badge — Status (Filled + Dot)"}),e.jsx("div",{style:W,children:ci.map(({variant:i,label:l})=>e.jsx(U,{variant:i,children:l},i))})]}),e.jsxs("div",{children:[e.jsx("div",{style:A,children:"Badge — --sm density (สำหรับตาราง)"}),e.jsx("div",{style:W,children:ci.map(({variant:i,label:l})=>e.jsx(U,{variant:i,size:"sm",children:l},i))})]}),e.jsxs("div",{children:[e.jsx("div",{style:A,children:"Badge — Outline (พื้นขาว + ขอบสี)"}),e.jsxs("div",{style:W,children:[e.jsx(U,{variant:"warning",outline:!0,showDot:!1,children:"TPE"}),e.jsx(U,{variant:"info",outline:!0,showDot:!1,children:"PPE"}),e.jsx(U,{variant:"success",outline:!0,showDot:!1,children:"ผ่าน"}),e.jsx(U,{variant:"error",outline:!0,showDot:!1,children:"หมดอายุ"}),e.jsx(U,{variant:"neutral",outline:!0,showDot:!1,children:"ทั่วไป"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:A,children:"Tag — ป้ายหมวด + Icon (sentinel-tag)"}),e.jsxs("div",{style:W,children:[e.jsx(p,{variant:"info",icon:"ri-car-line",children:"ยานยนต์"}),e.jsx(p,{variant:"warning",icon:"ri-user-line",children:"บุคคล"}),e.jsx(p,{variant:"success",icon:"ri-checkbox-circle-line",children:"ผ่านแล้ว"}),e.jsx(p,{variant:"error",icon:"ri-fire-line",children:"เพลิงไหม้"}),e.jsx(p,{variant:"neutral",icon:"ri-time-line",children:"รอดำเนินการ"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:A,children:"Tag — ป้ายหมวด ไม่มี Icon"}),e.jsxs("div",{style:W,children:[e.jsx(p,{variant:"neutral",children:"ทั่วไป"}),e.jsx(p,{variant:"error",children:"เร่งด่วน"}),e.jsx(p,{variant:"success",children:"ผ่าน"}),e.jsx(p,{variant:"info",children:"ยานยนต์"}),e.jsx(p,{variant:"warning",children:"TPE"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:A,children:"Tag — --sm วางหลายอันต่อกัน"}),e.jsxs("div",{style:W,children:[e.jsx(p,{variant:"neutral",size:"sm",children:"ทั่วไป"}),e.jsx(p,{variant:"info",size:"sm",children:"PPE"}),e.jsx(p,{variant:"success",size:"sm",children:"ผ่าน"}),e.jsx(p,{variant:"warning",size:"sm",children:"TPE"}),e.jsx(p,{variant:"error",size:"sm",children:"เร่งด่วน"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:A,children:"Tag — Premium / Featured / Special (สีจัดกลุ่มเพิ่มเติม)"}),e.jsxs("div",{style:W,children:[e.jsx(p,{variant:"premium",children:"พรีเมียม"}),e.jsx(p,{variant:"featured",children:"แนะนำ"}),e.jsx(p,{variant:"special",children:"พิเศษ"}),e.jsx(p,{variant:"premium",icon:"ri-vip-crown-fill",children:"สมาชิกพรีเมียม"}),e.jsx(p,{variant:"featured",icon:"ri-star-smile-fill",children:"รายการแนะนำ"}),e.jsx(p,{variant:"special",icon:"ri-star-fill",children:"รายการพิเศษ"}),e.jsx(p,{variant:"premium",size:"sm",children:"พรีเมียม"}),e.jsx(p,{variant:"featured",size:"sm",children:"แนะนำ"}),e.jsx(p,{variant:"special",size:"sm",children:"พิเศษ"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:A,children:"Tag — Group 1-6 (จัดกลุ่ม/หมวดหมู่ เช่น กองงาน)"}),e.jsxs("div",{style:W,children:[e.jsx(p,{variant:"group-1",children:"กองงาน 1"}),e.jsx(p,{variant:"group-2",children:"กองงาน 2"}),e.jsx(p,{variant:"group-3",children:"กองงาน 3"}),e.jsx(p,{variant:"group-4",children:"กองงาน 4"}),e.jsx(p,{variant:"group-5",children:"กองงาน 5"}),e.jsx(p,{variant:"group-6",children:"กองงาน 6"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:A,children:"Tag — Group 1-6 --sm (ใช้ในตาราง)"}),e.jsxs("div",{style:W,children:[e.jsx(p,{variant:"group-1",size:"sm",children:"กองงาน 1"}),e.jsx(p,{variant:"group-2",size:"sm",children:"กองงาน 2"}),e.jsx(p,{variant:"group-3",size:"sm",children:"กองงาน 3"}),e.jsx(p,{variant:"group-4",size:"sm",children:"กองงาน 4"}),e.jsx(p,{variant:"group-5",size:"sm",children:"กองงาน 5"}),e.jsx(p,{variant:"group-6",size:"sm",children:"กองงาน 6"})]})]})]}),bt=`import StatCard, { StatCardGroup } from '@/components/common/StatCard';

{/* standalone — auto-fill responsive */}
<StatCardGroup columns={4} mb="18px">
<StatCard
  label="All Users"
  value={24}
  sub="ผู้ใช้ทั้งหมด"
  icon="ri-team-line"
  color="green"
/>
</StatCardGroup>

{/* grid — ห่อด้วย StatCardGroup + columns */}
<StatCardGroup columns={5} mb="18px">
  {items.map((item) => ( 
    <StatCard
      key={item.label}
      label={item.label}
      value={item.value}
      sub={item.sub}
      icon={item.icon}
      color={item.color}
    />
  ))}
</StatCardGroup>


{/* ค่าตายตัว */}
<StatCardGroup columns={4} mb="18px">

{/* ใช้ design token */}
<StatCardGroup columns={4} mb="var(--space-6)">

{/* ไม่ระบุ → ไม่มี margin-bottom เหมือนเดิม */}
<StatCardGroup columns={4}>

{/* color variants */}
{/* green  amber  blue  emerald  red  slate */}`,yt=[{label:"Admin",value:4,sub:"ผู้ดูแลระบบ",icon:"ri-shield-star-line",color:"blue"},{label:"Safety",value:12,sub:"เจ้าหน้าที่ความปลอดภัย",icon:"ri-shield-check-line",color:"green"},{label:"Audit",value:6,sub:"ผู้ตรวจสอบ",icon:"ri-search-eye-line",color:"amber"},{label:"HQ",value:3,sub:"สำนักงานใหญ่",icon:"ri-building-2-line",color:"slate"},{label:"Lead",value:8,sub:"หัวหน้าทีม",icon:"ri-user-star-line",color:"emerald"}],St=[{label:"ทั้งหมด",value:120,sub:"ถังดับเพลิงทั้งหมด",icon:"ri-fire-line",color:"slate"},{label:"ใช้งานปกติ",value:96,sub:"พร้อมใช้งาน",icon:"ri-checkbox-circle-line",color:"green"},{label:"ใกล้หมดอายุ",value:14,sub:"ต้องตรวจสอบเร็วๆ นี้",icon:"ri-alarm-warning-line",color:"amber"},{label:"หมดอายุ",value:7,sub:"ต้องเปลี่ยนทันที",icon:"ri-close-circle-line",color:"red"},{label:"ตรวจสอบแล้ว",value:88,sub:"เดือนนี้",icon:"ri-shield-check-line",color:"emerald"}],Le={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},Ct=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:Le,children:"ผู้ใช้งานตามบทบาท"}),e.jsx(Ae,{columns:5,children:yt.map(i=>e.jsx(J,{label:i.label,value:i.value,sub:i.sub,icon:i.icon,color:i.color},i.label))})]}),e.jsxs("div",{children:[e.jsx("div",{style:Le,children:"สถานะถังดับเพลิง"}),e.jsx(Ae,{columns:5,children:St.map(i=>e.jsx(J,{label:i.label,value:i.value,sub:i.sub,icon:i.icon,color:i.color},i.label))})]}),e.jsxs("div",{children:[e.jsx("div",{style:Le,children:"test"}),e.jsxs(Ae,{columns:4,children:[e.jsx(J,{label:"All Users",value:24,sub:"ผู้ใช้ทั้งหมด",icon:"ri-team-line",color:"green"}),e.jsx(J,{label:"All Users",value:24,sub:"ผู้ใช้ทั้งหมด",icon:"ri-team-line",color:"green"}),e.jsx(J,{label:"All Users",value:24,sub:"ผู้ใช้ทั้งหมด",icon:"ri-team-line",color:"green"}),e.jsx(J,{label:"All Users",value:24,sub:"ผู้ใช้ทั้งหมด",icon:"ri-team-line",color:"green"})]})]})]}),wt=`import { useState, useMemo } from 'react';
import DataTable, { type Column } from '@/components/common/Table';
import Badge, { Tag }  from '@/components/common/Badge';
import Button          from '@/components/common/Button';
import Pagination, { type PaginationMeta } from '@/components/common/Pagination';

const PAGE_SIZE = 3;
const [page,  setPage]  = useState(1);
const [page2, setPage2] = useState(1);

// ── columns ────────────────────────────────────────────────────
const columns: Column<Row>[] = [
  {
    key: 'index', header: '#', numeric: true,
    render: (_, idx) => (page - 1) * PAGE_SIZE + idx + 1,
  },
  { key: 'province', header: 'จังหวัด' },
  { key: 'name',     header: 'ชื่อสถานที่', sortable: true },
  {
    key: 'code', header: 'รหัส',
    render: (row) => (
      <Tag variant="success" size="sm" showDot={false}>{row.code}</Tag>
    ),
  },
  { key: 'capacity', header: 'Capacity', numeric: true, sortable: true },
  {
    key: 'status', header: 'สถานะ',
    render: (row) => <Badge variant={row.status}>{row.statusLabel}</Badge>,
  },
  {
    key: 'action', header: 'จัดการ',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--space-1)' }}>
        <Button variant="edit-outline" size="sm" leftIcon="ri-pencil-line"     aria-label="แก้ไข" />
        <Button variant="danger"       size="sm" leftIcon="ri-delete-bin-line" aria-label="ลบ"    />
      </div>
    ),
  },
];

// ── pagination meta (สำหรับ Pagination component) ──────────────
const pagination: PaginationMeta = useMemo(() => ({
  page:       page2,
  total:      data.length,
  totalPages: Math.ceil(data.length / PAGE_SIZE),
  hasNext:    page2 < Math.ceil(data.length / PAGE_SIZE),
  hasPrev:    page2 > 1,
}), [page2, data.length]);

const sliced = data.slice((page2 - 1) * PAGE_SIZE, page2 * PAGE_SIZE);

{/* 1. Built-in Pager — prev/current/next ในตัว */}
<DataTable
  columns={columns}
  data={data}
  rowKey="id"
  total={data.length}
  page={page}
  pageSize={PAGE_SIZE}
  onPageChange={setPage}
/>

{/* 2. Pagination component — ellipsis style */}
<DataTable columns={columns} data={sliced} rowKey="id" />
<Pagination pagination={pagination} onPageChange={setPage2} />

{/* 3. Loading skeleton */}
<DataTable
  columns={columns}
  data={[]}
  rowKey="id"
  loading
  skeletonRows={3}
/>

{/* 4. Empty state */}
<DataTable
  columns={columns}
  data={[]}
  rowKey="id"
  emptyText="ไม่พบข้อมูล"
/>`,kt=[{id:"1",province:"ขอนแก่น",name:"คลังสินค้า A",code:"WH-001",capacity:500,status:"success",statusLabel:"ใช้งาน"},{id:"2",province:"นครราชสีมา",name:"คลังสินค้า B",code:"WH-002",capacity:320,status:"success",statusLabel:"ใช้งาน"},{id:"3",province:"อุดรธานี",name:"คลังสินค้า C",code:"WH-003",capacity:150,status:"warning",statusLabel:"ใกล้เต็ม"},{id:"4",province:"ขอนแก่น",name:"คลังสินค้า D",code:"WH-004",capacity:80,status:"error",statusLabel:"ปิดปรับปรุง"},{id:"5",province:"บุรีรัมย์",name:"คลังสินค้า E",code:"WH-005",capacity:600,status:"success",statusLabel:"ใช้งาน"},{id:"6",province:"สุรินทร์",name:"คลังสินค้า F",code:"WH-006",capacity:210,status:"warning",statusLabel:"ใกล้เต็ม"},{id:"7",province:"ชัยภูมิ",name:"คลังสินค้า G",code:"WH-007",capacity:90,status:"success",statusLabel:"ใช้งาน"},{id:"8",province:"มหาสารคาม",name:"คลังสินค้า H",code:"WH-008",capacity:45,status:"error",statusLabel:"ปิดปรับปรุง"}],ne=3,Ce={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)",marginTop:"var(--space-2)",display:"flex",alignItems:"center",gap:"var(--space-2)"},we=i=>[{key:"index",header:"#",numeric:!0,render:(l,t)=>(i-1)*ne+t+1},{key:"province",header:"จังหวัด"},{key:"name",header:"ชื่อสถานที่",sortable:!0},{key:"code",header:"รหัส",align:"center",render:l=>e.jsx(p,{variant:"success",size:"sm",showDot:!1,children:l.code})},{key:"capacity",header:"Capacity",numeric:!0,sortable:!0},{key:"status",header:"สถานะ",align:"center",render:l=>e.jsx(U,{variant:l.status,children:l.statusLabel})},{key:"action",header:"จัดการ",align:"center",render:()=>e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"var(--space-1)"},children:[e.jsx(d,{variant:"edit-outline",size:"sm",leftIcon:"ri-pencil-line","aria-label":"แก้ไข"}),e.jsx(d,{variant:"danger",size:"sm",leftIcon:"ri-delete-bin-line","aria-label":"ลบ"})]})}],Nt=({data:i=kt})=>{const[l,t]=o.useState(1),[a,s]=o.useState(1),n=o.useMemo(()=>({page:a,total:i.length,totalPages:Math.ceil(i.length/ne),hasNext:a<Math.ceil(i.length/ne),hasPrev:a>1}),[a,i.length]),r=i.slice((a-1)*ne,a*ne);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:Ce,children:"With Built-in Pager"}),e.jsx(je,{columns:we(l),data:i,rowKey:"id",total:i.length,page:l,pageSize:ne,onPageChange:t})]}),e.jsxs("div",{children:[e.jsx("div",{style:Ce,children:"With Pagination Component"}),e.jsx(je,{columns:we(a),data:r,rowKey:"id"}),e.jsx($i,{pagination:n,onPageChange:s})]}),e.jsxs("div",{children:[e.jsx("div",{style:Ce,children:"Loading Skeleton"}),e.jsx(je,{columns:we(1),data:[],rowKey:"id",loading:!0,skeletonRows:3})]}),e.jsxs("div",{children:[e.jsx("div",{style:Ce,children:"Empty State"}),e.jsx(je,{columns:we(1),data:[],rowKey:"id",emptyText:"ไม่พบข้อมูล"})]})]})},Tt=`import Tabs, { type TabItem } from '@/components/common/Tabs';

{/* variant: 'underline' | 'segmented' | 'pill' */}

{/* Underline Tabs */}
<Tabs
  variant="underline"
  value={tab}
  onChange={setTab}
  tabs={[
    { value: 'overview',  label: 'ภาพรวม',     icon: 'ri-dashboard-line' },
    { value: 'fire',      label: 'ถังดับเพลิง', icon: 'ri-fire-line', count: 128 },
    { value: 'users',     label: 'ผู้ใช้งาน',   icon: 'ri-team-line' },
    { value: 'report',    label: 'รายงาน',      icon: 'ri-lock-line', disabled: true },
  ]}
/>

{/* Segmented Control */}
<Tabs
  variant="segmented"
  value={seg}
  onChange={setSeg}
  tabs={[
    { value: 'list', label: 'รายการ', icon: 'ri-list-check'  },
    { value: 'grid', label: 'ตาราง',  icon: 'ri-grid-line'   },
    { value: 'map',  label: 'แผนที่', icon: 'ri-map-pin-line' },
  ]}
/>

{/* Pill Filter */}
<Tabs
  variant="pill"
  value={pill}
  onChange={setPill}
  tabs={[
    { value: 'all',      label: 'ทั้งหมด'  },
    { value: 'active',   label: 'ใช้งาน'   },
    { value: 'draft',    label: 'ร่าง'      },
    { value: 'closed',   label: 'ปิดใช้งาน'  },
  ]}
/>`,pi=[{value:"overview",label:"ภาพรวม",icon:"ri-dashboard-line"},{value:"fire",label:"ถังดับเพลิง",icon:"ri-fire-line",count:128},{value:"users",label:"ผู้ใช้งาน",icon:"ri-team-line"},{value:"report",label:"รายงาน",icon:"ri-lock-line",disabled:!0}],zt=[{value:"list",label:"รายการ",icon:"ri-list-check"},{value:"grid",label:"ตาราง",icon:"ri-grid-line"},{value:"map",label:"แผนที่",icon:"ri-map-pin-line"}],_t=[{value:"day",label:"รายวัน"},{value:"month",label:"รายเดือน"},{value:"year",label:"รายปี"}],Ft=[{value:"all",label:"ทั้งหมด"},{value:"active",label:"ใช้งาน"},{value:"draft",label:"ร่าง"},{value:"closed",label:"ปิดใช้งาน"}],Me={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},It=()=>{const[i,l]=o.useState("overview"),[t,a]=o.useState("list"),[s,n]=o.useState("day"),[r,c]=o.useState("all"),u=pi.find(x=>x.value===i)?.label??"";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:Me,children:"Underline Tabs"}),e.jsx(be,{variant:"underline",value:i,onChange:l,tabs:pi}),e.jsxs("div",{style:{marginTop:"var(--space-3)",padding:"var(--space-4)",background:"var(--color-surface-input)",borderRadius:"var(--radius-md)",fontSize:13,color:"var(--color-text-body)"},children:['เนื้อหาแท็บ "',u,'"']})]}),e.jsxs("div",{children:[e.jsx("div",{style:Me,children:"Segmented Control"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap"},children:[e.jsx(be,{variant:"segmented",value:t,onChange:a,tabs:zt}),e.jsx(be,{variant:"segmented",value:s,onChange:n,tabs:_t})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:Me,children:"Pill Filter"}),e.jsx(be,{variant:"pill",value:r,onChange:c,tabs:Ft})]})]})},Pt=`import { useState } from 'react';
import Input, { FormField } from '@/components/common/Input';
import Button from '@/components/common/Button';
import UIDatePicker from '@/components/common/UIDatePicker';

// ── Input size ────────────────────────────────────────────────
// 'xs'=24px · 'sm'=28px · 'md'=34px (default) · 'lg'=42px · 'xl'=48px
// mirror button sizes → input + button สูงเท่ากันในแถวเดียว

// ── FormField Props ───────────────────────────────────────────
// label    : ข้อความกำกับ
// required : แสดง * สีแดง
// hint     : ข้อความช่วยเหลือ (แสดงเมื่อไม่มี error)
// error    : ข้อความ error (แสดงแทน hint)

// ── Input Props ───────────────────────────────────────────────
// as           : 'input' (default) | 'select' | 'textarea'
// leadingIcon  : Remix Icons class เช่น 'ri-search-line'
// filled       : true เมื่อมีค่า (เปลี่ยน border สี)
// invalid      : true เมื่อ error (border แดง)
// disabled     : ปิดใช้งาน
// size         : xs | sm | md | lg | xl

// ═══════════════════════════════════════════════════════════════

{/* 1. Text Input พื้นฐาน */}
<FormField label="ชื่อสถานที่" required error="กรุณากรอกชื่อสถานที่">
  <Input
    placeholder="เช่น คลังขอนแก่น"
    value={form.name}
    filled={!!form.name}
    invalid={!!errors.name}
    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
  />
</FormField>

{/* 2. Input with Leading Icon */}
<FormField label="รหัสอ้างอิง" required>
  <Input
    placeholder="WH-KK01"
    leadingIcon="ri-barcode-line"
    value={form.code}
    filled={!!form.code}
    invalid={!!errors.code}
    onChange={e => setForm(p => ({ ...p, code: e.target.value }))}
  />
</FormField>

{/* 3. Select */}
<FormField label="จังหวัด" required>
  <Input as="select"
    value={form.province}
    filled={!!form.province}
    onChange={e => setForm(p => ({ ...p, province: e.target.value }))}>
    <option value="" disabled>เลือกจังหวัด</option>
    <option>ขอนแก่น</option>
    <option>อุดรธานี</option>
  </Input>
</FormField>

{/* 4. Number Input with icon */}
<FormField label="ความจุ" hint="จำนวนหน่วย">
  <Input
    type="number"
    placeholder="0"
    leadingIcon="ri-archive-line"
    value={form.capacity}
    filled={!!form.capacity}
    onChange={e => setForm(p => ({ ...p, capacity: e.target.value }))}
  />
</FormField>

{/* 5. Textarea */}
<FormField label="หมายเหตุ" hint="ไม่บังคับ">
  <Input as="textarea" rows={3}
    placeholder="บันทึกเพิ่มเติม..."
    value={form.remark}
    filled={!!form.remark}
    onChange={e => setForm(p => ({ ...p, remark: e.target.value }))}
  />
</FormField>

{/* 6. Disabled */}
<FormField label="รหัสระบบ">
  <Input value="SYS-001" disabled />
</FormField>

{/* 7. Date Picker — วันเดียว */}
<FormField label="วันที่ตรวจ" hint="เลือกวันที่ตรวจสอบ">
  <UIDatePicker
    name="inspectDate"
    placeholder="DD-MM-YYYY"
    dateFormat="d-m-Y"
    value={date}
    clearDate={setDate}
    onChange={(val) => {
      if (val instanceof Date) setDate(val.toLocaleDateString('en-GB'));
      else setDate(val ?? '');
    }}
  />
</FormField>

   <FormField
              label="อีเมล"
              hint="กรอกเฉพาะชื่อผู้ใช้ ระบบจะเติม @ais.co.th อัตโนมัติ"
            >
              <InputEmail
                placeholder="moothod.h"
                suffix="@ais.co.th"
                value={emailUsername}
                filled={!!emailUsername}
                onChange={(e) => setEmailUsername(e.target.value)}
              />
            </FormField>



{/* 8. Date Picker — ช่วงวันที่ (range) */}
<FormField label="ช่วงวันที่รายงาน" hint="เลือกวันเริ่ม–สิ้นสุด">
  <UIDatePicker
    name="reportRange"
    mode="range"
    presets
    placeholder="เลือกช่วงวันที่"
    dateFormat="d-m-Y"
    value={dateRange}
    clearDate={setDateRange}
    onChange={(val) => {
      if (Array.isArray(val) && val.length === 2) {
        const [start, end] = val;
        setDateRange(\`\${start.toLocaleDateString('en-GB')} - \${end.toLocaleDateString('en-GB')}\`);
      }
    }}
  />
</FormField>

{/* 9. Province Select — single (flat list) */}
<FormField label="จังหวัด (Single)" hint="ดึง option จาก /lookup-province">
  <ProvinceSelect
    value={provinceSingle}
    onChange={setProvinceSingle}
    options={provinceOptions}
    placeholder="เลือกจังหวัด..."
  />
</FormField>

{/* 9b. Province Select — single + leading icon (เหมือน leftIcon ของ Button) */}
<FormField label="จังหวัด (Single + Icon)" hint="icon ฝั่งซ้าย — เปลี่ยนสีตามสถานะ filled/focus/error">
  <ProvinceSelect
    value={provinceSingle}
    onChange={setProvinceSingle}
    options={provinceOptions}
    icon="ri-map-pin-line"
    placeholder="เลือกจังหวัด..."
  />
</FormField>

{/* 10. Province Select — multi (chips, flat list) */}
<FormField label="จังหวัดที่ดูแล (Multi)" hint="เลือกได้หลายจังหวัด">
  <ProvinceMultiSelect
    values={provinceMulti}
    options={provinceOptions}
    onChangeMulti={setProvinceMulti}
    placeholder="เลือกจังหวัด..."
  />
</FormField>

{/* 10b. Province Select — multi + leading icon */}
<FormField label="จังหวัดที่ดูแล (Multi + Icon)" hint="icon ฝั่งซ้าย — รองรับทั้ง single และ multi">
  <ProvinceMultiSelect
    values={provinceMulti}
    options={provinceOptions}
    onChangeMulti={setProvinceMulti}
    icon="ri-map-pin-line"
    placeholder="เลือกจังหวัด..."
  />
</FormField>

{/* 11. Province Select — single (grouped ตามภาค/RO) */}
<FormField label="จังหวัด (RO Group · Single)" hint="ดึง option จาก /lookup-ro-province — มีหัวกลุ่มตามภาค/RO">
  <ProvinceSelect
    value={provinceRoSingle}
    onChange={setProvinceRoSingle}
    options={provinceRoOptions}
    placeholder="เลือกจังหวัด..."
  />
</FormField>

{/* 12. Province Select — multi (grouped ตามภาค/RO) */}
<FormField label="จังหวัด (RO Group · Multi)" hint="เลือกได้หลายจังหวัด — จัดกลุ่มตามภาค/RO">
  <ProvinceMultiSelect
    values={provinceRoMulti}
    options={provinceRoOptions}
    onChangeMulti={setProvinceRoMulti}
    placeholder="เลือกจังหวัด..."
  />
</FormField>

{/* 12b. Province Select — sizes ต่างกัน + icon (mirror Input/Button sizes) */}
<ProvinceSelect value={provinceSingle} onChange={setProvinceSingle} options={provinceOptions}
  size="sm" icon="ri-map-pin-line" placeholder="sm 28px" />
<ProvinceSelect value={provinceSingle} onChange={setProvinceSingle} options={provinceOptions}
  size="lg" icon="ri-map-pin-line" placeholder="lg 42px" />

{/* 13. Sizes — ใช้ inline กับ Button ขนาดเดียวกัน */}
<Input size="sm" placeholder="ค้นหา..." leadingIcon="ri-search-line" />
<Button size="sm" variant="primary" leftIcon="ri-search-line">ค้นหา</Button>

{/* 14. Actions */}
<Button variant="soft-danger" leftIcon="ri-close-line">ล้างค่า</Button>
<Button variant="primary"     leftIcon="ri-save-3-line">บันทึก</Button>`,Bt=["ขอนแก่น","อุดรธานี","นครราชสีมา","มหาสารคาม","ชัยภูมิ"],Ue={name:"",code:"",province:"",capacity:"",remark:""},Et=i=>Array.isArray(i.items),ui=i=>i.map(l=>Et(l)?{label:l.areaName,count:l.count,options:l.items.map(t=>({value:t.key,label:t.text}))}:{value:l.key,label:l.text}),Rt="/lookup-province",Dt="/lookup-ro-province",xi={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},vi={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-lg)",boxShadow:"var(--shadow-card)",padding:"var(--space-6)"},ue={display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--space-4)"},Ot=()=>{const[i,l]=o.useState(Ue),[t,a]=o.useState(!1),[s,n]=o.useState(null),[,r]=o.useState(null),c=(h,N)=>{r(h),n(N)},[u,x]=o.useState(!0),[g,I]=o.useState("active"),[v,m]=o.useState(!0),[P,D]=o.useState(0),[S,G]=o.useState(""),[Ee,oe]=o.useState(""),[B,Re]=o.useState([]),[E,C]=o.useState(""),[fe,De]=o.useState([]),[Ye,Ii]=o.useState([]),[Pi,Ze]=o.useState(""),[Bi,Qe]=o.useState([]),[Je,Ei]=o.useState(""),[Ri,Di]=o.useState(null);o.useEffect(()=>{(async()=>{try{const N=await ii.get(Rt);N.success&&Re(ui(N.data))}catch{}})()},[]),o.useEffect(()=>{(async()=>{try{const N=await ii.get(Dt);N.success&&Ii(ui(N.data))}catch{}})()},[]);const de=h=>N=>l(Oe=>({...Oe,[h]:N.target.value})),Z=h=>t&&["name","code","province"].includes(h)&&!i[h];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:xi,children:"Form Fields"}),e.jsxs("div",{style:vi,children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-3)"},children:[e.jsx(b,{label:"ชื่อสถานที่",required:!0,error:Z("name")?"กรุณากรอกชื่อสถานที่":void 0,children:e.jsx(y,{placeholder:"เช่น คลังขอนแก่น",value:i.name,filled:!!i.name,invalid:Z("name"),onChange:de("name")})}),e.jsx(b,{label:"รหัสอ้างอิง",required:!0,error:Z("code")?"กรุณากรอกรหัส":void 0,children:e.jsx(y,{placeholder:"WH-KK01",leadingIcon:"ri-barcode-line",value:i.code,filled:!!i.code,invalid:Z("code"),onChange:de("code")})}),e.jsx(b,{label:"จังหวัด",required:!0,error:Z("province")?"กรุณาเลือกจังหวัด":void 0,children:e.jsxs(y,{as:"select",value:i.province,filled:!!i.province,invalid:Z("province"),onChange:de("province"),children:[e.jsx("option",{value:"",disabled:!0,children:"เลือกจังหวัด"}),Bt.map(h=>e.jsx("option",{children:h},h))]})}),e.jsx(b,{label:"ความจุ",hint:"จำนวนหน่วย",children:e.jsx(y,{type:"number",placeholder:"0",leadingIcon:"ri-archive-line",value:i.capacity,filled:!!i.capacity,onChange:de("capacity")})}),e.jsx(b,{label:"อีเมล",hint:"กรอกเฉพาะชื่อผู้ใช้ ระบบจะเติม @ais.co.th อัตโนมัติ",children:e.jsx(Oi,{placeholder:"moothod.h",suffix:"@ais.co.th",value:Je,filled:!!Je,onChange:h=>Ei(h.target.value)})}),e.jsx(b,{label:"วันที่ตรวจ",hint:"เลือกวันที่ตรวจสอบ",children:e.jsx(ri,{name:"inspectDate",placeholder:"DD-MM-YYYY",dateFormat:"d-m-Y",value:S,clearDate:G,onChange:h=>{h instanceof Date?G(h.toLocaleDateString("en-GB")):G(typeof h=="string"?h:"")}})}),e.jsx(b,{label:"ช่วงวันที่รายงาน",hint:"เลือกวันเริ่ม–สิ้นสุด",style:{gridColumn:"1 / -1"},children:e.jsx(ri,{name:"reportRange",mode:"range",presets:!0,placeholder:"เลือกช่วงวันที่",dateFormat:"d-m-Y",value:Ee,clearDate:oe,onChange:h=>{if(Array.isArray(h)&&h.length===2){const[N,Oe]=h;oe(`${N.toLocaleDateString("en-GB")} - ${Oe.toLocaleDateString("en-GB")}`)}}})}),e.jsx(b,{label:"จังหวัด (Single)",hint:"ดึง option จาก /lookup-province",children:e.jsx(ce,{value:E,onChange:C,options:B,placeholder:"เลือกจังหวัด..."})}),e.jsx(b,{label:"จังหวัด (Single + Icon)",hint:"icon ฝั่งซ้าย — เหมือน leftIcon ของ Button",children:e.jsx(ce,{value:E,onChange:C,options:B,icon:"ri-map-pin-line",placeholder:"เลือกจังหวัด..."})}),e.jsx(b,{label:"จังหวัดที่ดูแล (Multi)",hint:"เลือกได้หลายจังหวัด",style:{gridColumn:"1 / -1"},children:e.jsx(We,{values:fe,options:B,onChangeMulti:De,placeholder:"เลือกจังหวัด..."})}),e.jsx(b,{label:"พนักงาน",children:e.jsx(qi,{label:"ผู้ถือครองใหม่",required:!0,value:Ri,onChange:Di})}),e.jsx(b,{label:"จังหวัดที่ดูแล (Multi + Icon)",hint:"icon ฝั่งซ้าย — รองรับทั้ง single และ multi",style:{gridColumn:"1 / -1"},children:e.jsx(We,{values:fe,options:B,onChangeMulti:De,icon:"ri-map-pin-line",placeholder:"เลือกจังหวัด..."})}),e.jsx(b,{label:"จังหวัด (RO Group · Single)",hint:"ดึง option จาก /lookup-ro-province — มีหัวกลุ่มตามภาค/RO",children:e.jsx(ce,{value:Pi,onChange:Ze,options:Ye,placeholder:"เลือกจังหวัด..."})}),e.jsx(b,{label:"จังหวัด (RO Group · Multi)",hint:"เลือกได้หลายจังหวัด — จัดกลุ่มตามภาค/RO",style:{gridColumn:"1 / -1"},children:e.jsx(We,{values:Bi,options:Ye,onChangeMulti:Qe,placeholder:"เลือกจังหวัด..."})}),e.jsx(b,{label:"จังหวัด (sm + icon)",style:{gridColumn:"1 / -1"},children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:200},children:e.jsx(ce,{value:E,onChange:C,options:B,size:"sm",icon:"ri-map-pin-line",placeholder:"sm 28px"})}),e.jsx("div",{style:{width:200},children:e.jsx(ce,{value:E,onChange:C,options:B,size:"lg",icon:"ri-map-pin-line",placeholder:"lg 42px"})})]})}),e.jsx(b,{label:"หมายเหตุ",hint:"ไม่บังคับ",style:{gridColumn:"1 / -1"},children:e.jsx(y,{as:"textarea",rows:3,placeholder:"บันทึกเพิ่มเติม...",value:i.remark,filled:!!i.remark,onChange:de("remark")})})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",marginTop:"var(--space-5)",justifyContent:"flex-end"},children:[e.jsx(d,{variant:"soft-danger",leftIcon:"ri-close-line",onClick:()=>{l(Ue),a(!1),G(""),oe(""),C(""),De([]),Ze(""),Qe([])},children:"ล้างค่า"}),e.jsx(d,{variant:"primary",leftIcon:"ri-save-3-line",onClick:()=>a(!0),children:"บันทึก"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:xi,children:"Control Alignment Check — เส้นฐาน 34px"}),e.jsxs("div",{style:vi,children:[e.jsxs("div",{style:{marginBottom:"var(--space-5)"},children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--color-text-muted)",marginBottom:"var(--space-2)"},children:"1 · Input · Button ต้องสูงเท่ากัน (34px)"}),e.jsxs("div",{style:ue,children:[e.jsx(y,{placeholder:"คลังขอนแก่น",value:"คลังขอนแก่น",filled:!0,style:{width:180},onChange:()=>{}}),e.jsx(d,{variant:"primary",leftIcon:"ri-add-line",children:"เพิ่ม"}),e.jsx(d,{variant:"outline",leftIcon:"ri-search-line",children:"ค้นหา"}),e.jsx(d,{variant:"edit-outline",size:"icon",leftIcon:"ri-pencil-line","aria-label":"แก้ไข"}),e.jsx(d,{variant:"danger",size:"icon",leftIcon:"ri-delete-bin-line","aria-label":"ลบ"})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-5)"},children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--color-text-muted)",marginBottom:"var(--space-2)"},children:"2 · Input · Select · Input with icon"}),e.jsxs("div",{style:ue,children:[e.jsx(y,{placeholder:"ศูนย์ฝึก",style:{width:160}}),e.jsxs(y,{as:"select",filled:!0,style:{width:160},defaultValue:"อุดรธานี",children:[e.jsx("option",{children:"อุดรธานี"}),e.jsx("option",{children:"ขอนแก่น"})]}),e.jsx(y,{placeholder:"ค้นหา...",leadingIcon:"ri-search-line",style:{width:180}})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-5)"},children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--color-text-muted)",marginBottom:"var(--space-2)"},children:"3 · Input · Switch (inline) · Status Toggle (34px)"}),e.jsxs("div",{style:ue,children:[e.jsx(y,{value:"50",filled:!0,style:{width:120},onChange:()=>{}}),e.jsx(V,{checked:u,onChange:x,label:"เปิดใช้งาน"}),e.jsx(k,{value:g,onChange:I})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--color-text-muted)",marginBottom:"var(--space-2)"},children:"4 · Radio · Checkbox (inline) · Input sizes (xs → xl)"}),e.jsxs("div",{style:ue,children:[e.jsx(he,{name:"ex-align",checked:P===0,onChange:()=>D(0),children:"กะเช้า"}),e.jsx(he,{name:"ex-align",checked:P===1,onChange:()=>D(1),children:"กะบ่าย"}),e.jsx(w,{checked:v,onChange:m,children:"หมวกนิรภัย"})]}),e.jsxs("div",{style:{...ue,marginTop:"var(--space-3)"},children:[e.jsx(y,{size:"xs",placeholder:"xs 24px",style:{width:100}}),e.jsx(y,{size:"sm",placeholder:"sm 28px",style:{width:110}}),e.jsx(y,{placeholder:"md 34px",style:{width:120}}),e.jsx(y,{size:"lg",placeholder:"lg 42px",style:{width:130}}),e.jsx(y,{size:"xl",placeholder:"xl 48px",style:{width:140}})]})]})]}),e.jsx("div",{className:"sentinel-field",style:{gridColumn:"1 / -1"},children:e.jsx(Ki,{label:"รูปภาพประกอบ",previewUrl:s,onFileChange:c})})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",marginTop:"var(--space-5)",justifyContent:"flex-end"},children:[e.jsxs("button",{className:"sentinel-btn sentinel-btn--soft-danger",onClick:()=>{l(Ue),a(!1),n(null),r(null)},children:[e.jsx("i",{className:"ri-close-line"})," ล้างค่า"]}),e.jsxs("button",{className:"sentinel-btn sentinel-btn--primary",onClick:()=>a(!0),children:[e.jsx("i",{className:"ri-save-3-line"})," บันทึก"]})]})]})},At=`import {
  Checkbox, Radio, ChoiceCard,
  CheckboxGroup, RadioGroup,
} from '@/components/common/RadioCheckbox';

{/* Checkbox states */}
<Checkbox>ยังไม่เลือก</Checkbox>
<Checkbox checked onChange={setV}>เลือกแล้ว</Checkbox>
<Checkbox indeterminate>บางส่วน</Checkbox>
<Checkbox invalid>ต้องยอมรับเงื่อนไข</Checkbox>
<Checkbox disabled>ปิดใช้งาน</Checkbox>
<Checkbox checked disabled>เลือก · ปิดใช้งาน</Checkbox>

{/* Checkbox Group */}
<CheckboxGroup label="อุปกรณ์นิรภัย" required>
  <Checkbox checked={checks[0]} onChange={(v) => toggle(0, v)}>หมวกนิรภัย (Hard hat)</Checkbox>
  <Checkbox checked={checks[1]} onChange={(v) => toggle(1, v)}>รองเท้านิรภัย</Checkbox>
  <Checkbox checked={checks[2]} onChange={(v) => toggle(2, v)}>แว่นตานิรภัย</Checkbox>
  <Checkbox checked={checks[3]} onChange={(v) => toggle(3, v)}>เข็มขัดกันตก</Checkbox>
</CheckboxGroup>

{/* Radio Group */}
<RadioGroup label="กะการทำงาน">
  <Radio name="shift" checked={shift === 0} onChange={() => setShift(0)}>กะเช้า · 06:00–14:00</Radio>
  <Radio name="shift" checked={shift === 1} onChange={() => setShift(1)}>กะบ่าย · 14:00–22:00</Radio>
  <Radio name="shift" checked={shift === 2} onChange={() => setShift(2)}>กะดึก · 22:00–06:00</Radio>
</RadioGroup>

{/* Choice Card */}
<RadioGroup label="ระดับความเสี่ยง">
  <ChoiceCard name="risk" checked={risk === 0} onChange={() => setRisk(0)}>ต่ำ — ตรวจประจำเดือน</ChoiceCard>
  <ChoiceCard name="risk" checked={risk === 1} onChange={() => setRisk(1)}>กลาง — ตรวจประจำสัปดาห์</ChoiceCard>
  <ChoiceCard name="risk" checked={risk === 2} onChange={() => setRisk(2)}>สูง — ตรวจประจำวัน</ChoiceCard>
</RadioGroup>

{/* Size sm */}
<Checkbox size="sm" checked onChange={setV}>ขนาดเล็ก sm</Checkbox>
<Radio name="sm" size="sm" checked onChange={() => {}}>ขนาดเล็ก sm</Radio>

{/* Row layout */}
<CheckboxGroup label="แนวนอน" row>
  <Checkbox checked onChange={setV}>ตัวเลือก A</Checkbox>
  <Checkbox>ตัวเลือก B</Checkbox>
</CheckboxGroup>`,ke={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",padding:"var(--space-5)",boxShadow:"var(--shadow-card)"},Ne={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},Wt=()=>{const[i,l]=o.useState([!0,!0,!1,!1]),[t,a]=o.useState(0),[s,n]=o.useState(0),[r,c]=o.useState(!1),u=(x,g)=>l(I=>I.map((v,m)=>m===x?g:v));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:Ne,children:"Checkbox States"}),e.jsxs("div",{style:{...ke,display:"flex",gap:"var(--space-6)",flexWrap:"wrap"},children:[e.jsx(w,{children:"ยังไม่เลือก"}),e.jsx(w,{checked:!0,onChange:c,children:"เลือกแล้ว"}),e.jsx(w,{indeterminate:!0,children:"บางส่วน"}),e.jsx(w,{invalid:!0,children:"ต้องยอมรับเงื่อนไข"}),e.jsx(w,{disabled:!0,children:"ปิดใช้งาน"}),e.jsx(w,{checked:!0,disabled:!0,children:"เลือก · ปิดใช้งาน"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:Ne,children:"Groups in Context"}),e.jsxs("div",{style:{...ke,display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsx(ti,{label:"อุปกรณ์นิรภัย",required:!0,children:["หมวกนิรภัย (Hard hat)","รองเท้านิรภัย","แว่นตานิรภัย","เข็มขัดกันตก"].map((x,g)=>e.jsx(w,{checked:i[g],onChange:I=>u(g,I),children:x},x))}),e.jsx(li,{label:"กะการทำงาน",children:["กะเช้า · 06:00–14:00","กะบ่าย · 14:00–22:00","กะดึก · 22:00–06:00"].map((x,g)=>e.jsx(he,{name:"ex-shift",checked:t===g,onChange:()=>a(g),children:x},x))}),e.jsx(li,{label:"ระดับความเสี่ยง (Choice Card)",children:["ต่ำ — ตรวจประจำเดือน","กลาง — ตรวจประจำสัปดาห์","สูง — ตรวจประจำวัน"].map((x,g)=>e.jsx(Ai,{name:"ex-risk",checked:s===g,onChange:()=>n(g),children:x},x))})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:Ne,children:"Size — sm"}),e.jsxs("div",{style:{...ke,display:"flex",gap:"var(--space-6)",flexWrap:"wrap"},children:[e.jsx(w,{size:"sm",checked:!0,onChange:c,children:"Checkbox sm"}),e.jsx(w,{size:"sm",children:"Checkbox sm ยังไม่เลือก"}),e.jsx(he,{name:"ex-sm",size:"sm",checked:!0,onChange:()=>{},children:"Radio sm"}),e.jsx(he,{name:"ex-sm",size:"sm",children:"Radio sm ยังไม่เลือก"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:Ne,children:"Row Layout"}),e.jsx("div",{style:ke,children:e.jsxs(ti,{label:"แนวนอน (row)",row:!0,children:[e.jsx(w,{checked:!0,onChange:c,children:"ตัวเลือก A"}),e.jsx(w,{children:"ตัวเลือก B"}),e.jsx(w,{children:"ตัวเลือก C"})]})})]})]})},Lt=`import { useState } from 'react';
import StatusToggle, { type StatusValue } from '@/components/common/StatusToggle';

// value: 'active' | 'inactive' | 'neutral' | null  ← null = ยังไม่เลือก

// ── ยังไม่เลือก (null) ────────────────────────────────────────
const [status, setStatus] = useState<StatusValue>(null);
<StatusToggle value={null} onChange={setStatus} />

// ── ใช้งานพื้นฐาน (2 ตัวเลือก) ──────────────────────────────
const [status, setStatus] = useState<StatusValue>('active');
<StatusToggle value={status} onChange={setStatus} />

// ── size sm ───────────────────────────────────────────────────
<StatusToggle value={status} onChange={setStatus} size="sm" />

// ── custom label ──────────────────────────────────────────────
<StatusToggle
  value={status} onChange={setStatus}
  activeLabel="เปิดใช้" inactiveLabel="ปิดใช้"
/>

// ── disabled ──────────────────────────────────────────────────
<StatusToggle value="active"   onChange={() => {}} disabled />
<StatusToggle value="inactive" onChange={() => {}} disabled />
<StatusToggle value={null}     onChange={() => {}} disabled />

// ── 3 ตัวเลือก (showNeutral) — เพิ่ม "neutral" สีเทาเข้ม ──────
const [status3, setStatus3] = useState<StatusValue>('neutral');
<StatusToggle
  value={status3} onChange={setStatus3}
  showNeutral
  activeLabel="ใช้งาน" inactiveLabel="ปิดใช้งาน" neutralLabel="รอดำเนินการ"
/>

// ── 3 ตัวเลือก + size sm ────────────────────────────────────
<StatusToggle
  value={status3} onChange={setStatus3}
  showNeutral size="sm"
  activeLabel="อนุมัติ" inactiveLabel="ไม่อนุมัติ" neutralLabel="รอตรวจสอบ"
/>

// ── 3 ตัวเลือก + disabled ───────────────────────────────────
<StatusToggle value="neutral" onChange={() => {}} showNeutral disabled />`,$={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",padding:"var(--space-5)",boxShadow:"var(--shadow-card)"},K={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},f={fontSize:12,fontWeight:700,color:"var(--color-text-muted)",marginBottom:"var(--space-2)"},L=({def:i,disabled:l=!1,size:t="md",activeLabel:a,inactiveLabel:s})=>{const[n,r]=o.useState(i);return e.jsx(k,{value:n,onChange:r,disabled:l,size:t,activeLabel:a,inactiveLabel:s})},Ge=({def:i,disabled:l=!1,size:t="md",activeLabel:a,inactiveLabel:s,neutralLabel:n})=>{const[r,c]=o.useState(i);return e.jsx(k,{value:r,onChange:c,disabled:l,size:t,showNeutral:!0,activeLabel:a,inactiveLabel:s,neutralLabel:n})},Mt=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:K,children:"Unselected — ยังไม่เลือก (null)"}),e.jsxs("div",{style:{...$,display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("div",{style:f,children:"static null"}),e.jsx(k,{value:null,onChange:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"interactive → กดแล้วเลือกได้"}),e.jsx(L,{def:null})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"disabled null"}),e.jsx(k,{value:null,onChange:()=>{},disabled:!0})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:K,children:"States"}),e.jsxs("div",{style:{...$,display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("div",{style:f,children:"เลือก active"}),e.jsx(k,{value:"active",onChange:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"เลือก inactive"}),e.jsx(k,{value:"inactive",onChange:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"disabled (active)"}),e.jsx(k,{value:"active",onChange:()=>{},disabled:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"disabled (inactive)"}),e.jsx(k,{value:"inactive",onChange:()=>{},disabled:!0})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:K,children:"Size — md / sm"}),e.jsxs("div",{style:{...$,display:"flex",gap:"var(--space-10)",flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsxs("div",{children:[e.jsx("div",{style:f,children:"md (default 34px)"}),e.jsx(k,{value:"active",onChange:()=>{},size:"md"})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"sm (28px)"}),e.jsx(k,{value:"active",onChange:()=>{},size:"sm"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:K,children:"Custom Label"}),e.jsxs("div",{style:{...$,display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("div",{style:f,children:"เปิดใช้ / ปิดใช้"}),e.jsx(L,{def:"active",activeLabel:"เปิดใช้",inactiveLabel:"ปิดใช้"})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"ใช้งาน / ไม่ใช้งาน"}),e.jsx(L,{def:"inactive",activeLabel:"ใช้งาน",inactiveLabel:"ไม่ใช้งาน"})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"sm + custom label"}),e.jsx(L,{def:"active",size:"sm",activeLabel:"เปิด",inactiveLabel:"ปิด"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:K,children:"Triple — 3 ตัวเลือก (showNeutral, สีเทาเข้ม)"}),e.jsxs("div",{style:{...$,display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("div",{style:f,children:"ใช้งาน / ปิดใช้งาน / รอดำเนินการ"}),e.jsx(Ge,{def:"neutral",activeLabel:"ใช้งาน",inactiveLabel:"ปิดใช้งาน",neutralLabel:"รอดำเนินการ"})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"อนุมัติ / ไม่อนุมัติ / รอตรวจสอบ (sm)"}),e.jsx(Ge,{def:"active",size:"sm",activeLabel:"อนุมัติ",inactiveLabel:"ไม่อนุมัติ",neutralLabel:"รอตรวจสอบ"})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"disabled (neutral)"}),e.jsx(k,{value:"neutral",onChange:()=>{},showNeutral:!0,disabled:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"ยังไม่เลือก + 3 ตัวเลือก"}),e.jsx(Ge,{def:null,activeLabel:"ใช้งาน",inactiveLabel:"ปิดใช้งาน",neutralLabel:"รอดำเนินการ"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:K,children:"Interactive — กดสลับได้"}),e.jsxs("div",{style:{...$,display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("div",{style:f,children:"สถานะสถานที่"}),e.jsx(L,{def:"active"})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"สถานะผู้ใช้"}),e.jsx(L,{def:"inactive"})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"สถานะอุปกรณ์"}),e.jsx(L,{def:"active"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:K,children:"Interactive — disabled"}),e.jsxs("div",{style:{...$,display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("div",{style:f,children:"disabled active"}),e.jsx(L,{def:"active",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"disabled inactive"}),e.jsx(L,{def:"inactive",disabled:!0})]})]})]})]}),Ut=`import Switch from '@/components/common/Switch';

{/* md (default) */}
<Switch checked={on} onChange={setOn} label="แจ้งเตือนทาง Email" />

{/* sm */}
<Switch checked={on} onChange={setOn} size="sm" label="รายงานรายสัปดาห์" />

{/* ไม่มี label */}
<Switch checked={on} onChange={setOn} />

{/* disabled */}
<Switch checked disabled label="ปิดใช้งาน" />`,He={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},Gt={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",padding:"var(--space-5)",boxShadow:"var(--shadow-card)",maxWidth:420},Ht={display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--space-4)",padding:"var(--space-3) 0",borderBottom:"1px solid var(--color-border-default)"},xe=({label:i,defaultOn:l=!1,size:t="md"})=>{const[a,s]=o.useState(l);return e.jsxs("div",{style:Ht,children:[e.jsx("span",{style:{fontSize:13,color:"var(--color-text-body)",fontWeight:500},children:i}),e.jsx(V,{checked:a,onChange:s,size:t})]})},Vt=()=>{const[i,l]=o.useState(!0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:He,children:"Sizes & States"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(V,{defaultChecked:!0,label:"md (default)"}),e.jsx(V,{size:"sm",defaultChecked:!0,label:"sm"}),e.jsx(V,{disabled:!0,label:"disabled off"}),e.jsx(V,{checked:!0,onChange:()=>{},disabled:!0,label:"disabled on"}),e.jsx(V,{})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:He,children:"Settings Panel"}),e.jsxs("div",{style:Gt,children:[e.jsx("div",{style:{fontSize:13,fontWeight:700,color:"var(--color-text-heading)",marginBottom:"var(--space-3)"},children:"การตั้งค่าการแจ้งเตือน"}),e.jsx(xe,{label:"แจ้งเตือนทาง Email",defaultOn:!0}),e.jsx(xe,{label:"แจ้งเตือนใน App",defaultOn:!0}),e.jsx(xe,{label:"แจ้งเตือน SMS",defaultOn:!1}),e.jsx(xe,{label:"รายงานรายสัปดาห์",defaultOn:!0,size:"sm"}),e.jsx(xe,{label:"แสดงในปฏิทินสาธารณะ",defaultOn:!1,size:"sm"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:He,children:"Status Toggle"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(U,{variant:i?"success":"neutral",style:{cursor:"pointer",userSelect:"none"},onClick:()=>l(t=>!t),children:i?"ใช้งาน":"ปิดใช้งาน"}),e.jsx(V,{checked:i,onChange:l}),e.jsx("span",{style:{fontSize:12,color:"var(--color-text-muted)"},children:"คลิก badge หรือ switch เพื่อสลับสถานะ"})]})]})]})},$t=`import Modal, { ModalRowDouble, ModalRow } from '@/components/common/Modal';
import Button from '@/components/common/Button';
import type { ToastMessage, ToastVariant } from '@/pages/sentinel_design/examples/services/ExamplesType';

// ── variant: 'add' (เขียว) | 'edit' (อำพัน) | 'info' (น้ำเงิน)
// ── size:    'sm'(420) | 'md'(560) | 'lg'(720) | 'xl'(960) | '2xl'(1320)

{/* ── Add — เขียว ── */}
<Modal
  open={open} onClose={close}
  size="md" variant="add"
  icon="ri-add-line"
  title="เพิ่มสถานที่" subtitle="Location Config"
  footer={
    <>
      <Button variant="soft-danger" size="lg" leftIcon="ri-close-line"  onClick={close}>ยกเลิก</Button>
      <Button variant="primary"     size="lg" leftIcon="ri-save-3-line" onClick={save}>บันทึก</Button>
    </>
  }
>
  <ModalRowDouble>
    <div className="sentinel-field">
      <label className="sentinel-field__label">ชื่อสถานที่<span className="sentinel-req">*</span></label>
      <input className="sentinel-input" type="text" placeholder="เช่น คลังขอนแก่น" />
    </div>
    <div className="sentinel-field">
      <label className="sentinel-field__label">จังหวัด<span className="sentinel-req">*</span></label>
      <select className="sentinel-input">
        <option value="">เลือกจังหวัด</option>
        <option>ขอนแก่น</option>
      </select>
    </div>
  </ModalRowDouble>
  <ModalRow>
    <div className="sentinel-field">
      <label className="sentinel-field__label">หมายเหตุ</label>
      <textarea className="sentinel-input" rows={3} placeholder="รายละเอียดเพิ่มเติม" />
    </div>
  </ModalRow>
</Modal>

{/* ── Edit — อำพัน ── */}
<Modal
  open={open} onClose={close}
  size="md" variant="edit"
  icon="ri-pencil-line"
  title="แก้ไขสถานที่" subtitle="Safety Talk · Location Config"
  footer={
    <>
      <Button variant="soft-danger" size="lg" leftIcon="ri-close-line"  onClick={close}>ยกเลิก</Button>
      <Button variant="primary"     size="lg" leftIcon="ri-save-3-line" onClick={save}>บันทึก</Button>
    </>
  }
>
  <ModalRowDouble>…</ModalRowDouble>
</Modal>

{/* ── Info / Read-only — น้ำเงิน ── */}
<Modal
  open={open} onClose={close}
  size="md" variant="info"
  icon="ri-eye-line"
  title="รายละเอียดสถานที่" subtitle="ข้อมูลแบบอ่านอย่างเดียว"
>
  <ModalRowDouble>…</ModalRowDouble>
</Modal>

{/* ── Confirm / Success / Error — ดู AlertDialog component ── */}
{/* ดูตัวอย่างเต็มที่ '@/pages/sentinel_design/examples/components/ExAlertDialogSection' */}

{/* ── No Footer — ไม่ส่ง footer prop เลย ── */}
{/* กรณี 1: read-only — ปิดด้วย ✕ หรือคลิก Overlay */}
<Modal
  open={open} onClose={close}
  size="md" variant="info"
  icon="ri-eye-line"
  title="รายละเอียดสถานที่" subtitle="ข้อมูลแบบอ่านอย่างเดียว"
>
  <ModalRowDouble>…</ModalRowDouble>
</Modal>

{/* กรณี 2: มีปุ่มอยู่ใน body โดยตรง ไม่ต้องการ footer bar */}
<Modal
  open={open} onClose={close}
  size="sm" variant="add"
  icon="ri-add-line"
  title="เพิ่มรหัสอ้างอิง" subtitle="ปุ่มอยู่ใน body"
>
  <ModalRow>…</ModalRow>
  <ModalRow>
    <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
      <Button variant="soft-danger" size="md" leftIcon="ri-close-line"  onClick={close}>ยกเลิก</Button>
      <Button variant="primary"     size="md" leftIcon="ri-save-3-line" onClick={save}>บันทึก</Button>
    </div>
  </ModalRow>
</Modal>`,ie={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},te={display:"flex",gap:"var(--space-2)",flexWrap:"wrap",alignItems:"center"},le={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",padding:"var(--space-5)",boxShadow:"var(--shadow-card)"},hi={success:{icon:"ri-check-line",title:"ลบสำเร็จ",sub:'ลบ "ศูนย์บริการบ้านไผ่" ออกจากระบบแล้ว',ttl:3500},edit:{icon:"ri-pencil-line",title:"บันทึกสำเร็จ",sub:"ข้อมูลถูกอัปเดตเรียบร้อยแล้ว",ttl:3500},error:{icon:"ri-error-warning-fill",title:"เกิดข้อผิดพลาด",sub:"ไม่สามารถบันทึกได้ กรุณาลองใหม่",ttl:6e3},warning:{icon:"ri-tools-line",title:"คำเตือน",sub:"กรุณาตรวจสอบข้อมูลอีกครั้ง",ttl:4500},cancel:{icon:"ri-close-circle-line",title:"ยกเลิกแล้ว",sub:"รายการถูกยกเลิกเรียบร้อย",ttl:3500}};let Kt=0;const q=({filled:i=!1})=>e.jsxs(e.Fragment,{children:[e.jsxs(re,{children:[e.jsxs("div",{className:"sentinel-field",children:[e.jsxs("label",{className:"sentinel-field__label",children:["ชื่อสถานที่",e.jsx("span",{className:"sentinel-req",children:"*"})]}),e.jsx("input",{className:`sentinel-input${i?" is-filled":""}`,type:"text",placeholder:"เช่น คลังขอนแก่น",defaultValue:i?"ศูนย์บริการบ้านไผ่":""})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsxs("label",{className:"sentinel-field__label",children:["จังหวัด",e.jsx("span",{className:"sentinel-req",children:"*"})]}),e.jsxs("select",{className:`sentinel-input${i?" is-filled":""}`,defaultValue:i?"ขอนแก่น":"",children:[e.jsx("option",{value:"",disabled:!0,children:"เลือกจังหวัด"}),e.jsx("option",{children:"ขอนแก่น"}),e.jsx("option",{children:"อุดรธานี"}),e.jsx("option",{children:"นครราชสีมา"})]})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"รหัสอ้างอิง"}),e.jsx("input",{className:`sentinel-input${i?" is-filled":""}`,type:"text",placeholder:"WH-XX00",defaultValue:i?"WH-KK01":""})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ความจุ"}),e.jsx("input",{className:`sentinel-input${i?" is-filled":""}`,type:"number",placeholder:"0",defaultValue:i?"50":""})]})]}),e.jsx(R,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"หมายเหตุ"}),e.jsx("textarea",{className:`sentinel-input${i?" is-filled":""}`,rows:3,placeholder:"รายละเอียดเพิ่มเติม (ถ้ามี)",defaultValue:i?"พื้นที่ชั้น 1 อาคาร A ใกล้ประตูทางเข้าหลัก":""})]})})]}),Te=({filled:i=!1})=>e.jsxs(e.Fragment,{children:[e.jsxs(re,{children:[e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ผู้รับผิดชอบ"}),e.jsx("input",{className:`sentinel-input${i?" is-filled":""}`,type:"text",placeholder:"ชื่อผู้รับผิดชอบ",defaultValue:i?"นายสมชาย ใจดี":""})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"เบอร์ติดต่อ"}),e.jsx("input",{className:`sentinel-input${i?" is-filled":""}`,type:"tel",placeholder:"0XX-XXX-XXXX",defaultValue:i?"043-123-456":""})]})]}),e.jsxs(re,{children:[e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"วันที่เริ่มใช้งาน"}),e.jsx("input",{className:`sentinel-input${i?" is-filled":""}`,type:"date",defaultValue:i?"2024-01-01":""})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ประเภทสถานที่"}),e.jsxs("select",{className:`sentinel-input${i?" is-filled":""}`,defaultValue:i?"warehouse":"",children:[e.jsx("option",{value:"",disabled:!0,children:"เลือกประเภท"}),e.jsx("option",{value:"warehouse",children:"คลังสินค้า"}),e.jsx("option",{value:"office",children:"สำนักงาน"}),e.jsx("option",{value:"factory",children:"โรงงาน"})]})]})]})]}),H=({onClose:i,onSave:l})=>e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"soft-danger",size:"lg",leftIcon:"ri-close-line",onClick:i,children:"ยกเลิก"}),e.jsx(d,{variant:"primary",size:"lg",leftIcon:"ri-save-3-line",onClick:l,children:"บันทึก"})]}),qt=()=>{const[i,l]=o.useState(!1),[t,a]=o.useState(!1),[s,n]=o.useState(!1),r=o.useCallback(()=>{a(!1),l(!0)},[]),c=o.useCallback(()=>{l(!1),a(!1)},[]),u=o.useCallback(()=>{a(!1)},[]),x=o.useCallback(async()=>{n(!0),await new Promise(g=>setTimeout(g,700)),n(!1),a(!0)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"primary",leftIcon:"ri-add-line",onClick:r,children:"เพิ่มสถานที่ (จำลอง error)"}),e.jsx(F,{open:i,onClose:c,size:"md",variant:"add",icon:"ri-add-line",title:"เพิ่มสถานที่",subtitle:"Location Config",errorMessage:t?"บันทึกไม่สำเร็จ กรุณาตรวจสอบข้อมูลแล้วลองใหม่อีกครั้ง":void 0,onErrorClose:u,footer:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"soft-danger",size:"lg",leftIcon:"ri-close-line",onClick:c,disabled:s,children:"ยกเลิก"}),e.jsx(d,{variant:"primary",size:"lg",leftIcon:"ri-save-3-line",onClick:x,loading:s,children:"บันทึก"})]}),children:e.jsx(q,{})})]})},Xt=()=>{const[i,l]=o.useState(null),[t,a]=o.useState([]),s=o.useRef(null),n=o.useCallback(m=>l(m),[]),r=o.useCallback(()=>l(null),[]),c=o.useCallback(m=>{a(P=>P.filter(D=>D.id!==m))},[]),u=o.useCallback((m,P)=>{const D=++Kt,S=hi[m];a(G=>[{id:D,variant:m,title:P?.title??S.title,sub:P?.sub??S.sub},...G]),setTimeout(()=>c(D),S.ttl)},[c]),x=o.useCallback(()=>{r(),u("success",{title:"บันทึกสำเร็จ",sub:"ข้อมูลสถานที่ถูกบันทึกเข้าระบบแล้ว"})},[r,u]),g=o.useCallback(()=>{r(),s.current=setTimeout(()=>n("error"),280)},[r,n]),I=o.useCallback(()=>{r(),u("success",{title:"ลบสำเร็จ",sub:'ลบ "ศูนย์บริการบ้านไผ่" ออกจากระบบแล้ว'})},[r,u]),v=o.useCallback(m=>i===m,[i]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-8)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:ie,children:"Variant — add (เขียว) · edit (อำพัน) · info (น้ำเงิน)"}),e.jsx("div",{style:le,children:e.jsxs("div",{style:te,children:[e.jsx(d,{variant:"primary",leftIcon:"ri-add-line",onClick:()=>n("add-md"),children:"add · md"}),e.jsx(d,{variant:"edit",leftIcon:"ri-pencil-line",onClick:()=>n("edit-md"),children:"edit · md"}),e.jsx(d,{variant:"info-outline",leftIcon:"ri-eye-line",onClick:()=>n("info-md"),children:"info · md"})]})})]}),e.jsxs("div",{children:[e.jsx("div",{style:ie,children:"Size — sm · md · lg · xl · 2xl"}),e.jsx("div",{style:le,children:e.jsxs("div",{style:te,children:[e.jsx(d,{variant:"outline",leftIcon:"ri-expand-left-right-line",onClick:()=>n("add-sm"),children:"sm · 420px"}),e.jsx(d,{variant:"outline",leftIcon:"ri-expand-left-right-line",onClick:()=>n("add-md"),children:"md · 560px"}),e.jsx(d,{variant:"outline",leftIcon:"ri-expand-left-right-line",onClick:()=>n("add-lg"),children:"lg · 720px"}),e.jsx(d,{variant:"outline",leftIcon:"ri-expand-left-right-line",onClick:()=>n("add-xl"),children:"xl · 960px"}),e.jsx(d,{variant:"outline",leftIcon:"ri-expand-left-right-line",onClick:()=>n("add-2xl"),children:"2xl · 1320px"})]})})]}),e.jsxs("div",{children:[e.jsx("div",{style:ie,children:"Alert Dialog — confirm-warning · confirm-info · error"}),e.jsx("div",{style:le,children:e.jsxs("div",{style:te,children:[e.jsx(d,{variant:"edit-outline",leftIcon:"ri-alert-line",onClick:()=>n("confirm-warning"),children:"confirm · warning"}),e.jsx(d,{variant:"info-outline",leftIcon:"ri-question-line",onClick:()=>n("confirm-info"),children:"confirm · info"}),e.jsx(d,{variant:"soft-danger",leftIcon:"ri-close-circle-line",onClick:()=>n("error"),children:"error"})]})})]}),e.jsxs("div",{children:[e.jsx("div",{style:ie,children:"Real-world — ลบสถานที่ · confirm danger → Toast success | AlertDialog error"}),e.jsx("div",{style:le,children:e.jsxs("div",{style:te,children:[e.jsx(d,{variant:"danger",leftIcon:"ri-delete-bin-line",onClick:()=>n("confirm-danger"),children:"confirm · danger → error"}),e.jsx(d,{variant:"danger",leftIcon:"ri-delete-bin-line",onClick:()=>n("confirm-danger-toast"),children:"confirm · danger → Toast"})]})}),e.jsx(pe,{open:v("confirm-danger"),onClose:r,kind:"confirm",tone:"danger",icon:"ri-delete-bin-line",title:"ยืนยันการลบ?",description:e.jsxs(e.Fragment,{children:["ต้องการลบ ",e.jsx("strong",{children:"ศูนย์บริการบ้านไผ่"})," ออกจากระบบหรือไม่?",e.jsx("br",{}),"การดำเนินการนี้ไม่สามารถย้อนกลับได้"]}),actions:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"soft-danger",size:"lg",leftIcon:"ri-close-line",onClick:r,children:"ยกเลิก"}),e.jsx(d,{variant:"danger",size:"lg",leftIcon:"ri-delete-bin-line",onClick:g,children:"ยืนยันลบ"})]})}),e.jsx(pe,{open:v("confirm-danger-toast"),onClose:r,kind:"confirm",tone:"danger",icon:"ri-delete-bin-line",title:"ยืนยันการลบ?",description:e.jsxs(e.Fragment,{children:["ต้องการลบ ",e.jsx("strong",{children:"ศูนย์บริการบ้านไผ่"})," ออกจากระบบหรือไม่?",e.jsx("br",{}),"การดำเนินการนี้ไม่สามารถย้อนกลับได้"]}),actions:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"soft-danger",size:"lg",leftIcon:"ri-close-line",onClick:r,children:"ยกเลิก"}),e.jsx(d,{variant:"danger",size:"lg",leftIcon:"ri-delete-bin-line",onClick:I,children:"ยืนยันลบ"})]})})]}),e.jsxs("div",{children:[e.jsx("div",{style:ie,children:'Real-world — เพิ่มสถานที่ · กดบันทึก → Modal variant="error"'}),e.jsx("div",{style:le,children:e.jsx("div",{style:te,children:e.jsx(qt,{})})})]}),e.jsxs("div",{children:[e.jsx("div",{style:ie,children:"No Footer — ไม่ส่ง footer prop → footer ไม่แสดง"}),e.jsx("div",{style:le,children:e.jsx("div",{style:te,children:e.jsx(d,{variant:"info-outline",leftIcon:"ri-eye-line",onClick:()=>n("no-footer-info"),children:"info · ไม่มี footer"})})})]}),e.jsxs(F,{open:v("no-footer-info"),onClose:r,size:"md",variant:"info",icon:"ri-eye-line",title:"รายละเอียดสถานที่",subtitle:"ข้อมูลแบบอ่านอย่างเดียว — ปิดด้วย ✕ หรือคลิกนอก modal",children:[e.jsxs(re,{children:[e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ชื่อสถานที่"}),e.jsx("input",{className:"sentinel-input is-filled",type:"text",defaultValue:"ศูนย์บริการบ้านไผ่",readOnly:!0})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"จังหวัด"}),e.jsx("input",{className:"sentinel-input is-filled",type:"text",defaultValue:"ขอนแก่น",readOnly:!0})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"รหัสอ้างอิง"}),e.jsx("input",{className:"sentinel-input is-filled",type:"text",defaultValue:"WH-KK01",readOnly:!0})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ความจุ"}),e.jsx("input",{className:"sentinel-input is-filled",type:"text",defaultValue:"50",readOnly:!0})]})]}),e.jsx(R,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"หมายเหตุ"}),e.jsx("textarea",{className:"sentinel-input is-filled",rows:3,defaultValue:"พื้นที่ชั้น 1 อาคาร A ใกล้ประตูทางเข้าหลัก",readOnly:!0})]})})]}),e.jsxs(F,{open:v("add-sm"),onClose:r,size:"sm",variant:"add",icon:"ri-add-line",title:"เพิ่มรหัสอ้างอิง",subtitle:"เพิ่มรหัสใหม่เข้าระบบ",footer:e.jsx(H,{onClose:r,onSave:x}),children:[e.jsx(R,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsxs("label",{className:"sentinel-field__label",children:["รหัสอ้างอิง",e.jsx("span",{className:"sentinel-req",children:"*"})]}),e.jsx("input",{className:"sentinel-input",type:"text",placeholder:"WH-XX00"})]})}),e.jsx(R,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"คำอธิบาย"}),e.jsx("input",{className:"sentinel-input",type:"text",placeholder:"คำอธิบายสั้นๆ"})]})})]}),e.jsx(F,{open:v("add-md"),onClose:r,size:"md",variant:"add",icon:"ri-add-line",title:"เพิ่มสถานที่",subtitle:"กรอกข้อมูลสถานที่จัดเก็บใหม่",footer:e.jsx(H,{onClose:r,onSave:x}),children:e.jsx(q,{})}),e.jsxs(F,{open:v("add-lg"),onClose:r,size:"lg",variant:"add",icon:"ri-building-line",title:"เพิ่มสถานที่ (lg)",subtitle:"ฟอร์มขนาดกลาง — หลาย section",footer:e.jsx(H,{onClose:r,onSave:x}),children:[e.jsx(q,{}),e.jsx(Te,{})]}),e.jsxs(F,{open:v("add-xl"),onClose:r,size:"xl",variant:"add",icon:"ri-map-pin-add-line",title:"เพิ่มสถานที่ (xl)",subtitle:"ฟอร์มขนาดใหญ่ — หลาย section + ข้อมูลเสริม",footer:e.jsx(H,{onClose:r,onSave:x}),children:[e.jsx(q,{}),e.jsx(Te,{}),e.jsxs(re,{children:[e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ละติจูด"}),e.jsx("input",{className:"sentinel-input",type:"text",placeholder:"16.4321"})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ลองจิจูด"}),e.jsx("input",{className:"sentinel-input",type:"text",placeholder:"102.8358"})]})]}),e.jsx(R,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ที่อยู่เต็ม"}),e.jsx("textarea",{className:"sentinel-input",rows:2,placeholder:"เลขที่ ถนน ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"})]})})]}),e.jsxs(F,{open:v("add-2xl"),onClose:r,size:"2xl",variant:"add",icon:"ri-table-line",title:"จัดการสถานที่ (2xl)",subtitle:"full-width — สำหรับ table หรือ layout ซับซ้อน",footer:e.jsx(H,{onClose:r,onSave:x}),children:[e.jsx(q,{}),e.jsx(Te,{}),e.jsx(R,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ที่อยู่เต็ม"}),e.jsx("textarea",{className:"sentinel-input",rows:2,placeholder:"เลขที่ ถนน ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"})]})}),e.jsx(R,{children:e.jsxs("div",{style:{background:"var(--color-surface-input)",border:"1px dashed var(--color-border-default)",borderRadius:"var(--radius-md)",padding:"var(--space-5)",textAlign:"center",color:"var(--color-text-subtle)",fontSize:13},children:[e.jsx("i",{className:"ri-table-line",style:{fontSize:24,display:"block",marginBottom:8},"aria-hidden":"true"}),"พื้นที่สำหรับ Table หรือ Map component"]})})]}),e.jsxs(F,{open:v("edit-sm"),onClose:r,size:"sm",variant:"edit",icon:"ri-pencil-line",title:"แก้ไขรหัส",subtitle:"แก้ไขรหัสอ้างอิงสถานที่",footer:e.jsx(H,{onClose:r,onSave:x}),children:[e.jsx(R,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsxs("label",{className:"sentinel-field__label",children:["รหัสอ้างอิง",e.jsx("span",{className:"sentinel-req",children:"*"})]}),e.jsx("input",{className:"sentinel-input is-filled",type:"text",defaultValue:"WH-KK01"})]})}),e.jsx(R,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"คำอธิบาย"}),e.jsx("input",{className:"sentinel-input is-filled",type:"text",defaultValue:"คลังขอนแก่น หลัก"})]})})]}),e.jsx(F,{open:v("edit-md"),onClose:r,size:"md",variant:"edit",icon:"ri-pencil-line",title:"แก้ไขสถานที่",subtitle:"แก้ไขข้อมูลสถานที่จัดเก็บ",footer:e.jsx(H,{onClose:r,onSave:x}),children:e.jsx(q,{filled:!0})}),e.jsxs(F,{open:v("edit-lg"),onClose:r,size:"lg",variant:"edit",icon:"ri-edit-box-line",title:"แก้ไขสถานที่ (lg)",subtitle:"ข้อมูลหลัก + ข้อมูลเสริม",footer:e.jsx(H,{onClose:r,onSave:x}),children:[e.jsx(q,{filled:!0}),e.jsx(Te,{filled:!0})]}),e.jsxs(F,{open:v("info-md"),onClose:r,size:"md",variant:"info",icon:"ri-eye-line",title:"รายละเอียดสถานที่",subtitle:"ข้อมูลแบบอ่านอย่างเดียว",footer:e.jsx(d,{variant:"outline",size:"lg",leftIcon:"ri-close-line",onClick:r,children:"ปิด"}),children:[e.jsxs(re,{children:[e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ชื่อสถานที่"}),e.jsx("input",{className:"sentinel-input",type:"text",defaultValue:"ศูนย์บริการบ้านไผ่",readOnly:!0})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"จังหวัด"}),e.jsx("input",{className:"sentinel-input",type:"text",defaultValue:"ขอนแก่น",readOnly:!0})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"รหัสอ้างอิง"}),e.jsx("input",{className:"sentinel-input",type:"text",defaultValue:"WH-KK01",readOnly:!0})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ความจุ"}),e.jsx("input",{className:"sentinel-input",type:"text",defaultValue:"50",readOnly:!0})]})]}),e.jsx(R,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"หมายเหตุ"}),e.jsx("textarea",{className:"sentinel-input",rows:3,defaultValue:"พื้นที่ชั้น 1 อาคาร A ใกล้ประตูทางเข้าหลัก",readOnly:!0})]})})]}),e.jsx(pe,{open:v("confirm-warning"),onClose:r,kind:"confirm",tone:"warning",icon:"ri-alert-line",title:"ยังไม่ได้บันทึก",description:"คุณมีข้อมูลที่ยังไม่ได้บันทึก ต้องการออกจากหน้านี้หรือไม่?",actions:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"outline",size:"lg",leftIcon:"ri-arrow-go-back-line",onClick:r,children:"กลับไปแก้ไข"}),e.jsx(d,{variant:"edit",size:"lg",leftIcon:"ri-door-open-line",onClick:r,children:"ออกโดยไม่บันทึก"})]})}),e.jsx(pe,{open:v("confirm-info"),onClose:r,kind:"confirm",tone:"info",icon:"ri-send-plane-line",title:"ยืนยันการส่งข้อมูล?",description:"ระบบจะส่งรายงานประจำเดือนไปยังผู้ดูแลระบบทันที",actions:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"soft-danger",size:"lg",leftIcon:"ri-close-line",onClick:r,children:"ยกเลิก"}),e.jsx(d,{variant:"primary",size:"lg",leftIcon:"ri-send-plane-line",onClick:x,children:"ยืนยัน"})]})}),e.jsx(pe,{open:v("error"),onClose:r,kind:"error",icon:"ri-close-circle-line",title:"เกิดข้อผิดพลาด",description:"ไม่สามารถลบข้อมูลได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง",actions:e.jsxs("button",{type:"button",className:"sentinel-btn sentinel-btn--soft-danger sentinel-btn--block",onClick:r,children:[e.jsx("i",{className:"ri-check-line","aria-hidden":"true"}),"รับทราบ"]})}),t.length>0&&e.jsx("div",{style:{position:"fixed",bottom:24,right:24,zIndex:9999,display:"flex",flexDirection:"column",gap:12},children:t.map(m=>e.jsxs("div",{className:`sentinel-toast sentinel-toast--${m.variant}`,style:{cursor:"pointer"},onClick:()=>c(m.id),role:"alert",children:[e.jsx("div",{className:"sentinel-toast__icon",children:e.jsx("i",{className:hi[m.variant].icon,"aria-hidden":"true"})}),e.jsxs("div",{className:"sentinel-toast__body",children:[e.jsx("div",{className:"sentinel-toast__title",children:m.title}),e.jsx("div",{className:"sentinel-toast__sub",children:m.sub})]})]},m.id))})]})},Yt=`{/* Toast variants */}
<div className="sentinel-toast sentinel-toast--success">
  <div className="sentinel-toast__icon"><i className="ri-check-line" /></div>
  <div className="sentinel-toast__body">
    <div className="sentinel-toast__title">เพิ่มสำเร็จ</div>
    <div className="sentinel-toast__sub">WH-NEW ถูกเพิ่มเรียบร้อยแล้ว</div>
  </div>
</div>

<div className="sentinel-toast sentinel-toast--edit">
  <div className="sentinel-toast__icon"><i className="ri-pencil-line" /></div>
  <div className="sentinel-toast__body">
    <div className="sentinel-toast__title">บันทึกการแก้ไขแล้ว</div>
    <div className="sentinel-toast__sub">WH-CBI อัปเดตเรียบร้อย</div>
  </div>
</div>

<div className="sentinel-toast sentinel-toast--error">
  <div className="sentinel-toast__icon"><i className="ri-error-warning-fill" /></div>
  <div className="sentinel-toast__body">
    <div className="sentinel-toast__title">เกิดข้อผิดพลาด</div>
    <div className="sentinel-toast__sub">ไม่สามารถบันทึกได้ กรุณาลองใหม่</div>
  </div>
</div>

{/* Live toast stack — fixed bottom-right */}
<div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
  {toasts.map(t => (
    <div key={t.id} className={\`sentinel-toast sentinel-toast--\${t.variant}\`}
      onClick={() => dismiss(t.id)}>
      ...
    </div>
  ))}
</div>`,ve={success:{icon:"ri-check-line",title:"เพิ่มคลังสินค้าสำเร็จ",sub:"WH-NEW ถูกเพิ่มเรียบร้อยแล้ว",ttl:3500},edit:{icon:"ri-pencil-line",title:"บันทึกการแก้ไขแล้ว",sub:"WH-CBI อัปเดตเรียบร้อย",ttl:3500},error:{icon:"ri-error-warning-fill",title:"เกิดข้อผิดพลาด",sub:"ไม่สามารถบันทึกได้ กรุณาลองใหม่",ttl:6e3},warning:{icon:"ri-tools-line",title:"อัปเดตสถานะ: ชำรุด",sub:"FX-KKN-20-0003 บันทึกสถานะชำรุดแล้ว",ttl:4500},cancel:{icon:"ri-close-circle-line",title:"ยกเลิกรายการแล้ว",sub:"FX-KKN-20-0001 ถูกปลดออกจากระบบ",ttl:3500}};let Zt=0;const Qt=()=>{const[i,l]=o.useState([]),t=o.useCallback(s=>{l(n=>n.filter(r=>r.id!==s))},[]),a=s=>{const n=++Zt,r=ve[s];l(c=>[{id:n,variant:s,title:r.title,sub:r.sub},...c]),setTimeout(()=>t(n),r.ttl)};return e.jsxs("div",{children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-4)",marginBottom:"var(--space-5)"},children:["success","edit","error","warning","cancel"].map(s=>e.jsxs("div",{className:`sentinel-toast sentinel-toast--${s}`,children:[e.jsx("div",{className:"sentinel-toast__icon",children:e.jsx("i",{className:ve[s].icon})}),e.jsxs("div",{className:"sentinel-toast__body",children:[e.jsx("div",{className:"sentinel-toast__title",children:ve[s].title}),e.jsx("div",{className:"sentinel-toast__sub",children:ve[s].sub})]})]},s))}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",flexWrap:"wrap"},children:[e.jsxs(d,{variant:"primary",size:"sm",onClick:()=>a("success"),children:[e.jsx("i",{className:"ri-notification-3-line"})," Toast สำเร็จ"]}),e.jsxs(d,{variant:"edit",size:"sm",onClick:()=>a("edit"),children:[e.jsx("i",{className:"ri-notification-3-line"})," Toast แก้ไข"]}),e.jsxs(d,{variant:"danger",size:"sm",onClick:()=>a("error"),children:[e.jsx("i",{className:"ri-notification-3-line"})," Toast ผิดพลาด"]}),e.jsxs(d,{variant:"edit-outline",size:"sm",onClick:()=>a("warning"),children:[e.jsx("i",{className:"ri-notification-3-line"})," Toast แจ้งเตือน"]}),e.jsxs(d,{variant:"soft-danger",size:"sm",onClick:()=>a("cancel"),children:[e.jsx("i",{className:"ri-notification-3-line"})," Toast ยกเลิก"]})]}),i.length>0&&e.jsx("div",{style:{position:"fixed",bottom:24,right:24,zIndex:9999,display:"flex",flexDirection:"column",gap:12},children:i.map(s=>e.jsxs("div",{className:`sentinel-toast sentinel-toast--${s.variant}`,style:{cursor:"pointer"},onClick:()=>t(s.id),role:"alert",children:[e.jsx("div",{className:"sentinel-toast__icon",children:e.jsx("i",{className:ve[s.variant].icon})}),e.jsxs("div",{className:"sentinel-toast__body",children:[e.jsx("div",{className:"sentinel-toast__title",children:s.title}),e.jsx("div",{className:"sentinel-toast__sub",children:s.sub})]})]},s.id))})]})},Jt=`{/* Tooltip — hover, placement: top / bottom / left / right */}
import Tooltip, { Popover } from '@/components/common/Tooltip';
<Tooltip content="แก้ไขข้อมูล" placement="top">
  <Button variant="edit-outline" size="icon" leftIcon="ri-pencil-line" aria-label="แก้ไข" />
</Tooltip>

{/* Tooltip — theme: dark (default) / light */}
<Tooltip content="ข้อมูลเพิ่มเติม" placement="bottom" theme="light">
  <Button variant="ghost" size="icon" leftIcon="ri-information-line" aria-label="ข้อมูล" />
</Tooltip>

{/* Tooltip — content เป็น JSX ได้ (เช่น แสดง chip หลายอัน) */}
<Tooltip
  content={
    <span style={{ display: 'inline-flex', gap: 4, flexWrap: 'wrap' }}>
      ขนาดที่เหลือ:
      <span className="il-size-chip">S</span>
      <span className="il-size-chip inactive">M</span>
    </span>
  }
  placement="top"
  theme="light"
>
  <span className="il-size-chip il-size-chip-more">+2</span>
</Tooltip>

{/* Popover — click, มี click-outside-to-close ในตัว ไม่ต้องเขียน useState เอง */}
{/* placement: top / bottom (default) / left / right */}
<Popover
  placement="bottom"
  icon="ri-shield-check-line"
  title="ข้อมูลการตรวจสอบ"
  content="ตรวจสอบล่าสุด: 12 พ.ค. 2569"
  footer={<Button variant="primary" size="sm">ดูเพิ่มเติม</Button>}
>
  <Button variant="outline" size="sm" leftIcon="ri-information-line">รายละเอียด</Button>
</Popover>`,ze={width:40,height:40,borderRadius:"var(--radius-sm)",border:"1px solid var(--color-border-default)",background:"var(--color-surface-white)",color:"var(--color-text-muted)",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:18,cursor:"default"},X={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},Y={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",padding:"var(--space-5)",boxShadow:"var(--shadow-card)"},_e=[{id:"1",title:"ความปลอดภัยในการทำงานกับเครื่องจักร",subtitle:"Safety Talk · อบรมความปลอดภัย",icon:"ri-shield-check-line",isActive:!0,date:"2026-06-15",location:"ทั่วประเทศ",person:"MooTod FoyThong",description:"ความปลอดภัยในการทำงานกับเครื่องจักร",fileUrl:null},{id:"2",title:"การป้องกันอัคคีภัยในโรงงาน",subtitle:"Safety Talk · อบรมความปลอดภัย",icon:"ri-fire-line",isActive:!1,date:"2026-06-20",location:"กรุงเทพมหานคร",person:"สมใจ กาญจน์ดี",description:"การฝึกซ้อมดับเพลิงและการใช้ถังดับเพลิงอย่างถูกต้อง",fileUrl:"https://example.com/fire-safety.pdf",fileName:"fire-safety-guide.pdf"}],mi=i=>{const l=i.getBoundingClientRect(),t=320,a=10,s=l.right+a+t>window.innerWidth?l.left-t-a:l.right+a,n=Math.max(8,l.top);return{x:s+window.scrollX,y:n+window.scrollY}},el=()=>{const[i,l]=o.useState(oi),t=o.useRef(null),a=o.useCallback((n,r)=>{n.stopPropagation();const{x:c,y:u}=mi(n.currentTarget);l({visible:!0,mode:"single",x:c,y:u,item:r,items:[],listIcon:"",listTitle:"",listTag:""})},[]),s=o.useCallback(n=>{n.stopPropagation();const{x:r,y:c}=mi(n.currentTarget);l({visible:!0,mode:"list",x:r,y:c,item:null,items:_e,listIcon:"ri-calendar-2-line",listTitle:Xi("2026-06-15"),listTag:`${_e.length} บทความในวันนี้`})},[]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("div",{style:X,children:"DetailPopover — Single Mode (คลิกเพื่อดู)"}),e.jsx("div",{style:{...Y,display:"flex",gap:"var(--space-4)",flexWrap:"wrap",alignItems:"center"},children:_e.map(n=>e.jsx(d,{variant:"outline",size:"sm",leftIcon:"ri-eye-line",onClick:r=>a(r,n),children:n.title.length>20?`${n.title.slice(0,20)}…`:n.title},n.id))})]}),e.jsxs("div",{children:[e.jsx("div",{style:X,children:"DetailPopover — List Mode (คลิกเพื่อดู)"}),e.jsx("div",{style:{...Y,display:"flex",gap:"var(--space-4)",flexWrap:"wrap",alignItems:"center"},children:e.jsxs(d,{variant:"info",size:"sm",leftIcon:"ri-list-check",onClick:s,children:["ดูรายการทั้งหมด (",_e.length," บทความ)"]})})]}),e.jsx(Yi,{ref:t,popup:i,onClose:()=>l(oi),onSelectItem:n=>l(r=>({...r,mode:"single",item:n,items:[]})),footer:n=>n.isActive?e.jsx(d,{variant:"edit-outline",size:"sm",leftIcon:"ri-pencil-line",children:"แก้ไข"}):null,statusLabels:{active:"ใช้งาน",inactive:"ปิดใช้งาน"}})]})},il=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:X,children:"Tooltip — 4 ทิศทาง (hover เพื่อดู)"}),e.jsx("div",{style:{...Y,display:"flex",gap:"var(--space-12)",flexWrap:"wrap",alignItems:"center",padding:"var(--space-8) var(--space-6)"},children:[{dir:"top",icon:"ri-arrow-up-line",label:"แสดงด้านบน"},{dir:"bottom",icon:"ri-arrow-down-line",label:"แสดงด้านล่าง"},{dir:"left",icon:"ri-arrow-left-line",label:"แสดงซ้าย"},{dir:"right",icon:"ri-arrow-right-line",label:"แสดงขวา"}].map(({dir:i,icon:l,label:t})=>e.jsx(ge,{content:t,placement:i,children:e.jsx("button",{style:ze,children:e.jsx("i",{className:l})})},i))})]}),e.jsxs("div",{children:[e.jsx("div",{style:X,children:"Tooltip — Hover ใช้งานจริง"}),e.jsx("div",{style:{...Y,display:"flex",gap:"var(--space-4)",flexWrap:"wrap"},children:[{icon:"ri-edit-line",tip:"แก้ไขข้อมูล"},{icon:"ri-delete-bin-line",tip:"ลบรายการ"},{icon:"ri-eye-line",tip:"ดูรายละเอียด"},{icon:"ri-download-line",tip:"ดาวน์โหลด"},{icon:"ri-share-line",tip:"แชร์"}].map(({icon:i,tip:l})=>e.jsx(ge,{content:l,placement:"top",children:e.jsx("button",{style:ze,children:e.jsx("i",{className:i})})},i))})]}),e.jsxs("div",{children:[e.jsx("div",{style:X,children:"Tooltip — Theme (dark / light)"}),e.jsxs("div",{style:{...Y,display:"flex",gap:"var(--space-12)",flexWrap:"wrap",alignItems:"center",padding:"var(--space-8) var(--space-6)"},children:[e.jsx(ge,{content:"dark (default)",placement:"top",theme:"dark",children:e.jsx("button",{style:ze,children:e.jsx("i",{className:"ri-moon-line"})})}),e.jsx(ge,{content:"light theme",placement:"top",theme:"light",children:e.jsx("button",{style:ze,children:e.jsx("i",{className:"ri-sun-line"})})})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:X,children:"Popover — Click (ทั่วไป)"}),e.jsx("div",{style:{...Y,display:"flex",gap:"var(--space-12)",flexWrap:"wrap",alignItems:"center",padding:"var(--space-8) var(--space-6)"},children:e.jsx(si,{icon:"ri-shield-check-line",title:"ข้อมูลการตรวจสอบ",content:e.jsxs("div",{style:{fontSize:13,color:"var(--color-text-body)",lineHeight:1.6},children:["ตรวจสอบล่าสุด: ",e.jsx("strong",{children:"12 พ.ค. 2569"}),e.jsx("br",{}),"โดย: สมใจ กาญจน์ดี",e.jsx("br",{}),"สถานะ: พร้อมใช้งาน"]}),children:e.jsx(d,{variant:"outline",size:"sm",leftIcon:"ri-information-line",children:"รายละเอียด"})})}),e.jsx("div",{style:X,children:"Popover — Click (4 ทิศทาง)"}),e.jsx("div",{style:{...Y,display:"flex",gap:"var(--space-12)",flexWrap:"wrap",alignItems:"center",padding:"var(--space-8) var(--space-6)"},children:[{placement:"top",label:"แสดงด้านบน"},{placement:"bottom",label:"แสดงด้านล่าง"},{placement:"left",label:"แสดงซ้าย"},{placement:"right",label:"แสดงขวา"}].map(({placement:i,label:l})=>e.jsx(si,{placement:i,icon:"ri-shield-check-line",title:"ข้อมูลการตรวจสอบ",content:e.jsxs("div",{style:{fontSize:13,color:"var(--color-text-body)",lineHeight:1.6},children:["ตรวจสอบล่าสุด: ",e.jsx("strong",{children:"12 พ.ค. 2569"}),e.jsx("br",{}),"โดย: สมใจ กาญจน์ดี",e.jsx("br",{}),"สถานะ: พร้อมใช้งาน"]}),footer:e.jsx(d,{variant:"primary",size:"sm",children:"ดูเพิ่มเติม"}),children:e.jsx(d,{variant:"outline",size:"sm",leftIcon:"ri-information-line",children:l})},i))})]}),e.jsx(el,{})]}),tl=`import Avatar, { AvatarGroup, UserChip } from '@/components/common/Avatar';

// ── Avatar Props ────────────────────────────────────────────────
// initials : 'สก' | 'AD' | 'WH' ...
// role     : 'safety'(เขียว) | 'admin'(อำพัน) | 'audit'(เทอล์) | 'hq'(น้ำเงิน) | 'lead'(ม่วง) | 'warehouse'(น้ำตาล)
// size     : 'xs'(24) | 'sm'(32) | 'md'(40) | 'lg'(56) | 'xl'(72)
// status   : 'online' | 'away' | 'offline'
// src      : URL รูป (optional)

{/* Sizes */}
<Avatar initials="สก" role="safety" size="xs" />
<Avatar initials="สก" role="safety" size="sm" />
<Avatar initials="สก" role="safety" size="md" />
<Avatar initials="สก" role="safety" size="lg" />
<Avatar initials="สก" role="safety" size="xl" />

{/* Role colors */}
<Avatar initials="สก" role="safety"    size="md" />
<Avatar initials="AD" role="admin"     size="md" />
<Avatar initials="AU" role="audit"     size="md" />
<Avatar initials="HQ" role="hq"        size="md" />
<Avatar initials="LD" role="lead"      size="md" />
<Avatar initials="WH" role="warehouse" size="md" />

{/* Status dot */}
<Avatar initials="สก" role="safety" size="lg" status="online"  />
<Avatar initials="AD" role="admin"  size="lg" status="away"    />
<Avatar initials="HQ" role="hq"     size="lg" status="offline" />

{/* Avatar Group — max=4 แสดง +N อัตโนมัติ */}
<AvatarGroup max={4}>
  <Avatar initials="สก" role="safety"    size="md" />
  <Avatar initials="AD" role="admin"     size="md" />
  <Avatar initials="WH" role="warehouse" size="md" />
  <Avatar initials="HQ" role="hq"        size="md" />
  <Avatar initials="LD" role="lead"      size="md" />
</AvatarGroup>

{/* UserChip variants */}
<UserChip initials="สก" role="safety" size="md" name="สมใจ กาญจน์ดี"  roleLabel="Safety Officer" />
<UserChip initials="WH" role="warehouse" size="md" name="วิทยา คลังดี" roleLabel="Warehouse" variant="card" />
<UserChip initials="AD" role="admin" name="ผู้ดูแลระบบ" variant="tag" onRemove={() => {}} />`,se=[{id:"u1",initials:"สก",role:"safety",roleLabel:"Safety Officer",name:"สมใจ กาญจน์ดี",status:"online"},{id:"u2",initials:"AD",role:"admin",roleLabel:"Admin",name:"ผู้ดูแลระบบ",status:"away"},{id:"u3",initials:"AU",role:"audit",roleLabel:"Auditor",name:"ตรวจสอบ ระบบดี",status:"offline"},{id:"u4",initials:"HQ",role:"hq",roleLabel:"Headquarters",name:"สำนักงานใหญ่"},{id:"u5",initials:"LD",role:"lead",roleLabel:"Team Lead",name:"หัวหน้าทีม งานดี"}],ae={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},z={fontSize:10,color:"var(--color-text-subtle)",marginTop:4,fontFamily:"var(--font-body)",textAlign:"center"},fi={online:"ออนไลน์",away:"ไม่อยู่",offline:"ออฟไลน์"},gi=[{id:"wh1",initials:"WH",name:"วิทยา คลังดี",roleLabel:"Warehouse",status:"online"},{id:"wh2",initials:"วค",name:"วราวุธ คำมี",roleLabel:"Warehouse",status:"away"},{id:"wh3",initials:"สค",name:"สมหมาย คลัง",roleLabel:"Warehouse",status:"offline"}],ll=()=>{const[i,l]=o.useState(["สมใจ กาญจน์ดี","วิทยา คลังดี","ผู้ดูแลระบบ"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:ae,children:"Sizes — xs / sm / md / lg / xl"}),e.jsx("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"flex-end",flexWrap:"wrap"},children:["xs","sm","md","lg","xl"].map(t=>e.jsxs("div",{children:[e.jsx(O,{initials:"สก",role:"safety",size:t}),e.jsx("div",{style:z,children:t})]},t))})]}),e.jsxs("div",{children:[e.jsx("div",{style:ae,children:"Role Colors"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",flexWrap:"wrap",alignItems:"flex-end"},children:[se.map(t=>e.jsxs("div",{children:[e.jsx(O,{initials:t.initials,role:t.role,size:"md"}),e.jsx("div",{style:z,children:t.roleLabel})]},t.id)),e.jsxs("div",{children:[e.jsx(O,{initials:"WH",role:"warehouse",size:"md"}),e.jsx("div",{style:z,children:"Warehouse"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:ae,children:"Online Status"}),e.jsx("div",{style:{display:"flex",gap:"var(--space-5)",flexWrap:"wrap",alignItems:"flex-end"},children:se.filter(t=>t.status).map(t=>e.jsxs("div",{children:[e.jsx(O,{initials:t.initials,role:t.role,size:"lg",status:t.status}),e.jsx("div",{style:z,children:fi[t.status]})]},t.id))})]}),e.jsxs("div",{children:[e.jsx("div",{style:ae,children:"Avatar Group — max=4 → แสดง +N อัตโนมัติ"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:z,children:"max=4"}),e.jsxs(ai,{max:4,children:[se.map(t=>e.jsx(O,{initials:t.initials,role:t.role,size:"md",title:t.name},t.id)),e.jsx(O,{initials:"WH",role:"warehouse",size:"md",title:"วิทยา คลังดี"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:z,children:"max=3"}),e.jsxs(ai,{max:3,children:[se.map(t=>e.jsx(O,{initials:t.initials,role:t.role,size:"md",title:t.name},t.id)),e.jsx(O,{initials:"WH",role:"warehouse",size:"md",title:"วิทยา คลังดี"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:ae,children:"UserChip — default / card / tag"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-5)",flexWrap:"wrap",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:z,children:"default"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",marginTop:"var(--space-2)"},children:[se.slice(0,2).map(t=>e.jsx(Q,{initials:t.initials,role:t.role,size:"md",name:t.name,roleLabel:t.roleLabel},t.id)),e.jsx(Q,{initials:"WH",role:"warehouse",size:"md",name:"วิทยา คลังดี",roleLabel:"Warehouse"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:z,children:"card — dropdown trigger"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",marginTop:"var(--space-2)"},children:[se.slice(0,2).map(t=>e.jsx(Q,{initials:t.initials,role:t.role,size:"md",name:t.name,roleLabel:t.roleLabel,variant:"card"},t.id)),e.jsx(Q,{initials:"WH",role:"warehouse",size:"md",name:"วิทยา คลังดี",roleLabel:"Warehouse",variant:"card"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:z,children:"tag — กดลบได้"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-2)",marginTop:"var(--space-2)",maxWidth:260},children:i.map((t,a)=>e.jsx(Q,{initials:t.slice(0,2),role:["safety","warehouse","admin"][a]??"safety",name:t,variant:"tag",onRemove:()=>l(s=>s.filter(n=>n!==t))},t))})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:ae,children:"Warehouse Role — ตัวอย่าง use case"}),e.jsx("div",{style:{display:"flex",gap:"var(--space-4)",flexWrap:"wrap",alignItems:"flex-end"},children:gi.map(t=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(O,{initials:t.initials,role:"warehouse",size:"lg",status:t.status}),e.jsx("div",{style:{...z,marginTop:6,fontSize:11,color:"var(--color-text-body)"},children:t.name}),e.jsx("div",{style:z,children:fi[t.status]})]},t.id))}),e.jsx("div",{style:{display:"flex",gap:"var(--space-3)",marginTop:"var(--space-4)",flexWrap:"wrap"},children:gi.map(t=>e.jsx(Q,{initials:t.initials,role:"warehouse",size:"md",name:t.name,roleLabel:t.roleLabel,variant:"card"},t.id))})]})]})},sl=`{/* Progress bar */}
<div className="sentinel-progress">
  <div className="sentinel-progress__bar" style={{ width: \`\${progress}%\` }}
    role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} />
</div>

{/* Variants */}
<div className="sentinel-progress">
  <div className="sentinel-progress__bar sentinel-progress__bar--success" style={{ width: '100%' }} />
</div>
<div className="sentinel-progress">
  <div className="sentinel-progress__bar sentinel-progress__bar--warning" style={{ width: '65%' }} />
</div>
<div className="sentinel-progress">
  <div className="sentinel-progress__bar sentinel-progress__bar--error" style={{ width: '30%' }} />
</div>

{/* Stepper */}
<div className="sentinel-stepper">
  <div className="sentinel-stepper__item is-done">
    <div className="sentinel-stepper__node"><i className="ri-check-line" /></div>
    <div className="sentinel-stepper__label">สร้างคำขอ</div>
    <div className="sentinel-stepper__line" />
  </div>
  <div className="sentinel-stepper__item is-active">
    <div className="sentinel-stepper__node"><span>3</span></div>
    <div className="sentinel-stepper__label">รออนุมัติ</div>
    <div className="sentinel-stepper__line" />
  </div>
  <div className="sentinel-stepper__item">
    <div className="sentinel-stepper__node"><span>4</span></div>
    <div className="sentinel-stepper__label">ดำเนินการแล้ว</div>
  </div>
</div>`,ji=[{id:"1",label:"สร้างคำขอ",done:!0,active:!1},{id:"2",label:"ตรวจสอบเอกสาร",done:!0,active:!1},{id:"3",label:"รออนุมัติ",done:!1,active:!0},{id:"4",label:"ดำเนินการแล้ว",done:!1,active:!1}],al=()=>{const[i,l]=o.useState(ji),[t,a]=o.useState(45),s=()=>{l(r=>{const c=r.findIndex(u=>u.active);return c<0||c>=r.length-1?r:r.map((u,x)=>({...u,done:x<=c,active:x===c+1}))}),a(r=>Math.min(r+25,100))},n=()=>{l(ji),a(45)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{className:"ex-label",children:"Horizontal Stepper"}),e.jsx("div",{className:"sentinel-stepper",children:i.map((r,c)=>e.jsxs("div",{className:["sentinel-stepper__item",r.done?"is-done":"",r.active?"is-active":""].join(" ").trim(),children:[e.jsx("div",{className:"sentinel-stepper__node",children:r.done?e.jsx("i",{className:"ri-check-line"}):e.jsx("span",{children:c+1})}),e.jsx("div",{className:"sentinel-stepper__label",children:r.label}),c<i.length-1&&e.jsx("div",{className:"sentinel-stepper__line"})]},r.id))}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",marginTop:"var(--space-4)"},children:[e.jsxs("button",{className:"sentinel-btn sentinel-btn--primary sentinel-btn--sm",onClick:s,children:[e.jsx("i",{className:"ri-arrow-right-line"})," ขั้นถัดไป"]}),e.jsxs("button",{className:"sentinel-btn sentinel-btn--outline sentinel-btn--sm",onClick:n,children:[e.jsx("i",{className:"ri-refresh-line"})," รีเซ็ต"]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"ex-label",children:"Progress Bar"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",maxWidth:480},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,fontFamily:"var(--font-body)",fontWeight:600,color:"var(--color-text-muted)",marginBottom:6},children:[e.jsx("span",{children:"ความคืบหน้า"}),e.jsxs("span",{children:[t,"%"]})]}),e.jsx("div",{className:"sentinel-progress",children:e.jsx("div",{className:"sentinel-progress__bar",style:{width:`${t}%`},role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100})})]}),[{label:"สำเร็จ 100%",value:100,mod:"success"},{label:"เตือน 65%",value:65,mod:"warning"},{label:"ผิดพลาด 30%",value:30,mod:"error"}].map(({label:r,value:c,mod:u})=>e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,fontFamily:"var(--font-body)",fontWeight:600,color:"var(--color-text-muted)",marginBottom:6},children:[e.jsx("span",{children:r}),e.jsxs("span",{children:[c,"%"]})]}),e.jsx("div",{className:"sentinel-progress",children:e.jsx("div",{className:`sentinel-progress__bar sentinel-progress__bar--${u}`,style:{width:`${c}%`}})})]},u))]})]})]})},nl=`import Spinner from '@/components/common/Spinner';
import Skeleton from '@/components/common/Skeleton';

{/* ── Spinners ── */}
<Spinner size="sm" />
<Spinner />
<Spinner size="lg" />
<Spinner variant="error" />

{/* ── Skeleton ── */}
<div className="sk-row">
  <Skeleton height={40} width={40} circle />
  <div className="sk-group" style={{ flex: 1 }}>
    <Skeleton height={14} width="60%" />
    <Skeleton height={11} width="40%" />
  </div>
</div>
<Skeleton height={12} style={{ marginBottom: 8 }} />
<Skeleton height={12} width="80%" style={{ marginBottom: 8 }} />
<Skeleton height={12} width="55%" />`,rl={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow-card)",padding:"var(--space-6)"},ol=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{className:"ex-label",children:"Loading Spinners"}),e.jsx("div",{style:{display:"flex",gap:"var(--space-6)",alignItems:"center",flexWrap:"wrap"},children:[{size:"sm",variant:"default",label:"sm"},{size:"md",variant:"default",label:"md"},{size:"lg",variant:"default",label:"lg"},{size:"md",variant:"error",label:"error"}].map(({size:i,variant:l,label:t})=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(Ji,{size:i,variant:l}),e.jsx("div",{style:{fontSize:10,color:"var(--color-text-subtle)",marginTop:6,fontFamily:"var(--font-body)"},children:t})]},t))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"ex-label",children:"Skeleton Shimmer"}),e.jsxs("div",{style:{...rl,maxWidth:360},children:[e.jsxs("div",{className:"sk-row",style:{marginBottom:"var(--space-4)"},children:[e.jsx(ee,{height:40,width:40,circle:!0}),e.jsxs("div",{className:"sk-group",style:{flex:1},children:[e.jsx(ee,{height:14,width:"60%"}),e.jsx(ee,{height:11,width:"40%"})]})]}),e.jsx(ee,{height:12,style:{marginBottom:8}}),e.jsx(ee,{height:12,width:"80%",style:{marginBottom:8}}),e.jsx(ee,{height:12,width:"55%"})]})]})]}),_i=`import {
  EventsStateView,
  EventsStatePage,
  EventsStateProvider,
  useEventsState,
} from '@/components/common/EventsState';

{/* ── Inline: ใส่ใน tbody / panel ── */}

{/* 404 — ไม่พบรายการ */}
<EventsStateView
  status={404}
  entityLabel="ถังดับเพลิง"
  entityId="FE-1021"
  onBack={() => navigate(-1)}
/>

{/* 500 — เซิร์ฟเวอร์ขัดข้อง */}
<EventsStateView status={500} onRetry={fetchData} />

{/* 0 + searchTerm — ค้นหาแล้วไม่เจอ */}
<EventsStateView
  status={0}
  searchTerm='"คลังภาค5"'
  onClear={clearFilter}
/>

{/* 0 — filter ไม่มีผล (ไม่มี searchTerm) */}
<EventsStateView status={0} onClear={clearFilter} />

{/* 409 — ข้อมูลซ้ำ */}
<EventsStateView
  status={409}
  entityLabel="รหัสคลังสินค้า"
  onBack={() => setModalOpen(false)}
/>

{/* ── Full-page (mount ใน route ที่ไม่มี layout) ── */}
<EventsStatePage
  status={403}
  onGoHome={() => navigate('/')}
  onContactAdmin={() => window.open('mailto:admin@example.com')}
/>
<EventsStatePage
  status={401}
  onGoHome={() => navigate('/login')}
/>

{/* ── Full-page ภายใน layout หลัก (มี sidebar / topbar / footer) ── */}
{/* inLayout → component ห่อ page-content + flex center ให้เอง */}
{/* ไม่ต้องเขียน wrapper div เพิ่ม */}
<EventsStatePage
  status={403}
  inLayout
  onGoHome={() => navigate('/')}
  onContactAdmin={() => window.open('mailto:admin@example.com')}
/>`,dl=`// App.tsx — mount ครั้งเดียว เหมือน ToastProvider
import { EventsStateProvider } from '@/components/common/EventsState';

<EventsStateProvider>
  <App />
</EventsStateProvider>

// ── ใน component ── ควบคุมผ่าน context
import { useEventsState } from '@/components/common/EventsState';

const { showError, clearError } = useEventsState();

// แสดง error
showError({ status: 404, entityLabel: 'ถังดับเพลิง', onBack: () => navigate(-1) });

// ล้าง
clearError();`,M={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},Fe={display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-4)"},bi={background:"#1e2937",color:"#e2e8f0",borderRadius:10,padding:"16px 20px",fontSize:12,fontFamily:"'Courier New', monospace",lineHeight:1.7,overflowX:"auto",whiteSpace:"pre"},_=({children:i})=>e.jsx("div",{style:{border:"1px solid #e2e8f0",borderRadius:12,overflow:"hidden",background:"#fff",boxShadow:"0 1px 3px rgba(0,0,0,0.04)"},children:i}),yi=({children:i})=>e.jsx("div",{style:{border:"1px solid #e2e8f0",borderRadius:12,overflow:"hidden",background:"#f2efe9",boxShadow:"0 1px 3px rgba(0,0,0,0.04)",padding:"24px 16px"},children:i}),cl=[{key:"inline",label:"Inline States"},{key:"fullpage",label:"Full-page 403 / 401"},{key:"provider",label:"Context (Provider)"}],pl=()=>{const[i,l]=o.useState("inline"),[t,a]=o.useState(!1),s=()=>{};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-8)"},children:[e.jsx("div",{style:{display:"flex",gap:4,background:"#f1f5f9",borderRadius:10,padding:4,width:"fit-content"},children:cl.map(n=>e.jsx("button",{type:"button",onClick:()=>l(n.key),style:{padding:"6px 16px",borderRadius:7,border:"none",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:13,fontWeight:i===n.key?700:500,background:i===n.key?"#fff":"transparent",color:i===n.key?"#1e2937":"#64748b",boxShadow:i===n.key?"0 1px 3px rgba(0,0,0,0.08)":"none",transition:"all 0.15s"},children:n.label},n.key))}),i==="inline"&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:M,children:"Not Found · 404"}),e.jsxs("div",{style:Fe,children:[e.jsx(_,{children:e.jsx(T,{status:404,entityLabel:"ถังดับเพลิง",entityId:"FE-1021",onBack:s})}),e.jsx(_,{children:e.jsx(T,{status:404,entityLabel:"สถานที่",entityId:"LOC-0042",onBack:s,onAdd:s})}),e.jsx(_,{children:e.jsx(T,{status:404,entityLabel:"ผู้ใช้งาน",entityId:"USR-0099",onBack:s})})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:M,children:"Empty · ตัวกรองไม่มีผล (status = 0)"}),e.jsxs("div",{style:Fe,children:[e.jsx(_,{children:e.jsx(T,{status:0,searchTerm:'"คลังภาค5"',onClear:s})}),e.jsx(_,{children:e.jsx(T,{status:0,onClear:s})}),e.jsx(_,{children:e.jsx(T,{status:0,entityLabel:"ถังดับเพลิง",onAdd:s,message:"เริ่มต้นด้วยการเพิ่มถังดับเพลิงรายการแรกเข้าสู่ระบบ"})})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:M,children:"Server & Network Errors · 500 / 429 / 400"}),e.jsxs("div",{style:Fe,children:[e.jsx(_,{children:e.jsx(T,{status:500,onRetry:s})}),e.jsx(_,{children:e.jsx(T,{status:429,onRetry:s})}),e.jsx(_,{children:e.jsx(T,{status:400,onRetry:s})})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:M,children:"Conflict & Validation · 409 / 422"}),e.jsxs("div",{style:Fe,children:[e.jsx(_,{children:e.jsx(T,{status:409,entityLabel:"รหัสคลังสินค้า",onBack:s})}),e.jsx(_,{children:e.jsx(T,{status:422,onBack:s})})]})]}),e.jsxs("div",{children:[e.jsxs("button",{type:"button",onClick:()=>a(n=>!n),style:{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:7,border:"1.3px solid #e2e8f0",background:t?"#1e2937":"#fff",color:t?"#e2e8f0":"#64748b",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"var(--font-body)",transition:"all 0.15s"},children:[e.jsx("i",{className:t?"ri-eye-off-line":"ri-code-line"}),t?"ซ่อนโค้ด":"ดูโค้ด"]}),t&&e.jsx("div",{style:{marginTop:12},children:e.jsx("pre",{style:bi,children:_i})})]})]}),i==="fullpage"&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:M,children:"403 Forbidden · ไม่มีสิทธิ์เข้าถึง"}),e.jsx(yi,{children:e.jsx(ni,{status:403,onGoHome:s,onContactAdmin:s})})]}),e.jsxs("div",{children:[e.jsx("div",{style:M,children:"401 Unauthorized · กรุณาเข้าสู่ระบบ"}),e.jsx(yi,{children:e.jsx(ni,{status:401,onGoHome:s})})]}),e.jsxs("div",{style:{background:"#edf6f2",border:"1px solid #c8ddd2",borderRadius:10,padding:"14px 18px",fontSize:12,color:"#2d6e53",lineHeight:1.7},children:[e.jsx("strong",{children:"วิธีใช้งาน (ไม่มี layout):"})," mount <EventsStatePage> ในระดับ route guard เมื่อ API คืน 401/403 ตรวจสอบผ่าน axios interceptor แล้ว redirect หรือ render component นี้แทนหน้าเนื้อหา",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"วิธีใช้งาน (มี layout):"})," ถ้าหน้านั้นอยู่ใน layout หลักที่มี sidebar / topbar / footer ให้เพิ่ม prop ",e.jsx("code",{style:{fontFamily:"monospace",background:"#d1ead9",padding:"1px 5px",borderRadius:4},children:"inLayout"})," — component จะห่อ ",e.jsx("code",{style:{fontFamily:"monospace",background:"#d1ead9",padding:"1px 5px",borderRadius:4},children:"page-content"})," + flex center ให้เอง โดยไม่ต้องเขียน wrapper div เพิ่ม"]})]}),i==="provider"&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:M,children:"Context Pattern — EventsStateProvider + useEventsState"}),e.jsx("div",{style:{background:"#fff",border:"1px solid #e2e8f0",borderRadius:12,padding:"20px 24px",display:"flex",flexDirection:"column",gap:16},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",fontSize:12},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"#f8fafc"},children:["Export","ชนิด","หน้าที่"].map(n=>e.jsx("th",{style:{padding:"8px 12px",textAlign:"left",borderBottom:"1px solid #e2e8f0",fontWeight:700,color:"#1e2937"},children:n},n))})}),e.jsx("tbody",{children:[["EventsStateProvider","Context Provider","Mount ครั้งเดียวที่ App level"],["useEventsState()","Hook","ดึง showError / clearError / state"],["EventsStateView","Component","Inline state box (ใน tbody / panel)"],["EventsStatePage","Component","Full-page 403 / 401"],["EventsStateOptions","TypeScript interface","Props + showError argument"]].map(([n,r,c])=>e.jsxs("tr",{style:{borderBottom:"1px solid #f1f5f9"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"'Courier New', monospace",color:"#2d6e53",fontWeight:700},children:n}),e.jsx("td",{style:{padding:"8px 12px",color:"#64748b"},children:r}),e.jsx("td",{style:{padding:"8px 12px",color:"#414940"},children:c})]},n))})]})})]}),e.jsxs("div",{children:[e.jsx("div",{style:M,children:"Code"}),e.jsx("pre",{style:bi,children:dl})]}),e.jsxs("div",{children:[e.jsx("div",{style:M,children:"EventsStateOptions — props"}),e.jsx("div",{style:{background:"#fff",border:"1px solid #e2e8f0",borderRadius:12,overflow:"hidden"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",fontSize:12},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"#f8fafc"},children:["Prop","Type","Required","คำอธิบาย"].map(n=>e.jsx("th",{style:{padding:"8px 12px",textAlign:"left",borderBottom:"1px solid #e2e8f0",fontWeight:700,color:"#1e2937"},children:n},n))})}),e.jsx("tbody",{children:[["status","HttpStatus","✓","0 | 400 | 401 | 403 | 404 | 409 | 422 | 429 | 500"],["entityLabel","string","–",'ชื่อ entity ใน title เช่น "ถังดับเพลิง"'],["entityId","string","–",'ID ที่แสดงใน subtitle เช่น "FE-1021"'],["searchTerm","string","–","คำค้น — trigger empty-search state"],["onRetry","() => void","–",'callback ปุ่ม "ลองใหม่"'],["onClear","() => void","–",'callback ปุ่ม "ล้างตัวกรอง"'],["onBack","() => void","–",'callback ปุ่ม "ย้อนกลับ"'],["onAdd","() => void","–",'callback ปุ่ม "เพิ่มข้อมูล" / "ดูรายการทั้งหมด"'],["message","string","–","override subtitle text"],["inLayout","boolean","–","ใช้เมื่อ render ใน layout หลัก (sidebar/topbar/footer) — ห่อ page-content + flex center ให้อัตโนมัติ (เฉพาะ EventsStatePage)"]].map(([n,r,c,u])=>e.jsxs("tr",{style:{borderBottom:"1px solid #f1f5f9"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"'Courier New', monospace",color:"#2d6e53",fontWeight:700},children:n}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"'Courier New', monospace",color:"#64748b"},children:r}),e.jsx("td",{style:{padding:"8px 12px",color:c==="✓"?"#ef4444":"#94a3b8",fontWeight:700,textAlign:"center"},children:c}),e.jsx("td",{style:{padding:"8px 12px",color:"#414940"},children:u})]},n))})]})})]})]})]})},ul=`import { useState } from 'react';
import FileUploadDropzone, {
  PdfUploadField,
  type UploadedFile,
  newUploadId,
  formatBytes,
} from '@/components/common/FileUploadDropzone';

// ── Helper ────────────────────────────────────────────────────
const toUploadedFiles = (files: File[]): UploadedFile[] =>
  files.map((f) => ({
    id:       newUploadId(),
    file:     f,
    name:     f.name,
    size:     formatBytes(f.size),
    status:   'pending',
    progress: 0,
    iconType: f.name.endsWith('.pdf') ? 'pdf'
            : f.type.startsWith('image/') ? 'img'
            : 'default',
  }));

// ── 1. Add — 1 ไฟล์ (PdfUploadField) ─────────────────────────
const [selectedFile, setSelectedFile] = useState<File | null>(null);

<PdfUploadField
  selectedFile={selectedFile}
  onFileSelect={setSelectedFile}
/>

// ── 2. Edit — มี PDF เดิม (PdfUploadField) ───────────────────
const [selectedFile, setSelectedFile] = useState<File | null>(null);
const [keepPdf, setKeepPdf]           = useState(true);

<PdfUploadField
  existingPdfUrl="https://example.com/sample.pdf"
  existingPdfName="safety-talk-2024.pdf"
  selectedFile={selectedFile}
  keepPdf={keepPdf}
  onFileSelect={setSelectedFile}
  onKeepPdfChange={setKeepPdf}
/>

// ── 3. Add — หลายไฟล์ สูงสุด N (FileUploadDropzone) ─────────
const [files, setFiles] = useState<UploadedFile[]>([]);

<FileUploadDropzone
  accept={{ 'application/pdf': ['.pdf'], 'image/*': ['.jpg', '.jpeg', '.png'] }}
  maxFiles={3}
  files={files}
  onFilesAdded={(newFiles) =>
    setFiles((prev) => [...prev, ...toUploadedFiles(newFiles)])
  }
  onFileRemoved={(id) =>
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }
/>

// ── 4. Edit — หลายไฟล์ มีของเดิม (FileUploadDropzone) ───────
// initialFiles = UploadedFile[] ที่แปลงมาจาก API (status: 'done')
// ใส่ url เพื่อให้แสดงลิงก์ "คลิกเพื่อดูรายละเอียด" ใต้ชื่อไฟล์
const [files, setFiles] = useState<UploadedFile[]>(initialFiles);
// ตัวอย่าง initialFiles:
// [{ id: '1', name: 'report.pdf', size: '1.2 MB', status: 'done',
//    progress: 100, iconType: 'pdf', url: 'https://...', file: new File([],'') }]

<FileUploadDropzone
  accept={{ 'application/pdf': ['.pdf'] }}
  maxFiles={3}
  files={files}
  onFilesAdded={(newFiles) =>
    setFiles((prev) => [...prev, ...toUploadedFiles(newFiles)])
  }
  onFileRemoved={(id) =>
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }
/>
`,Ie={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},Pe={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",padding:"var(--space-5)",boxShadow:"var(--shadow-card)"},Fi=i=>i.map(l=>({id:Qi(),file:l,name:l.name,size:Zi(l.size),status:"pending",progress:0,iconType:l.name.endsWith(".pdf")?"pdf":l.type.startsWith("image/")?"img":"default"})),xl=()=>{const[i,l]=o.useState(null);return e.jsx(ki,{selectedFile:i,onFileSelect:l})},vl=()=>{const[i,l]=o.useState(null),[t,a]=o.useState(!0);return e.jsx(ki,{existingPdfUrl:"https://example.com/sample.pdf",existingPdfName:"safety-talk-2024.pdf",selectedFile:i,keepPdf:t,onFileSelect:l,onKeepPdfChange:a})},hl=()=>{const[i,l]=o.useState([]);return e.jsx(Ni,{accept:{"application/pdf":[".pdf"],"image/*":[".jpg",".jpeg",".png"]},maxFiles:3,files:i,onFilesAdded:t=>l(a=>[...a,...Fi(t)]),onFileRemoved:t=>l(a=>a.filter(s=>s.id!==t))})},ml=()=>{const[i,l]=o.useState([{id:"existing-1",file:new File([],"report-jan.pdf"),name:"report-jan.pdf",size:"1.2 MB",status:"done",progress:100,iconType:"pdf",url:"https://example.com/report-jan.pdf"},{id:"existing-2",file:new File([],"report-feb.pdf"),name:"report-feb.pdf",size:"980 KB",status:"done",progress:100,iconType:"pdf",url:"https://example.com/report-feb.pdf"}]);return e.jsx(Ni,{accept:{"application/pdf":[".pdf"]},maxFiles:3,files:i,onFilesAdded:t=>l(a=>[...a,...Fi(t)]),onFileRemoved:t=>l(a=>a.filter(s=>s.id!==t))})},fl=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-8)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:Ie,children:"Add File Upload"}),e.jsx("div",{style:Pe,children:e.jsx(xl,{})})]}),e.jsxs("div",{children:[e.jsx("div",{style:Ie,children:"Edit File Upload"}),e.jsx("div",{style:Pe,children:e.jsx(vl,{})})]}),e.jsxs("div",{children:[e.jsx("div",{style:Ie,children:"Add File Upload multiple"}),e.jsx("div",{style:Pe,children:e.jsx(hl,{})})]}),e.jsxs("div",{children:[e.jsx("div",{style:Ie,children:"Edit File Upload multiple"}),e.jsx("div",{style:Pe,children:e.jsx(ml,{})})]})]}),gl=`
  .ex-label {
    font-family: var(--font-body);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--color-text-subtle);
    margin-bottom: var(--space-3);
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }
  .ex-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--color-border-default);
  }
`,jl=[{title:"1. Buttons — ปุ่มทุก variant",code:mt,node:e.jsx(ft,{})},{title:"2. Badges — ป้ายสถานะ",code:gt,node:e.jsx(jt,{})},{title:"3. Summary Cards — การ์ดสรุปตัวเลข",code:bt,node:e.jsx(Ct,{})},{title:"4. Data Table — ตารางข้อมูล + pagination",code:wt,node:e.jsx(Nt,{})},{title:"5. Tabs — Underline / Segmented / Pill",code:Tt,node:e.jsx(It,{})},{title:"6. Form Inputs — ฟอร์มกรอกข้อมูล",code:Pt,node:e.jsx(Ot,{})},{title:"7. Radio & Checkbox",code:At,node:e.jsx(Wt,{})},{title:"8. Status Toggle — Active / Inactive",code:Lt,node:e.jsx(Mt,{})},{title:"9. Switch & Toggle",code:Ut,node:e.jsx(Vt,{})},{title:"10. Modal — Add / Edit / Confirm / Success",code:$t,node:e.jsx(Xt,{})},{title:"11. Toast — การแจ้งเตือน",code:Yt,node:e.jsx(Qt,{})},{title:"12. Tooltip & Popover",code:Jt,node:e.jsx(il,{})},{title:"13. Avatar & User Chip",code:tl,node:e.jsx(ll,{})},{title:"14. Progress & Stepper",code:sl,node:e.jsx(al,{})},{title:"15. Empty State / Spinner / Skeleton",code:nl,node:e.jsx(ol,{})},{title:"16. Events State — 404 / 500 / Empty / 403",code:_i,node:e.jsx(pl,{})},{title:"17. File Upload",code:ul,node:e.jsx(fl,{})}],Ll=()=>(o.useEffect(()=>{document.title="Examples — Sentinel DS"},[]),e.jsxs(me.Fragment,{children:[e.jsx("style",{children:gl}),e.jsx("div",{className:"page-content",children:e.jsxs(Wi,{fluid:!0,children:[e.jsx(Hi,{title:"Examples Components",pageTitle:"Sentinel Design System"}),e.jsx("div",{className:"outer-wrapper",children:jl.map(({title:i,code:l,node:t})=>e.jsx(Li,{className:"mb-3",children:e.jsx(Mi,{lg:12,children:e.jsxs(Ui,{children:[e.jsx(ht,{title:i,code:l}),e.jsx(Gi,{children:t})]})})},i))})]})})]}));export{Ll as default};
